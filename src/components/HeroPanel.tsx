import { useRef } from "react";
import confetti from "canvas-confetti";
import { profile } from "../data/portfolio";
import { Eyebrow, Panel, CardChrome, Tag } from "./ui";
import { Icon } from "./Icon";

const CONFETTI_COLORS = ["#1d4ed8", "#16307a", "#c2710c", "#0b0b0c", "#e6e3d8"];

export function HeroPanel() {
  const lastFire = useRef(0);

  const fireNameConfetti = (e: React.MouseEvent<HTMLElement>) => {
    const now = Date.now();
    if (now - lastFire.current < 650) return;
    lastFire.current = now;
    const rect = e.currentTarget.getBoundingClientRect();
    const y = (rect.top + rect.height / 2) / window.innerHeight;
    const xL = rect.left / window.innerWidth;
    const xR = rect.right / window.innerWidth;

    const burst = (x: number, angle: number) =>
      confetti({
        particleCount: 26,
        spread: 55,
        startVelocity: 34,
        gravity: 0.65,
        scalar: 0.85,
        ticks: 140,
        origin: { x, y },
        angle,
        colors: CONFETTI_COLORS,
        shapes: ["square", "circle"],
        disableForReducedMotion: true,
      });
    burst(xL, 70);
    burst(xR, 110);
  };

  return (
    <section id="home" className="scroll-mt-24 pt-6 md:pt-10">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]">
        {/* editorial intro */}
        <Panel className="section-glow reveal relative overflow-hidden p-7 md:p-10 lg:min-h-[28rem]">
          <div className="bg-dotgrid pointer-events-none absolute -right-10 -top-10 h-44 w-44 opacity-40" />
          <Eyebrow className="text-azure">
            <span
              className="confetti-name"
              onMouseEnter={fireNameConfetti}
              onClick={fireNameConfetti}
              title="Harsh Pardhi"
            >
              HARSH PARDHI
            </span>
          </Eyebrow>

          <h1 className="mt-5 max-w-[12ch] font-display text-[2.75rem] font-bold leading-[0.99] tracking-[-0.055em] text-ink sm:text-[3.5rem] md:text-[4.25rem] xl:text-[4.7rem]">
            Applied AI <span className="text-azure">Engineer</span>
          </h1>

          <p className="mt-4 max-w-xl text-balance text-[15px] leading-relaxed text-ink-soft md:text-base">
            Building agentic AI and enterprise RAG systems on Azure and AKS.
          </p>

          <div className="mt-5 flex flex-wrap gap-2" aria-label="Core technologies">
            {["Azure", "AKS", "LangGraph", "MCP", "Terraform", "RAG"].map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="/Harsh_Pardhi_Resume.pdf"
              download="Harsh_Pardhi_Resume.pdf"
              className="lift group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-paper hover:bg-azure-deep"
            >
              Download resume
              <Icon
                name="download"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
            <a
              href="#projects"
              className="lift inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface px-5 py-3 text-sm font-medium text-ink hover:border-ink"
            >
              Explore selected work
            </a>
            <a
              href="#contact"
              className="lift inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface px-5 py-3 text-sm font-medium text-ink hover:border-ink"
            >
              Contact
            </a>
            <a
              href={profile.githubHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-2 py-3 font-mono text-xs uppercase tracking-[0.18em] text-muted transition-colors hover:text-ink"
            >
              <Icon name="github" className="h-4 w-4" />
              GitHub
            </a>
            <a
              href={profile.linkedinHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-2 py-3 font-mono text-xs uppercase tracking-[0.18em] text-muted transition-colors hover:text-ink"
            >
              <Icon name="linkedin" className="h-4 w-4" />
              LinkedIn
            </a>
          </div>

          <p className="mt-8 border-t border-line pt-5 font-mono text-[11px] tracking-tight text-muted">
            Automate the manual parts. Build agents that scale.
          </p>
        </Panel>

        {/* terminal + mini cards */}
        <div className="reveal flex flex-col gap-6" data-delay="1">
          <Panel className="overflow-hidden">
            <CardChrome
              label="bash — whoami --verbose"
              right={
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
                  live
                </span>
              }
            />
            <pre className="overflow-x-auto px-5 py-4 font-mono text-[12.5px] leading-relaxed text-ink-soft">
              <span className="text-muted">$</span> <span className="text-azure-deep">role</span>
              {"\n"}
              Applied AI Engineer
              {"\n\n"}
              <span className="text-muted">$</span>{" "}
              <span className="text-azure-deep">stack --top</span>
              {"\n"}
              Azure · AKS · LangGraph · MCP · Terraform · RAG
              {"\n\n"}
              <span className="text-muted">$</span> <span className="text-azure-deep">status</span>
              {"\n"}
              <span className="text-mint">●</span> Open to relocate: Bangalore, Hyderabad, Pune, Chennai
              <span className="caret ml-0.5 inline-block h-3.5 w-2 translate-y-0.5 bg-ink" />
            </pre>
          </Panel>

          <div className="grid grid-cols-2 gap-4">
            <Panel className="lift p-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                Certifications
              </p>
              <p className="mt-2 font-display text-3xl font-bold text-ink">02</p>
              <p className="mt-1 text-xs text-ink-soft">AZ-900 · AZ-104</p>
            </Panel>
            <Panel className="lift p-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                Tenure
              </p>
              <p className="mt-2 font-display text-3xl font-bold text-ink">2 yrs 3 mos</p>
              <p className="mt-1 text-xs text-ink-soft">years · Hexaware</p>
            </Panel>
          </div>
        </div>
      </div>
    </section>
  );
}

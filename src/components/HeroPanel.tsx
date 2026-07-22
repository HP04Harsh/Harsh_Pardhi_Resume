import { useRef } from "react";
import confetti from "canvas-confetti";
import { profile } from "../data/portfolio";
import { Eyebrow, Panel, CardChrome } from "./ui";
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
    <section id="home" className="scroll-mt-24 pt-8 md:pt-12">
      <div className="grid gap-6 lg:grid-cols-[1.35fr_1fr]">
        {/* editorial intro */}
        <Panel className="reveal relative overflow-hidden p-7 md:p-10">
          <div className="bg-dotgrid pointer-events-none absolute -right-10 -top-10 h-44 w-44 opacity-40" />
          <Eyebrow>Cloud Platform Engineer · Azure DevOps · MLOps</Eyebrow>

          <h1 className="mt-5 font-display text-[3.2rem] font-bold leading-[0.92] tracking-tight text-ink sm:text-[4.2rem] md:text-[5.4rem]">
            <span
              className="confetti-name"
              onMouseEnter={fireNameConfetti}
              onClick={fireNameConfetti}
              title="psst — hover me"
            >
              Harsh
            </span>
            <br />
            <span
              className="confetti-name font-serif-i font-normal text-azure-deep"
              onMouseEnter={fireNameConfetti}
              onClick={fireNameConfetti}
            >
              Pardhi.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-balance text-[15px] leading-relaxed text-ink-soft md:text-base">
            I build the dependable plumbing behind cloud and AI workloads — Azure administration,
            infrastructure-as-code, observability and MLOps. I turn repetitive operational work into
            automation that teams can actually trust.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="lift group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-paper hover:bg-azure-deep"
            >
              Start a conversation
              <Icon
                name="arrow"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
            <a
              href="#projects"
              className="lift inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface px-5 py-3 text-sm font-medium text-ink hover:border-ink"
            >
              See selected work
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
          </div>

          {/* currently row */}
          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-line pt-5 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
            <span className="flex items-center gap-2">
              <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-mint" />
              {profile.currentRole}
            </span>
            <span className="hidden h-3 w-px bg-line-strong sm:block" />
            <span className="flex items-center gap-1.5">
              <Icon name="pin" className="h-3.5 w-3.5" /> {profile.location}
            </span>
            <span className="hidden h-3 w-px bg-line-strong sm:block" />
            <span className="flex items-center gap-1.5">
              <Icon name="clock" className="h-3.5 w-3.5" /> {profile.timezone}
            </span>
          </div>
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
              <span className="text-muted">$</span> <span className="text-azure-deep">whoami</span>
              {"\n"}
              harsh_pardhi
              {"\n\n"}
              <span className="text-muted">$</span> <span className="text-azure-deep">role</span>
              {"\n"}
              Cloud Platform Engineer
              {"\n\n"}
              <span className="text-muted">$</span>{" "}
              <span className="text-azure-deep">stack --top</span>
              {"\n"}
              Azure · Terraform · Kubernetes · MLOps
              {"\n\n"}
              <span className="text-muted">$</span> <span className="text-azure-deep">status</span>
              {"\n"}
              <span className="text-mint">●</span> open to opportunities
              <span className="caret ml-0.5 inline-block h-3.5 w-2 translate-y-0.5 bg-ink" />
            </pre>
          </Panel>

          <div className="grid grid-cols-2 gap-4">
            <Panel className="lift p-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                Certifications
              </p>
              <p className="mt-2 font-display text-3xl font-bold text-ink">02</p>
              <p className="mt-1 text-xs text-ink-soft">AZ-104 · AI-300</p>
            </Panel>
            <Panel className="lift p-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                Tenure
              </p>
              <p className="mt-2 font-display text-3xl font-bold text-ink">2+</p>
              <p className="mt-1 text-xs text-ink-soft">years · Hexaware</p>
            </Panel>
          </div>
        </div>
      </div>
    </section>
  );
}

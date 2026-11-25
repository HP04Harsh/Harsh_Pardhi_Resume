import { quickFacts } from "../data/portfolio";
import { SectionHeader, Panel } from "./ui";

export function AboutPanel() {
  return (
    <section id="about" className="scroll-mt-24 pt-20 md:pt-28">
      <SectionHeader index="02" kicker="About" title="Applied AI Engineer" />

      <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <Panel className="reveal p-7 md:p-9">
          <div className="space-y-5 text-[15px] leading-relaxed text-ink-soft md:text-base">
            <p className="text-lg font-medium leading-relaxed text-ink">
              I build AI assistants and workflow automation on Azure and Microsoft 365.
            </p>
            <p>
              I build RAG applications and AI agents with Python, FastAPI, LangChain, LangGraph, Qdrant and Azure OpenAI, and deploy them on Azure with Docker, Kubernetes and Terraform.
            </p>
            <p className="border-l-2 border-azure/30 pl-4 text-sm">
              Targeting Applied AI Engineer roles.
            </p>
          </div>
        </Panel>

        {/* spec sheet */}
        <Panel className="reveal overflow-hidden" data-delay="1">
          <div className="section-glow flex items-center gap-4 border-b border-line p-5">
            <img
              src="/harsh-128.webp"
              alt="Portrait of Harsh Pardhi"
              loading="lazy"
              width={128}
              height={112}
              className="h-16 w-16 rounded-full border-2 border-white object-cover shadow-md ring-2 ring-emerald-200 transition-transform hover:scale-105"
            />
            <div>
              <p className="font-display text-lg font-semibold text-ink">Harsh Pardhi</p>
              <p className="text-sm text-ink-soft">Applied AI Engineer</p>
            </div>
          </div>
          <div className="flex items-center justify-between border-b border-line px-5 py-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              spec_sheet.json
            </span>
            <span className="font-mono text-[10px] text-faint">read-only</span>
          </div>
          <dl className="divide-y divide-line">
            {quickFacts.map((f) => (
              <div key={f.k} className="flex items-center justify-between px-5 py-3">
                <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                  {f.k}
                </dt>
                <dd className="text-right text-sm font-medium text-ink">{f.v}</dd>
              </div>
            ))}
          </dl>
          <div className="border-t border-line bg-paper-2/60 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
            ↳ open to relocate: Bangalore, Hyderabad, Pune, Chennai
          </div>
        </Panel>
      </div>
    </section>
  );
}

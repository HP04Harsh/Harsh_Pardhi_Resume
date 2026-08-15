import { summaryParagraphs, quickFacts } from "../data/portfolio";
import { SectionHeader, Panel } from "./ui";

export function AboutPanel() {
  return (
    <section id="about" className="scroll-mt-24 pt-20 md:pt-28">
      <SectionHeader
        index=""
        kicker="Profile"
        title={
          <>
            An Azure engineer who
            <br />
            <span className="font-serif-i font-normal text-azure-deep">automates the manual parts.</span>
          </>
        }
        description="Two years turning cloud operations, migrations and reporting into automation that teams can actually use."
      />

      <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <Panel className="reveal p-7 md:p-9">
          <div className="space-y-5 text-[15px] leading-relaxed text-ink-soft md:text-base">
            {summaryParagraphs.map((p, i) => (
              <p key={i} className={i === 0 ? "first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-6xl first-letter:font-bold first-letter:leading-[0.8] first-letter:text-ink" : ""}>
                {p}
              </p>
            ))}
          </div>

          <blockquote className="mt-8 border-l-2 border-azure pl-5">
            <p className="font-serif-i text-xl leading-snug text-ink md:text-2xl">
              “Good infrastructure is invisible. My job is to make the boring parts so reliable that
              nobody notices them — until they need them to just work.”
            </p>
            <footer className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              — Operating principle
            </footer>
          </blockquote>
        </Panel>

        {/* spec sheet */}
        <Panel className="reveal overflow-hidden" data-delay="1">
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

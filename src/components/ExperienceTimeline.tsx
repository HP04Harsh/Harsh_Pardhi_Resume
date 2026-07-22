import { experience } from "../data/portfolio";
import { SectionHeader, Panel } from "./ui";
import { Icon } from "./Icon";

const HASHES = ["a1f9c2d", "7b3e08a", "c44d1f6", "9e2a771", "3f8b5c0", "d61ae94", "52c0f18"];

export function ExperienceTimeline() {
  return (
    <section id="experience" className="scroll-mt-24 pt-20 md:pt-28">
      <SectionHeader
        index="04"
        kicker="Experience"
        title={
          <>
            Where I've
            <span className="font-serif-i font-normal text-azure-deep"> shipped.</span>
          </>
        }
        description="A commit-log view of the work — each line a real operational outcome."
      />

      <div className="space-y-6">
        {experience.map((job) => (
          <Panel key={job.company} className="reveal overflow-hidden">
            {/* job header */}
            <div className="flex flex-col gap-4 border-b border-line p-6 md:flex-row md:items-center md:justify-between md:p-7">
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-azure-soft font-display text-lg font-bold text-azure-deep">
                  H
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
                    {job.role}
                  </h3>
                  <p className="text-sm text-ink-soft">
                    {job.company} · <span className="text-muted">{job.location}</span>
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-mint-soft px-3 py-1 font-mono text-[11px] tracking-tight text-mint">
                  <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-mint" />
                  {job.status}
                </span>
                <span className="rounded-full border border-line bg-paper px-3 py-1 font-mono text-[11px] tracking-tight text-ink-soft">
                  {job.period}
                </span>
              </div>
            </div>

            {/* commit log */}
            <ol className="relative p-6 md:p-7">
              <span className="absolute bottom-7 left-[2.35rem] top-7 w-px bg-line md:left-[2.6rem]" />
              {job.points.map((p, i) => (
                <li key={i} className="reveal relative flex gap-4 pb-5 last:pb-0 md:gap-5" data-delay={String((i % 5) + 1) as "1" | "2" | "3" | "4" | "5"}>
                  <span className="relative z-10 mt-1.5 grid h-3 w-3 shrink-0 place-items-center">
                    <span className="absolute h-3 w-3 rounded-full bg-azure-soft" />
                    <span className="h-1.5 w-1.5 rounded-full bg-azure" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="mb-1 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
                      <span className="text-azure">{HASHES[i % HASHES.length]}</span>
                      <span className="h-px w-4 bg-line-strong" />
                      <span>commit #{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <p className="text-[14px] leading-relaxed text-ink-soft md:text-[15px]">{p}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="flex items-center gap-2 border-t border-line bg-paper-2/50 px-6 py-3 font-mono text-[11px] tracking-tight text-muted md:px-7">
              <Icon name="terminal" className="h-3.5 w-3.5" />
              {job.points.length} commits merged · main · production
            </div>
          </Panel>
        ))}
      </div>
    </section>
  );
}

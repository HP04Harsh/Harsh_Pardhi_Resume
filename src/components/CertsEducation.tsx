import { useEffect, useRef } from "react";
import { certifications, education } from "../data/portfolio";
import { SectionHeader, Panel } from "./ui";
import { Icon } from "./Icon";

const stateLabel: Record<string, string> = {
  earned: "Earned",
  "in-progress": "In progress",
  planned: "Planned",
};

export function CertsEducation() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const timer = window.setInterval(() => {
      const track = trackRef.current;
      if (!track || track.matches(":hover") || track.contains(document.activeElement)) return;
      const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 8;
      track.scrollTo({ left: atEnd ? 0 : track.scrollLeft + track.clientWidth * 0.82, behavior: "smooth" });
    }, 5500);
    return () => window.clearInterval(timer);
  }, []);

  const scrollCertifications = (direction: -1 | 1) => {
    if (!trackRef.current) return;
    trackRef.current.scrollBy({ left: direction * trackRef.current.clientWidth * 0.82, behavior: "smooth" });
  };

  return (
    <>
      <section id="certs" className="scroll-mt-24 pt-20 md:pt-28">
        <SectionHeader
          index="06"
          kicker="Certifications"
          title="Learning in motion."
          description="Professional credentials and the next milestones in my cloud and AI learning path."
        />

        <div className="mb-4 flex items-center justify-between gap-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.17em] text-muted">
            Credentials · swipe or use the arrows
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scrollCertifications(-1)}
              aria-label="Scroll certifications left"
              className="grid h-10 w-10 place-items-center rounded-full border border-line-strong bg-surface text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper"
            >
              <Icon name="arrow" className="h-4 w-4 rotate-180" />
            </button>
            <button
              type="button"
              onClick={() => scrollCertifications(1)}
              aria-label="Scroll certifications right"
              className="grid h-10 w-10 place-items-center rounded-full border border-line-strong bg-surface text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper"
            >
              <Icon name="arrow" className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          role="region"
          tabIndex={0}
          className="cert-track flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-4"
          aria-label="Certification cards"
        >
          {certifications.map((cert, i) => {
            const earned = cert.state === "earned";
            return (
              <Panel
                key={cert.code}
                data-delay={String((i % 4) + 1) as "1" | "2" | "3" | "4"}
                className="reveal lift group flex min-h-56 w-[min(88vw,22rem)] shrink-0 snap-start flex-col overflow-hidden p-5 sm:w-[22rem]"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-lg font-display font-bold shadow-sm transition-transform duration-300 group-hover:scale-105 ${
                    earned
                      ? "bg-gradient-to-br from-sky-200 to-emerald-100 text-azure-deep"
                      : "bg-gradient-to-br from-amber-100 to-orange-100 text-amber-900"
                  }`}>
                    {cert.code.split(/[- ]/)[0]}
                  </span>
                  <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] ${
                    earned ? "bg-mint-soft text-mint" : "bg-paper-2 text-ink-soft"
                  }`}>
                    <span className={`h-1.5 w-1.5 rounded-full ${earned ? "bg-mint" : "bg-amber"}`} />
                    {stateLabel[cert.state] ?? cert.state}
                  </span>
                </div>
                <div className="mt-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">{cert.code}</p>
                  <h3 className="mt-1 font-display text-base font-semibold leading-snug text-ink">{cert.title}</h3>
                </div>
                <p className="mt-auto pt-4 font-mono text-[11px] text-muted">{cert.issuer}</p>
              </Panel>
            );
          })}
        </div>
        <p className="mt-1 text-xs leading-relaxed text-muted">
          AI-103 replaces the retired AI-102 exam and is built on Microsoft Foundry.
        </p>
      </section>

      <section id="education" className="scroll-mt-24 pt-20 md:pt-28">
        <SectionHeader
          index="07"
          kicker="Education"
          title={
            <>
              Foundations &amp;
              <span className="font-serif-i font-normal text-azure-deep"> continued study.</span>
            </>
          }
        />

        <Panel className="reveal overflow-hidden">
          <ul className="divide-y divide-line">
            {education.map((e) => (
              <li key={e.degree} className="flex flex-col gap-3 p-5 transition-colors hover:bg-paper-2/40 sm:p-6 md:flex-row md:items-center md:justify-between md:p-7">
                <div className="flex items-start gap-4">
                  <span className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-line bg-paper font-display text-sm font-bold text-azure-deep">
                    {e.degree.includes("Master") ? "M" : "B"}
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold tracking-tight text-ink md:text-lg">
                      {e.degree}
                    </h3>
                    <p className="text-sm text-ink-soft">
                      {e.school} · <span className="text-muted">{e.location}</span>
                    </p>
                    {e.meta && (
                      <p className="mt-1 inline-flex items-center gap-1.5 font-mono text-[11px] tracking-tight text-azure-deep">
                        <Icon name="gauge" className="h-3.5 w-3.5" />
                        {e.meta}
                      </p>
                    )}
                  </div>
                </div>
                <span className="shrink-0 self-start rounded-full border border-line bg-paper px-3 py-1 font-mono text-[11px] tracking-tight text-ink-soft md:self-auto">
                  {e.year}
                </span>
              </li>
            ))}
          </ul>
        </Panel>
      </section>
    </>
  );
}

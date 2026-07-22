import { certifications, education } from "../data/portfolio";
import { SectionHeader, Panel } from "./ui";
import { Icon } from "./Icon";

export function CertsEducation() {
  return (
    <>
      <section id="certs" className="scroll-mt-24 pt-20 md:pt-28">
        <SectionHeader
          index="06"
          kicker="Certifications"
          title={
            <>
              Vendor-verified,
              <span className="font-serif-i font-normal text-azure-deep"> not self-rated.</span>
            </>
          }
          description="Microsoft certifications that back up the hands-on work."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {certifications.map((c, i) => (
            <Panel
              key={c.code}
              data-delay={String(i + 1) as "1" | "2"}
              className="reveal lift group flex items-center gap-5 overflow-hidden p-6"
            >
              <span className="relative grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-azure-soft text-azure-deep">
                <Icon name="shield" className="h-8 w-8" strokeWidth={1.4} />
                <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-mint text-paper">
                  <Icon name="check" className="h-3 w-3" strokeWidth={3} />
                </span>
              </span>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="rounded-md bg-ink px-2 py-0.5 font-mono text-[11px] font-medium tracking-tight text-paper">
                    {c.code}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                    {c.issuer}
                  </span>
                </div>
                <h3 className="mt-2 font-display text-[15px] font-semibold leading-snug tracking-tight text-ink">
                  {c.title}
                </h3>
              </div>
            </Panel>
          ))}
        </div>
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
              <li key={e.degree} className="lift flex flex-col gap-3 p-6 hover:bg-paper-2/40 md:flex-row md:items-center md:justify-between md:p-7">
                <div className="flex items-start gap-4">
                  <span className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-line bg-paper font-display text-sm font-bold text-azure-deep">
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
                <span className="shrink-0 rounded-full border border-line bg-paper px-3 py-1 font-mono text-[11px] tracking-tight text-ink-soft">
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

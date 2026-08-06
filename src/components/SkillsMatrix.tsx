import { skillGroups, marqueeTools } from "../data/portfolio";
import { SectionHeader, Panel, Tag } from "./ui";
import { Icon, type IconName } from "./Icon";

const groupIcon: Record<string, IconName> = {
  cloud: "cloud",
  infra: "stack",
  aigen: "beaker",
  auto: "cpu",
  sec: "shield",
};

export function SkillsMatrix() {
  return (
    <section id="skills" className="scroll-mt-24 pt-20 md:pt-28">
      <SectionHeader
        index="03"
        kicker="Stack"
        title={
          <>
            Five domains,
            <span className="font-serif-i font-normal text-azure-deep"> one toolbelt.</span>
          </>
        }
        description="From cloud provisioning to GenAI operations and governance — the layers I work across every week."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {skillGroups.map((g, i) => (
          <Panel
            key={g.id}
            data-delay={String((i % 4) + 1) as "1" | "2" | "3" | "4"}
            className="lift reveal group relative overflow-hidden p-6"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-lg border border-line bg-paper text-azure transition-colors duration-300 group-hover:bg-azure group-hover:text-paper">
                  <Icon name={groupIcon[g.id]} className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold tracking-tight text-ink">
                    {g.title}
                  </h3>
                  <p className="text-xs text-muted">{g.blurb}</p>
                </div>
              </div>
              <span className="font-mono text-[11px] text-faint">
                {String(g.tags.length).padStart(2, "0")}
              </span>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {g.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </Panel>
        ))}

        {/* highlight tile */}
        <Panel className="reveal lift relative flex flex-col justify-between overflow-hidden bg-ink p-6 text-paper" data-delay="2">
          <div className="bg-dotgrid pointer-events-none absolute inset-0 opacity-10" />
          <div className="relative">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-paper/60">
              core loop
            </span>
            <p className="mt-3 font-display text-xl font-semibold leading-snug">
              Provision with Terraform, ship with CI/CD, observe with Prometheus &amp; Grafana,
              govern with policy.
            </p>
          </div>
          <div className="relative mt-6 flex items-center gap-2 font-mono text-[11px] text-paper/70">
            <Icon name="gauge" className="h-4 w-4 text-azure-soft" />
            reliability &gt; cleverness
          </div>
        </Panel>
      </div>

      {/* marquee */}
      <div className="reveal mt-6 overflow-hidden rounded-xl border border-line bg-surface/60 py-3">
        <div className="flex w-max marquee-track gap-3 px-3">
          {[...marqueeTools, ...marqueeTools].map((t, i) => (
            <span
              key={i}
              className="flex items-center gap-2 whitespace-nowrap font-mono text-xs uppercase tracking-[0.16em] text-muted"
            >
              <span className="h-1 w-1 rounded-full bg-azure" />
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

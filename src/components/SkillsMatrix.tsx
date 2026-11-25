import { projects, skillGroups, marqueeTools } from "../data/portfolio";
import { SectionHeader, Panel, Tag } from "./ui";
import { Icon, type IconName } from "./Icon";

const groupIcon: Record<string, IconName> = {
  cloud: "cloud",
  frameworks: "stack",
  automation: "terminal",
  ai: "beaker",
};

const groupTone: Record<string, string> = {
  cloud: "text-sky-800 bg-sky-100",
  ai: "text-emerald-700 bg-emerald-100",
  frameworks: "text-indigo-800 bg-indigo-100",
  automation: "text-amber-900 bg-amber-100",
};

const projectTools = new Set(projects.flatMap((project) => project.stack.map((tool) => tool.toLowerCase())));

export function SkillsMatrix({
  selectedSkill,
  onSelectSkill,
}: {
  selectedSkill: string | null;
  onSelectSkill: (skill: string | null) => void;
}) {
  return (
    <section id="skills" className="scroll-mt-24 pt-20 md:pt-28">
      <SectionHeader
        index="05"
        kicker="Stack"
        title={
          <>
            Four groups,
            <span className="font-serif-i font-normal text-azure-deep"> one toolbelt.</span>
          </>
        }
        description="Technical skills listed in my resume."
      />

      <p className="mb-5 flex items-center gap-2 text-xs text-muted">
        <Icon name="spark" className="h-4 w-4 text-azure" />
        Select a highlighted tool to find featured projects that use it.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        {skillGroups.map((group, i) => {
          const tone = groupTone[group.id] ?? "text-azure-deep bg-azure-soft";
          return (
            <Panel
              key={group.id}
              data-delay={String((i % 4) + 1) as "1" | "2" | "3" | "4"}
              className="lift reveal group relative overflow-hidden p-5 sm:p-6"
            >
              <div className="flex items-center gap-4">
                <div className={`relative grid h-[4.25rem] w-[4.25rem] shrink-0 place-items-center rounded-full ${tone}`}>
                  <svg className="skill-ring absolute inset-0 h-full w-full" viewBox="0 0 68 68" aria-hidden="true">
                    <circle cx="34" cy="34" r="31" fill="none" stroke="currentColor" strokeOpacity="0.18" strokeWidth="2" />
                    <circle
                      cx="34"
                      cy="34"
                      r="31"
                      fill="none"
                      stroke="currentColor"
                      strokeDasharray="195 195"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                      className="transition-[stroke-dasharray] duration-700"
                    />
                  </svg>
                  <span className="text-center">
                    <span className="block font-display text-xl font-bold leading-none">{String(group.tags.length).padStart(2, "0")}</span>
                    <span className="mt-1 block font-mono text-[8px] uppercase tracking-[0.12em]">tools</span>
                  </span>
                </div>
                <div className="min-w-0">
                  <span className={`mb-2 inline-grid h-8 w-8 place-items-center rounded-lg ${tone}`}>
                    <Icon name={groupIcon[group.id]} className="h-4 w-4" />
                  </span>
                  <h3 className="font-display text-base font-semibold tracking-tight text-ink">
                    {group.title}
                  </h3>
                  <p className="mt-0.5 text-xs text-muted">{group.blurb}</p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.tags.map((tool) => {
                  const selectable = projectTools.has(tool.toLowerCase());
                  const active = selectedSkill?.toLowerCase() === tool.toLowerCase();
                  return selectable ? (
                    <button
                      key={tool}
                      type="button"
                      aria-pressed={active}
                      onClick={() => onSelectSkill(active ? null : tool)}
                      title={`Show featured projects using ${tool}`}
                      className={`rounded-full focus-visible:outline-offset-2 ${
                        active
                          ? "rounded-full ring-2 ring-azure ring-offset-2"
                          : ""
                      }`}
                    >
                      <Tag>{tool}</Tag>
                    </button>
                  ) : (
                    <Tag key={tool}>{tool}</Tag>
                  );
                })}
              </div>
            </Panel>
          );
        })}

        <Panel className="section-glow reveal lift relative flex flex-col justify-between overflow-hidden p-6 md:col-span-2 md:flex-row md:items-end md:gap-8">
          <div className="max-w-2xl">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
              Engineering principle
            </span>
            <p className="mt-3 font-display text-xl font-semibold leading-snug tracking-tight text-ink md:text-2xl">
              Building AI assistants and workflow automation on Azure and Microsoft 365.
            </p>
          </div>
          <div className="mt-5 flex shrink-0 items-center gap-2 rounded-full border border-line bg-white/70 px-4 py-2 font-mono text-[11px] text-ink-soft md:mt-0">
            <Icon name="gauge" className="h-4 w-4 text-azure" />
            reliability over cleverness
          </div>
        </Panel>
      </div>

      <div className="reveal mt-6 overflow-hidden rounded-xl border border-line bg-surface/70 py-3">
        <div className="flex w-max marquee-track gap-3 px-3">
          {[marqueeTools.join(" · "), marqueeTools.join(" · ")].map((tools, index) => (
            <span
              key={index}
              aria-hidden={index === 1}
              className="whitespace-nowrap font-mono text-xs uppercase tracking-[0.16em] text-muted"
            >
              {tools}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

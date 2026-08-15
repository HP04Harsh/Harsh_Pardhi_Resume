import { projects, profile } from "../data/portfolio";
import { SectionHeader, Panel, Tag, CardChrome } from "./ui";
import { Icon } from "./Icon";
import { GithubProjects } from "./GithubProjects";

export function ProjectsPanel() {
  return (
    <section id="projects" className="scroll-mt-24 pt-20 md:pt-28">
      <SectionHeader
        index="05"
        kicker="Projects"
        title={
          <>
            Selected
            <span className="font-serif-i font-normal text-azure-deep"> builds.</span>
          </>
        }
        description="Featured infrastructure and AIOps projects with a focus on Azure operations, automation and client delivery."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((p, i) => (
          <Panel
            key={p.id}
            data-delay={String(i + 1) as "1" | "2"}
            className="reveal lift flex flex-col overflow-hidden"
          >
            <CardChrome
              label={`~/projects/${p.id}_${p.name.split(" ")[0].toLowerCase()}`}
              right={
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
                  {p.status}
                </span>
              }
            />
            <div className="flex flex-1 flex-col p-6 md:p-7">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-lg font-semibold leading-tight tracking-tight text-ink md:text-xl">
                  {p.name}
                </h3>
                <span className="shrink-0 font-mono text-2xl font-bold text-line-strong">
                  {p.id}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{p.summary}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>

              <ul className="mt-5 space-y-3 border-t border-line pt-5">
                {p.points.map((pt, j) => (
                  <li key={j} className="flex gap-3 text-[13.5px] leading-relaxed text-ink-soft">
                    <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-azure" strokeWidth={2} />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap items-center gap-3 self-start">
                {"repoHref" in p && p.repoHref ? (
                  <a
                    href={p.repoHref}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.16em] text-ink transition-colors hover:text-azure"
                  >
                    GitHub repo
                    <Icon
                      name="arrowUpRight"
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                ) : null}
                {"modelHref" in p && p.modelHref ? (
                  <a
                    href={p.modelHref}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.16em] text-ink transition-colors hover:text-azure"
                  >
                    Hugging Face
                    <Icon
                      name="arrowUpRight"
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                ) : null}
                <a
                  href={`mailto:${profile.email}?subject=${encodeURIComponent(
                    `Let's talk about ${p.name}`,
                  )}`}
                  className="group inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.16em] text-ink transition-colors hover:text-azure"
                >
                  Discuss this project
                  <Icon
                    name="arrowUpRight"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>
            </div>
          </Panel>
        ))}
      </div>

      <GithubProjects />
    </section>
  );
}

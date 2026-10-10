import { useState } from "react";
import { projects, profile } from "../data/portfolio";
import { SectionHeader, Panel, Tag, CardChrome } from "./ui";
import { Icon } from "./Icon";
import { GithubProjects } from "./GithubProjects";

type Category = "All" | "AI / ML" | "Infrastructure" | "Automation";

const categories: Category[] = ["All", "AI / ML", "Infrastructure", "Automation"];

function matchesCategory(project: (typeof projects)[number], category: Category) {
  if (category === "All") return true;
  const content = [
    project.name,
    project.summary,
    ...project.stack,
    ...project.points,
  ].join(" ");
  const patterns: Record<Exclude<Category, "All">, RegExp> = {
    "AI / ML": /\b(ai|genai|rag|agent|llm|ollama|qwen)\b/i,
    Infrastructure: /\b(azure|aks|terraform|kubernetes|infrastructure|disaster recovery)\b/i,
    Automation: /\b(automation|automate|remediation|workflow|aiops|gitops|ci\/cd)\b/i,
  };
  return patterns[category].test(content);
}

export function ProjectsPanel({
  selectedSkill,
  onClearSkill,
}: {
  selectedSkill: string | null;
  onClearSkill: () => void;
}) {
  const [category, setCategory] = useState<Category>("All");
  const filteredProjects = projects.filter((project) => {
    if (selectedSkill) {
      return project.stack.some((tool) => tool.toLowerCase() === selectedSkill.toLowerCase());
    }
    return matchesCategory(project, category);
  });

  return (
    <section id="projects" className="scroll-mt-24 pt-20 md:pt-28">
      <SectionHeader
        index="04"
        kicker="Projects"
        title={
          <>
            Selected
            <span className="font-serif-i font-normal text-azure-deep"> builds.</span>
          </>
        }
        description="Explore applied AI and cloud platform work. Filter by focus or select a tool in the skills section."
      />

      <div className="mb-6 flex flex-wrap items-center gap-2" role="group" aria-label="Filter featured projects">
        <span className="mr-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
          Focus
        </span>
        {categories.map((item) => {
          const selected = !selectedSkill && category === item;
          return (
            <button
              key={item}
              type="button"
              aria-pressed={selected}
              onClick={() => {
                setCategory(item);
                if (selectedSkill) onClearSkill();
              }}
              className={`rounded-full border px-3.5 py-2 text-xs font-medium transition-all ${
                selected
                  ? "border-ink bg-ink text-paper shadow-sm"
                  : "border-line-strong bg-surface text-ink-soft hover:border-azure hover:text-azure-deep"
              }`}
            >
              {item}
            </button>
          );
        })}
        {selectedSkill && (
          <span className="ml-1 inline-flex items-center gap-2 rounded-full bg-azure-soft px-3 py-2 text-xs text-azure-deep">
            Tool: {selectedSkill}
            <button
              type="button"
              onClick={onClearSkill}
              aria-label={`Clear ${selectedSkill} project filter`}
              className="grid h-4 w-4 place-items-center rounded-full font-semibold hover:bg-white/70"
            >
              ×
            </button>
          </span>
        )}
      </div>

      {filteredProjects.length ? (
        <div className="grid gap-5 lg:grid-cols-2">
          {filteredProjects.map((p, i) => (
            <Panel
              key={p.id}
              data-delay={String((i % 2) + 1) as "1" | "2"}
              className={`reveal lift group flex flex-col overflow-hidden ${p.inProgress ? "border-dashed opacity-90" : ""}`}
            >
              <div className="card-visual relative flex h-36 items-end justify-between overflow-hidden px-5 py-4 sm:h-40">
                <div className="absolute inset-0 bg-dotgrid opacity-30" />
                <span className="relative rounded-full border border-white/70 bg-white/70 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-soft backdrop-blur">
                  {p.status}
                </span>
                <span className="relative grid h-14 w-14 place-items-center rounded-2xl border border-white/70 bg-white/65 text-azure-deep shadow-sm backdrop-blur transition-transform duration-300 group-hover:scale-105">
                  <Icon name={p.id === "01" ? "beaker" : "cloud"} className="h-7 w-7" />
                </span>
                <span className="relative font-display text-4xl font-bold tracking-[-0.06em] text-ink/35">
                  {p.id}
                </span>
              </div>
              <CardChrome label={`~/projects/${p.id}_${p.name.split(" ")[0].toLowerCase()}`} />
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="font-display text-lg font-semibold leading-tight tracking-tight text-ink md:text-xl">
                  {p.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((tool) => (
                    <Tag key={tool}>{tool}</Tag>
                  ))}
                </div>

                <details className="group/details mt-5 border-t border-line pt-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 py-1 text-sm font-semibold text-ink marker:hidden [&::-webkit-details-marker]:hidden">
                    What I built
                    <Icon
                      name="arrow"
                      className="h-4 w-4 rotate-90 text-muted transition-transform group-open/details:-rotate-90"
                    />
                  </summary>
                  <ul className="mt-3 space-y-3">
                    {p.points.map((point, j) => (
                      <li key={j} className="flex gap-3 text-[13px] leading-relaxed text-ink-soft">
                        <Icon
                          name="check"
                          className="mt-0.5 h-4 w-4 shrink-0 text-mint"
                          strokeWidth={2}
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </details>

                <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-line pt-5">
                  {"repoHref" in p && p.repoHref ? (
                    <a
                      href={p.repoHref}
                      target="_blank"
                      rel="noreferrer"
                      className="group/link inline-flex min-h-10 items-center gap-2 rounded-lg font-mono text-[11px] uppercase tracking-[0.13em] text-ink transition-colors hover:text-azure"
                    >
                      <Icon name="github" className="h-4 w-4" />
                      Source
                      <Icon name="arrowUpRight" className="h-3.5 w-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                    </a>
                  ) : null}
                  {"modelHref" in p && p.modelHref ? (
                    <a
                      href={p.modelHref}
                      target="_blank"
                      rel="noreferrer"
                      className="group/link inline-flex min-h-10 items-center gap-2 rounded-lg font-mono text-[11px] uppercase tracking-[0.13em] text-ink transition-colors hover:text-azure"
                    >
                      Model
                      <Icon name="arrowUpRight" className="h-3.5 w-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                    </a>
                  ) : null}
                  <a
                    href={`mailto:${profile.email}?subject=${encodeURIComponent(`Let's talk about ${p.name}`)}`}
                    className="ml-auto inline-flex min-h-10 items-center gap-2 rounded-lg bg-paper px-3 font-mono text-[11px] uppercase tracking-[0.12em] text-ink transition-colors hover:bg-azure-soft hover:text-azure-deep"
                  >
                    Discuss project
                    <Icon name="arrowUpRight" className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </Panel>
          ))}
        </div>
      ) : (
        <Panel className="p-6 text-sm text-ink-soft" role="status">
          No featured projects currently list {selectedSkill}. Choose another tool to explore related work.
        </Panel>
      )}

      <GithubProjects />
    </section>
  );
}

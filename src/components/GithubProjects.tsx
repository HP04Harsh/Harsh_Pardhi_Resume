import { githubProjects, profile } from "../data/portfolio";
import { Panel, Tag } from "./ui";
import { Icon } from "./Icon";

export function GithubProjects() {
  return (
    <div className="mt-6">
      {/* sub-header inside the Projects section */}
      <div className="reveal mb-6 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="mb-2 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
            <Icon name="github" className="h-4 w-4 text-ink" />
            <span>More on GitHub</span>
          </div>
          <h3 className="font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
            Straight from the{" "}
            <span className="font-serif-i font-normal text-azure-deep">source.</span>
          </h3>
        </div>
        <a
          href={`${profile.githubHref}?tab=repositories`}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 self-start rounded-full border border-line-strong bg-surface px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ink transition-colors hover:border-ink"
        >
          View all repositories
          <Icon
            name="arrowUpRight"
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {githubProjects.map((p, i) => (
          <Panel
            key={p.repo}
            data-delay={String((i % 5) + 1) as "1" | "2" | "3" | "4" | "5"}
            className="reveal lift group relative overflow-hidden"
          >
            <a
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="flex h-full flex-col p-5"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-line bg-paper text-ink transition-colors duration-300 group-hover:bg-ink group-hover:text-paper">
                  <Icon name="github" className="h-4.5 w-4.5" />
                </span>
                <span className="grid h-8 w-8 place-items-center rounded-lg border border-transparent text-muted transition-all duration-300 group-hover:border-line group-hover:text-azure">
                  <Icon
                    name="arrowUpRight"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </div>

              <h4 className="mt-4 font-display text-[15px] font-semibold leading-snug tracking-tight text-ink group-hover:text-azure-deep">
                {p.name}
              </h4>
              <p className="mt-0.5 font-mono text-[11px] tracking-tight text-faint">/{p.repo}</p>

              <p className="mt-3 flex-1 text-[13px] leading-relaxed text-ink-soft">{p.desc}</p>

              <div className="mt-4 flex flex-wrap items-center gap-1.5">
                <span className="mr-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted">Tools:</span>
                {p.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>

              <div className="mt-4 flex items-center gap-2 border-t border-line pt-3 font-mono text-[11px] tracking-tight text-muted">
                <Icon name="github" className="h-3.5 w-3.5" />
                Source repository
                <span className="ml-auto text-faint transition-colors group-hover:text-azure">
                  open repo →
                </span>
              </div>
            </a>
          </Panel>
        ))}
      </div>
    </div>
  );
}

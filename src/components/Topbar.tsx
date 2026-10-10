import { Icon } from "./Icon";
import { profile } from "../data/portfolio";
import { useLocalTime } from "../hooks/useLocalTime";
import { useScrollProgress } from "../hooks/useActiveSection";

export function Topbar() {
  const { time, date } = useLocalTime();
  const progress = useScrollProgress();

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex h-12 max-w-[1500px] items-center gap-4 px-4 sm:px-6 lg:px-8">
        {/* brand */}
        <a href="#home" className="group flex items-center gap-2.5">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-ink font-display text-[12px] font-bold tracking-tight text-paper transition-transform duration-300 group-hover:rotate-[-6deg]">
            HP
          </span>
          <span className="hidden font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft sm:inline">
            Harsh Pardhi
            <span className="text-faint"> / portfolio_os</span>
          </span>
        </a>

        <span className="hidden h-4 w-px bg-line-strong md:block" />

        <span className="hidden font-mono text-[11px] tracking-tight text-muted md:inline">
          Cloud · AI · Automation
        </span>

        <div className="ml-auto flex items-center gap-2 sm:gap-4">
          {/* availability pill */}
          <span className="hidden items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 font-mono text-[11px] tracking-tight text-ink-soft xl:inline-flex">
            <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-mint" />
            {profile.availability}
          </span>

          {/* live clock */}
          <div className="hidden items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 font-mono text-[11px] tracking-tight text-ink-soft 2xl:flex">
            <Icon name="clock" className="h-3.5 w-3.5 text-muted" />
            <span className="tabular-nums">{time}</span>
            <span className="text-faint">· {date} · IST</span>
          </div>

          {/* quick links */}
          <a
            href={profile.githubHref}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="grid h-8 w-8 place-items-center rounded-md border border-line bg-surface text-ink-soft transition-colors hover:border-ink hover:text-ink"
          >
            <Icon name="github" className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="grid h-8 w-8 place-items-center rounded-md border border-line bg-surface text-ink-soft transition-colors hover:border-ink hover:text-ink"
          >
            <Icon name="mail" className="h-4 w-4" />
          </a>
          <a
            href="/Harsh_Pardhi_Resume.pdf"
            download="Harsh_Pardhi_Resume.pdf"
            aria-label="Download resume"
            className="inline-flex h-8 items-center justify-center gap-2 rounded-md bg-ink px-3 text-paper transition-colors hover:bg-azure-deep"
          >
            <Icon name="download" className="h-4 w-4" />
            <span className="hidden font-mono text-[10px] uppercase tracking-[0.12em] lg:inline">Resume</span>
          </a>
        </div>
      </div>

      {/* scroll progress hairline */}
      <div
        className="relative h-px w-full bg-line"
        role="progressbar"
        aria-label="Page reading progress"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(progress * 100)}
      >
        <div
          className="absolute left-0 top-0 h-px bg-azure transition-[width] duration-150 ease-out"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
    </header>
  );
}

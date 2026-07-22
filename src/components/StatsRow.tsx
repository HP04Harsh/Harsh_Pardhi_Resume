import { stats } from "../data/portfolio";
import { Panel } from "./ui";

export function StatsRow() {
  return (
    <div className="reveal mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
      {stats.map((s, i) => (
        <Panel
          key={s.label}
          data-delay={String(i + 1) as "1" | "2" | "3" | "4"}
          className="lift reveal group relative overflow-hidden p-5"
        >
          <div className="flex items-start justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
              0{i + 1}
            </span>
            <span className="h-2 w-2 rounded-full bg-line-strong transition-colors duration-300 group-hover:bg-azure" />
          </div>
          <p className="mt-5 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
            {s.value}
          </p>
          <p className="mt-2 text-sm font-medium text-ink">{s.label}</p>
          <p className="font-mono text-[11px] tracking-tight text-muted">{s.note}</p>
        </Panel>
      ))}
    </div>
  );
}

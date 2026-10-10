import { useEffect, useRef, useState } from "react";
import { stats } from "../data/portfolio";
import { Panel } from "./ui";

function AnimatedValue({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [current, setCurrent] = useState(0);
  const match = value.match(/^([\d,]+)(.*)$/);
  const target = match ? Number(match[1].replace(/,/g, "")) : 0;
  const suffix = match?.[2] ?? "";
  const formatted = new Intl.NumberFormat("en-IN").format(current);

  useEffect(() => {
    if (!ref.current || !target) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCurrent(target);
      return;
    }

    let frame = 0;
    const animate = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / 900, 1);
        setCurrent(Math.floor(target * (1 - Math.pow(1 - progress, 3))));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };

    const observer = "IntersectionObserver" in window
      ? new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) {
            animate();
            observer?.disconnect();
          }
        }, { threshold: 0.3 })
      : null;

    if (observer) observer.observe(ref.current);
    else animate();

    return () => {
      observer?.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [target]);

  return (
    <span ref={ref} aria-hidden="true">
      {formatted}{suffix}
    </span>
  );
}

export function StatsRow() {
  return (
    <div className="reveal mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
      {stats.map((s, i) => (
        <Panel
          key={s.label}
          data-delay={String(i + 1) as "1" | "2" | "3" | "4"}
          className="lift reveal group relative overflow-hidden p-4 sm:p-5"
        >
          <div className="flex items-start justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
              0{i + 1}
            </span>
            <span className="h-2 w-2 rounded-full bg-line-strong transition-colors duration-300 group-hover:bg-azure" />
          </div>
          <p className="mt-4 font-display text-[2.1rem] font-bold tracking-[-0.05em] text-ink sm:text-4xl md:text-5xl">
            <AnimatedValue value={s.value} />
            <span className="sr-only">{s.value}</span>
          </p>
          <p className="mt-2 text-sm font-medium text-ink">{s.label}</p>
          <p className="font-mono text-[11px] tracking-tight text-muted">{s.note}</p>
        </Panel>
      ))}
    </div>
  );
}

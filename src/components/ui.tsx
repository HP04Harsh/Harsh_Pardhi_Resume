import type { ReactNode } from "react";
import { cn } from "../utils/cn";

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-muted",
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-azure" />
      {children}
    </span>
  );
}

export function SectionHeader({
  index,
  kicker,
  title,
  description,
}: {
  index?: string;
  kicker: string;
  title: ReactNode;
  description?: string;
}) {
  return (
    <div className="reveal mb-8 flex flex-col gap-4 border-b border-line pb-6 md:mb-10 md:flex-row md:items-end md:justify-between">
      <div>
        <div className="mb-3 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
          {index ? <span className="text-azure">{index}</span> : null}
          {index ? <span className="h-px w-8 bg-line-strong" /> : null}
          <span>{kicker}</span>
        </div>
        <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-[2.6rem] md:leading-[1.05]">
          {title}
        </h2>
      </div>
      {description && (
        <p className="max-w-sm text-sm leading-relaxed text-ink-soft md:text-right">{description}</p>
      )}
    </div>
  );
}

export function Tag({ children, muted = false }: { children: ReactNode; muted?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1 font-mono text-[11px] tracking-tight transition-colors duration-300",
        muted
          ? "border-line bg-paper/50 text-muted"
          : "border-line bg-paper text-ink-soft hover:border-azure hover:bg-azure-soft hover:text-azure-deep",
      )}
    >
      {children}
    </span>
  );
}

export function Panel({
  children,
  className,
  as: As = "div",
  ...rest
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "aside";
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <As
      className={cn(
        "rounded-xl border border-line bg-surface/80 backdrop-blur-[1px] shadow-[0_1px_0_rgba(255,255,255,0.6)_inset,0_18px_40px_-30px_rgba(11,11,12,0.25)]",
        className,
      )}
      {...rest}
    >
      {children}
    </As>
  );
}

/** Tiny window-chrome header for terminal / dashboard cards. */
export function CardChrome({ label, right }: { label: string; right?: ReactNode }) {
  return (
    <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
      <div className="flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#e2654a]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#e2b13c]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#5aa469]" />
        <span className="ml-3 font-mono text-[11px] tracking-tight text-muted">{label}</span>
      </div>
      {right}
    </div>
  );
}

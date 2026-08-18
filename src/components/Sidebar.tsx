import { profile, nav } from "../data/portfolio";
import { cn } from "../utils/cn";
import { Icon } from "./Icon";
import { useState } from "react";

function Avatar({ size = "lg" }: { size?: "lg" | "sm" }) {
  // Monogram avatar with graceful photo swap. Drop a photo at /harsh.jpg
  // in the public folder and it replaces the monogram automatically.
  const dim = size === "lg" ? "h-24 w-24" : "h-12 w-12";
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={cn("relative shrink-0", dim)}>
      {!loaded && (
        <>
          <div
            className={cn(
              "absolute inset-0 rounded-xl bg-gradient-to-br from-azure to-azure-deep",
              size === "lg" ? "rounded-2xl" : "rounded-xl",
            )}
          />
          <div
            className={cn(
              "absolute inset-0 bg-dotgrid opacity-30",
              size === "lg" ? "rounded-2xl" : "rounded-xl",
            )}
          />
        </>
      )}
      <img
        src="/harsh.jpg"
        alt="Harsh Pardhi"
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(false)}
        className={cn(
          "absolute inset-0 h-full w-full object-cover",
          size === "lg" ? "rounded-2xl" : "rounded-xl",
        )}
      />
      {size === "lg" && (
        <span className="absolute -bottom-1 -right-1 grid h-6 w-6 place-items-center rounded-full border-2 border-paper bg-mint text-paper">
          <Icon name="check" className="h-3 w-3" strokeWidth={3} />
        </span>
      )}
    </div>
  );
}

function NavList({
  active,
  orientation,
}: {
  active: string;
  orientation: "vertical" | "horizontal";
}) {
  return (
    <nav
      className={cn(
        orientation === "vertical" ? "flex flex-col gap-0.5" : "flex items-center gap-1 overflow-x-auto",
      )}
    >
      {nav.map((item) => {
        const isActive = active === item.id;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={cn(
              "group relative flex items-center gap-3 rounded-lg px-3 py-2 transition-colors duration-200",
              orientation === "horizontal" && "shrink-0",
              isActive ? "bg-ink text-paper" : "text-ink-soft hover:bg-paper-2",
            )}
          >
            <span
              className={cn(
                "font-mono text-[10px] tracking-widest",
                isActive ? "text-paper/70" : "text-faint group-hover:text-azure",
              )}
            >
              {item.index}
            </span>
            <span className="font-display text-sm font-medium tracking-tight">{item.label}</span>
            {isActive && orientation === "vertical" && (
              <span className="ml-auto h-1.5 w-1.5 rounded-full bg-azure-soft" />
            )}
          </a>
        );
      })}
    </nav>
  );
}

export function Sidebar({ active }: { active: string }) {
  return (
    <>
      {/* desktop vertical sidebar */}
      <aside className="sticky top-[3.25rem] hidden h-[calc(100vh-3.25rem)] w-[18rem] shrink-0 flex-col border-r border-line px-5 py-7 lg:flex">
        <div className="flex items-center gap-4">
          <Avatar />
          <div className="min-w-0">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
              Engineer
            </p>
            <p className="truncate font-display text-lg font-semibold leading-tight text-ink">
              Harsh Pardhi
            </p>
            <p className="text-xs leading-tight text-ink-soft">{profile.role}</p>
          </div>
        </div>

        <div className="mt-6 mb-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-faint">
          <span className="h-px w-4 bg-line-strong" />
          Navigate
        </div>
        <NavList active={active} orientation="vertical" />

        <div className="mt-auto space-y-3 pt-6">
          <a
            href={`mailto:${profile.email}`}
            className="lift flex items-center gap-3 rounded-lg border border-line bg-surface px-3 py-2.5 text-xs text-ink-soft hover:border-azure hover:text-azure-deep"
          >
            <Icon name="mail" className="h-4 w-4 text-azure" />
            <span className="truncate font-mono">{profile.email}</span>
          </a>
          <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
            <span>© {new Date().getFullYear()}</span>
            <span className="flex items-center gap-1.5">
              <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-mint" /> online
            </span>
          </div>
        </div>
      </aside>

      {/* mobile horizontal nav */}
      <div className="sticky top-[3.25rem] z-30 border-b border-line bg-paper/90 backdrop-blur-md lg:hidden">
        <div className="flex items-center gap-3 px-4 py-3">
          <Avatar size="sm" />
          <div className="min-w-0">
            <p className="truncate font-display text-sm font-semibold text-ink">Harsh Pardhi</p>
            <p className="truncate font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
              {profile.role}
            </p>
          </div>
        </div>
        <div className="border-t border-line px-3 py-2">
          <NavList active={active} orientation="horizontal" />
        </div>
      </div>
    </>
  );
}

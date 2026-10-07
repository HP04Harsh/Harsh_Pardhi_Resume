import { useState } from "react";
import { profile } from "../data/portfolio";
import { SectionHeader, Panel } from "./ui";
import { Icon, type IconName } from "./Icon";

type Tile = {
  key: string;
  label: string;
  value: string;
  href: string;
  icon: IconName;
  copy?: boolean;
  external?: boolean;
};

const tiles: Tile[] = [
  { key: "email", label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: "mail", copy: true },
  { key: "phone", label: "Phone", value: profile.phone, href: profile.phoneHref, icon: "phone", copy: true },
  { key: "web", label: "Website", value: profile.website, href: profile.websiteHref, icon: "globe", external: true },
  { key: "github", label: "GitHub", value: profile.github, href: profile.githubHref, icon: "github", external: true },
  { key: "linkedin", label: "LinkedIn", value: "linkedin.com/in/harsh-pardhi", href: "https://www.linkedin.com/in/harsh-pardhi", icon: "linkedin", external: true },
];

export function ContactPanel() {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = async (key: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(key);
      window.setTimeout(() => setCopied((c) => (c === key ? null : c)), 1600);
    } catch {
      /* clipboard unavailable — link still works */
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 pt-20 md:pt-28">
      <SectionHeader
        index="09"
        kicker="Contact"
        title={
          <>
            Have a role, a project,
            <br />
            <span className="font-serif-i font-normal text-azure-deep">or just a question?</span>
          </>
        }
        description="Pick whichever channel suits you. I read everything and reply fast."
      />

      <Panel className="reveal relative overflow-hidden p-7 md:p-10">
        <div className="bg-dotgrid pointer-events-none absolute -right-16 -top-16 h-56 w-56 opacity-40" />
        <div className="relative grid gap-4 sm:grid-cols-2">
          {tiles.map((t, i) => (
            <div
              key={t.key}
              data-delay={String(i + 1) as "1" | "2" | "3" | "4" | "5"}
              className="reveal lift group relative flex items-center justify-between gap-4 overflow-hidden rounded-xl border border-line bg-paper/70 p-5 transition-colors hover:border-ink"
            >
              <a href={t.href} target={t.external ? "_blank" : undefined} rel={t.external ? "noreferrer" : undefined} className="flex min-w-0 flex-1 items-center gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-surface text-azure transition-colors duration-300 group-hover:bg-azure group-hover:text-paper">
                  <Icon name={t.icon} className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                    {t.label}
                  </p>
                  <p className="truncate font-display text-[15px] font-semibold tracking-tight text-ink md:text-base">
                    {t.value}
                  </p>
                </div>
              </a>
              <div className="flex shrink-0 items-center gap-1">
                {t.copy && (
                  <button
                    type="button"
                    onClick={() => copy(t.key, t.value)}
                    aria-label={`Copy ${t.label}`}
                    className="grid h-9 w-9 place-items-center rounded-lg border border-line bg-surface text-muted transition-colors hover:border-azure hover:text-azure"
                  >
                    {copied === t.key ? (
                      <Icon name="check" className="h-4 w-4 text-mint" strokeWidth={2.4} />
                    ) : (
                      <Icon name="copy" className="h-4 w-4" />
                    )}
                  </button>
                )}
                <a
                  href={t.href}
                  target={t.external ? "_blank" : undefined}
                  rel={t.external ? "noreferrer" : undefined}
                  aria-label={`Open ${t.label}`}
                  className="grid h-9 w-9 place-items-center rounded-lg border border-line bg-surface text-ink transition-all duration-300 group-hover:border-ink group-hover:bg-ink group-hover:text-paper"
                >
                  <Icon
                    name={t.external ? "arrowUpRight" : "arrow"}
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>

        <a
          href="/Harsh_Pardhi_Resume.pdf"
          download="Harsh_Pardhi_Resume.pdf"
          className="relative mt-6 inline-flex items-center gap-2 rounded-lg bg-ink px-4 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-paper transition-colors hover:bg-azure-deep"
        >
          <Icon name="download" className="h-4 w-4" />
          Download resume
        </a>

        <div className="relative mt-7 flex flex-col gap-3 border-t border-line pt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-muted sm:flex-row sm:items-center sm:justify-between">
          <span className="flex items-center gap-2">
            <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-mint" />
            typically replies within 24 hours
          </span>
          <span>preferred timezone · {profile.timezone}</span>
        </div>
        <p className="relative mt-4 text-sm leading-relaxed text-ink-soft">
          Open to Applied AI Engineer and GenAI Engineer roles. Relocation: open.
        </p>
      </Panel>

      <footer className="mt-14 flex flex-col gap-3 border-t border-line pt-6 font-mono text-[11px] tracking-tight text-muted sm:flex-row sm:items-center sm:justify-between">
        <span>
          © {new Date().getFullYear()} Harsh Pardhi — designed &amp; built as a single-file portfolio.
        </span>
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-azure" />
          all systems operational
        </span>
      </footer>
    </section>
  );
}

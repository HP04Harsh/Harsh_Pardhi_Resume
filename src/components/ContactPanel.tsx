import { useState, type FormEvent } from "react";
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
  { key: "location", label: "Location", value: profile.location, href: "https://maps.google.com/?q=Gondia%2C+Maharashtra%2C+India", icon: "pin", external: true },
  { key: "web", label: "Website", value: profile.website, href: profile.websiteHref, icon: "globe", external: true },
  { key: "github", label: "GitHub", value: profile.github, href: profile.githubHref, icon: "github", external: true },
  { key: "linkedin", label: "LinkedIn", value: profile.linkedin, href: profile.linkedinHref, icon: "linkedin", external: true },
];

export function ContactPanel() {
  const [copied, setCopied] = useState<string | null>(null);
  const [copyError, setCopyError] = useState(false);
  const [draftOpened, setDraftOpened] = useState(false);

  const copy = async (key: string, value: string) => {
    setCopyError(false);
    try {
      await navigator.clipboard.writeText(value);
      setCopied(key);
      window.setTimeout(() => setCopied((current) => (current === key ? null : current)), 1600);
    } catch {
      setCopyError(true);
    }
  };

  const openEmailDraft = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const subject = String(formData.get("subject") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const body = `${message}\n\nFrom: ${name}\nReply to: ${email}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setDraftOpened(true);
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
        description="Reach out about Applied AI, GenAI engineering, or cloud platform roles. I usually reply within a day."
      />

      <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
        <Panel className="section-glow reveal relative overflow-hidden p-5 sm:p-7">
          <div className="relative mb-5 flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Say hello</p>
              <h3 className="mt-1 font-display text-xl font-semibold tracking-tight text-ink">Choose a channel</h3>
            </div>
            <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-emerald-800">
              <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-mint" />
              Open to roles
            </span>
          </div>

          <div className="relative space-y-2">
            {tiles.map((tile) => (
              <div
                key={tile.key}
                className="group flex items-center justify-between gap-3 rounded-xl border border-line bg-white/75 p-3 transition-colors hover:border-line-strong hover:bg-white sm:p-3.5"
              >
                <a
                  href={tile.href}
                  target={tile.external ? "_blank" : undefined}
                  rel={tile.external ? "noreferrer" : undefined}
                  className="flex min-w-0 flex-1 items-center gap-3"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-paper text-azure transition-colors group-hover:bg-azure group-hover:text-white">
                    <Icon name={tile.icon} className="h-4.5 w-4.5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-mono text-[9px] uppercase tracking-[0.17em] text-muted">{tile.label}</span>
                    <span className="block truncate text-sm font-semibold text-ink">{tile.value}</span>
                  </span>
                </a>
                <div className="flex shrink-0 items-center gap-1">
                  {tile.copy && (
                    <button
                      type="button"
                      onClick={() => void copy(tile.key, tile.value)}
                      aria-label={`Copy ${tile.label}`}
                      className="grid h-9 w-9 place-items-center rounded-lg border border-line bg-surface text-muted transition-colors hover:border-azure hover:text-azure"
                    >
                      {copied === tile.key ? (
                        <Icon name="check" className="h-4 w-4 text-mint" strokeWidth={2.4} />
                      ) : (
                        <Icon name="copy" className="h-4 w-4" />
                      )}
                    </button>
                  )}
                  <a
                    href={tile.href}
                    target={tile.external ? "_blank" : undefined}
                    rel={tile.external ? "noreferrer" : undefined}
                    aria-label={`Open ${tile.label}`}
                    className="grid h-9 w-9 place-items-center rounded-lg border border-line bg-surface text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper"
                  >
                    <Icon name={tile.external ? "arrowUpRight" : "arrow"} className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          {copyError && (
            <p className="relative mt-3 text-xs text-amber-900" role="status">
              Clipboard access is unavailable in this browser. Select the contact detail to use it instead.
            </p>
          )}
        </Panel>

        <Panel className="reveal overflow-hidden p-5 sm:p-7" data-delay="1">
          <div className="mb-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Quick message</p>
            <h3 className="mt-1 font-display text-xl font-semibold tracking-tight text-ink">Start a conversation</h3>
            <p className="mt-1 text-sm leading-relaxed text-ink-soft">
              This opens a pre-filled draft in your email app. Your message is not sent or stored on this site.
            </p>
          </div>

          <form onSubmit={openEmailDraft} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.15em] text-muted">Your name</span>
                <input
                  name="name"
                  autoComplete="name"
                  required
                  maxLength={100}
                  placeholder="Name"
                  className="w-full rounded-xl border border-line-strong bg-paper/60 px-4 py-3 text-sm text-ink placeholder:text-faint transition focus:border-azure focus:bg-white focus:outline-none focus:ring-2 focus:ring-azure/15"
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.15em] text-muted">Your email</span>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  maxLength={254}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-line-strong bg-paper/60 px-4 py-3 text-sm text-ink placeholder:text-faint transition focus:border-azure focus:bg-white focus:outline-none focus:ring-2 focus:ring-azure/15"
                />
              </label>
            </div>
            <label className="block">
              <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.15em] text-muted">Subject</span>
              <input
                name="subject"
                required
                maxLength={160}
                placeholder="What would you like to discuss?"
                className="w-full rounded-xl border border-line-strong bg-paper/60 px-4 py-3 text-sm text-ink placeholder:text-faint transition focus:border-azure focus:bg-white focus:outline-none focus:ring-2 focus:ring-azure/15"
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.15em] text-muted">Message</span>
              <textarea
                name="message"
                required
                minLength={10}
                maxLength={4000}
                rows={5}
                placeholder="A little context helps me get back to you with a useful response."
                className="w-full resize-y rounded-xl border border-line-strong bg-paper/60 px-4 py-3 text-sm leading-relaxed text-ink placeholder:text-faint transition focus:border-azure focus:bg-white focus:outline-none focus:ring-2 focus:ring-azure/15"
              />
            </label>
            <div className="flex flex-col gap-3 border-t border-line pt-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-azure-deep focus-visible:outline-offset-4"
              >
                Open email draft
                <Icon name="arrowUpRight" className="h-4 w-4" />
              </button>
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                {profile.timezone} · replies within 24h
              </span>
            </div>
            {draftOpened && (
              <p className="rounded-lg bg-mint-soft px-4 py-3 text-sm text-emerald-900" role="status">
                Your email app should open with a draft ready. Review it and press Send there. If it did not open, email{" "}
                <a className="font-semibold underline underline-offset-2" href={`mailto:${profile.email}`}>{profile.email}</a>.
              </p>
            )}
          </form>
        </Panel>
      </div>

      <a
        href="/Harsh_Pardhi_Resume.pdf"
        download="Harsh_Pardhi_Resume.pdf"
        className="lift mt-6 inline-flex min-h-11 items-center gap-2 rounded-full border border-line-strong bg-surface px-5 py-3 font-mono text-[11px] uppercase tracking-[0.15em] text-ink transition-colors hover:border-ink hover:bg-ink hover:text-white"
      >
        <Icon name="download" className="h-4 w-4" />
        Download resume
      </a>

      <footer className="mt-14 flex flex-col gap-3 border-t border-line pt-6 font-mono text-[11px] tracking-tight text-muted sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} Harsh Pardhi · designed and built as a single-page portfolio.</span>
        <a className="inline-flex items-center gap-2 transition-colors hover:text-ink" href="#home">
          <span className="h-1.5 w-1.5 rounded-full bg-azure" />
          Back to top
          <Icon name="arrow" className="h-3.5 w-3.5 -rotate-90" />
        </a>
      </footer>
    </section>
  );
}

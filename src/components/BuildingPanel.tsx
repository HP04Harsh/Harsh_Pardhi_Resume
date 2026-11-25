import { SectionHeader, Panel } from "./ui";
import { Icon } from "./Icon";

export function BuildingPanel() {
  return (
    <section id="building" className="scroll-mt-24 pt-20 md:pt-28">
      <SectionHeader
        index="08"
        kicker="Documents"
        title={
          <>
            Application
            <br />
            <span className="font-serif-i font-normal text-azure-deep">documents.</span>
          </>
        }
        description="Download my resume and cover letter."
      />

      <div className="grid gap-4 md:grid-cols-2">
        <Panel className="reveal lift flex flex-col gap-4 p-6">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-azure-soft text-azure-deep">
              <Icon name="download" className="h-5 w-5" />
            </span>
            <h3 className="font-display text-base font-semibold tracking-tight text-ink">Resume</h3>
          </div>
          <a
            href="/Harsh_Pardhi_Resume.pdf"
            download="Harsh_Pardhi_Resume.pdf"
            className="mt-auto inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-azure-deep"
          >
            Download resume
          </a>
        </Panel>
        <Panel className="reveal lift flex flex-col gap-4 p-6" data-delay="1">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-azure-soft text-azure-deep">
              <Icon name="download" className="h-5 w-5" />
            </span>
            <h3 className="font-display text-base font-semibold tracking-tight text-ink">Cover letter</h3>
          </div>
          <a
            href="/Harsh_Pardhi_Cover_Letter.pdf"
            download="Harsh_Pardhi_Cover_Letter.pdf"
            className="mt-auto inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-line-strong bg-surface px-5 py-3 text-sm font-semibold text-ink transition hover:border-ink"
          >
            Download cover letter
          </a>
        </Panel>
      </div>
    </section>
  );
}

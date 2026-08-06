import { currentlyBuilding } from "../data/portfolio";
import { SectionHeader, Panel } from "./ui";
import { Icon } from "./Icon";

export function BuildingPanel() {
  return (
    <section id="building" className="scroll-mt-24 pt-20 md:pt-28">
      <SectionHeader
        index="08"
        kicker="Currently building"
        title={
          <>
            Momentum for the next
            <br />
            <span className="font-serif-i font-normal text-azure-deep">platform step.</span>
          </>
        }
        description="Proof that the focus is on AWS, Terraform-on-AWS, RAG and DNS for the next four months."
      />

      <div className="grid gap-4 md:grid-cols-3">
        {currentlyBuilding.map((item, i) => (
          <Panel key={item.title} className="reveal lift overflow-hidden p-6" data-delay={String(i + 1) as "1" | "2" | "3"}>
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-azure-soft text-azure-deep">
                <Icon name="spark" className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display text-base font-semibold tracking-tight text-ink">
                  {item.title}
                </h3>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">{item.detail}</p>
          </Panel>
        ))}
      </div>
    </section>
  );
}

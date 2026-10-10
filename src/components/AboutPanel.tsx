import { quickFacts } from "../data/portfolio";
import { SectionHeader, Panel } from "./ui";

export function AboutPanel() {
  return (
    <section id="about" className="scroll-mt-24 pt-20 md:pt-28">
      <SectionHeader index="02" kicker="About" title="Cloud & AI engineer" />

      <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <Panel className="reveal p-7 md:p-9">
          <div className="space-y-5 text-[15px] leading-relaxed text-ink-soft md:text-base">
            <p className="text-lg font-medium leading-relaxed text-ink">
              I build cloud automation, enterprise Copilots, and GenAI systems at Hexaware Technologies.
            </p>
            <p>
              My work starts with a practical question: what is still being done by hand? I use PowerShell, Python, and cloud-native tooling to make migrations, reporting, and operations more repeatable—and apply AI where it improves the workflow.
            </p>
            <div className="space-y-3">
              <details className="group rounded-xl border border-line bg-paper/50 p-4 open:bg-white">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-display text-sm font-semibold text-ink [&::-webkit-details-marker]:hidden">
                  Production outcomes
                  <span className="font-mono text-[10px] text-muted">6 highlights</span>
                </summary>
                <ul className="mt-4 list-disc space-y-3 border-t border-line pt-4 pl-5 text-sm">
                  <li>Migrated 5,000+ OneDrive users to Microsoft 365 using ShareGate and PowerShell, with overnight initial, delta, and reconciliation passes.</li>
                  <li>Deployed StorageX Analytics across 9 storage VMs on 2 NetApp clusters and delivered 10 Power BI reports.</li>
                  <li>Migrated 132 Power Apps and 50+ Power Automate flows across 4 consolidating tenants.</li>
                  <li>Built Transcend, a Power App with a Copilot Studio agent and embedded Power BI, now used to manage 20+ projects.</li>
                  <li>Deployed two Copilot Studio agents for L1 support and PMO, grounded in SharePoint FAQs and live across four tenants.</li>
                  <li>Delivered a Terraform landing-zone proof of concept with Azure remote state, runbooks, and SOPs.</li>
                </ul>
              </details>
              <details className="group rounded-xl border border-line bg-paper/50 p-4 open:bg-white">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-display text-sm font-semibold text-ink [&::-webkit-details-marker]:hidden">
                  Independent builds &amp; current focus
                  <span className="font-mono text-[10px] text-muted">AI · cloud · platform</span>
                </summary>
                <div className="mt-4 space-y-3 border-t border-line pt-4 text-sm">
                  <p>InfraGenie explores Azure AIOps with a local Qwen2.5-Coder model, Docker, structured prompts, and remediation workflows. Other work includes a two-region Terraform disaster-recovery environment and AKS GitOps, Kyverno, Kubecost, and Prometheus/Grafana labs.</p>
                  <p>Current learning focus: LangGraph agent workflows, Model Context Protocol (MCP), RAG with Azure AI Search, LLMOps observability, and AI workloads on AKS.</p>
                </div>
              </details>
            </div>
            <p className="border-l-2 border-azure/30 pl-4 text-sm">
              I care about the operational details: safe cutovers, useful runbooks, least-privilege agents, and reports that surface a problem before it becomes an incident.
            </p>
          </div>
        </Panel>

        {/* spec sheet */}
        <Panel className="reveal overflow-hidden" data-delay="1">
          <div className="section-glow flex items-center gap-4 border-b border-line p-5">
            <img
              src="/harsh.jpg"
              alt="Portrait of Harsh Pardhi"
              loading="lazy"
              className="h-16 w-16 rounded-full border-2 border-white object-cover shadow-md ring-2 ring-emerald-200 transition-transform hover:scale-105"
            />
            <div>
              <p className="font-display text-lg font-semibold text-ink">Harsh Pardhi</p>
              <p className="text-sm text-ink-soft">Applied AI Engineer</p>
            </div>
          </div>
          <div className="flex items-center justify-between border-b border-line px-5 py-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              spec_sheet.json
            </span>
            <span className="font-mono text-[10px] text-faint">read-only</span>
          </div>
          <dl className="divide-y divide-line">
            {quickFacts.map((f) => (
              <div key={f.k} className="flex items-center justify-between px-5 py-3">
                <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                  {f.k}
                </dt>
                <dd className="text-right text-sm font-medium text-ink">{f.v}</dd>
              </div>
            ))}
          </dl>
          <div className="border-t border-line bg-paper-2/60 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
            ↳ open to relocate: Bangalore, Hyderabad, Pune, Chennai
          </div>
        </Panel>
      </div>
    </section>
  );
}

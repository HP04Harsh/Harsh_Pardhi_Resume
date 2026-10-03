import { quickFacts } from "../data/portfolio";
import { SectionHeader, Panel } from "./ui";

export function AboutPanel() {
  return (
    <section id="about" className="scroll-mt-24 pt-20 md:pt-28">
      <SectionHeader
        index=""
        kicker="About"
        title="Cloud & AI engineer"
      />

      <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <Panel className="reveal p-7 md:p-9">
          <div className="space-y-5 text-[15px] leading-relaxed text-ink-soft md:text-base">
            <p className="first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-6xl first-letter:font-bold first-letter:leading-[0.8] first-letter:text-ink">
              I'm a Cloud &amp; AI engineer at Hexaware Technologies, two years in — building automation, enterprise Copilots, and GenAI agents on Azure.
            </p>
            <p>
              One pattern keeps showing up: something important is being done by hand — a migration, a permissions audit, a report rebuilt every Monday, an L1 ticket queue at 2 a.m. — and it shouldn't be. I find it, script it in PowerShell or Python, and these days I wire it through an AI agent instead of only a cron job.
            </p>
            <p>Production work to date:</p>
            <ul className="list-disc space-y-3 pl-5">
              <li>Migrated 5,000+ OneDrive users to Microsoft 365 using ShareGate and PowerShell — overnight cutovers running unsupervised via initial + delta + reconciliation scripts.</li>
              <li>Deployed StorageX Analytics across 9 storage VMs on 2 NetApp clusters; turned the inventory into 10 Power BI reports the client formally thanked us for.</li>
              <li>Migrated 132 Power Apps and 50+ Power Automate flows across 4 consolidating tenants; built a SharePoint + Power BI tracker for stakeholders.</li>
              <li>Built Transcend — a Power App on five SharePoint lists with a Copilot Studio agent + embedded Power BI — now the transformation team's primary PM tool with 20+ projects onboarded.</li>
              <li>Deployed two production Copilot Studio agents (L1 support + PMO assistant) grounded in SharePoint FAQs, wired to ticketing, live across all four tenants.</li>
              <li>Delivered a Terraform landing zone POC with remote state in Azure Storage, plus runbooks/SOPs for the client team.</li>
            </ul>
            <p>Outside client delivery I build to go deeper:</p>
            <ul className="list-disc space-y-3 pl-5">
              <li>InfraGenie — an AIOps platform for Azure using a local LLM (Qwen2.5-Coder on Ollama in Docker) with structured prompts and self-remediation loops.</li>
              <li>A two-region active/passive DR environment in Terraform (Central + South India).</li>
              <li>Labs on AKS GitOps, Kyverno policy, Kubecost, and Prometheus/Grafana observability.</li>
            </ul>
            <p>
              Currently doubling down on GenAI engineering — agentic workflows with LangGraph, Model Context Protocol (MCP), RAG on Azure AI Search, LLMOps observability, and deploying AI workloads on AKS. Working toward AZ-104 (this month), then AZ-400 and AI-102.
            </p>
            <p>
              I care about the boring parts: cutovers that finish without someone watching, runbooks the next person can follow, agents with least-privilege access, and reports that surface a problem before it becomes an incident.
            </p>
          </div>
        </Panel>

        {/* spec sheet */}
        <Panel className="reveal overflow-hidden" data-delay="1">
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

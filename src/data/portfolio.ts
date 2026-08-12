export const profile = {
  firstName: "Harsh",
  lastName: "Pardhi",
  role: "Cloud & DevOps Engineer",
  tagline: "Azure · Kubernetes · Terraform · CI/CD · AIOps",
  location: "Chennai, India",
  timezone: "IST · UTC+5:30",
  email: "harshpardhi499@gmail.com",
  phone: "+91 95296 67349",
  phoneHref: "tel:+919529667349",
  website: "harsh-pardhi.vercel.app",
  websiteHref: "https://harsh-pardhi.vercel.app",
  github: "github.com/HP04Harsh",
  githubHref: "https://github.com/HP04Harsh",
  linkedin: "linkedin.com/in/harsh-pardhi",
  linkedinHref: "https://www.linkedin.com/in/harsh-pardhi",
  availability: "Open to opportunities",
  currentRole: "Associate Software Engineer — Cloud Operations & Automation @ Hexaware Technologies Ltd",
  experienceYears: "2+",
};

export const nav = [
  { id: "home", label: "Overview", index: "01" },
  { id: "about", label: "Profile", index: "02" },
  { id: "experience", label: "Experience", index: "03" },
  { id: "projects", label: "Projects", index: "04" },
  { id: "skills", label: "Stack", index: "05" },
  { id: "certs", label: "Certifications", index: "06" },
  { id: "education", label: "Education", index: "07" },
  { id: "building", label: "Building", index: "08" },
  { id: "contact", label: "Contact", index: "09" },
];

export const stats = [
  { value: "5,000+", label: "Users migrated", note: "@ 99% accuracy" },
  { value: "20+", label: "Hours automated", note: "saved per month" },
  { value: "~2 hrs", label: "Provisioning time", note: "from ~2 days" },
  { value: "-25%", label: "MTTR", note: "incident mean time to recover" },
];

export const summaryParagraphs = [
  "Cloud & DevOps Engineer with two years of hands-on experience at Hexaware Technologies, working across Azure cloud operations, Microsoft 365 and on-premises-to-cloud migration support. I build the plumbing that lets teams ship — PowerShell automation, SharePoint and storage analytics, Power BI dashboards and Power Platform workflows that replace repetitive manual work with reliable, observable systems.",
  "Microsoft-certified in Azure Administration (AZ-104), with AZ-400 (DevOps Engineer Expert) and Anthropic Claude certification in progress. Hands-on platform experience across Terraform, Docker, Kubernetes, CI/CD (GitHub Actions, Jenkins, GitLab CI, Azure DevOps, Argo CD), Python, SQL, Azure AI Foundry and AIOps delivery. I focus on resilient infrastructure, secure deployment workflows, observability and the engineering needed to run AI workloads reliably.",
];

export const quickFacts = [
  { k: "Based in", v: "Chennai, India" },
  { k: "Current", v: "Hexaware Technologies Ltd · India" },
  { k: "Focus", v: "Azure · AIOps · Platform Engineering" },
  { k: "Status", v: "Open to opportunities" },
  { k: "Timezone", v: "IST (UTC+5:30)" },
  { k: "Responds", v: "Within ~24 hours" },
];

export const currentlyBuilding = [
  {
    title: "AIOps hardening — LLM evals, token-cost alerts, responsible-AI controls",
    detail: "Strengthening model governance, cost visibility and safety checks for Azure AI workloads and automation tooling.",
  },
  {
    title: "AZ-400 (DevOps Engineer Expert) — expected Sep 2026",
    detail: "Deepening end-to-end DevOps execution across pipelines, IaC, governance, automation and release reliability.",
  },
  {
    title: "NVIDIA NCA (AI Infrastructure Operations) — in progress",
    detail: "Expanding operational knowledge of AI infrastructure, inference environments and platform-level performance tuning.",
  },
  {
    title: "Network troubleshooting deep-dive — tcpdump, dig, Wireshark",
    detail: "Improving incident triage across DNS, packet-level diagnostics and cloud networking reliability patterns.",
  },
];

export const skillGroups = [
  {
    id: "cloud",
    title: "Cloud & AI Platforms",
    blurb: "Where the workloads live.",
    tags: [
      "Microsoft Azure",
      "Azure Kubernetes Service",
      "Azure AI Foundry",
      "Azure OpenAI",
      "Azure Monitor",
      "VM compute / VMSS",
      "Microsoft Entra ID",
      "Azure Policy",
      "Azure Key Vault",
    ],
  },
  {
    id: "infra",
    title: "Infrastructure & DevOps",
    blurb: "Provision, ship, repeat.",
    tags: [
      "Terraform",
      "Git",
      "GitHub Actions",
      "Azure DevOps",
      "Jenkins",
      "GitLab CI",
      "Linux",
      "Bash",
      "Docker",
      "Kubernetes",
      "Helm",
      "ArgoCD",
      "Azure CLI",
      "PowerShell",
    ],
  },
  {
    id: "aigen",
    title: "AI / AIOps",
    blurb: "Operationalizing generated intelligence.",
    tags: [
      "Azure OpenAI",
      "AI Foundry",
      "MLflow",
      "DVC",
      "RAG",
      "LLM observability",
      "ServiceNow",
      "AI platform operations",
      "Model evaluation",
    ],
  },
  {
    id: "auto",
    title: "Automation & Data",
    blurb: "Kill the manual steps.",
    tags: [
      "Python",
      "PowerShell",
      "SQL",
      "REST APIs",
      "Power Apps",
      "Power BI",
      "Microsoft 365",
      "Excel automation",
      "CSV reporting",
      "Workflow orchestration",
    ],
  },
  {
    id: "sec",
    title: "Security & Observability",
    blurb: "See it, guard it, govern it.",
    tags: [
      "Azure Policy",
      "RBAC",
      "Key Vault",
      "Prometheus",
      "Grafana",
      "Azure Monitor",
      "ServiceNow (ITSM)",
      "tcpdump / dig / Wireshark",
      "Cloud governance",
      "Incident response",
    ],
  },
];

export const experience = [
  {
    role: "Associate Software Engineer — Cloud Operations & Automation",
    company: "Hexaware Technologies Ltd",
    period: "July 2024 — Present",
    location: "India",
    status: "Current",
    points: [
      "Migrated 5,000+ users SharePoint/OneDrive → Microsoft 365 with ShareGate + 5 PowerShell scripts — 99% data accuracy, zero escalations.",
      "Automated ONTAP storage analytics (REST/JSON → CSV → Power BI; 6 scripts, 10–15 scheduled reports) — eliminated 20+ hrs/month manual work.",
      "Replaced 15+ spreadsheets with 2 Power Apps + a Copilot Studio assistant — ~80% less manual tracking.",
      "Co-built Terraform Azure landing zones (hub-spoke, subscription vending, RBAC, Policy-as-code) — provisioning ~2 days → ~2 hours.",
      "Owned incident response & RCA within SLA (ServiceNow); runbooks + proactive alerts cut MTTR ~25%.",
    ],
  },
];

export const projects = [
  {
    id: "01",
    name: "InfraGenie — AI Platform Operations Assistant",
    status: "Personal · AIOps (PoC)",
    stack: ["Python", "Azure", "Terraform", "ServiceNow", "HF model link"],
    summary:
      "Demonstrates AIOps automation for Azure provisioning, incident workflows and human-in-the-loop platform operations.",
    points: [
      "Rewrote InfraGenie for seven operational personas, letting engineers, support, secops and platform owners drive infrastructure intent safely.",
      "Built 24x7 auto-heal workflows that detect drift and reopen ServiceNow tickets for corrective action and governance review.",
      "Linked inference to a hosted HF model endpoint — a Qwen2.5-Code-7B I fine-tuned via SFT on Colab and published as InfraGenie-Azure-Expert — and enforced human-in-the-loop validation for provisioning requests.",
    ],
  },
  {
    id: "02",
    name: "Azure Multi-Region DR",
    status: "Personal · IaC project",
    stack: ["Azure", "Terraform", "Traffic Manager", "VM Scale Sets", "Geo-replication"],
    summary:
      "Demonstrates resilient Azure infrastructure design with failover automation, geo-replication and recovery-first IaC patterns.",
    points: [
      "Designed multi-region DR architecture using Traffic Manager, storage geo-replication and region-aware failover workflows.",
      "Automated Azure infrastructure provisioning with Terraform to reduce recovery build time and improve DR runbook reliability.",
      "Validated active-passive failover paths and documented post-failover recovery procedures for cross-team handover.",
    ],
  },
  {
    id: "03",
    name: "KubeScale-Ops",
    status: "Personal · K8s FinOps lab",
    stack: ["AKS", "Terraform", "Kubecost", "Prometheus", "Helm", "GitOps"],
    summary:
      "Demonstrates AKS governance, FinOps visibility and repeatable Kubernetes platform automation for operational cost control.",
    points: [
      "Built a FinOps control plane: Kubecost and Prometheus track spend and utilization — flagged ~20% reclaimable spend via rightsizing.",
      "Managed GitOps-driven AKS delivery with Helm and a KinD validation loop for policy-safe cluster changes.",
      "Reusable Terraform modules with platform guardrails and workload validation for safe AKS delivery.",
    ],
  },
  {
    id: "04",
    name: "RAG assistant on AKS",
    status: "In progress",
    stack: ["AKS", "RAG", "LiteLLM", "Azure AI Foundry"],
    summary:
      "In progress — demonstrates retrieval-augmented knowledge delivery for platform operations and AI-assisted troubleshooting workflows.",
    points: [
      "Designing an AKS-based RAG service that combines internal documentation and runtime telemetry for cloud ops support.",
      "Evaluating LiteLLM and Azure AI Foundry deployment patterns to keep inference efficient while preserving reliability.",
      "Focusing on secure data access, prompt engineering and transparent model observability as part of the MVP.",
    ],
  },
];

export const githubProjects = [
  {
    name: "InfraGenie — AI AIOps Platform",
    repo: "infraGenie-AI-Automation-Platform",
    href: "https://github.com/HP04Harsh/infraGenie-AI-Automation-Platform",
    lang: "Python",
    desc: "AI automation platform for Azure provisioning, AIOps workflows, and intelligent operational remediation.",
    tags: ["AI", "Terraform", "AIOps", "Python"],
  },
  {
    name: "Azure Multi-Region DR",
    repo: "azure-multi-region-dr-terraform",
    href: "https://github.com/HP04Harsh/azure-multi-region-dr-terraform",
    lang: "HCL",
    desc: "Multi-region Azure disaster recovery infrastructure with Traffic Manager, geo-replication and failover automation.",
    tags: ["Azure", "Terraform", "DR", "Traffic Manager"],
  },
  {
    name: "KubeScale-Ops",
    repo: "KubeScale-Ops",
    href: "https://github.com/HP04Harsh/KubeScale-Ops",
    lang: "HCL",
    desc: "Scalable AKS operations automation with secure cluster delivery patterns and unified platform observability.",
    tags: ["AKS", "Terraform", "Kubecost", "Prometheus", "Helm", "GitOps"],
  },
  {
    name: "K8s Security & Observability",
    repo: "k8s-sec-observability",
    href: "https://github.com/HP04Harsh/k8s-sec-observability",
    lang: "HCL",
    desc: "Automated AKS deployment with Terraform, hardened by Kyverno and wired into an observability stack for metrics and tracing.",
    tags: ["AKS", "Kyverno", "Istio", "Grafana"],
  },
  {
    name: "Azure-Devops-Pipeline",
    repo: "Azure-Devops-Pipeline",
    href: "https://github.com/HP04Harsh/Azure-Devops-Pipeline",
    lang: "HCL",
    desc: "Azure CI/CD framework combining Terraform infrastructure-as-code with Azure DevOps release pipelines and governance controls.",
    tags: ["Azure", "Terraform", "CI/CD", "Azure DevOps"],
  },
];

export const certifications = [
  {
    code: "AZ-104",
    title: "Microsoft Certified: Azure Administrator Associate",
    issuer: "Microsoft — Completed",
  },
  {
    code: "AZ-400",
    title: "Microsoft Certified: DevOps Engineer Expert",
    issuer: "Microsoft — expected Sep 2026 (in progress)",
  },
  {
    code: "NVIDIA NCA",
    title: "NVIDIA NCA — AI Infrastructure Operations",
    issuer: "NVIDIA — in progress",
  },
  {
    code: "Claude Certified Associate",
    title: "Claude Certified Associate — Anthropic",
    issuer: "Expected Sep 2026",
  },
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA), Online",
    school: "Mangalayatan University",
    year: "Expected 2028",
    location: "India",
    meta: null as string | null,
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    school: "Dr. Babasaheb Ambedkar Marathwada University",
    year: "2023",
    location: "India",
    meta: "CGPA 8.90 / 10.0",
  },
];

export const marqueeTools = [
  "Azure",
  "Terraform",
  "Kubernetes",
  "Docker",
  "GitHub Actions",
  "Azure DevOps",
  "Jenkins",
  "GitLab CI",
  "Argo CD",
  "PowerShell",
  "Python",
  "SQL",
  "REST APIs",
  "Azure OpenAI",
  "AI Foundry",
  "MLflow",
  "DVC",
  "Prometheus",
  "Grafana",
  "Azure Monitor",
  "ServiceNow",
  "Helm",
  "Key Vault",
  "AKS",
  "Wireshark",
  "Power BI",
];

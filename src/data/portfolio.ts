export const profile = {
  firstName: "Harsh",
  lastName: "Pardhi",
  role: "Azure Cloud Engineer",
  tagline: "Azure · Cloud Operations · Automation · Terraform · AKS",
  location: "Nagpur, Maharashtra, India",
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
  availability: "Open to relocate: Bangalore, Hyderabad, Pune, Chennai",
  currentRole: "Associate Software Engineer @ Hexaware Technologies Ltd",
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
  { value: "5,000+", label: "Users migrated", note: "to Microsoft 365" },
  { value: "132", label: "Power Apps migrated", note: "+ 50 Power Automate flows" },
  { value: "20+", label: "Hours automated", note: "saved per month" },
  { value: "10", label: "Power BI reports", note: "on scheduled refresh" },
];

export const summaryParagraphs = [
  "Azure engineer with two years at Hexaware Technologies, working across cloud operations, Microsoft 365 migrations and automation for enterprise clients. Most of my work follows one pattern: something is being done manually, and it should not be. I find it, script it with PowerShell or Python, and put the output somewhere people can act on it.",
  "Microsoft Certified Azure Administrator (AZ-104), sitting AZ-400 next. I have built my Terraform, Kubernetes and CI/CD depth through a client proof of concept and self-directed projects rather than years of production ownership — and that is the gap I am actively closing.",
];

export const quickFacts = [
  { k: "Based in", v: "Nagpur, Maharashtra, India" },
  { k: "Current", v: "Hexaware Technologies Ltd · Chennai, India" },
  { k: "Focus", v: "Azure · Cloud Operations · Automation" },
  { k: "Status", v: "Open to relocate: Bangalore, Hyderabad, Pune, Chennai" },
  { k: "Timezone", v: "IST (UTC+5:30)" },
  { k: "Responds", v: "Within ~24 hours" },
];

export const currentlyBuilding = [
  {
    title: "AIOps hardening — LLM evals, token-cost alerts, responsible-AI controls",
    detail: "Strengthening model governance, cost visibility and safety checks for Azure AI workloads and automation tooling.",
  },
  {
    title: "AZ-400 (DevOps Engineer Expert) — exam scheduled September 2026",
    detail: "Deepening end-to-end DevOps execution across pipelines, IaC, governance, automation and release reliability.",
  },
  {
    title: "Terraform Associate (004) — in progress",
    detail: "Expanding Terraform depth across modules, remote state, and delivery patterns for repeatable Azure infrastructure work.",
  },
  {
    title: "Production Kubernetes depth — CKA preparation",
    detail: "Moving from project-scale AKS work toward production cluster operations, upgrades and troubleshooting.",
  },
];

export const skillGroups = [
  {
    id: "cloud",
    title: "Cloud & Infrastructure",
    blurb: "Core platform footprint.",
    tags: [
      "Microsoft Azure",
      "Azure Kubernetes Service",
      "Virtual Machines",
      "VNet",
      "Blob Storage",
      "Microsoft Entra ID",
      "Azure Monitor",
      "Log Analytics (KQL)",
      "Azure Key Vault",
      "Azure Policy",
    ],
  },
  {
    id: "devops",
    title: "DevOps & IaC",
    blurb: "Provision and ship reliably.",
    tags: [
      "Terraform",
      "Bicep",
      "Docker",
      "Kubernetes",
      "Helm",
      "Argo CD",
      "Ansible",
      "GitHub Actions",
      "Azure DevOps",
      "Git",
    ],
  },
  {
    id: "scripting",
    title: "Scripting & Automation",
    blurb: "Eliminate the manual lift.",
    tags: [
      "PowerShell",
      "Python",
      "Bash",
      "SQL",
      "REST APIs",
      "Microsoft Graph API",
      "Linux",
    ],
  },
  {
    id: "m365",
    title: "Microsoft 365 & Power Platform",
    blurb: "Client productivity and automation.",
    tags: [
      "SharePoint Online",
      "OneDrive",
      "Power Apps",
      "Power Automate",
      "Power BI",
      "Dataverse",
      "Copilot Studio",
      "ShareGate",
      "StorageX Analytics / NetApp ONTAP",
    ],
  },
  {
    id: "ai",
    title: "AI & MLOps",
    blurb: "Practical AI delivery and lifecycle work.",
    tags: [
      "Azure AI Foundry",
      "Azure OpenAI",
      "MLflow",
      "DVC",
      "RAG",
      "LLM Observability & Cost Control",
      "Prompt Engineering",
    ],
  },
  {
    id: "obs",
    title: "Observability & ITSM",
    blurb: "See what is happening and keep it moving.",
    tags: ["Prometheus", "Grafana", "Kubecost", "ServiceNow", "RBAC"],
  },
];

export const experience = [
  {
    role: "Associate Software Engineer",
    company: "Hexaware Technologies Ltd · Chennai, India",
    period: "July 2024 — Present",
    location: "Chennai, India",
    status: "Current",
    points: [
      "Migrated 5,000+ users from on-premises sites and OneDrive to Microsoft 365 using ShareGate, with 5 PowerShell scripts for discovery, permission setup, batch execution and post-migration validation.",
      "Deployed StorageX Analytics on a client server to analyse their NetApp ONTAP storage, and scripted analytics collection for 9 storage virtual machines across 2 clusters, converting the output to CSV.",
      "Delivered 10 Power BI reports on that data, one per SVM, on scheduled refresh — utilisation figures current before business hours, management always has client-ready numbers.",
      "Migrated 132 Power Apps and 50+ Power Automate flows to a new tenant for an insurance client, adding a SharePoint site and Power BI dashboard so stakeholders could track progress and raise issues directly.",
      "Built Transcend — a Power App on 5 SharePoint lists with a Copilot Studio agent and embedded Power BI — automating end-to-end project lifecycle, resource allocation, cost and milestone tracking for the internal PMO team. 20 projects onboarded; now their primary tool.",
      "Built a Terraform landing-zone proof of concept with remote state in Azure Storage for a client evaluation, and wrote the runbooks and SOPs used at handover.",
    ],
  },
];

export const projects = [
  {
    id: "01",
    name: "InfraGenie",
    status: "Personal project · AI-assisted Azure operations",
    stack: ["Python", "Terraform", "AKS", "Argo CD", "Infracost", "ServiceNow", "LLM"],
    summary:
      "AI-assisted Azure operations platform that automates Terraform reasoning, policy checks, ticketing and admin notifications for cloud requests.",
    points: [
      "Owned the architecture and infrastructure design, and built the frontend, backend and Terraform module library using AI coding agents with structured prompting and SOLID principles.",
      "On each request the assistant reuses a matching Terraform module or writes and saves a new one, runs Infracost and policy checks before apply, then logs a ServiceNow ticket and emails the admin with the audit trail.",
      "Fine-tuned Qwen2.5-Coder-7B in Google Colab and published it on Hugging Face; deployed on AKS with Argo CD for drift detection and Kubecost for node-level cost monitoring.",
    ],
    repoHref: "https://github.com/HP04Harsh/infraGenie-AI-Automation-Platform",
    modelHref: "https://huggingface.co/HP04Harsh/Qwen2.5-Coder-7B",
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
      "Deployed through a GitHub Actions plan-and-apply pipeline with manual approval; remote state with locking.",
      "Ran an end-to-end failover test and documented the observed recovery behaviour and remaining gaps.",
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
    issuer: "Microsoft · Completed · August 2026",
  },
  {
    code: "AZ-400",
    title: "Microsoft Certified: DevOps Engineer Expert",
    issuer: "Microsoft · exam scheduled September 2026",
  },
  {
    code: "Terraform Associate (004)",
    title: "Terraform Associate (004)",
    issuer: "HashiCorp — in progress",
  },
  {
    code: "Claude Certified Associate",
    title: "Claude Certified Associate — Anthropic",
    issuer: "Anthropic — in progress",
  },
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA), Online",
    school: "Mangalayatan University",
    year: "Online · Pursuing · 2025–2028",
    location: "India",
    meta: null as string | null,
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    school: "Dr. Babasaheb Ambedkar Marathwada University",
    year: "Completed · 2020–2023 · CGPA 8.90/10",
    location: "India",
    meta: "CGPA 8.90 / 10.0",
  },
];

export const marqueeTools = [
  "Microsoft Azure",
  "Azure Kubernetes Service",
  "Virtual Machines",
  "VNet",
  "Blob Storage",
  "Microsoft Entra ID",
  "Azure Monitor",
  "Log Analytics (KQL)",
  "Azure Key Vault",
  "Azure Policy",
  "Terraform",
  "Bicep",
  "Docker",
  "Kubernetes",
  "Helm",
  "Argo CD",
  "Ansible",
  "GitHub Actions",
  "Azure DevOps",
  "Git",
  "PowerShell",
  "Python",
  "Bash",
  "SQL",
  "REST APIs",
  "Microsoft Graph API",
  "Linux",
  "SharePoint Online",
  "OneDrive",
  "Power Apps",
  "Power Automate",
  "Power BI",
  "Dataverse",
  "Copilot Studio",
  "ShareGate",
  "StorageX Analytics / NetApp ONTAP",
  "Azure AI Foundry",
  "Azure OpenAI",
  "MLflow",
  "DVC",
  "RAG",
  "LLM Observability & Cost Control",
  "Prompt Engineering",
  "Prometheus",
  "Grafana",
  "Kubecost",
  "ServiceNow",
  "RBAC",
];

export const profile = {
  firstName: "Harsh",
  lastName: "Pardhi",
  role: "Azure Cloud & Automation Engineer",
  tagline: "Azure · Cloud Operations · Automation · Terraform · AKS",
  location: "Gondia, Maharashtra, India",
  timezone: "IST · UTC+5:30",
  email: "harshpardhi477@gmail.com",
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
  { value: "9", label: "Storage VMs analysed", note: "across 2 clusters" },
  { value: "10", label: "Power BI reports", note: "on scheduled refresh" },
];

export const summaryParagraphs = [
  "Azure engineer with 2+ years at Hexaware Technologies, working across cloud operations, Microsoft 365 migrations and automation for enterprise clients. Most of my work follows one pattern: something is being done manually, and it should not be. I find it, script it with PowerShell or Python, and put the output somewhere people can act on it.",
  "Microsoft Certified Azure Administrator (AZ-104), sitting AZ-400 in September. Alongside client work I design and deploy Azure infrastructure with Terraform, Docker and Kubernetes, and build internal tools on the Power Platform that teams now use daily.",
];

export const quickFacts = [
  { k: "Based in", v: "Gondia, Maharashtra, India" },
  { k: "Current", v: "Hexaware Technologies Ltd · Chennai, India" },
  { k: "Focus", v: "Azure · Cloud Operations · Automation" },
  { k: "Status", v: "Open to relocate: Bangalore, Hyderabad, Pune, Chennai" },
  { k: "Timezone", v: "IST (UTC+5:30)" },
  { k: "Responds", v: "Within ~24 hours" },
];

export const currentlyBuilding = [
  {
    title: "AZ-400 (DevOps Engineer Expert) — exam scheduled September 2026",
    detail: "Deepening pipelines, IaC, governance and release reliability across Azure DevOps and GitHub Actions.",
  },
  {
    title: "HashiCorp Terraform Associate (004) — in progress",
    detail: "Expanding module design, remote state and delivery patterns for repeatable Azure infrastructure.",
  },
  {
    title: "Production Kubernetes depth",
    detail: "Moving from project-scale AKS work toward cluster operations, upgrades and troubleshooting.",
  },
];

export const skillGroups = [
  {
    id: "cloud",
    title: "Cloud & Infrastructure",
    blurb: "Core platform footprint.",
    tags: [
      "Microsoft Azure",
      "Virtual Machines",
      "VM Scale Sets",
      "VNet",
      "NSG",
      "Load Balancer",
      "Traffic Manager",
      "Blob Storage",
      "Azure SQL",
      "Microsoft Entra ID",
      "RBAC",
      "Azure Key Vault",
      "Azure Monitor",
      "Log Analytics (KQL)",
      "Cost Management",
    ],
  },
  {
    id: "devops",
    title: "IaC & DevOps",
    blurb: "Provision and ship reliably.",
    tags: [
      "Terraform",
      "Docker",
      "Kubernetes (AKS)",
      "Argo CD",
      "Ansible",
      "GitHub Actions",
      "Azure DevOps",
      "Git",
      "CI/CD",
    ],
  },
  {
    id: "obs",
    title: "Observability",
    blurb: "See what is happening.",
    tags: [
      "Prometheus",
      "Grafana",
      "Azure Monitor",
      "Log Analytics",
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
    ],
  },
  {
    id: "m365",
    title: "Microsoft 365 & Power Platform",
    blurb: "Client productivity and automation.",
    tags: [
      "Power Apps",
      "Power Automate",
      "Power BI",
      "Copilot Studio",
      "SharePoint Online",
      "OneDrive",
      "ShareGate",
      "StorageX Analytics / NetApp ONTAP",
    ],
  },
  {
    id: "ai",
    title: "AI & MLOps",
    blurb: "Practical AI delivery.",
    tags: [
      "Azure AI Foundry",
      "Azure ML",
      "MLflow",
      "DVC",
      "Prompt Engineering",
    ],
  },
];

export const experience = [
  {
    role: "Associate Software Engineer — Cloud Operations & Microsoft 365 Administration",
    company: "Hexaware Technologies Ltd · Chennai, India",
    period: "July 2024 — Present",
    location: "Chennai, India",
    status: "Current",
    points: [
      "Migrated on-premises OneDrive data for 5,000+ users to Microsoft 365 using ShareGate, writing PowerShell scripts to provision the target sites, grant the migration team site collection administrator rights, and run the initial and delta passes.",
      "Automated the post-migration checks the same way — reconciling file counts between source and target and stripping the temporary admin rights once each site was verified — so cutovers ran overnight unsupervised.",
      "Ran the technical delivery of a storage analytics project: deployed StorageX Analytics (Data Dynamics) and used PowerShell to extract data for 9 storage virtual machines across 2 clusters into CSV.",
      "Turned that CSV into 10 Power BI reports showing which users held the most data and where ACL exposure existed, so the client could reclaim capacity and fix access. Delivered in 3 months with the reports and a written technical findings document — the client sent a formal appreciation note.",
      "Migrated 132 Power Apps and 50+ Power Automate flows to a new tenant for an insurance client, and created a SharePoint site with a Power BI dashboard so stakeholders could track progress and raise issues themselves.",
      "Built Transcend, a Power App on five SharePoint lists with a Copilot Studio agent and embedded Power BI. It is now the transformation team's primary project management tool, with 20 projects onboarded and Power Automate alerting managers on resource rolloffs and milestones.",
      "Built a Terraform landing zone with remote state in Azure Storage as a proof of concept for a client evaluation, and wrote the runbooks and SOPs their team used afterwards.",
    ],
  },
];

export const projects = [
  {
    id: "01",
    name: "InfraGenie",
    status: "Personal project · AI-assisted Azure operations",
    stack: ["Python", "Terraform", "Docker", "Ollama", "Qwen2.5-Coder", "ServiceNow"],
    summary:
      "A self-service platform for Azure infrastructure with monitoring and auto-remediation built in.",
    points: [
      "A self-service platform for Azure infrastructure. An engineer describes what they need in plain English; the platform matches the request to a reusable Terraform module and runs policy checks before anything is applied.",
      "After deployment it keeps watching the resource — it remediates common failures on its own and logs a ServiceNow ticket, so a problem is fixed and recorded rather than escalated at 2 a.m.",
      "A reporting agent publishes 10+ operational reports on a schedule — FinOps spend, weekly digest, orphaned VMs and others — so cost and drift surface before they become incidents.",
      "Kept development cost at zero by running Qwen2.5-Coder locally on Ollama in Docker as the coding assistant, wired into VS Code. Architected the platform myself and wrote it against SOLID principles with structured prompt engineering, so every generated change stayed small and reviewable.",
    ],
    repoHref: "https://github.com/HP04Harsh/infragenie-aiops",
    modelHref: "https://huggingface.co/HarshG05/InfraGenie-Azure-Expert",
  },
  {
    id: "02",
    name: "Azure Multi-Region DR",
    status: "Personal · IaC project",
    stack: ["Terraform", "Traffic Manager", "VM Scale Sets", "Azure SQL"],
    summary:
      "A two-region, three-tier Azure environment built to answer one question: if the primary region fails, how fast can the application come back?",
    points: [
      "A two-region, three-tier Azure environment built to answer one question: if the primary region fails, how fast can the application come back? Provisioned entirely in Terraform across Central and South India.",
      "VM Scale Sets serve the web and application tiers, geo-replicated Azure SQL holds the data, and Traffic Manager with Load Balancers routes traffic between regions.",
      "Written as reusable modules with remote state and locking, using an active/passive topology so standby cost stayed proportionate to the recovery target instead of doubling the estate.",
    ],
    repoHref: "https://github.com/HP04Harsh/azure-multi-region-dr-terraform",
  },
  {
    id: "03",
    name: "KubeScale-Ops",
    status: "Learning project · AKS FinOps lab",
    stack: ["AKS", "Terraform", "Prometheus", "Helm", "GitOps"],
    summary:
      "Demonstrates AKS governance, FinOps visibility and repeatable Kubernetes platform automation for operational cost control.",
    points: [
      "Built a FinOps control plane: Prometheus track spend and utilization.",
      "Managed GitOps-driven AKS delivery with Helm and a KinD validation loop for policy-safe cluster changes.",
      "Reusable Terraform modules with platform guardrails and workload validation for safe AKS delivery.",
    ],
    repoHref: "https://github.com/HP04Harsh/KubeScale-Ops",
  },
];

export const githubProjects = [
  {
    name: "InfraGenie — AI AIOps Platform",
    repo: "infragenie-aiops",
    href: "https://github.com/HP04Harsh/infragenie-aiops",
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
    tags: ["AKS", "Terraform", "Prometheus", "Helm", "GitOps"],
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
    issuer: "Microsoft · Exam scheduled September 2026",
  },
  {
    code: "Terraform Associate (004)",
    title: "HashiCorp Certified: Terraform Associate (004)",
    issuer: "HashiCorp · In progress",
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
  "Virtual Machines",
  "VM Scale Sets",
  "VNet",
  "NSG",
  "Load Balancer",
  "Traffic Manager",
  "Blob Storage",
  "Azure SQL",
  "Microsoft Entra ID",
  "RBAC",
  "Azure Key Vault",
  "Azure Monitor",
  "Log Analytics (KQL)",
  "Cost Management",
  "Terraform",
  "Docker",
  "Kubernetes (AKS)",
  "Argo CD",
  "Ansible",
  "GitHub Actions",
  "Azure DevOps",
  "Git",
  "CI/CD",
  "Prometheus",
  "Grafana",
  "PowerShell",
  "Python",
  "Bash",
  "SQL",
  "REST APIs",
  "Microsoft Graph API",
  "Power Apps",
  "Power Automate",
  "Power BI",
  "Copilot Studio",
  "SharePoint Online",
  "OneDrive",
  "ShareGate",
  "StorageX Analytics / NetApp ONTAP",
  "Azure AI Foundry",
  "Azure ML",
  "MLflow",
  "DVC",
  "Prompt Engineering",
];

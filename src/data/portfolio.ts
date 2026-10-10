export const profile = {
  firstName: "Harsh",
  lastName: "Pardhi",
  role: "Applied AI Engineer",
  tagline: "Building agentic AI & RAG platforms on Azure & AKS",
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
  currentRole: "Software Engineer @ Hexaware Technologies Ltd",
  experienceYears: "2 yrs 3 mos",
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

export const quickSummary =
  "Cloud & AI engineer at Hexaware with 2+ years building Azure infrastructure, enterprise automation, Microsoft 365 Copilots, and (increasingly) production GenAI agents on Azure. 5,000+ user migrations, two Copilot Studio agents live across 4 tenants, and a growing focus on agentic AI, RAG, MCP, and LLMOps on AKS.";

export const summaryParagraphs = [quickSummary];

export const quickFacts = [
  { k: "Based in", v: "Gondia, Maharashtra, India" },
  { k: "Current", v: "Hexaware Technologies Ltd · Chennai, India" },
  { k: "Focus", v: "Agentic AI · RAG · Azure · AKS" },
  { k: "Status", v: "Open to relocate: Bangalore, Hyderabad, Pune, Chennai" },
  { k: "Timezone", v: "IST (UTC+5:30)" },
  { k: "Responds", v: "Within ~24 hours" },
];

export const currentlyBuilding = [
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
    title: "Azure",
    blurb: "Cloud platform and services.",
    tags: [
      "Microsoft Azure",
      "Entra ID",
      "AKS",
      "VNet/NSG/Load Balancer",
      "Azure SQL",
      "Key Vault",
      "RBAC",
      "Azure OpenAI",
      "Azure AI Search",
      "Azure Monitor",
    ],
  },
  {
    id: "devops",
    title: "IaC & DevOps",
    blurb: "Provision and ship reliably.",
    tags: [
      "Terraform",
      "Docker",
      "Kubernetes",
      "Helm",
      "Argo CD",
      "Azure DevOps",
      "GitHub Actions",
      "Git",
      "CI/CD",
    ],
  },
  {
    id: "ai",
    title: "GenAI & Agents",
    blurb: "Agent workflows and retrieval.",
    tags: [
      "Azure OpenAI",
      "Copilot Studio",
      "LangChain",
      "LangGraph",
      "MCP",
      "RAG",
      "Ollama",
      "FastAPI",
    ],
  },
  {
    id: "obs",
    title: "Observability",
    blurb: "See what is happening.",
    tags: [
      "Prometheus",
      "Grafana",
      "OpenTelemetry",
      "Log Analytics (KQL)",
    ],
  },
  {
    id: "scripting",
    title: "Scripting",
    blurb: "Eliminate the manual lift.",
    tags: ["PowerShell", "Python", "Bash", "Azure CLI", "REST APIs", "Microsoft Graph API"],
  },
  {
    id: "m365",
    title: "Microsoft 365",
    blurb: "Client productivity and automation.",
    tags: ["SharePoint Online", "Power Apps", "Power Automate", "Power BI"],
  },
];

const hexawareExperience = [
  "Migrated on-premises OneDrive data for 5,000+ users to Microsoft 365 using ShareGate, writing PowerShell scripts to provision the target sites, grant the migration team site collection administrator rights, and run the initial and delta passes.",
  "Automated the post-migration checks the same way — reconciling file counts between source and target and stripping the temporary admin rights once each site was verified — so cutovers ran overnight unsupervised.",
  "Ran the technical delivery of a storage analytics project: deployed StorageX Analytics (Data Dynamics) and used PowerShell to extract data for 9 storage virtual machines across 2 clusters into CSV.",
  "Turned that CSV into 10 Power BI reports showing which users held the most data and where ACL exposure existed, so the client could reclaim capacity and fix access. Delivered in 3 months with the reports and a written technical findings document — the client sent a formal appreciation note.",
  "Migrated 132 Power Apps and 50+ Power Automate flows to a new tenant for an insurance client, and created a SharePoint site with a Power BI dashboard so stakeholders could track progress and raise issues themselves.",
  "Built Transcend, a Power App on five SharePoint lists with a Copilot Studio agent and embedded Power BI. It is now the transformation team's primary project management tool, with 20 projects onboarded and Power Automate alerting managers on resource rolloffs and milestones.",
  "Built a Terraform landing zone with remote state in Azure Storage as a proof of concept for a client evaluation, and wrote the runbooks and SOPs their team used afterwards.",
];

export const experience = [
  {
    role: "Software Engineer",
    company: "Hexaware Technologies Ltd · Chennai, India",
    period: "October 2026 — Present",
    location: "Chennai, India",
    status: "Current",
    points: [
      "Deployed two production Copilot Studio agents (L1 Support + PMO) grounded in SharePoint FAQs with automated ticket creation and real-time migration dashboards — live across four merging tenants.",
      "Extending InfraGenie toward LangGraph agents, MCP tool servers, and AKS deployment while building GenAI platform skills.",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "Hexaware Technologies Ltd · Chennai, India",
    period: "July 2024 — October 2026",
    location: "Chennai, India",
    status: "Previous",
    points: hexawareExperience,
  },
];

export const projects = [
  {
    id: "01",
    name: "InfraGenie — AIOps Platform for Azure",
    status: "Live demo · multi-agent Azure operations",
    stack: ["Azure", "Terraform", "React", "Node.js", "FastAPI", "AI agents"],
    summary:
      "An AI-native Azure operations platform: specialist agents help provision, monitor, troubleshoot, secure, and optimize cloud resources through natural-language workflows.",
    points: [
      "A specialist agent team covers Azure provisioning plans, observability, incident troubleshooting, FinOps recommendations, policy checks, executive reports, and ITSM workflows.",
      "The platform combines a React frontend, Node.js/Express orchestration, FastAPI services, and MongoDB/Redis-backed services in a Docker Compose architecture.",
      "InfraGenie-Azure-Expert, a fine-tuned Qwen model, supports infrastructure-focused agent routing and Terraform configuration generation, alongside NVIDIA NIM and Google Gemini integrations.",
      "The project documents real Azure provisioning behavior: without configured Azure credentials, deployment requests return an explicit error rather than claiming resources were created.",
    ],
    repoHref: "https://github.com/HP04Harsh/infragenie-aiops",
    demoHref: "https://infragenie-ai.vercel.app/",
    modelHref: "https://huggingface.co/HarshG05/InfraGenie-Azure-Expert",
    inProgress: false,
  },
  {
    id: "05",
    name: "Smart Search & Analyzer",
    status: "Live demo · bring your own Groq key",
    stack: ["JavaScript", "Vite", "PDF.js", "fflate", "Groq API", "Vercel"],
    summary:
      "A private, browser-based AI workspace for asking questions, analyzing PDF and DOCX documents, and understanding images with Groq.",
    points: [
      "Chat with a Groq multimodal model and get answers rendered with readable formatting for headings, lists, links, and code.",
      "Extract selectable text from PDF and DOCX files in the browser, preview the content, then ask questions or request a summary.",
      "Upload PNG or JPEG images for visual questions, or capture a webcam frame and ask the model to describe it.",
      "Recent conversation history is stored in the current browser. Visitors connect their own Groq API key; scanned PDFs are not OCR-processed.",
    ],
    repoHref: "https://github.com/HP04Harsh/Smart-Search-Analyzer",
    demoHref: "https://smart-search-analyzer.vercel.app/",
    inProgress: false,
  },
  {
    id: "02",
    name: "Azure Multi-Region Disaster Recovery",
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
    inProgress: false,
  },
  {
    id: "03",
    name: "KubeScale-Ops — AKS Governance & FinOps",
    status: "GitOps · monitoring ready",
    stack: ["AKS", "Terraform", "Prometheus", "Helm", "GitOps"],
    summary:
      "Demonstrates AKS governance, FinOps visibility and repeatable Kubernetes platform automation for operational cost control.",
    points: [
      "Built a FinOps control plane: Prometheus track spend and utilization.",
      "Managed GitOps-driven AKS delivery with Helm and a KinD validation loop for policy-safe cluster changes.",
      "Reusable Terraform modules with platform guardrails and workload validation for safe AKS delivery.",
    ],
    repoHref: "https://github.com/HP04Harsh/KubeScale-Ops",
    inProgress: false,
  },
  {
    id: "04",
    name: "k8s-sec-observability",
    status: "AKS security · observability",
    stack: ["AKS", "Terraform", "Kyverno", "Istio", "Grafana"],
    summary:
      "Automated AKS deployment with Terraform, hardened by Kyverno and wired into an observability stack for metrics and tracing.",
    points: [
      "Automated AKS deployment with Terraform, hardened by Kyverno and wired into an observability stack for metrics and tracing.",
    ],
    repoHref: "https://github.com/HP04Harsh/k8s-sec-observability",
    inProgress: false,
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
    code: "AZ-900",
    title: "Azure Fundamentals",
    issuer: "Mar 2025",
    state: "earned",
  },
  {
    code: "AZ-104",
    title: "Azure Administrator Associate",
    issuer: "Earned",
    state: "earned",
  },
  {
    code: "Terraform Associate (004)",
    title: "HashiCorp Terraform Associate (004)",
    issuer: "In Progress",
    state: "in-progress",
  },
  {
    code: "AZ-400",
    title: "DevOps Engineer Expert",
    issuer: "Planned (Nov 2026)",
    state: "planned",
  },
  {
    code: "AI-103",
    title: "Azure AI Apps and Agents Developer Associate",
    issuer: "Planned",
    state: "planned",
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
  "Entra ID",
  "AKS",
  "Azure OpenAI",
  "Azure AI Search",
  "Azure SQL",
  "RBAC",
  "Key Vault",
  "Azure Monitor",
  "Terraform",
  "Docker",
  "Kubernetes",
  "Helm",
  "Argo CD",
  "GitHub Actions",
  "Azure DevOps",
  "Git",
  "CI/CD",
  "LangChain",
  "LangGraph",
  "MCP",
  "RAG",
  "Ollama",
  "Prometheus",
  "Grafana",
  "OpenTelemetry",
  "Log Analytics (KQL)",
  "PowerShell",
  "Python",
  "Bash",
  "Azure CLI",
  "REST APIs",
  "Microsoft Graph API",
  "SharePoint Online",
  "Power Apps",
  "Power Automate",
  "Power BI",
  "Copilot Studio",
];
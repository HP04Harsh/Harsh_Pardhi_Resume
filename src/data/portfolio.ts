export const profile = {
  firstName: "Harsh",
  lastName: "Pardhi",
  role: "Cloud Platform Engineer",
  tagline: "Azure · Kubernetes · Terraform · CI/CD · GenAIOps",
  location: "India",
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
  availability: "Open to new opportunities",
  currentRole: "Software Engineer @ Hexaware Technologies",
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
  "Cloud Platform Engineer with two years of hands-on experience at Hexaware Technologies, working across Azure cloud operations, Microsoft 365 and on-premises-to-cloud migration support. I build the plumbing that lets teams ship — PowerShell automation, SharePoint and storage analytics, Power BI dashboards and Power Platform workflows that replace repetitive manual work with reliable, observable systems.",
  "Microsoft-certified in Azure Administration (AZ-104) and Azure Fundamentals (AZ-900), with AZ-400 (DevOps Engineer Expert) and Anthropic Claude certification in progress (Sep 2026). Hands-on platform experience across Terraform, Docker, Kubernetes, CI/CD (GitHub Actions, Jenkins, GitLab CI, Azure DevOps, Argo CD), Python, SQL, Azure AI Foundry and GenAIOps delivery. I focus on resilient infrastructure, secure deployment workflows, observability and the production engineering needed to run AI workloads reliably.",
];

export const quickFacts = [
  { k: "Based in", v: "India" },
  { k: "Current", v: "Hexaware Technologies" },
  { k: "Focus", v: "Azure · GenAIOps · Platform Engineering" },
  { k: "Status", v: "Open to opportunities" },
  { k: "Timezone", v: "IST (UTC+5:30)" },
  { k: "Responds", v: "Within ~24 hours" },
];

export const currentlyBuilding = [
  {
    title: "AWS core + Terraform-on-AWS",
    detail: "Building account structure, secure provisioning and drift-aware automation for multi-account AWS platform.",
  },
  {
    title: "RAG/LiteLLM on Foundry",
    detail: "Designing a retrieval-augmented assistant for operational knowledge and lightweight model inference on Azure AI Foundry.",
  },
  {
    title: "DNS deep-dive",
    detail: "Researching edge, private DNS and multi-region name resolution for resilient platform design.",
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
      "AWS (EC2 · S3 · VPC · EKS)",
      "CloudWatch",
      "VM compute / VMSS",
      "Azure Monitor",
      "Microsoft Entra ID",
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
      "Ansible",
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
    title: "AI / GenAI Ops",
    blurb: "Operationalizing generated intelligence.",
    tags: [
      "Azure OpenAI",
      "AI Foundry",
        "RAG",
        "LiteLLM",
        "Azure ML",
      "vLLM (serving)",
      "LLM evals (CI gate)",
      "Responsible AI / content filters",
      "Model serving",
      "LLM observability",
      "Copilot Studio",
      "AI platform operations",
    ],
  },
  {
    id: "auto",
    title: "Automation & Data",
    blurb: "Kill the manual steps.",
    tags: [
      "Python",
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
      "Datadog",
      "ServiceNow (ITSM)",
      "tcpdump / dig",
      "Cloud governance",
      "Incident response",
    ],
  },
];

export const experience = [
  {
    role: "Software Engineer",
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
    status: "Personal · GenAIOps",
    stack: ["Python", "Azure", "Terraform", "ServiceNow", "HF model link"],
    summary:
      "A GenAIOps assistant that translates intent into Azure provisioning actions, supports seven personas, and includes 24x7 auto-heal with ServiceNow integration.",
    points: [
      "Rewrote InfraGenie for seven operational personas, letting engineers, support, secops and platform owners drive infrastructure intent safely.",
      "Built 24x7 auto-heal workflows that detect drift and reopen ServiceNow tickets for corrective action and governance review.",
      "Linked inference to a hosted HF model endpoint — a Qwen2.5-Code-7B I fine-tuned via SFT on Colab and published as InfraGenie-Azure-Expert — and enforced human-in-the-loop validation for production-ready provisioning requests.",
    ],
  },
  {
    id: "02",
    name: "Azure Multi-Region DR",
    status: "Production-ready",
    stack: ["Azure", "Terraform", "Traffic Manager", "VM Scale Sets", "Geo-replication"],
    summary:
      "A multi-region Azure disaster recovery platform with active-passive failover, traffic routing and infrastructure continuity across recovery zones.",
    points: [
      "Designed multi-region DR architecture using Traffic Manager, storage geo-replication and region-aware failover workflows.",
      "Automated Azure infrastructure provisioning with Terraform to reduce recovery build time and improve DR runbook reliability.",
      "Validated active-passive failover paths and documented post-failover recovery procedures for cross-team handover.",
    ],
  },
  {
    id: "03",
    name: "KubeScale-Ops",
    status: "Kubernetes platform",
    stack: ["AKS", "Terraform", "Kubecost", "Prometheus", "Ansible", "Helm", "GitOps"],
    summary:
      "A Kubernetes platform automation stack for scale-aware operations, secure policy, and unified metrics for cloud-native application delivery.",
    points: [
      "Built a FinOps control plane: Kubecost and Prometheus track spend and utilization — flagged ~20% reclaimable spend via rightsizing.",
      "Ansible executes automated self-healing for common cluster issues; all manifests are GitOps-managed with Helm and a KinD test loop.",
      "Reusable Terraform modules with policy-based workload validation for safe AKS delivery.",
    ],
  },
  {
    id: "04",
    name: "RAG assistant on AKS",
    status: "In progress · Oct 2026",
    stack: ["AKS", "RAG", "LiteLLM", "Azure AI Foundry"],
    summary:
      "Building a retrieval-augmented generation assistant on AKS to surface operational knowledge and lightweight model inference for platform teams.",
    points: [
      "Designing an AKS-based RAG service that combines internal documentation and runtime telemetry for cloud ops support.",
      "Evaluating LiteLLM and Azure AI Foundry deployment patterns to keep inference efficient while preserving reliability.",
      "Focusing on secure data access, prompt engineering and transparent model observability as part of the MVP.",
    ],
  },
];

export const githubProjects = [
  {
    name: "infraGenie — AI AIOps Platform",
    repo: "infragenie-aiops",
    href: "https://github.com/HP04Harsh/infragenie-aiops",
    lang: "Python",
    desc: "AI automation platform for cloud provisioning, service incident orchestration, and intelligent remediation workflows.",
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
    tags: ["AKS", "Terraform", "Kubecost", "Prometheus", "Ansible", "Helm", "GitOps"],
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
    desc: "Professional Azure CI/CD framework combining Terraform infrastructure-as-code with Azure DevOps build and release pipelines.",
    tags: ["Azure", "Terraform", "CI/CD", "Azure DevOps"],
  },
  {
    name: "React-azure-pipeline-mastery",
    repo: "React-azure-pipeline-mastery",
    href: "https://github.com/HP04Harsh/React-azure-pipeline-mastery",
    lang: "JavaScript",
    desc: "Production-ready React CI/CD template with GitHub Actions and Azure App Service deployment automation.",
    tags: ["React", "Azure", "CI/CD", "GitHub Actions"],
  },
  {
    name: "No-code-terraform-deployer",
    repo: "No-code-terraform-deployer",
    href: "https://github.com/HP04Harsh/No-code-terraform-deployer",
    lang: "Terraform",
    desc: "Automated Terraform provisioning pipeline with Power App and Power Automate integration for non-technical workflow owners.",
    tags: ["Terraform", "Azure", "Automation", "Power Platform"],
  },
  {
    name: "k8s-fullstack-ingress",
    repo: "k8s-fullstack-ingress",
    href: "https://github.com/HP04Harsh/k8s-fullstack-ingress",
    lang: "Kubernetes",
    desc: "Full-stack Kubernetes deployment template with automated ingress routing, observability, and scalable app delivery.",
    tags: ["Kubernetes", "Ingress", "Full-stack", "Observability"],
  },
];

export const certifications = [
  {
    code: "AZ-104",
    title: "Microsoft Certified: Azure Administrator Associate",
    issuer: "Microsoft",
  },
  {
    code: "AZ-900",
    title: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
  },
  {
    code: "AZ-400",
    title: "Microsoft Certified: DevOps Engineer Expert",
    issuer: "Microsoft (in progress)",
  },
  {
    code: "Claude Certified Associate",
    title: "Anthropic Claude Certification",
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
  "PowerShell",
  "Python",
  "Azure OpenAI",
  "AI Foundry",
  "Prometheus",
  "Grafana",
  "Power BI",
  "Helm",
  "Key Vault",
  "ArgoCD",
  "SharePoint",
  "SQL",
  "Jenkins",
  "GitLab CI",
  "Ansible",
  "Datadog",
  "LiteLLM",
  "vLLM",
];

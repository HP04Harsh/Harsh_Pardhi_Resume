export const profile = {
  firstName: "Harsh",
  lastName: "Pardhi",
  role: "Cloud Platform Engineer",
  tagline: "Azure DevOps · MLOps & AI Infrastructure",
  location: "India",
  timezone: "IST · UTC+5:30",
  email: "harshpardhi499@gmail.com",
  phone: "+91 95296 67349",
  phoneHref: "tel:+919529667349",
  website: "harsh-pardhi.vercel.app",
  websiteHref: "https://harsh-pardhi.vercel.app",
  github: "github.com/HP04Harsh",
  githubHref: "https://github.com/HP04Harsh",
  availability: "Open to new opportunities",
  currentRole: "Software Engineer @ Hexaware Technologies",
  experienceYears: "2+",
};

export const nav = [
  { id: "home", label: "Overview", index: "01" },
  { id: "about", label: "Profile", index: "02" },
  { id: "skills", label: "Stack", index: "03" },
  { id: "experience", label: "Experience", index: "04" },
  { id: "projects", label: "Projects", index: "05" },
  { id: "certs", label: "Certifications", index: "06" },
  { id: "education", label: "Education", index: "07" },
  { id: "contact", label: "Contact", index: "08" },
];

export const stats = [
  { value: "2+", label: "Years shipping", note: "cloud platforms" },
  { value: "02", label: "Microsoft certs", note: "AZ-104 · AI-300" },
  { value: "05", label: "Skill domains", note: "cloud → MLOps" },
  { value: "24h", label: "Reply window", note: "usually faster" },
];

export const summaryParagraphs = [
  "Cloud Platform Engineer with two years of hands-on experience at Hexaware Technologies, working across Azure cloud operations, Microsoft 365 and on-premises-to-cloud migration support. I build the plumbing that lets teams ship — PowerShell automation, SharePoint and storage analytics, Power BI dashboards and Power Platform workflows that replace repetitive manual work with reliable, observable systems.",
  "Microsoft-certified in Azure Administration (AZ-104) and Azure MLOps (AI-300), with practical project experience in Terraform, Docker, Kubernetes, CI/CD, Python, SQL, Azure Machine Learning, MLflow and Azure AI Foundry. My focus is dependable cloud infrastructure, deployment automation, observability and the platform engineering required to run AI workloads in production.",
];

export const quickFacts = [
  { k: "Based in", v: "India" },
  { k: "Current", v: "Hexaware Technologies" },
  { k: "Focus", v: "Azure · DevOps · MLOps" },
  { k: "Status", v: "Open to opportunities" },
  { k: "Timezone", v: "IST (UTC+5:30)" },
  { k: "Responds", v: "Within ~24 hours" },
];

export const skillGroups = [
  {
    id: "cloud",
    title: "Cloud & AI Platforms",
    blurb: "Where the workloads live.",
    tags: [
      "Microsoft Azure",
      "Azure Machine Learning",
      "Azure AI Foundry",
      "Azure OpenAI",
      "Azure Kubernetes Service",
      "Azure Compute",
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
      "Git Actions",
      "Azure DevOps",
      "Power Automate",
      "Docker",
      "Kubernetes",
      "Helm",
      "ArgoCD",
      "Azure CLI",
      "PowerShell",
    ],
  },
  {
    id: "mlops",
    title: "MLOps & AI Ops",
    blurb: "Models, tracked and served.",
    tags: [
      "MLflow, DVC",
      "Model packaging",
      "Experiment tracking",
      "Model deployment workflows",
      "Model lifecycle",
      "Copilot Studio",
      "LangChain",
    ],
  },
  {
    id: "auto",
    title: "Automation & Data",
    blurb: "Kill the manual steps.",
    tags: [
      "Python",
      "SQL",
      "SharePoint",
      "Power Apps",
      "Power BI",
      "Microsoft 365",
      "Microsoft Excel",
      "CSV / report automation",
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
      "Kyverno",
      "Prometheus",
      "Grafana",
      "Cloud governance",
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
      "Performed Azure cloud administration covering resource operations, access-related tickets, troubleshooting and technical documentation in enterprise environments.",
      "Executed on-premises-to-cloud and Microsoft 365 migration activities using ShareGate and PowerShell — migration preparation, validation and operational follow-up.",
      "Automated SharePoint and storage-analytics activities with PowerShell, converting repetitive manual steps into repeatable operational workflows.",
      "Developed storage-analytics reports and Power BI dashboards using SharePoint, Excel and consolidated CSV data to surface usage and operational trends.",
      "Implemented internal workflow automation and business-process reporting using Power Apps and the Microsoft Power Platform.",
      "Applied Python and SQL for data preparation and ML model reliability; applied Azure Machine Learning, Azure AI Foundry and Copilot tools to AI-assisted workflows and model lifecycle, deployment and monitoring concepts.",
      "Partnered with project teams on technical documentation, issue analysis, operational handover and troubleshooting across cloud and automation activities.",
    ],
  },
];

export const projects = [
  {
    id: "01",
    name: "Secure Kubernetes Observability Platform",
    status: "Production-grade",
    stack: ["Terraform", "AKS", "Kubernetes", "Helm", "Kyverno", "Prometheus", "Grafana"],
    summary:
      "An AKS-based Kubernetes environment provisioned with Terraform, hardened with policy and wired end-to-end for metrics, dashboards and distributed tracing.",
    points: [
      "Provisioned an AKS-based Kubernetes environment with Terraform and documented remote-state management using Azure Storage and Key Vault.",
      "Implemented Kyverno policies for workload and container-security checks, and packaged platform components with Helm.",
      "Configured Prometheus, Grafana and OpenTelemetry components to practise metrics, dashboards and distributed-tracing workflows; documented Istio integration considerations.",
    ],
  },
  {
    id: "02",
    name: "InfraGenie — NL Azure Provisioning Assistant",
    status: "Personal · AI",
    stack: ["Azure", "Terraform", "Python", "Azure OpenAI", "LangChain"],
    summary:
      "A proof-of-concept assistant that converts natural-language infrastructure requests into Terraform-oriented Azure provisioning workflows, guarded by validation and human-in-the-loop approval.",
    points: [
      "Built a proof-of-concept assistant that converts natural-language infrastructure requests into Terraform-oriented Azure provisioning workflows.",
      "Implemented Python orchestration, request validation and governance guardrails to reduce unsafe or incomplete provisioning requests.",
      "Documented the architecture, authentication considerations, limitations and security boundaries of the personal project.",
    ],
  },
];

export const githubProjects = [
  {
    name: "infraGenie — AI Automation Platform",
    repo: "infraGenie-AI-Automation-Platform",
    href: "https://github.com/HP04Harsh/infraGenie-AI-Automation-Platform",
    lang: "Python",
    desc: "AI-powered infra automation bridging natural-language intent with Terraform deployments, ServiceNow ITSM integration and real-time Infracost estimation.",
    tags: ["AI", "Terraform", "ServiceNow", "Infracost"],
  },
  {
    name: "K8s Security & Observability",
    repo: "k8s-sec-observability",
    href: "https://github.com/HP04Harsh/k8s-sec-observability",
    lang: "HCL",
    desc: "Automated AKS deployment with Terraform, secured by Kyverno policies and wired to an Istio-based observability stack — OpenTelemetry, Jaeger and Grafana.",
    tags: ["AKS", "Kyverno", "Istio", "Grafana"],
  },
  {
    name: "Secure Ops Terraform",
    repo: "secure-ops-terraform",
    href: "https://github.com/HP04Harsh/secure-ops-terraform",
    lang: "HCL",
    desc: "End-to-end Terraform, Ansible and CI/CD template for deploying secure Azure infrastructure with multi-region resiliency.",
    tags: ["Terraform", "Ansible", "CI/CD", "Azure"],
  },
  {
    name: "Azure Multi-Region DR",
    repo: "azure-multi-region-dr-terraform",
    href: "https://github.com/HP04Harsh/azure-multi-region-dr-terraform",
    lang: "HCL",
    desc: "Production-ready multi-region Azure infrastructure with active-passive Disaster Recovery — Traffic Manager routing, VM Scale Sets and geo-replication.",
    tags: ["Azure", "Terraform", "DR", "Traffic Manager"],
  },
  {
    name: "Enterprise DevSecOps GitOps Platform",
    repo: "enterprise-devsecops-gitops-platform",
    href: "https://github.com/HP04Harsh/enterprise-devsecops-gitops-platform",
    lang: "JavaScript",
    desc: "Cloud-native DevSecOps and GitOps monorepo with automated CI/CD safety gating, vulnerability scanning and declarative continuous delivery via GitHub Actions.",
    tags: ["DevSecOps", "GitOps", "CI/CD", "Security"],
  },
];

export const certifications = [
  {
    code: "AZ-104",
    title: "Microsoft Certified: Azure Administrator Associate",
    issuer: "Microsoft",
  },
  {
    code: "AI-300",
    title: "Microsoft Certified: Machine Learning Operations Engineer Associate",
    issuer: "Microsoft",
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
  "MLflow",
  "Azure OpenAI",
  "LangChain",
  "Prometheus",
  "Grafana",
  "Power BI",
  "Helm",
  "Key Vault",
  "ArgoCD",
  "SharePoint",
  "SQL",
];

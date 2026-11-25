export const profile = {
  firstName: "Harsh",
  lastName: "Pardhi",
  role: "Applied AI Engineer",
  tagline: "I build AI assistants and agents on Azure and Microsoft 365.",
  location: "Chennai, India",
  email: "harshpardhi477@gmail.com",
  phone: "+91 95296 67349",
  phoneHref: "tel:+919529667349",
  website: "harsh-pardhi.vercel.app",
  websiteHref: "https://harsh-pardhi.vercel.app",
  github: "github.com/HP04Harsh",
  githubHref: "https://github.com/HP04Harsh",
  linkedin: "linkedin.com/in/harsh-pardhi",
  linkedinHref: "https://www.linkedin.com/in/harsh-pardhi",
  availability: "Open to relocate: Bengaluru, Hyderabad, Pune, Chennai, Remote",
  currentRole: "Software Engineer @ Hexaware Technologies",
  experienceYears: "2+ years",
};

export const nav = [
  { id: "home", label: "Overview", index: "01" },
  { id: "about", label: "Profile", index: "02" },
  { id: "experience", label: "Experience", index: "03" },
  { id: "projects", label: "Projects", index: "04" },
  { id: "skills", label: "Stack", index: "05" },
  { id: "certs", label: "Certifications", index: "06" },
  { id: "education", label: "Education", index: "07" },
  { id: "building", label: "Documents", index: "08" },
  { id: "contact", label: "Contact", index: "09" },
];

export const stats = [
  { value: "2", label: "Production assistants", note: "Copilot Studio" },
  { value: "40+", label: "Projects onboarded", note: "project onboarding platform" },
  { value: "3", label: "Power BI dashboards", note: "project onboarding platform" },
  { value: "5,000+", label: "Users migrated", note: "OneDrive to Microsoft 365" },
];

export const quickSummary =
  "Software Engineer with 2+ years of experience building AI assistants and workflow automation on Azure and Microsoft 365. Deployed 2 production Copilot Studio assistants that cut support response time and leadership reporting effort. Builds RAG applications and AI agents with Python, FastAPI, LangChain, LangGraph, Qdrant and Azure OpenAI, and deploys them on Azure with Docker, Kubernetes and Terraform. Targeting Applied AI Engineer roles.";

export const summaryParagraphs = [quickSummary];

export const quickFacts = [
  { k: "Location", v: "Chennai, India" },
  { k: "Role", v: "Software Engineer · Hexaware Technologies" },
  { k: "Experience", v: "2+ years" },
  { k: "Focus", v: "AI assistants · Workflow automation" },
  { k: "Target role", v: "Applied AI Engineer" },
  { k: "Relocation", v: "Bengaluru · Hyderabad · Pune · Chennai · Remote" },
];

export const skillGroups = [
  {
    id: "ai",
    title: "AI & LLMs",
    blurb: "Generative AI and language-model applications.",
    tags: [
      "Generative AI",
      "LLM Applications",
      "RAG",
      "AI Agents",
      "Prompt Engineering",
      "Embeddings",
      "MCP",
    ],
  },
  {
    id: "frameworks",
    title: "Frameworks & Platforms",
    blurb: "Tools for language-model and search applications.",
    tags: [
      "LangChain",
      "LangGraph",
      "LangSmith",
      "Qdrant",
      "Groq",
      "Azure OpenAI",
      "Azure AI Foundry",
      "Azure AI Search",
      "Copilot Studio",
    ],
  },
  {
    id: "cloud",
    title: "Programming & Cloud",
    blurb: "Programming, cloud infrastructure, and delivery.",
    tags: [
      "Python",
      "FastAPI",
      "REST APIs",
      "MongoDB",
      "Bash",
      "PowerShell",
      "Git",
      "Azure",
      "Docker",
      "Kubernetes (AKS)",
      "Terraform",
      "Azure DevOps",
      "Linux",
    ],
  },
  {
    id: "automation",
    title: "Automation & BI",
    blurb: "Microsoft 365 workflow automation and reporting.",
    tags: ["Power Automate", "Power Apps", "Power BI", "SharePoint Online"],
  },
];

export const experience = [
  {
    role: "Software Engineer",
    company: "Hexaware Technologies",
    period: "Jul 2024 - Present",
    location: "Chennai, India",
    status: "Current",
    points: [
      "Deployed 2 production Copilot Studio assistants: migration support (average response time for troubleshooting help down 60-70%) and PMO reporting (leadership effort down 30-40%).",
      "Built 15-20+ Power Automate workflows that ran the full user-migration journey across multiple Microsoft 365 tenants.",
      "Built a project onboarding platform (Power Apps, SharePoint, Power Automate, Power BI): 40+ projects, 3 Power BI dashboards.",
      "Analysed 10TB+ across 2 NetApp ONTAP clusters and delivered 9 Power BI reports.",
      "Migrated on-premises OneDrive for Business sites to Microsoft 365 for 5,000+ users.",
    ],
  },
];

export const projects = [
  {
    id: "01",
    name: "InfraGenie",
    status: "Live demo · Azure operations assistant",
    stack: ["Python", "FastAPI", "React", "MongoDB", "Docker", "Terraform"],
    summary: "A multi-agent assistant for Azure operations.",
    points: [
      "One router agent and eight specialist agents turn plain-English requests into Azure plans, monitoring, troubleshooting, cost and policy checks.",
      "Shows cost estimates and policy checks before any change, says clearly when credentials are missing, and raises ServiceNow tickets with root-cause reports.",
    ],
    repoHref: "https://github.com/HP04Harsh/infragenie-aiops",
    demoHref: "https://infragenie-ai.vercel.app",
  },
  {
    id: "02",
    name: "PDF RAG API",
    status: "Source available",
    stack: ["Python", "FastAPI", "Qdrant", "Groq", "LangChain", "Redis Queue", "Docker"],
    summary:
      "Chunks PDFs (1,000 chars, 500 overlap), embeds with all-MiniLM-L6-v2, stores in Qdrant, and answers with a Groq-hosted LLM.",
    points: [
      "Splits PDFs into 1,000-character chunks with 500-character overlap and embeds them with all-MiniLM-L6-v2.",
      "Stores vectors in Qdrant and sends retrieved chunks to a Groq-hosted LLM to answer questions.",
      "A Redis Queue worker runs requests in the background.",
    ],
    repoHref: "https://github.com/HP04Harsh/qdrant-groq-rag-api",
  },
  {
    id: "03",
    name: "Smart Search & Analyzer",
    status: "Live demo · documents and images",
    stack: ["JavaScript", "Vite", "Python", "Groq API"],
    summary: "Answers questions about PDF, DOCX and images using a Groq-hosted LLM.",
    points: [
      "Answers questions about PDF, DOCX and images, including photos taken live with a webcam.",
      "Each user brings their own API key, so no shared key is stored; recent chats are saved for each session.",
    ],
    repoHref: "https://github.com/HP04Harsh/Smart-Search-Analyzer",
    demoHref: "https://smart-search-analyzer.vercel.app",
  },
  {
    id: "04",
    name: "LangGraph Workflows",
    status: "Source available",
    stack: ["LangGraph", "Groq", "MongoDB"],
    summary: "LangGraph workflows with conditional routing and MongoDB checkpointing.",
    points: [
      "Explores conditional routing in LangGraph workflows and checkpointing state in MongoDB.",
    ],
    repoHref: "https://github.com/HP04Harsh/langgraph-workflows-lab",
  },
];

export const githubProjects = [
  {
    name: "FastAPI-Projects",
    repo: "FastAPI-Projects",
    href: "https://github.com/HP04Harsh/FastAPI-Projects",
    desc: "13 APIs with SQLite, MongoDB and API-key authentication.",
    tags: ["Python", "FastAPI", "SQLite", "MongoDB", "API-key authentication"],
  },
  {
    name: "k8s-sec-observability",
    repo: "k8s-sec-observability",
    href: "https://github.com/HP04Harsh/k8s-sec-observability",
    desc: "Azure infrastructure and an Istio-based observability stack.",
    tags: ["Azure", "Terraform", "Istio", "OpenTelemetry", "Jaeger", "Grafana"],
  },
  {
    name: "azure-multi-region-dr-terraform",
    repo: "azure-multi-region-dr-terraform",
    href: "https://github.com/HP04Harsh/azure-multi-region-dr-terraform",
    desc: "Terraform project for Azure multi-region disaster recovery.",
    tags: ["Azure", "Terraform", "Traffic Manager", "VM Scale Sets", "Azure SQL"],
  },
  {
    name: "KubeScale-Ops",
    repo: "KubeScale-Ops",
    href: "https://github.com/HP04Harsh/KubeScale-Ops",
    desc: "Kubernetes cost optimization in a local KinD environment.",
    tags: ["KinD", "Kubecost", "Prometheus", "Grafana", "Ansible"],
  },
  {
    name: "Azure-Devops-Pipeline",
    repo: "Azure-Devops-Pipeline",
    href: "https://github.com/HP04Harsh/Azure-Devops-Pipeline",
    desc: "Azure DevOps pipeline project.",
    tags: ["Azure", "Azure DevOps", "Terraform"],
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
    issuer: "Nov 2026",
    state: "earned",
  },
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA), Online",
    school: "Mangalayatan University",
    year: "2026–2028 · Online",
    location: "",
    meta: null as string | null,
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    school: "Dr. Babasaheb Ambedkar Marathwada University",
    year: "2020–2023",
    location: "",
    meta: "CGPA 8.90/10",
  },
];

export const marqueeTools = [
  "Generative AI",
  "LLM Applications",
  "RAG",
  "AI Agents",
  "Prompt Engineering",
  "Embeddings",
  "MCP",
  "LangSmith",
  "LangGraph",
  "LangChain",
  "Qdrant",
  "Groq",
  "Azure OpenAI",
  "Azure AI Foundry",
  "Azure AI Search",
  "Copilot Studio",
  "Python",
  "FastAPI",
  "REST APIs",
  "MongoDB",
  "Bash",
  "PowerShell",
  "Git",
  "Azure",
  "Docker",
  "Kubernetes (AKS)",
  "Terraform",
  "Azure DevOps",
  "Linux",
  "Power Automate",
  "Power Apps",
  "Power BI",
  "SharePoint Online",
];

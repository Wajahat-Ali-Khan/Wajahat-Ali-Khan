// Systems Profile & Credentials Atlas — verified data layer.
// Source priority: Resume > LinkedIn > GitHub.
// Do not add conflicting LinkedIn entries (e.g. Cigna "Current" not in resume).
// Unavailable fields (email) are omitted entirely, never fabricated.

export const PROFILE_SECTION_ID = "profile";

export interface SkillGroup {
  id: string;
  label: string;
  skills: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issued: string;
  credentialUrl?: string;
}

export interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
}

export interface EmploymentEntry {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  order: number;
  highlights: string[];
  relatedProjectId?: string;
}

export interface FeaturedProject {
  id: string;
  title: string;
  role: string;
  bullets: string[];
  relatedSkills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: "languages",
    label: "Languages",
    skills: ["Python", "JavaScript", "SQL", "HTML/CSS", "Bash"],
  },
  {
    id: "frameworks",
    label: "Frameworks",
    skills: ["Django", "DRF", "FastAPI", "Flask", "Angular", "React", "Asyncio"],
  },
  {
    id: "cloud",
    label: "Cloud Platforms",
    skills: ["AWS (S3, EC2, Lambda, API Gateway)", "Azure (Functions, AI Search, AI Studio, Blob)", "GCP (BigQuery)"],
  },
  {
    id: "ai-ml",
    label: "AI / ML",
    skills: ["LangChain", "RAG", "LLMs", "Prompt Engineering", "AWS Bedrock", "Azure OpenAI", "Embeddings", "Vector Search"],
  },
  {
    id: "data",
    label: "Data Stores",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Weaviate", "Cosmos DB", "Elasticsearch", "BigQuery"],
  },
  {
    id: "devops",
    label: "DevOps & Tooling",
    skills: ["Docker", "Kubernetes", "Helm", "CI/CD", "Jenkins", "GitHub/GitLab", "Sentry", "OpenAPI/Swagger"],
  },
  {
    id: "practices",
    label: "Practices",
    skills: ["Microservices", "Async Task Queues (Celery)", "JWT/RBAC", "Rate Limiting", "TDD (pytest)", "Agile/Scrum"],
  },
];

export const certifications: Certification[] = [
  {
    id: "cert-hackerrank-ps",
    name: "Problem Solving",
    issuer: "HackerRank",
    issued: "Aug 2025",
    credentialUrl: "https://hackerrank.com/certificates/6331503aeb80",
  },
  {
    id: "cert-hackerrank-py",
    name: "Python Programming",
    issuer: "HackerRank",
    issued: "Aug 2025",
    credentialUrl: "https://hackerrank.com/certificates/506ca3e6a0fa",
  },
  {
    id: "cert-coursera-azureml",
    name: "Machine Learning Pipeline with Azure ML Studio",
    issuer: "Coursera",
    issued: "Jan 2024",
    credentialUrl:
      "https://coursera.org/account/accomplishments/verify/UJKBBVGJ2NL5",
  },
  {
    id: "cert-gl-deeplearning",
    name: "Introduction to Deep Learning",
    issuer: "Great Learning",
    issued: "Oct 2023",
  },
  {
    id: "cert-piaic-ai",
    name: "Artificial Intelligence",
    issuer: "PIAIC",
    issued: "Jan 2023",
    credentialUrl:
      "https://drive.google.com/file/d/1tnxF9_JqehZVEOXsix2C-FX9SLMjFUJC/view?usp=sharing",
  },
  {
    id: "cert-lpi-linux",
    name: "NDG Linux Essentials",
    issuer: "Linux Professional Institute (LPI)",
    issued: "Sep 2020",
    credentialUrl:
      "https://drive.google.com/drive/folders/1EtrZ_H1tqz9eDyZqf7CwGz35v7evxGc_",
  },
  {
    id: "cert-pythoinstitute-pcap",
    name: "PCAP: Programming Essentials in Python",
    issuer: "Python Institute",
    issued: "Mar 2020",
    credentialUrl:
      "https://drive.google.com/file/d/1VdW1l976PMIq1Qs9iBAYbyMIjzbM2ZYt/view?usp=sharing",
  },
];

export const education: Education[] = [
  {
    id: "edu-msc",
    degree: "Master's degree (MSc)",
    field: "Geographic Information Science",
    institution: "University of Karachi",
  },
  {
    id: "edu-bsc",
    degree: "Bachelor's degree (BSc Hons)",
    field: "Space Science and Technology",
    institution: "University of Karachi",
  },
];

export const employment: EmploymentEntry[] = [
  {
    id: "emp-freelance",
    title: "Lead / Senior Python Backend Engineer",
    company: "Freelance (HomeCertifi SaaS)",
    location: "Remote",
    period: "Oct 2025 – Present",
    order: 1,
    relatedProjectId: "homecertifi-ai",
    highlights: [
      "Multi-tenant backend with FastAPI, SQLAlchemy, Pydantic v2, JWT tenant isolation, and RBAC tier gating.",
      "Dual-provider AI vision/NLP pipeline (Hugging Face + OpenAI fallback with 0.85 confidence gate), reducing LLM costs by 70–80%.",
      "Deterministic PDF reporting with SHA-256 artifact hashing, S3 storage, and automated Stripe billing/webhooks.",
    ],
  },
  {
    id: "emp-alliance",
    title: "Senior Python Developer",
    company: "Alliance Global Tech (Confidential)",
    location: "Mount Laurel, NJ",
    period: "Jul 2025 – Oct 2025",
    order: 2,
    relatedProjectId: "healthcare-ai",
    highlights: [
      "Scalable backend services with Python, FastAPI, and Celery; 99.99% uptime via load balancing and scaling.",
      "AI-powered clinical assistant with AWS Bedrock; Django monolith refactored to AWS microservices (Lambda, EC2, API Gateway, S3).",
    ],
  },
  {
    id: "emp-fleekbiz",
    title: "Python Developer",
    company: "Fleekbiz Pvt Ltd",
    location: "Karachi, Sindh",
    period: "Nov 2024 – Jun 2025",
    order: 3,
    relatedProjectId: "fleekbiz-rag",
    highlights: [
      "FastAPI + Azure Functions microservices; 40% latency reduction, 10,000+ concurrent real-time queries.",
      "RAG pipelines with Azure AI Search, Azure AI Studio, and Weaviate; +50% contextual accuracy. $5M+/mo transactions via OAuth2.",
    ],
  },
  {
    id: "emp-udhaarbook",
    title: "Python Developer",
    company: "UdhaarBook",
    location: "Karachi, Sindh",
    period: "Nov 2023 – Jan 2024",
    order: 4,
    relatedProjectId: "fintech-wallet",
    highlights: [
      "Django custom wallet with ACID transactions and Django Signals/Channels; 10,000+ daily users.",
      "Firebase → OneSignal migration (−20% cost); GCP BigQuery + Elasticsearch analytics pipelines.",
    ],
  },
  {
    id: "emp-3const",
    title: "Python Developer",
    company: "3Const Pvt Ltd",
    location: "Karachi, Sindh",
    period: "Nov 2021 – Jan 2023",
    order: 5,
    highlights: [
      "Django/Flask REST APIs with PostgreSQL/PostGIS geospatial datasets; −30% API response time.",
      "Celery + Redis async queues (+40% throughput); Docker/Jenkins CI/CD (daily releases, 99.9% uptime).",
    ],
  },
  {
    id: "emp-aoi",
    title: "Python Developer & Coordinator",
    company: "AOI Tech",
    location: "Karachi, Sindh",
    period: "Nov 2018 – Mar 2021",
    order: 6,
    highlights: [
      "Python/Flask REST APIs for CRUD operations and JSON-based data exchange.",
      "Project coordination for 20+ Agile sprints, reducing project revisions by 30% and improving client satisfaction by 15%.",
    ],
  },
];

export const featuredProject: FeaturedProject = {
  id: "homecertifi-featured",
  title: "HomeCertifi — Multi-Tenant AI Property Inspection Platform",
  role: "Lead / Senior Python Backend Engineer",
  bullets: [
    "Architected cloud-native, multi-tenant backend with JWT-based tenant isolation, RBAC, and subscription-based feature gating using FastAPI and SQLAlchemy.",
    "Built dual-provider AI vision & NLP pipeline with Hugging Face and OpenAI, using a 0.85 confidence-score gate to reduce LLM inference costs by 70–80%.",
    "Implemented asynchronous processing with Celery/Redis and real-time WebSocket updates for photo defect analysis, audio transcription, and report generation.",
    "Developed deterministic, versioned PDF reporting engine with SHA-256 artifact hashing, input fingerprinting, white-label exports, and AWS S3 storage.",
    "Integrated Stripe billing, checkout, customer portal, and webhook-based subscription management with zero-downtime database migrations.",
  ],
  relatedSkills: [
    "Python",
    "FastAPI",
    "PostgreSQL",
    "SQLAlchemy",
    "Celery",
    "Redis",
    "OpenAI",
    "Hugging Face",
    "AWS S3",
    "Stripe",
    "WebSockets",
    "Docker",
    "Pytest",
  ],
};

export const allProfileSkills: string[] = skillGroups.flatMap((g) => g.skills);

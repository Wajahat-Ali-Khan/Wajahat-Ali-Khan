export type CloudProvider = "aws" | "azure" | "gcp";

export interface DiagramNode {
  id: string;
  label: string;
  x: number;
  y: number;
  type: "service" | "database" | "queue" | "gateway" | "model";
}

export interface DiagramEdge {
  id: string;
  from: string;
  to: string;
  label?: string;
}

export interface ProjectMetric {
  label: string;
  before: string;
  after: string;
  unit?: string;
}

export interface ApiEndpoint {
  id: string;
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  path: string;
  statusCodes: number[];
  summary: string;
  requestBody?: string;
  responseBody: string;
  initialX: number;
  initialY: number;
  illustrative?: boolean;
}

export interface SpecDocument {
  id: string;
  title: string;
  type: "api" | "deployment";
  filename: string;
  description: string;
  pages: number;
}

export interface TechnicalPost {
  id: string;
  title: string;
  source: string;
  date: string;
  format: "Post" | "Article";
  excerpt: string;
  postUrl: string;
}

export interface Project {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  employer: string;
  period: string;
  provider: CloudProvider;
  accent: string;
  copy: string;
  metrics: ProjectMetric[];
  nodes: DiagramNode[];
  edges: DiagramEdge[];
  endpoints: ApiEndpoint[];
  specs: SpecDocument[];
}

export const IDENTITY = {
  name: "Wajahat Ali Khan",
  firstName: "Wajahat",
  lastName: "Khan",
  role: "Principal Python & GenAI Solutions Consultant",
  subtitle: "Scalable Backends · Production GenAI & RAG · Multi-Tenant Cloud Architectures",
  focus: "Python / FastAPI / Django · LLM Inference Cost Optimization · Cloud-Native SaaS",
  experience: "6+ Years Enterprise & Consulting Experience",
  availability: "Available for Fixed-Scope Projects & Fractional Technical Advisory",
  email: "wajahatkhanofficials@gmail.com",
  github: "github.com/Wajahat-Ali-Khan",
  linkedin: "linkedin.com/in/wajahataliofficials",
  twitter: "@AKWajahat",
  stats: [
    { label: "AI Cost Optimization", value: "70–80%", detail: "Dual-provider confidence-gated pipeline" },
    { label: "High-Load Concurrency", value: "10k+", detail: "Concurrent real-time queries" },
    { label: "Transaction Scale", value: "$5M+/mo", detail: "Automated Stripe & OAuth2 flows" },
    { label: "System Availability", value: "99.99%", detail: "High-uptime cloud architectures" },
  ],
};

export interface ConsultingService {
  id: string;
  title: string;
  tagline: string;
  icon: string;
  deliverables: string[];
  businessValue: string;
}

export interface EngagementModel {
  id: string;
  title: string;
  subtitle: string;
  idealFor: string;
  scope: string[];
}

export interface ConsultingStep {
  step: string;
  title: string;
  description: string;
  deliverables: string[];
}

export const consultingServices: ConsultingService[] = [
  {
    id: "genai-rag",
    title: "Generative AI & Production RAG Systems",
    tagline: "Cost-optimized, citation-backed LLM systems built for enterprise reliability.",
    icon: "ai",
    deliverables: [
      "Dual-provider cost-gated inference (Hugging Face + OpenAI fallback)",
      "Hybrid vector retrieval pipelines (Azure AI Search, Weaviate, Bedrock)",
      "Streaming real-time completions & WebSocket communication",
      "Context evaluation, prompt engineering & hallucination guards",
    ],
    businessValue: "Slash LLM API costs by up to 70–80% while improving contextual accuracy by +50%.",
  },
  {
    id: "backend-microservices",
    title: "High-Throughput Backend & Microservices",
    tagline: "Async Python architectures designed for high concurrency and sub-second latency.",
    icon: "backend",
    deliverables: [
      "FastAPI, Django, DRF, and Flask microservices & REST APIs",
      "Celery & Redis asynchronous task workers and distributed queues",
      "Database query profiling, vertical scaling & index optimization",
      "OpenAPI/Swagger contracts, rate limiting & automated testing with Pytest",
    ],
    businessValue: "Reduce API response latency by up to 40% and scale reliably to 10,000+ concurrent queries.",
  },
  {
    id: "saas-fintech",
    title: "Multi-Tenant SaaS & Financial Engines",
    tagline: "Secure data isolation, subscription lifecycles, and ACID-compliant transaction engines.",
    icon: "saas",
    deliverables: [
      "Multi-tenant backend isolation via JWT claims, Pydantic v2 & RBAC",
      "Stripe checkout, customer portal & resilient webhook handling",
      "ACID financial wallets with race condition & concurrency safeguards",
      "Deterministic PDF report generation with SHA-256 artifact hashing",
    ],
    businessValue: "Achieve zero-downtime database migrations, secure tenant isolation, and $5M+ transaction capacity.",
  },
  {
    id: "cloud-devops",
    title: "Cloud Migration & Zero-Downtime DevOps",
    tagline: "Modernize legacy systems into autoscaling, monitored cloud infrastructure.",
    icon: "cloud",
    deliverables: [
      "Refactoring monoliths into AWS Lambda / Azure Functions microservices",
      "Containerization with Docker, Kubernetes orchestration & Helm rollouts",
      "Automated CI/CD release pipelines (Jenkins, GitHub Actions)",
      "Distributed logging, Sentry error monitoring & MTTR reduction",
    ],
    businessValue: "Accelerate release cycles from weekly to daily while maintaining 99.99% system uptime.",
  },
];

export const engagementModels: EngagementModel[] = [
  {
    id: "project-delivery",
    title: "Fixed-Scope Project Delivery",
    subtitle: "Turnkey MVP or subsystem execution with defined milestones.",
    idealFor: "Startups & businesses with a concrete feature, RAG pipeline, or API migration.",
    scope: [
      "Full architecture, implementation & automated testing",
      "Deterministic deliverables with milestone-based sign-offs",
      "Complete CI/CD deployment, documentation & handover",
    ],
  },
  {
    id: "fractional-lead",
    title: "Fractional Backend / AI Lead",
    subtitle: "Retained technical leadership and core development capacity.",
    idealFor: "Growing engineering teams needing senior architectural direction.",
    scope: [
      "System architecture design & sprint leadership",
      "Core high-impact backend & AI pipeline development",
      "Code reviews, performance profiling & developer mentorship",
    ],
  },
  {
    id: "tech-audit",
    title: "Architecture & Cost Audit",
    subtitle: "1–2 week deep-dive to eliminate bottlenecks and cloud/LLM waste.",
    idealFor: "Companies facing slow query response times or ballooning AI API bills.",
    scope: [
      "Database indexing, slow query & caching audit",
      "LLM inference cost modeling & confidence-gate strategy",
      "Actionable remediation roadmap with prioritized PRs",
    ],
  },
];

export const consultingProcess: ConsultingStep[] = [
  {
    step: "01",
    title: "Technical Discovery & Scope",
    description: "Deep dive into your business requirements, existing data architecture, throughput targets, and cost constraints.",
    deliverables: ["Architecture Assessment", "Technical Scope & Milestone Plan", "Fixed Timeline/Budget"],
  },
  {
    step: "02",
    title: "Architecture Blueprint & PoC",
    description: "Design data models, API contracts, security controls, and build rapid proof-of-concepts to validate feasibility.",
    deliverables: ["OpenAPI Specs & Schemas", "Cloud Topology Blueprint", "Validated Core Prototype"],
  },
  {
    step: "03",
    title: "Production Implementation",
    description: "Write robust, production-ready Python code with comprehensive Pytest coverage, containerization, and async queues.",
    deliverables: ["Production Backend & AI Code", "Automated CI/CD Pipelines", "Zero-Downtime Migrations"],
  },
  {
    step: "04",
    title: "Observability & Handover",
    description: "Deploy to production, configure telemetry/dashboards, verify SLAs, and provide documentation for your team.",
    deliverables: ["Sentry & Telemetry Setup", "System Runbooks & Docs", "Post-Launch Transition Support"],
  },
];

export const CLOUD_PALETTES: Record<
  CloudProvider,
  { name: string; swatches: { hex: string; token: string }[] }
> = {
  aws: {
    name: "AWS",
    swatches: [
      { hex: "#FF9900", token: "primary" },
      { hex: "#EC7211", token: "compute" },
      { hex: "#C45500", token: "storage" },
      { hex: "#232F3E", token: "console" },
    ],
  },
  azure: {
    name: "Azure",
    swatches: [
      { hex: "#0078D4", token: "primary" },
      { hex: "#005A9E", token: "compute" },
      { hex: "#50E6FF", token: "accent" },
      { hex: "#00188F", token: "deep" },
    ],
  },
  gcp: {
    name: "GCP",
    swatches: [
      { hex: "#34A853", token: "primary" },
      { hex: "#1E8E3E", token: "compute" },
      { hex: "#81C995", token: "accent" },
      { hex: "#137333", token: "deep" },
    ],
  },
};

export const projects: Project[] = [
  {
    id: "homecertifi-ai",
    index: "01",
    title: "Multi-Tenant AI Property Inspection Platform",
    subtitle: "Dual-provider AI vision & NLP pipeline with 0.85 confidence-gated fallback",
    employer: "HomeCertifi",
    period: "Oct 2025 – Present",
    provider: "aws",
    accent: "#FF9900",
    copy: "Architected a cloud-native, multi-tenant backend using FastAPI, SQLAlchemy, and Pydantic v2, enforcing strict tenant data isolation across all API routes via JWT claims and session scoping. Engineered an intelligent dual-provider AI vision & NLP pipeline featuring a 0.85 confidence-score gate between primary (Hugging Face) and fallback (OpenAI) models, slashing LLM inference costs by 70–80% while maintaining peak defect-detection accuracy across high-volume property photo analyses. Implemented asynchronous processing with Celery/Redis and real-time WebSocket updates for AI analysis, transcription, and deterministic PDF report generation with SHA-256 artifact hashing and AWS S3 storage. Integrated Stripe checkout, customer portal, and webhook lifecycle handling for automated multi-tiered subscription management with zero-downtime Alembic migrations.",
    metrics: [
      { label: "AI Cost Drop", before: "baseline", after: "−70–80%" },
      { label: "Confidence Gate", before: "—", after: "0.85 score" },
      { label: "Integrity", before: "—", after: "SHA-256" },
    ],
    nodes: [
      { id: "client", label: "Client/Inspector", x: 60, y: 180, type: "gateway" },
      { id: "fastapi", label: "FastAPI Gateway", x: 220, y: 180, type: "service" },
      { id: "jwt", label: "Tenant RBAC", x: 220, y: 60, type: "service" },
      { id: "hf", label: "Hugging Face", x: 380, y: 90, type: "model" },
      { id: "openai", label: "OpenAI Fallback", x: 380, y: 270, type: "model" },
      { id: "celery", label: "Celery Queue", x: 540, y: 180, type: "queue" },
      { id: "s3", label: "AWS S3 Docs", x: 700, y: 90, type: "database" },
      { id: "stripe", label: "Stripe Billing", x: 700, y: 270, type: "service" },
    ],
    edges: [
      { id: "e1", from: "client", to: "fastapi", label: "HTTPS/WSS" },
      { id: "e2", from: "fastapi", to: "jwt", label: "Scope" },
      { id: "e3", from: "fastapi", to: "hf", label: "Gate >=0.85" },
      { id: "e4", from: "fastapi", to: "openai", label: "Fallback <0.85" },
      { id: "e5", from: "fastapi", to: "celery", label: "async" },
      { id: "e6", from: "celery", to: "s3", label: "SHA-256" },
      { id: "e7", from: "fastapi", to: "stripe", label: "webhooks" },
    ],
    endpoints: [
      {
        id: "inspect-analyze",
        method: "POST",
        path: "/v1/inspections/analyze",
        statusCodes: [200, 400, 429],
        summary: "Dual-provider AI photo defect analysis with 0.85 score gate",
        requestBody: '{\n  "property_id": "prop_102",\n  "photos": ["photo_1.jpg"],\n  "mode": "confidence_gated"\n}',
        responseBody: '{\n  "defects": [{"type": "roof_crack", "severity": "high"}],\n  "model_used": "huggingface_primary",\n  "confidence": 0.94\n}',
        initialX: 20,
        initialY: 20,
      },
      {
        id: "report-generate",
        method: "POST",
        path: "/v1/reports/generate",
        statusCodes: [200, 202],
        summary: "Deterministic PDF reporting with SHA-256 artifact hashing",
        requestBody: '{\n  "inspection_id": "insp_884",\n  "format": "white_label_pdf"\n}',
        responseBody: '{\n  "report_id": "rep_902",\n  "sha256_hash": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",\n  "s3_url": "s3://reports/rep_902.pdf"\n}',
        initialX: 280,
        initialY: 60,
      },
    ],
    specs: [
      {
        id: "homecertifi-api",
        title: "HomeCertifi API Specification",
        type: "api",
        filename: "homecertifi-rag-api.pdf",
        description: "Multi-tenant inspection analysis, WebSocket streaming, and Stripe endpoints",
        pages: 16,
      },
      {
        id: "homecertifi-deploy",
        title: "HomeCertifi Cloud Architecture",
        type: "deployment",
        filename: "homecertifi-deployment.pdf",
        description: "FastAPI, Celery workers, dual AI inference, and S3 artifact topology",
        pages: 12,
      },
    ],
  },
  {
    id: "fleekbiz-rag",
    index: "02",
    title: "Real-time RAG & Microservice Platform",
    subtitle: "Azure AI Search, Azure AI Studio, and Weaviate vector pipelines",
    employer: "Fleekbiz Pvt Ltd",
    period: "Nov 2024 – Jun 2025",
    provider: "azure",
    accent: "#0078D4",
    copy: "Designed and deployed microservice workflows with FastAPI and Azure Functions (hosted on Azure Web Apps/API Gateway), reducing latency by 40% and supporting 10,000+ concurrent real-time queries. Implemented RAG pipelines using Azure AI Search, Azure AI Studio (LLM & embeddings), and Weaviate vector DB, improving contextual accuracy by 50%. Integrated Stripe payments and Twilio messaging via secure OAuth2 flows, supporting $5M+ monthly transactions with 99.9% security compliance. Containerized services with Docker, deployed on Kubernetes with Helm rollouts, and integrated Azure Service Bus for fault-tolerant async messaging. Built RESTful APIs and Celery workers with logging dashboards that reduced MTTR by 30%.",
    metrics: [
      { label: "Latency", before: "baseline", after: "−40%" },
      { label: "Concurrency", before: "—", after: "10k+", unit: "concurrent queries" },
      { label: "Transactions", before: "—", after: "$5M+/mo" },
    ],
    nodes: [
      { id: "client", label: "Client SDK", x: 60, y: 180, type: "gateway" },
      { id: "apigw", label: "API Gateway", x: 200, y: 180, type: "gateway" },
      { id: "fastapi", label: "FastAPI Svc", x: 360, y: 180, type: "service" },
      { id: "aisearch", label: "AI Search", x: 360, y: 60, type: "database" },
      { id: "weaviate", label: "Weaviate", x: 360, y: 300, type: "database" },
      { id: "aistudio", label: "AI Studio", x: 520, y: 120, type: "model" },
      { id: "bus", label: "Service Bus", x: 520, y: 260, type: "queue" },
      { id: "celery", label: "Celery", x: 680, y: 180, type: "service" },
      { id: "redis", label: "Redis", x: 680, y: 60, type: "database" },
    ],
    edges: [
      { id: "e1", from: "client", to: "apigw", label: "HTTPS" },
      { id: "e2", from: "apigw", to: "fastapi", label: "REST" },
      { id: "e3", from: "fastapi", to: "aisearch", label: "search" },
      { id: "e4", from: "fastapi", to: "weaviate", label: "vector" },
      { id: "e5", from: "aisearch", to: "aistudio", label: "context" },
      { id: "e6", from: "weaviate", to: "aistudio", label: "embed" },
      { id: "e7", from: "fastapi", to: "bus", label: "async" },
      { id: "e8", from: "bus", to: "celery", label: "events" },
      { id: "e9", from: "celery", to: "redis", label: "cache" },
    ],
    endpoints: [
      {
        id: "rag-query",
        method: "POST",
        path: "/v1/query",
        statusCodes: [200, 400, 429],
        summary: "Contextual RAG query retrieval with top_k hybrid ranking",
        requestBody: '{\n  "query": "string",\n  "top_k": 8\n}',
        responseBody: '{\n  "context": ["..."],\n  "accuracy_gain": "+50%"\n}',
        initialX: 20,
        initialY: 20,
      },
      {
        id: "rag-ingest",
        method: "POST",
        path: "/v1/ingest",
        statusCodes: [200, 413],
        summary: "Asynchronous document ingestion and vector embedding",
        requestBody: '{\n  "documents": ["doc1", "doc2"]\n}',
        responseBody: '{\n  "indexed": 2,\n  "status": "queued"\n}',
        initialX: 280,
        initialY: 60,
      },
    ],
    specs: [
      {
        id: "fleekbiz-api",
        title: "RAG Microservice API Contract",
        type: "api",
        filename: "fleekbiz-rag-api.pdf",
        description: "API contract for RAG query and document ingestion endpoints",
        pages: 12,
      },
      {
        id: "fleekbiz-deploy",
        title: "Azure Deployment Architecture",
        type: "deployment",
        filename: "fleekbiz-rag-deployment.pdf",
        description: "Azure Functions, AI Search, and Kubernetes topology",
        pages: 10,
      },
    ],
  },
  {
    id: "healthcare-ai",
    index: "03",
    title: "Healthcare AI Clinical Assistant",
    subtitle: "AWS Bedrock LLM integration with microservices migration",
    employer: "Alliance Global Tech",
    period: "Jul 2025 – Oct 2025",
    provider: "aws",
    accent: "#FF9900",
    copy: "Contributed to scalable backend services using Python, FastAPI, and Celery, improving transaction processing efficiency and ensuring high system uptime through load balancing and scaling. Improved query performance by 15% via PostgreSQL and MongoDB tuning, vertical scaling, indexing, and Redis caching. Refactored key modules of a Django monolith into microservices on AWS (Lambda, EC2, API Gateway, S3), enabling CI/CD and faster deployments. Implemented API security using JWT authentication, role-based authorization, rate limiting/throttling, and OpenAPI/Swagger contracts. Assisted in building an AI-powered clinical assistant with AWS Bedrock (LLM integration) to automate documentation and streamline healthcare workflows. Integrated third-party SaaS platforms (SendGrid, EHR systems) through REST APIs and JSON payloads for secure and compliant data exchange.",
    metrics: [
      { label: "Query Perf.", before: "baseline", after: "+15%" },
      { label: "Uptime", before: "—", after: "99.99%" },
      { label: "Deploy Cycles", before: "baseline", after: "Faster (n/s)" },
    ],
    nodes: [
      { id: "ehr", label: "EHR/Client", x: 60, y: 180, type: "gateway" },
      { id: "apigw", label: "API Gateway", x: 200, y: 180, type: "gateway" },
      { id: "auth", label: "JWT/RBAC", x: 360, y: 60, type: "service" },
      { id: "fastapi", label: "FastAPI Svc", x: 360, y: 200, type: "service" },
      { id: "bedrock", label: "AWS Bedrock", x: 520, y: 120, type: "model" },
      { id: "lambda", label: "Lambda", x: 520, y: 260, type: "service" },
      { id: "s3", label: "S3 Docs", x: 680, y: 120, type: "database" },
      { id: "sendgrid", label: "SendGrid", x: 680, y: 260, type: "service" },
    ],
    edges: [
      { id: "e1", from: "ehr", to: "apigw", label: "REST" },
      { id: "e2", from: "apigw", to: "auth", label: "JWT" },
      { id: "e3", from: "apigw", to: "fastapi", label: "route" },
      { id: "e4", from: "fastapi", to: "bedrock", label: "LLM" },
      { id: "e5", from: "fastapi", to: "lambda", label: "async" },
      { id: "e6", from: "bedrock", to: "s3", label: "docs" },
      { id: "e7", from: "lambda", to: "sendgrid", label: "notify" },
    ],
    endpoints: [
      {
        id: "clinical-summarize",
        method: "POST",
        path: "/v1/clinical/summarize",
        statusCodes: [200, 401, 429],
        summary: "Clinical EHR documentation summarization with AWS Bedrock",
        requestBody: '{\n  "patient_id": "string",\n  "notes": "..."\n}',
        responseBody: '{\n  "summary": "...",\n  "status": "complete"\n}',
        initialX: 25,
        initialY: 25,
      },
      {
        id: "documents",
        method: "POST",
        path: "/v1/documents",
        statusCodes: [200, 400, 503],
        summary: "EHR clinical document ingestion & storage pipeline",
        requestBody: '{\n  "document": "base64...",\n  "type": "ehr"\n}',
        responseBody: '{\n  "id": "doc_abc",\n  "stored": true\n}',
        initialX: 290,
        initialY: 70,
      },
    ],
    specs: [
      {
        id: "healthcare-api",
        title: "Healthcare AI API Contract",
        type: "api",
        filename: "healthcare-ai-api.pdf",
        description: "API contract for clinical assistant and document endpoints",
        pages: 14,
      },
      {
        id: "healthcare-deploy",
        title: "AWS Deployment Architecture",
        type: "deployment",
        filename: "healthcare-ai-deployment.pdf",
        description: "Lambda, EC2, API Gateway, and S3 microservices topology",
        pages: 11,
      },
    ],
  },
  {
    id: "fintech-wallet",
    index: "04",
    title: "Fintech Wallet & Analytics Pipelines",
    subtitle: "ACID-compliant wallet with GCP analytics and real-time workflows",
    employer: "UdhaarBook",
    period: "Nov 2023 – Jan 2024",
    provider: "gcp",
    accent: "#34A853",
    copy: "Built scalable fintech APIs with Django, implementing a custom wallet using ACID-compliant transactions, Django Signals/Channels for real-time workflows, and safeguards against race conditions, supporting 10,000+ daily users. Migrated notification services from Firebase to OneSignal, reducing operational costs up to 20% and improving delivery efficiency. Optimized application responsiveness by developing asynchronous background tasks with Celery and Redis, reducing task execution time by 35% and lowering system latency during peak loads. Built analytics pipelines with Google Cloud Console (GCP), BigQuery, Elasticsearch, and MongoDB aggregation, enabling fast queries, full-text search, and advanced reporting.",
    metrics: [
      { label: "Task Time", before: "baseline", after: "−35%" },
      { label: "Notif. Cost", before: "baseline", after: "−20%" },
      { label: "Daily Users", before: "—", after: "10k+" },
    ],
    nodes: [
      { id: "mobile", label: "Mobile Client", x: 60, y: 180, type: "gateway" },
      { id: "wallet", label: "Django Wallet", x: 200, y: 180, type: "service" },
      { id: "postgres", label: "PostgreSQL", x: 360, y: 120, type: "database" },
      { id: "celery", label: "Celery", x: 360, y: 260, type: "queue" },
      { id: "redis", label: "Redis", x: 520, y: 260, type: "database" },
      { id: "onesignal", label: "OneSignal", x: 520, y: 120, type: "service" },
      { id: "bigquery", label: "BigQuery", x: 680, y: 120, type: "database" },
      { id: "elastic", label: "Elasticsearch", x: 680, y: 260, type: "database" },
    ],
    edges: [
      { id: "e1", from: "mobile", to: "wallet", label: "REST" },
      { id: "e2", from: "wallet", to: "postgres", label: "ACID" },
      { id: "e3", from: "wallet", to: "celery", label: "async" },
      { id: "e4", from: "celery", to: "redis", label: "queue" },
      { id: "e5", from: "wallet", to: "onesignal", label: "push" },
      { id: "e6", from: "wallet", to: "bigquery", label: "analytics" },
      { id: "e7", from: "wallet", to: "elastic", label: "search" },
    ],
    endpoints: [
      {
        id: "wallet-transfer",
        method: "POST",
        path: "/v1/wallet/transfer",
        statusCodes: [200, 400, 409],
        summary: "ACID-compliant wallet balance transfer with concurrency locking",
        requestBody: '{\n  "from": "user_a",\n  "to": "user_b",\n  "amount": 100\n}',
        responseBody: '{\n  "transaction_id": "tx_123",\n  "status": "completed"\n}',
        initialX: 25,
        initialY: 25,
      },
      {
        id: "analytics-report",
        method: "GET",
        path: "/v1/analytics/report",
        statusCodes: [200, 404],
        summary: "GCP BigQuery & Elasticsearch aggregated analytics query",
        responseBody: '{\n  "report": {...},\n  "source": "bigquery"\n}',
        initialX: 290,
        initialY: 70,
      },
    ],
    specs: [
      {
        id: "fintech-api",
        title: "Fintech Wallet API Contract",
        type: "api",
        filename: "fintech-wallet-api.pdf",
        description: "API contract for wallet transfers and analytics endpoints",
        pages: 12,
      },
      {
        id: "fintech-deploy",
        title: "GCP Pipeline Architecture",
        type: "deployment",
        filename: "fintech-wallet-deployment.pdf",
        description: "BigQuery, Elasticsearch, and Django deployment topology",
        pages: 9,
      },
    ],
  },
];

export const technicalPosts: TechnicalPost[] = [
  {
    id: "post-caching",
    title: "Why Caching is Critical for a Robust Backend System",
    source: "LinkedIn",
    date: "LinkedIn · 2025",
    format: "Post",
    excerpt:
      "Caching stores frequently accessed data in memory for lightning-fast retrieval. Performance boost — reduces response time from seconds to milliseconds. Lower load on DB — fewer queries hitting the database. Popular tools: Redis, Memcached, CDNs (Cloudflare, Akamai, AWS CloudFront).",
    postUrl:
      "https://www.linkedin.com/posts/wajahataliofficials_why-caching-is-critical-for-a-robust-backend-activity-7376711777939603457-A8ee",
  },
  {
    id: "post-mq",
    title: "Message Queues: The Unsung Heroes of Distributed Systems",
    source: "LinkedIn",
    date: "LinkedIn · 2025",
    format: "Post",
    excerpt:
      "Message Queues decouple services, scale under traffic spikes, and guarantee delivery. Popular tools: RabbitMQ, Apache Kafka, Amazon SQS, Redis Streams. Real-world impact in e-commerce order processing, ride-hailing matching, and notification batching.",
    postUrl:
      "https://www.linkedin.com/posts/wajahataliofficials_messagequeues-backendengineering-systemdesign-activity-7376309182913904640-1vhZ",
  },
  {
    id: "post-tcp-udp",
    title: "TCP vs UDP",
    source: "LinkedIn",
    date: "LinkedIn · 2025",
    format: "Post",
    excerpt:
      "TCP: Connection-oriented and reliable. Ensures ordered, duplicate-free delivery with flow and congestion control — ideal for web browsing, email, and file transfers. UDP: Connectionless and lightweight. Sends packets without delivery guarantees — perfect for gaming, streaming, and real-time communication.",
    postUrl:
      "https://www.linkedin.com/posts/wajahataliofficials_simple-clear-and-clean-explanation-activity-7378841282535743488-jxpF",
  },
  {
    id: "post-agentic",
    title: "The Future of Development: AI Agents, Vibe Coding & the Agentic Internet",
    source: "LinkedIn",
    date: "LinkedIn · 2025",
    format: "Article",
    excerpt:
      "AI isn't replacing developers — it's augmenting us. Protocols like Agent2Agent (A2A) and Model Context Protocol (MCP) are emerging to let AI agents communicate. Learning to leverage AI tools effectively and understanding agent protocols will soon be core backend skills.",
    postUrl:
      "https://www.linkedin.com/posts/wajahataliofficials_artificialintelligence-aiindevelopment-activity-7378533229152075776-G1G0",
  },
];

export const allSpecs: SpecDocument[] = projects.flatMap((p) => p.specs);

export const allEndpoints: ApiEndpoint[] = projects.flatMap((p) => p.endpoints);

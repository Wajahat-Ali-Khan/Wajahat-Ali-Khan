# Wajahat Ali Khan — Solutions Architecture & Consulting Portfolio

A high-performance, evidence-based consulting portfolio for **Wajahat Ali Khan**, Principal Python & GenAI Solutions Consultant. Positions capabilities in high-throughput Python backends, production GenAI/RAG systems, multi-tenant cloud SaaS architectures, and cost-optimized LLM inference.

## Verified Background & Data Sources

Content is strictly derived from verified credentials and project metrics:

1. **Resume & Projects** — Verified lead engineering and consulting achievements (HomeCertifi, Fleekbiz, Alliance Global Tech, UdhaarBook, 3Const, AOI Tech).
2. **LinkedIn** — [linkedin.com/in/wajahataliofficials](https://linkedin.com/in/wajahataliofficials) (education degrees, certifications, system design insights).
3. **GitHub** — [github.com/Wajahat-Ali-Khan](https://github.com/Wajahat-Ali-Khan) (open source repositories & code).

## Core Capabilities & Services

- **Generative AI & Production RAG:** Dual-provider cost-gated inference (70–80% LLM cost reduction), hybrid vector retrieval (Azure AI Search, Weaviate, Bedrock), WebSocket streaming.
- **High-Throughput Backends:** FastAPI, Django, DRF, Flask, Celery & Redis distributed task queues, database tuning.
- **Multi-Tenant SaaS & Financial Engines:** Tenant data isolation, RBAC, Stripe subscription lifecycle & webhook recovery, ACID fintech wallets.
- **Cloud Migration & Zero-Downtime DevOps:** AWS/Azure/GCP microservices, Docker, Kubernetes & Helm rollouts, Alembic migrations.

## Sections

| Section | Description |
|---|---|
| **Hero** | Consultant headline, verified proof metrics strip, and primary discovery CTAs |
| **Consulting Services** | 4 core engineering offerings + 3 engagement options (Project, Fractional Lead, Audit) |
| **Case Studies** | 4 verified case studies (HomeCertifi, Fleekbiz, Healthcare AI, UdhaarBook) with architecture diagrams |
| **Consulting Methodology** | 4-step engineering execution lifecycle from Discovery to Production Handover |
| **Credentials & Atlas** | Verified skill matrix, employment timeline, certifications, and University of Karachi degrees |
| **Infra & API Specs** | Downloadable architecture blueprints and API specifications |
| **Technical Insights** | Published engineering insights on system design, caching, message queues, and AI protocols |
| **Contact & Inquiry** | Direct verified email with copy utility, LinkedIn, GitHub, and client scoping checklist |

## Interactions

- **Cursor trail** — faint data-packet dots follow pointer movement
- **Project handoff** — cross-fade + horizontal slide between spreads on scroll
- **Architecture diagrams** — nodes build, paths connect, data-flow dots animate on scroll-into-view
- **API blueprints** — drag to reposition, pinch (or Ctrl+scroll) to resize endpoint cards
- **Reduced motion** — all animations respect `prefers-reduced-motion`

## Customization

Edit [`lib/projects.ts`](lib/projects.ts) to update case studies, metrics, diagram nodes, and posts. Edit [`lib/profile.ts`](lib/profile.ts) to update skills, certifications, education, employment, and the featured ISP project. Both files are validated by [`scripts/validate-content.ts`](scripts/validate-content.ts) against the Zod schemas in [`lib/schemas/profile.schema.ts`](lib/schemas/profile.schema.ts). Regenerate PDFs with `npm run gen-specs` after project changes.

## Build

The `build` script chains content validation before the Next.js compile:

```bash
npm run build        # gen-specs → validate-content → next build
npm start
```

## Testing

```bash
npm test             # vitest run (lib + components)
npm run test:watch   # vitest watch mode
```

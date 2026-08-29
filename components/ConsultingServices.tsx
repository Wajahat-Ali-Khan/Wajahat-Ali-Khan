"use client";

import { motion } from "framer-motion";
import { consultingServices, engagementModels } from "@/lib/projects";
import { useReducedMotion } from "@/lib/useReducedMotion";

export function ConsultingServices() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="services" className="relative z-10 border-t border-monograph-rule py-24">
      <div className="monograph-grid">
        <div className="col-span-12 mb-12">
          <p className="technical-caption">Consulting Services &amp; Capabilities</p>
          <h2 className="mt-2 text-display-md text-monograph-paper">
            Engineered for Production Scale &amp; Cost Efficiency
          </h2>
          <p className="mt-4 max-w-2xl font-mono text-xs text-monograph-muted">
            Specialized engineering consultancy for venture-backed startups, scale-ups, and enterprises looking to build high-performance Python backends, production GenAI/RAG pipelines, and cloud-native SaaS systems.
          </p>
        </div>

        {/* 4 Core Consulting Offerings */}
        <div className="col-span-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {consultingServices.map((service, index) => (
            <motion.article
              key={service.id}
              className="flex flex-col justify-between rounded-sm border border-monograph-rule bg-monograph-rule/10 p-6 md:p-8 transition-colors hover:border-monograph-paper/40 hover:bg-monograph-rule/20"
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-cloud-gcp">
                    Capability 0{index + 1}
                  </span>
                  <span className="font-mono text-xs text-monograph-caption">
                    [Verified Expertise]
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-medium text-monograph-paper md:text-2xl">
                  {service.title}
                </h3>
                <p className="mt-2 font-mono text-xs text-monograph-muted">
                  {service.tagline}
                </p>

                <div className="mt-6 border-t border-monograph-rule pt-4">
                  <p className="technical-caption mb-3">Key Deliverables &amp; Solutions</p>
                  <ul className="space-y-2" aria-label={`${service.title} deliverables`}>
                    {service.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-monograph-muted">
                        <span className="text-cloud-gcp font-mono">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 rounded-sm border border-monograph-rule bg-monograph-bg/80 p-3">
                <p className="font-mono text-[10px] text-monograph-caption uppercase tracking-wider">
                  Target Business Impact
                </p>
                <p className="mt-1 font-mono text-xs text-monograph-paper font-medium">
                  {service.businessValue}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Engagement Models */}
        <div className="col-span-12 mt-20 border-t border-monograph-rule pt-16">
          <div className="mb-8">
            <p className="technical-caption">Flexible Engagement Options</p>
            <h3 className="mt-2 text-2xl text-monograph-paper md:text-3xl">
              How We Can Work Together
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {engagementModels.map((model, idx) => (
              <motion.div
                key={model.id}
                className="rounded-sm border border-monograph-rule p-6 transition-colors hover:border-monograph-paper/30"
                initial={reducedMotion ? false : { opacity: 0, y: 15 }}
                whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <span className="font-mono text-[10px] uppercase tracking-wider text-monograph-caption">
                  Option 0{idx + 1}
                </span>
                <h4 className="mt-2 font-mono text-base text-monograph-paper font-semibold">
                  {model.title}
                </h4>
                <p className="mt-2 text-xs text-monograph-muted">
                  {model.subtitle}
                </p>

                <div className="my-4 border-t border-monograph-rule/60 pt-3">
                  <p className="font-mono text-[10px] text-monograph-caption">Best For:</p>
                  <p className="mt-1 text-xs text-monograph-paper">{model.idealFor}</p>
                </div>

                <ul className="space-y-1.5 border-t border-monograph-rule/60 pt-3">
                  {model.scope.map((s, i) => (
                    <li key={i} className="font-mono text-[11px] text-monograph-muted">
                      · {s}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

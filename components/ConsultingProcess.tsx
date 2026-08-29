"use client";

import { motion } from "framer-motion";
import { consultingProcess } from "@/lib/projects";
import { useReducedMotion } from "@/lib/useReducedMotion";

export function ConsultingProcess() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="process" className="relative z-10 border-t border-monograph-rule py-24">
      <div className="monograph-grid">
        <div className="col-span-12 mb-12">
          <p className="technical-caption">Consulting Methodology</p>
          <h2 className="mt-2 text-display-md text-monograph-paper">
            From Technical Discovery to Production Scale
          </h2>
          <p className="mt-4 max-w-2xl font-mono text-xs text-monograph-muted">
            A structured, engineering-first execution lifecycle designed for high velocity, clear deliverables, zero-downtime rollouts, and predictable outcomes.
          </p>
        </div>

        <div className="col-span-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {consultingProcess.map((item, index) => (
            <motion.div
              key={item.step}
              className="flex flex-col justify-between rounded-sm border border-monograph-rule bg-monograph-rule/10 p-6 transition-colors hover:border-monograph-paper/40 hover:bg-monograph-rule/20"
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div>
                <span className="font-mono text-3xl font-bold tabular-nums text-cloud-gcp/80">
                  {item.step}
                </span>

                <h3 className="mt-4 font-mono text-base font-semibold text-monograph-paper">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-monograph-muted">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 border-t border-monograph-rule/60 pt-4">
                <p className="font-mono text-[10px] uppercase tracking-wider text-monograph-caption">
                  Key Deliverables
                </p>
                <ul className="mt-2 space-y-1">
                  {item.deliverables.map((deliv, i) => (
                    <li key={i} className="font-mono text-[11px] text-monograph-muted">
                      · {deliv}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

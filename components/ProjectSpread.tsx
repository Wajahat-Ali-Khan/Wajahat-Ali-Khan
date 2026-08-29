"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/projects";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { useReducedMotion } from "@/lib/useReducedMotion";

function formatMetricBefore(before: string): string | null {
  if (before === "—" || before === "baseline") return null;
  return before;
}

function ProjectSpreadItem({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.article
      className="min-h-screen border-t border-monograph-rule py-16 md:py-24"
      initial={reducedMotion ? false : { opacity: 0, x: 40 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
    >
      <div className="monograph-grid">
        <div className="col-span-12 mb-4 flex flex-col items-start gap-2 monograph-rule pt-4 sm:flex-row sm:items-baseline sm:justify-between">
          <span
            className="font-mono text-display-md tabular-nums"
            style={{ color: project.accent }}
          >
            {project.index}
          </span>
          <span className="technical-caption text-left sm:text-right">
            <span className="sm:hidden">
              {project.provider.toUpperCase()} · {project.period}
            </span>
            <span className="hidden sm:inline">
              {project.provider.toUpperCase()} · {project.employer} · {project.period}
            </span>
          </span>
        </div>

        <div className="col-span-12 lg:col-span-7">
          <h3 className="text-display-md text-balance text-monograph-paper">
            {project.title}
          </h3>
          <p className="mt-2 font-mono text-sm text-monograph-muted">
            {project.subtitle}
          </p>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-monograph-muted md:text-base">
            {project.copy}
          </p>
        </div>

        <div className="col-span-12 mt-8 lg:col-span-5 lg:mt-0">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {project.metrics.map((metric) => {
              const beforeLabel = formatMetricBefore(metric.before);
              return (
                <div key={metric.label} className="border-l border-monograph-rule pl-4">
                  <p className="technical-caption">{metric.label}</p>
                  <p className="metric-value mt-1" style={{ color: project.accent }}>
                    {metric.after}
                  </p>
                  <p className="mt-1 font-mono text-[10px] text-monograph-muted">
                    {beforeLabel ? (
                      <>
                        from {beforeLabel}
                        {metric.unit && ` · ${metric.unit}`}
                      </>
                    ) : (
                      metric.unit ?? null
                    )}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="col-span-12 mt-10">
          <div className="diagram-plate">
            <p className="technical-caption mb-4 text-monograph-bg/60">
              Fig. {project.index} — System Architecture
            </p>
            <ArchitectureDiagram
              nodes={project.nodes}
              edges={project.edges}
              accent={project.accent}
            />
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function ProjectSpreads() {
  return (
    <section id="projects" className="relative z-10">
      <div className="monograph-grid py-16">
        <div className="col-span-12">
          <p className="technical-caption">Projects</p>
          <h2 className="mt-2 text-display-md text-monograph-paper">
            System Case Studies
          </h2>
        </div>
      </div>
      {projects.map((project, i) => (
        <ProjectSpreadItem key={project.id} project={project} index={i} />
      ))}
    </section>
  );
}

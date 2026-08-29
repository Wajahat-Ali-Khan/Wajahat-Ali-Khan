"use client";

import { motion } from "framer-motion";
import {
  skillGroups,
  certifications,
  education,
  employment,
  featuredProject,
  PROFILE_SECTION_ID,
} from "@/lib/profile";
import { useReducedMotion } from "@/lib/useReducedMotion";

function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <div className="col-span-12 mb-8">
      <p className="technical-caption">{label}</p>
      <h3 className="mt-2 text-display-md text-monograph-paper">{title}</h3>
    </div>
  );
}

export function SystemsProfile() {
  const reducedMotion = useReducedMotion();

  return (
    <section id={PROFILE_SECTION_ID} className="relative z-10 border-t border-monograph-rule py-24">
      <div className="monograph-grid">
        <div className="col-span-12 mb-12">
          <p className="technical-caption">Systems Profile</p>
          <h2 className="mt-2 text-display-md text-monograph-paper">
            Credentials &amp; Engineering Atlas
          </h2>
          <p className="mt-4 max-w-2xl font-mono text-xs text-monograph-muted">
            Verified enterprise technical competencies, professional certifications, University of Karachi degrees, and proven engineering track record.
          </p>
        </div>

        {/* Row 1: Skills + Employment timeline */}
        <motion.div
          className="col-span-12 lg:col-span-5"
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.5 }}
        >
          <p className="technical-caption mb-4">Skills Matrix</p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {skillGroups.map((group) => (
              <div
                key={group.id}
                className="rounded-sm border border-monograph-rule p-4"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-monograph-muted">
                  {group.label}
                </p>
                <ul
                  className="mt-3 flex flex-wrap gap-2"
                  aria-label={`${group.label} skills`}
                >
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-sm border border-monograph-rule bg-monograph-rule/20 px-2 py-1 font-mono text-[10px] text-monograph-paper"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="col-span-12 mt-12 lg:col-span-7 lg:mt-0"
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="technical-caption mb-4">Employment Timeline</p>
          <ol className="relative border-l border-monograph-rule pl-6" aria-label="Employment timeline">
            {employment.map((entry) => (
              <li key={entry.id} className="relative mb-8 last:mb-0">
                <span
                  className="absolute -left-[27px] top-1.5 h-3 w-3 rounded-full border-2 border-monograph-bg bg-monograph-muted"
                  aria-hidden="true"
                />
                <article>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h4 className="font-mono text-sm text-monograph-paper">
                      {entry.title} ·{" "}
                      <span className="text-monograph-muted">{entry.company}</span>
                    </h4>
                    <span className="font-mono text-[10px] text-monograph-caption">
                      {entry.period}
                    </span>
                  </div>
                  <p className="mt-1 font-mono text-[10px] text-monograph-caption">
                    {entry.location}
                  </p>
                  <ul className="mt-3 space-y-1.5">
                    {entry.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="text-xs leading-relaxed text-monograph-muted"
                      >
                        <span className="text-monograph-caption">·</span> {highlight}
                      </li>
                    ))}
                  </ul>
                  {entry.relatedProjectId && (
                    <a
                      href="#projects"
                      className="technical-caption mt-3 inline-block hover:text-monograph-paper"
                    >
                      View case study →
                    </a>
                  )}
                </article>
              </li>
            ))}
          </ol>
        </motion.div>

        {/* Row 2: Certifications + Education */}
        <motion.div
          className="col-span-12 mt-16 lg:col-span-8"
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.5 }}
        >
          <p className="technical-caption mb-4">Certifications</p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="rounded-sm border border-monograph-rule p-4"
              >
                <p className="font-mono text-sm text-monograph-paper">{cert.name}</p>
                <p className="mt-1 font-mono text-[10px] text-monograph-muted">
                  {cert.issuer} · {cert.issued}
                </p>
                {cert.credentialUrl ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="technical-caption mt-3 inline-block hover:text-monograph-paper"
                    aria-label={`View ${cert.issuer} certificate for ${cert.name}`}
                  >
                    View certificate →
                  </a>
                ) : (
                  <p className="technical-caption mt-3 italic">
                    Certificate link unavailable
                  </p>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="col-span-12 mt-12 lg:col-span-4 lg:mt-16"
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="technical-caption mb-4">Education</p>
          <div className="space-y-4">
            {education.map((edu) => (
              <div
                key={edu.id}
                className="rounded-sm border border-monograph-rule p-4"
              >
                <p className="font-mono text-sm text-monograph-paper">{edu.degree}</p>
                <p className="mt-1 text-xs text-monograph-muted">{edu.field}</p>
                <p className="mt-2 font-mono text-[10px] text-monograph-caption">
                  {edu.institution}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Row 3: Featured ISP project plate */}
        <motion.div
          className="col-span-12 mt-16"
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.5 }}
        >
          <p className="technical-caption mb-4">Featured Project</p>
          <div className="diagram-plate">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-2xl text-monograph-bg md:text-3xl">
                {featuredProject.title}
              </h3>
              <span className="font-mono text-xs text-monograph-bg/60">
                {featuredProject.role}
              </span>
            </div>
            <ul className="mt-6 space-y-3">
              {featuredProject.bullets.map((bullet, i) => (
                <li
                  key={i}
                  className="text-sm leading-relaxed text-monograph-bg/80 md:text-base"
                >
                  <span className="text-monograph-bg/40">·</span> {bullet}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2 border-t border-monograph-bg/20 pt-4">
              {featuredProject.relatedSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-sm border border-monograph-bg/30 px-2 py-1 font-mono text-[10px] text-monograph-bg/70"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { IDENTITY } from "@/lib/projects";

const { firstName, lastName, subtitle, focus, experience, availability, stats } = IDENTITY;

export function Hero() {
  const reducedMotion = useReducedMotion();
  const [typedSubtitle, setTypedSubtitle] = useState(reducedMotion ? subtitle : "");
  const [showCaret, setShowCaret] = useState(!reducedMotion);
  const [nameVisible, setNameVisible] = useState(reducedMotion);

  useEffect(() => {
    if (reducedMotion) return;

    let charIndex = 0;
    const typeInterval = setInterval(() => {
      charIndex++;
      setTypedSubtitle(subtitle.slice(0, charIndex));
      if (charIndex >= subtitle.length) {
        clearInterval(typeInterval);
        setTimeout(() => setShowCaret(false), 1200);
        setTimeout(() => setNameVisible(true), 300);
      }
    }, 35);

    return () => clearInterval(typeInterval);
  }, [reducedMotion]);

  useEffect(() => {
    if (reducedMotion) {
      setNameVisible(true);
    }
  }, [reducedMotion]);

  return (
    <section id="hero" className="relative z-10 flex min-h-[90vh] flex-col justify-end pb-16 pt-28 md:pt-36">
      <div className="monograph-grid">
        <div className="col-span-12">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <p className="technical-caption">Engineering Advisory &amp; Technical Consulting</p>
            <span className="inline-flex items-center gap-2 rounded-full border border-cloud-gcp/40 bg-cloud-gcp/10 px-3 py-1 font-mono text-[11px] text-cloud-gcp">
              <span className="h-2 w-2 rounded-full bg-cloud-gcp animate-pulse" />
              {availability}
            </span>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-8">
          <motion.div
            initial={reducedMotion ? false : { opacity: 0 }}
            animate={nameVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.6 }}
          >
            <h1 className="leading-none">
              <span className="block font-sans text-display-md text-monograph-muted">
                {firstName.split("").map((char, i) => (
                  <motion.span
                    key={`first-${i}`}
                    initial={reducedMotion ? false : { opacity: 0, y: 20 }}
                    animate={nameVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      delay: reducedMotion ? 0 : i * 0.04,
                      duration: 0.3,
                    }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
              <span className="block font-sans text-display-xl text-monograph-paper">
                {lastName.split("").map((char, i) => (
                  <motion.span
                    key={`last-${i}`}
                    initial={reducedMotion ? false : { opacity: 0, y: 40 }}
                    animate={nameVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      delay: reducedMotion ? 0 : 0.2 + i * 0.05,
                      duration: 0.4,
                    }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            </h1>
          </motion.div>
        </div>

        <div className="col-span-12 mt-8 lg:col-span-4 lg:mt-0 lg:flex lg:flex-col lg:justify-end">
          <p className="font-mono text-sm text-monograph-muted md:text-base leading-relaxed">
            <span className="text-cloud-gcp">&gt;</span>{" "}
            {typedSubtitle}
            {showCaret && (
              <span className="ml-0.5 inline-block h-[1.1em] w-[0.55em] translate-y-[0.1em] bg-monograph-paper animate-caret-blink" />
            )}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-sm border border-monograph-paper bg-monograph-paper px-4 py-2 font-mono text-xs text-monograph-bg font-semibold transition-colors hover:bg-monograph-paper/90"
            >
              Explore Case Studies ↓
            </a>
            <a
              href="#services"
              className="rounded-sm border border-monograph-rule bg-monograph-rule/20 px-4 py-2 font-mono text-xs text-monograph-paper transition-colors hover:border-monograph-paper/40"
            >
              View Services
            </a>
          </div>
        </div>

        {/* Quantified Proof Metrics Strip */}
        <div className="col-span-12 mt-16 monograph-rule pt-8">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((stat, i) => (
              <div key={i} className="border-l border-monograph-rule pl-4">
                <p className="font-mono text-2xl font-bold tabular-nums text-cloud-gcp md:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 font-mono text-xs text-monograph-paper font-medium">
                  {stat.label}
                </p>
                <p className="mt-0.5 font-mono text-[10px] text-monograph-caption">
                  {stat.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

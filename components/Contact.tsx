"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { IDENTITY } from "@/lib/projects";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const reducedMotion = useReducedMotion();

  const copyEmail = () => {
    navigator.clipboard.writeText(IDENTITY.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="relative z-10 border-t border-monograph-rule py-24 pb-32">
      <div className="monograph-grid">
        <div className="col-span-12 mb-12">
          <p className="technical-caption">Initiate Engagement</p>
          <h2 className="mt-2 text-display-md text-monograph-paper">
            Let&apos;s Build Your Next System
          </h2>
          <p className="mt-4 max-w-2xl font-mono text-xs text-monograph-muted">
            Available for fixed-scope engineering deliveries, production GenAI &amp; RAG implementations, and fractional backend advisory.
          </p>
        </div>

        {/* Contact & Consultation Card */}
        <div className="col-span-12 lg:col-span-8">
          <div className="rounded-sm border border-monograph-rule bg-monograph-rule/10 p-6 md:p-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between border-b border-monograph-rule pb-6">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-cloud-gcp">
                  Direct Channel
                </span>
                <h3 className="mt-1 font-mono text-lg font-semibold text-monograph-paper">
                  {IDENTITY.email}
                </h3>
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={copyEmail}
                  className="rounded-sm border border-monograph-rule bg-monograph-bg px-4 py-2 font-mono text-xs text-monograph-paper transition-colors hover:border-monograph-paper/50"
                  aria-label="Copy email address"
                >
                  {copied ? "✓ Copied to Clipboard" : "Copy Email"}
                </button>
                <a
                  href={`mailto:${IDENTITY.email}?subject=Consulting%20Inquiry%20-%20Technical%20Project`}
                  className="rounded-sm border border-cloud-gcp bg-cloud-gcp/20 px-4 py-2 font-mono text-xs text-cloud-gcp transition-colors hover:bg-cloud-gcp hover:text-monograph-bg font-semibold"
                >
                  Send Email →
                </a>
              </div>
            </div>

            {/* Professional Profiles */}
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
              <a
                href={`https://${IDENTITY.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-sm border border-monograph-rule bg-monograph-bg/60 p-4 transition-colors hover:border-cloud-aws hover:bg-monograph-rule/20"
              >
                <p className="font-mono text-[10px] text-monograph-caption uppercase">Network</p>
                <p className="mt-1 font-mono text-sm font-semibold text-monograph-paper group-hover:text-cloud-aws">
                  LinkedIn Profile ↗
                </p>
                <p className="mt-1 font-mono text-[10px] text-monograph-muted truncate">
                  {IDENTITY.linkedin}
                </p>
              </a>

              <a
                href={`https://${IDENTITY.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-sm border border-monograph-rule bg-monograph-bg/60 p-4 transition-colors hover:border-cloud-azure hover:bg-monograph-rule/20"
              >
                <p className="font-mono text-[10px] text-monograph-caption uppercase">Code</p>
                <p className="mt-1 font-mono text-sm font-semibold text-monograph-paper group-hover:text-cloud-azure">
                  GitHub Profile ↗
                </p>
                <p className="mt-1 font-mono text-[10px] text-monograph-muted truncate">
                  {IDENTITY.github}
                </p>
              </a>

              <a
                href={`https://twitter.com/${IDENTITY.twitter.slice(1)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-sm border border-monograph-rule bg-monograph-bg/60 p-4 transition-colors hover:border-cloud-gcp hover:bg-monograph-rule/20"
              >
                <p className="font-mono text-[10px] text-monograph-caption uppercase">Updates</p>
                <p className="mt-1 font-mono text-sm font-semibold text-monograph-paper group-hover:text-cloud-gcp">
                  Twitter / X ↗
                </p>
                <p className="mt-1 font-mono text-[10px] text-monograph-muted truncate">
                  {IDENTITY.twitter}
                </p>
              </a>
            </div>

            {/* Scoping Checklist for Prospective Clients */}
            <div className="mt-8 rounded-sm border border-monograph-rule/60 bg-monograph-bg/40 p-5">
              <p className="font-mono text-xs font-semibold text-monograph-paper">
                Recommended Information to Include in Your Inquiry:
              </p>
              <ul className="mt-3 space-y-1.5 font-mono text-[11px] text-monograph-muted">
                <li><span className="text-cloud-gcp">1.</span> Target system problem (e.g. LLM cost optimization, microservice migration, MVP build)</li>
                <li><span className="text-cloud-gcp">2.</span> Current stack &amp; cloud environment (Python, AWS, Azure, GCP, Postgres, Weaviate)</li>
                <li><span className="text-cloud-gcp">3.</span> Target timeline and preferred engagement model (Fixed-scope vs Fractional)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Brand Stamp */}
        <div className="col-span-12 mt-8 flex flex-col justify-between lg:col-span-4 lg:mt-0">
          <div className="rounded-sm border border-monograph-rule p-6">
            <p className="font-mono text-[10px] uppercase tracking-wider text-monograph-caption">
              Location &amp; Delivery
            </p>
            <p className="mt-2 font-mono text-sm text-monograph-paper font-medium">
              Remote Worldwide
            </p>
            <p className="mt-1 text-xs text-monograph-muted">
              Async-first communication, sprint reviews, and automated CI/CD handovers.
            </p>
            <div className="mt-6 border-t border-monograph-rule pt-4">
              <p className="font-mono text-[10px] uppercase tracking-wider text-monograph-caption">
                Typical Turnaround
              </p>
              <p className="mt-1 font-mono text-xs text-cloud-gcp">
                ● Technical inquiries answered within 24 hours
              </p>
            </div>
          </div>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, scale: 0.95 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-8 flex justify-end"
          >
            <Image
              src="/logo.png"
              alt="Wajahat Ali Khan Brand Signature"
              width={160}
              height={130}
              className="h-auto w-36 object-contain opacity-70 hover:opacity-100 transition-opacity"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

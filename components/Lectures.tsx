"use client";

import { motion } from "framer-motion";
import { technicalPosts } from "@/lib/projects";
import { useReducedMotion } from "@/lib/useReducedMotion";

export function Lectures() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="writing" className="relative z-10 py-24">
      <div className="monograph-grid mb-12">
        <div className="col-span-12">
          <p className="technical-caption">Technical Insights &amp; Writing</p>
          <h2 className="mt-2 text-display-md text-monograph-paper">
            System Design, Caching &amp; AI Architectures
          </h2>
          <p className="mt-4 max-w-2xl font-mono text-xs text-monograph-muted">
            Published technical deep dives on distributed message queues, database caching strategies, networking protocols, and agentic AI pipelines.
          </p>
        </div>
      </div>

      <div className="monograph-grid gap-y-12">
        {technicalPosts.map((post, i) => (
          <motion.article
            key={post.id}
            className="col-span-12 grid grid-cols-12 gap-6 lg:gap-8"
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="col-span-12 lg:col-span-7">
              <a
                href={post.postUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-sm border border-monograph-rule bg-monograph-rule/20 p-6 transition-colors hover:border-monograph-paper/30 hover:bg-monograph-rule/40"
              >
                <p className="technical-caption">{post.source}</p>
                <p className="mt-3 font-mono text-sm text-monograph-paper group-hover:underline">
                  Read on LinkedIn →
                </p>
                <p className="mt-2 font-mono text-[10px] text-monograph-caption">
                  {post.format} · {post.date}
                </p>
              </a>
            </div>

            <div className="col-span-12 flex flex-col justify-center lg:col-span-5">
              <span className="technical-caption">{post.source}</span>
              <h3 className="mt-2 text-xl font-medium text-monograph-paper md:text-2xl">
                {post.title}
              </h3>
              <div className="mt-4 flex gap-6 font-mono text-[10px] text-monograph-caption">
                <span>{post.date}</span>
                <span>{post.format}</span>
              </div>

              <p className="mt-4 line-clamp-4 text-sm leading-relaxed text-monograph-muted">
                &ldquo;{post.excerpt}&rdquo;
              </p>

              <a
                href={post.postUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="technical-caption mt-4 inline-block hover:text-monograph-paper"
              >
                Read full post on LinkedIn →
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";

const NAV_ITEMS = [
  { id: "services", label: "Services" },
  { id: "projects", label: "Case Studies" },
  { id: "process", label: "Methodology" },
  { id: "profile", label: "Credentials" },
  { id: "specs", label: "Infra Specs" },
  { id: "writing", label: "Insights" },
  { id: "contact", label: "Contact" },
] as const;

export function StickyNav() {
  return (
    <nav
      className="sticky top-0 z-50 border-b border-monograph-rule/80 bg-monograph-bg/90 backdrop-blur-md"
      aria-label="Section navigation"
    >
      <div className="monograph-grid py-2.5">
        <div className="col-span-12 flex items-center justify-between">
          <a
            href="#hero"
            className="group flex items-center gap-3"
            aria-label="Wajahat Ali Khan — Home"
          >
            <div className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-sm border border-monograph-rule bg-monograph-bg/90 shadow-sm transition-all duration-300 group-hover:border-cloud-gcp/60 group-hover:shadow-[0_0_14px_rgba(52,168,83,0.2)]">
              <Image
                src="/logo-mark-transparent.png"
                alt="WAK Monogram"
                width={20}
                height={20}
                className="h-5 w-5 object-contain transition-transform duration-300 group-hover:scale-110"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-xs font-semibold tracking-wider text-monograph-paper transition-colors group-hover:text-monograph-paper">
                WAJAHAT ALI KHAN
              </span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-monograph-caption transition-colors group-hover:text-cloud-gcp">
                Solutions Consultant
              </span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-x-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="technical-caption transition-colors hover:text-monograph-paper"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="rounded-sm border border-cloud-gcp/60 bg-cloud-gcp/10 px-3 py-1 font-mono text-xs text-cloud-gcp transition-colors hover:bg-cloud-gcp hover:text-monograph-bg"
          >
            Initiate Project →
          </a>
        </div>
      </div>
    </nav>
  );
}

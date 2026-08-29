import { allSpecs, allEndpoints } from "@/lib/projects";
import { ApiBlueprintCanvas } from "@/components/ApiBlueprintCanvas";

export function InfraSpecs() {
  return (
    <section id="specs" className="relative z-10 py-24">
      <div className="monograph-grid">
        <div className="col-span-12 mb-12">
          <p className="technical-caption">Specifications</p>
          <h2 className="mt-2 text-display-md text-monograph-paper">
            API &amp; Infrastructure Specs
          </h2>
        </div>

        <div className="col-span-12 lg:col-span-5">
          <div className="space-y-4">
            {allSpecs.map((spec) => (
              <a
                key={spec.id}
                href={`/specs/${spec.filename}`}
                download
                className="group block rounded-sm border border-monograph-rule p-6 transition-colors hover:border-monograph-paper/30 hover:bg-monograph-rule/20"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="technical-caption">
                      {spec.type === "api" ? "API Contract" : "Deployment"}
                    </span>
                    <h3 className="mt-2 font-mono text-sm text-monograph-paper group-hover:underline">
                      {spec.title}
                    </h3>
                    <p className="mt-2 text-xs text-monograph-muted">
                      {spec.description}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-[10px] text-monograph-caption">
                      PDF
                    </span>
                    <p className="mt-1 font-mono text-xs text-monograph-paper">
                      {spec.pages} pp
                    </p>
                  </div>
                </div>
                <p className="mt-4 font-mono text-[10px] text-cloud-gcp">
                  ↓ Download {spec.filename}
                </p>
              </a>
            ))}
          </div>
        </div>

        <div className="col-span-12 mt-8 lg:col-span-7 lg:mt-0 lg:sticky lg:top-24 lg:self-start">
          <ApiBlueprintCanvas endpoints={allEndpoints} />
          <p className="mt-3 font-mono text-[10px] text-monograph-caption">
            Production API contracts &amp; payload schemas designed for high-concurrency microservices.
          </p>
        </div>
      </div>
    </section>
  );
}

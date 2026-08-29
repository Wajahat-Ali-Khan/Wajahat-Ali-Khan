import {
  skillGroups,
  certifications,
  education,
  employment,
  featuredProject,
} from "../lib/profile";
import { ProfileSchema } from "../lib/schemas/profile.schema";
import { projects } from "../lib/projects";

function fail(message: string): never {
  console.error(`\n[validate-content] FAILED: ${message}\n`);
  process.exit(1);
}

function main() {
  console.log("Validating profile content...");

  const profileParse = ProfileSchema.safeParse({
    skillGroups,
    certifications,
    education,
    employment,
    featuredProject,
  });

  if (!profileParse.success) {
    fail(
      `profile schema errors:\n${profileParse.error.issues
        .map((i) => `  - ${i.path.join(".")}: ${i.message}`)
        .join("\n")}`
    );
  }

  // Cross-link integrity: relatedProjectId must reference an existing project.
  const projectIds = new Set(projects.map((p) => p.id));
  const brokenLinks = employment
    .filter((e) => e.relatedProjectId && !projectIds.has(e.relatedProjectId))
    .map((e) => `${e.id} → ${e.relatedProjectId}`);

  if (brokenLinks.length > 0) {
    fail(`employment relatedProjectId references missing projects:\n${brokenLinks
      .map((b) => `  - ${b}`)
      .join("\n")}`);
  }

  // Source-priority invariant: no Cigna entry (conflicts with resume).
  const cignaEntries = employment.filter((e) =>
    e.company.toLowerCase().includes("cigna")
  );
  if (cignaEntries.length > 0) {
    fail(`found ${cignaEntries.length} Cigna employment entries — resume is canonical; remove them.`);
  }

  // Employment order must be strictly descending without gaps.
  const orders = employment.map((e) => e.order).sort((a, b) => a - b);
  for (let i = 0; i < orders.length; i++) {
    if (orders[i] !== i + 1) {
      fail(`employment order must be contiguous 1..N (found ${orders.join(",")})`);
    }
  }

  // Duplicate IDs across collections.
  const ids = [
    ...skillGroups.map((s) => s.id),
    ...certifications.map((c) => c.id),
    ...education.map((e) => e.id),
    ...employment.map((e) => e.id),
  ];
  const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
  if (dupes.length > 0) {
    fail(`duplicate profile IDs: ${Array.from(new Set(dupes)).join(", ")}`);
  }

  console.log(
    `OK: ${skillGroups.length} skill groups, ${certifications.length} certs, ${education.length} education entries, ${employment.length} employment entries, featured project "${featuredProject.title}".`
  );
}

try {
  main();
} catch (err) {
  fail(String(err));
}

import { describe, expect, it } from "vitest";
import {
  skillGroups,
  certifications,
  education,
  employment,
  featuredProject,
  allProfileSkills,
} from "../profile";
import { ProfileSchema } from "../schemas/profile.schema";
import { projects } from "../projects";

describe("profile data", () => {
  it("has non-empty skill groups", () => {
    expect(skillGroups.length).toBeGreaterThan(0);
    for (const group of skillGroups) {
      expect(group.skills.length).toBeGreaterThan(0);
      expect(group.label).toBeTruthy();
    }
  });

  it("certifications have name, issuer, and issued", () => {
    for (const cert of certifications) {
      expect(cert.name).toBeTruthy();
      expect(cert.issuer).toBeTruthy();
      expect(cert.issued).toBeTruthy();
    }
  });

  it("does not include a Cigna employment entry", () => {
    const cigna = employment.filter((e) =>
      e.company.toLowerCase().includes("cigna")
    );
    expect(cigna).toHaveLength(0);
  });

  it("employment is in descending chronological order via contiguous order field", () => {
    const orders = employment.map((e) => e.order);
    const sorted = [...orders].sort((a, b) => a - b);
    expect(orders).toEqual(sorted);
    orders.forEach((o, i) => expect(o).toBe(i + 1));
  });

  it("relatedProjectId references resolve to known project ids", () => {
    const projectIds = new Set(projects.map((p) => p.id));
    for (const entry of employment) {
      if (entry.relatedProjectId) {
        expect(projectIds.has(entry.relatedProjectId)).toBe(true);
      }
    }
  });

  it("education entries are complete", () => {
    for (const edu of education) {
      expect(edu.degree).toBeTruthy();
      expect(edu.field).toBeTruthy();
      expect(edu.institution).toBeTruthy();
    }
  });

  it("featured project has bullets and related skills", () => {
    expect(featuredProject.bullets.length).toBeGreaterThan(0);
    expect(featuredProject.relatedSkills.length).toBeGreaterThan(0);
  });

  it("passes Zod profile schema validation", () => {
    const parse = ProfileSchema.safeParse({
      skillGroups,
      certifications,
      education,
      employment,
      featuredProject,
    });
    expect(parse.success).toBe(true);
  });

  it("aggregated skill list is non-empty and unique", () => {
    expect(allProfileSkills.length).toBeGreaterThan(0);
    expect(new Set(allProfileSkills).size).toBe(allProfileSkills.length);
  });
});

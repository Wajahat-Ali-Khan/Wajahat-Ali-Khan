import { z } from "zod";

export const SkillGroupSchema = z.object({
  id: z.string().min(1),
  label: z.string().min(1),
  skills: z.array(z.string().min(1)).min(1),
});

export const CertificationSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  issuer: z.string().min(1),
  issued: z.string().min(1),
  credentialUrl: z.string().url().optional(),
});

export const EducationSchema = z.object({
  id: z.string().min(1),
  degree: z.string().min(1),
  field: z.string().min(1),
  institution: z.string().min(1),
});

export const EmploymentEntrySchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  company: z.string().min(1),
  location: z.string().min(1),
  period: z.string().min(1),
  order: z.number().int().positive(),
  highlights: z.array(z.string().min(1)).min(1).max(4),
  relatedProjectId: z.string().min(1).optional(),
});

export const FeaturedProjectSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  role: z.string().min(1),
  bullets: z.array(z.string().min(1)).min(1),
  relatedSkills: z.array(z.string().min(1)).min(1),
});

export const ProfileSchema = z.object({
  skillGroups: z.array(SkillGroupSchema).min(1),
  certifications: z.array(CertificationSchema).min(1),
  education: z.array(EducationSchema).min(1),
  employment: z.array(EmploymentEntrySchema).min(1),
  featuredProject: FeaturedProjectSchema,
});

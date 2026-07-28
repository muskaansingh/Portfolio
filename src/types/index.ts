export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail";
}

export interface SkillCategory {
  title: string;
  description: string;
  icon: "braces" | "layers" | "palette" | "wrench" | "flask";
  skills: string[];
}

export interface ExperienceEntry {
  role: string;
  company: string;
  companyUrl?: string;
  duration: string;
  current: boolean;
  summary: string;
  points: string[];
  tags: string[];
}

export type ProjectIllustrationVariant = "edtech" | "analytics" | "tooling" | "crm" | "ecommerce";

export interface ProjectEntry {
  name: string;
  description: string;
  contribution: string;
  tech: string[];
  category: string;
  illustration: ProjectIllustrationVariant;
}

export interface CertificationEntry {
  name: string;
}

export interface StatEntry {
  label: string;
  value: number;
  suffix: string;
}

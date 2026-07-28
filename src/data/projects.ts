import type { ProjectEntry } from "../types";

export const projects: ProjectEntry[] = [
  {
    name: "PrepLadder Website",
    description:
      "High-traffic edTech platform for medical students preparing for competitive exams.",
    contribution:
      "Built and maintained core, high-traffic pages focused on speed and engagement.",
    tech: ["React", "Next.js"],
    category: "edTech Platform",
    illustration: "edtech",
  },
  {
    name: "PrepStar Dashboard",
    description: "Advanced analytics and tracking dashboard for exam performance.",
    contribution:
      "Implemented data-heavy dashboard views with Redux Toolkit for predictable state management.",
    tech: ["React", "Redux Toolkit"],
    category: "Analytics Dashboard",
    illustration: "analytics",
  },
  {
    name: "Admin Panel & QBank",
    description: "Management system for question banks and educational content.",
    contribution:
      "Developed internal tooling for content and question bank administration using Material UI.",
    tech: ["React", "Material UI"],
    category: "Internal Tooling",
    illustration: "tooling",
  },
  {
    name: "Call Audit & CRM",
    description: "Internal support CRM and audit system.",
    contribution:
      "Built REST API-driven workflows for support teams to audit and manage calls.",
    tech: ["React", "REST APIs"],
    category: "Internal CRM",
    illustration: "crm",
  },
  {
    name: "Auto Parts Shop",
    description: "Modern e-commerce UI for automotive parts.",
    contribution:
      "Designed a responsive, utility-first storefront experience with Tailwind CSS.",
    tech: ["React", "Tailwind CSS"],
    category: "E-Commerce",
    illustration: "ecommerce",
  },
];

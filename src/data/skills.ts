import type { SkillCategory } from "../types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages & Core",
    description: "Foundations of the web platform",
    icon: "braces",
    skills: ["JavaScript", "TypeScript", "HTML5", "CSS3"],
  },
  {
    title: "Frameworks & Libraries",
    description: "Building blocks for scalable UIs",
    icon: "layers",
    skills: ["React.js", "Next.js", "Redux", "Context API", "Zustand"],
  },
  {
    title: "Styling & UI",
    description: "Crafting polished, responsive interfaces",
    icon: "palette",
    skills: ["Tailwind CSS", "Material UI", "Responsive Design"],
  },
  {
    title: "Architecture & Tools",
    description: "Engineering for scale and maintainability",
    icon: "wrench",
    skills: [
      "REST API",
      "SEO Optimization",
      "Clean Architecture",
      "Git",
      "GitHub",
      "GitHub Actions",
      "Webpack",
    ],
  },
  {
    title: "Testing",
    description: "Confidence through coverage",
    icon: "flask",
    skills: ["Jest", "React Testing Library"],
  },
];

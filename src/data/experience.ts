import type { ExperienceEntry } from "../types";

export const experience: ExperienceEntry[] = [
  {
    role: "Frontend Developer",
    company: "Prepladder (By Unacademy)",
    duration: "Aug 2022 – Present",
    current: true,
    summary:
      "Leading development of core frontend systems for a large-scale edTech platform for medical aspirants.",
    points: [
      "Developing responsive, high-performance UIs using React.js and Next.js.",
      "Optimizing UX consistency and cross-browser compatibility across critical modules.",
    ],
    tags: ["React.js", "Next.js", "Performance"],
  },
  {
    role: "React Developer",
    company: "Spineor Webservices Pvt. Ltd.",
    duration: "Feb 2021 – July 2022",
    current: false,
    summary:
      "Architected scalable React.js applications using clean architecture principles.",
    points: [
      "Improved performance by reducing Webpack bundle sizes and optimizing asset management.",
      "Collaborated with cross-functional teams to ensure high code quality through structured reviews.",
    ],
    tags: ["React.js", "Webpack", "Clean Architecture"],
  },
];

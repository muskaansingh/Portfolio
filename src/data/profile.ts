import type { SocialLink, StatEntry } from "../types";

export const profile = {
  name: "Muskaan Singh",
  title: "Senior Frontend Developer",
  tagline: "React.js • Next.js • TypeScript",
  location: "India",
  currentCompany: "Prepladder (By Unacademy)",
  email: "muskaansingh1688@gmail.com",
  intro:
    "Senior Frontend Developer with 5+ years of experience building scalable, high-performance web applications using React.js, Next.js, and TypeScript. I enjoy creating intuitive user experiences, designing reusable frontend architectures, and optimizing applications for performance, accessibility, and scalability.",
  currentlyLearning:
    "AI-powered development, advanced TypeScript, and modern frontend architecture.",
  funFact: "I love optimizing Webpack bundles to make websites lightning fast!",
} as const;

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/muskaansingh",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/muskaansingh",
    icon: "linkedin",
  },
  {
    label: "Email",
    href: "mailto:muskaansingh1688@gmail.com",
    icon: "mail",
  },
];

export const stats: StatEntry[] = [
  { label: "Years of Experience", value: 5, suffix: "+" },
  { label: "Companies", value: 2, suffix: "" },
  { label: "Featured Projects", value: 5, suffix: "" },
  { label: "Core Technologies", value: 20, suffix: "+" },
];

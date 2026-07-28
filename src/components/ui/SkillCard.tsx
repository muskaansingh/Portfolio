import { motion } from "framer-motion";
import { Braces, FlaskConical, Layers, Palette, Wrench } from "lucide-react";
import type { SkillCategory } from "../../types";
import { Badge } from "./Badge";

const icons = {
  braces: Braces,
  layers: Layers,
  palette: Palette,
  wrench: Wrench,
  flask: FlaskConical,
} as const;

export function SkillCard({ category }: { category: SkillCategory }) {
  const Icon = icons[category.icon];

  return (
    <motion.div
      className="card-surface group flex flex-col gap-5 rounded-2xl p-6 transition-colors hover:border-primary-dim"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary-soft transition-colors group-hover:bg-primary/20">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          <h3 className="font-display text-base font-semibold text-ink">{category.title}</h3>
          <p className="text-xs text-ink-faint">{category.description}</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <Badge key={skill}>{skill}</Badge>
        ))}
      </div>
    </motion.div>
  );
}

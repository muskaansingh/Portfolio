import { motion } from "framer-motion";
import { Lock, Sparkles } from "lucide-react";
import type { ProjectEntry } from "../../types";
import { Badge } from "./Badge";
import { ProjectIllustration } from "./ProjectIllustration";

export function ProjectCard({ project }: { project: ProjectEntry }) {
  return (
    <motion.article
      className="card-surface group flex flex-col overflow-hidden rounded-2xl transition-colors hover:border-primary-dim"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="relative aspect-video overflow-hidden border-b border-line bg-gradient-to-br from-surface-2 via-surface to-surface-2">
        <div className="bg-grid absolute inset-0 opacity-40" aria-hidden="true" />
        <div
          className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl transition-transform duration-700 group-hover:scale-125"
          aria-hidden="true"
        />
        <div className="absolute inset-0 flex items-center justify-center p-6 transition-transform duration-500 group-hover:scale-[1.03]">
          <ProjectIllustration variant={project.illustration} />
        </div>
        <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full border border-line-soft bg-canvas/60 px-3 py-1 text-[11px] font-medium tracking-wide text-ink-faint uppercase">
          {project.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-semibold text-ink">{project.name}</h3>
          <span className="inline-flex shrink-0 items-center text-ink-faint" title="Internal / proprietary project">
            <Lock className="h-4 w-4" aria-hidden="true" />
            <span className="sr-only">Internal project — no public link available</span>
          </span>
        </div>
        <p className="text-sm text-ink-muted">{project.description}</p>
        <p className="flex items-start gap-2 text-sm text-ink-muted/90">
          <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-primary-soft" aria-hidden="true" />
          <span>{project.contribution}</span>
        </p>
        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {project.tech.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

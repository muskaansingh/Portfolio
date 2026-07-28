import { Reveal } from "./Reveal";
import { cn } from "../../lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({ eyebrow, title, description, align = "center" }: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "mb-14 max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
      )}
    >
      <span className="mb-3 inline-block font-mono text-xs uppercase tracking-[0.2em] text-primary-soft">
        {eyebrow}
      </span>
      <h2 className="text-3xl font-semibold text-ink sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-relaxed text-ink-muted">{description}</p> : null}
    </Reveal>
  );
}

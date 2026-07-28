import { experience } from "../../data/experience";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { Badge } from "../ui/Badge";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading eyebrow="Work Experience" title="Where I've built things" />

        <div className="relative mx-auto max-w-3xl">
          <div
            className="absolute top-2 bottom-2 left-[7px] w-px bg-gradient-to-b from-primary via-line to-transparent sm:left-[9px]"
            aria-hidden="true"
          />

          <ol className="space-y-14">
            {experience.map((role, index) => (
              <li key={role.company} className="relative pl-8 sm:pl-10">
                <span
                  className={`absolute top-1.5 left-0 h-[15px] w-[15px] rounded-full border-2 sm:h-[19px] sm:w-[19px] ${
                    role.current ? "border-primary bg-primary shadow-[0_0_0_4px_rgba(139,92,246,0.2)]" : "border-line-soft bg-surface-2"
                  }`}
                  aria-hidden="true"
                />
                <Reveal delay={index * 0.1}>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-xs tracking-wide text-primary-soft uppercase">
                      {role.duration}
                    </span>
                    {role.current && (
                      <span className="rounded-full bg-primary/15 px-2.5 py-0.5 text-[11px] font-medium text-primary-soft">
                        Current
                      </span>
                    )}
                  </div>

                  <h3 className="font-display mt-2 text-xl font-semibold text-ink sm:text-2xl">
                    {role.role} <span className="text-ink-faint">@</span> {role.company}
                  </h3>

                  <p className="mt-3 text-base leading-relaxed text-ink-muted">{role.summary}</p>

                  <ul className="mt-3 space-y-2">
                    {role.points.map((point) => (
                      <li key={point} className="flex gap-2 text-sm leading-relaxed text-ink-muted">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-faint" aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {role.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

import { GraduationCap, BadgeCheck } from "lucide-react";
import { certifications, education } from "../../data/achievements";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

export function Achievements() {
  return (
    <section id="achievements" className="scroll-mt-24 py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading eyebrow="Achievements" title="Education & Certifications" />

        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
          <Reveal className="sm:col-span-2">
            <div className="card-surface flex items-start gap-4 rounded-2xl p-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary-soft">
                <GraduationCap className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-ink">{education.degree}</h3>
                <p className="mt-1 text-sm text-ink-muted">
                  {education.institution} &middot; {education.duration}
                </p>
              </div>
            </div>
          </Reveal>

          {certifications.map((cert, index) => (
            <Reveal key={cert.name} delay={0.1 + index * 0.08}>
              <div className="card-surface flex h-full items-start gap-4 rounded-2xl p-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary-soft">
                  <BadgeCheck className="h-5 w-5" aria-hidden="true" />
                </span>
                <p className="text-sm leading-relaxed font-medium text-ink">{cert.name}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

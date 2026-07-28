import { profile, stats } from "../../data/profile";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { StatCounter } from "../ui/StatCounter";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="About Me"
          title="Engineering thoughtful, high-performance frontends"
          align="left"
        />

        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-6 text-base leading-relaxed text-ink-muted sm:text-lg">
            <Reveal>
              <p>{profile.intro}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                Currently at <span className="font-semibold text-ink">{profile.currentCompany}</span>, leading
                development of core frontend systems for a large-scale edTech platform for medical aspirants.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p>
                Right now, I&apos;m focused on learning{" "}
                <span className="font-semibold text-ink">{profile.currentlyLearning}</span>
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="grid grid-cols-2 gap-5">
            {stats.map((stat) => (
              <div key={stat.label} className="card-surface rounded-2xl p-6">
                <div className="font-display text-3xl font-bold text-ink sm:text-4xl">
                  <StatCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-2 text-sm text-ink-faint">{stat.label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

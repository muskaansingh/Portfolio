import { skillCategories } from "../../data/skills";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { SkillCard } from "../ui/SkillCard";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-t border-line-soft bg-surface/40 py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Technical Arsenal"
          description="The languages, frameworks, and tools I rely on to build scalable, high-performance products."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <Reveal key={category.title} delay={index * 0.08}>
              <SkillCard category={category} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

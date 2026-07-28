import { projects } from "../../data/projects";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { ProjectCard } from "../ui/ProjectCard";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 border-t border-line-soft bg-surface/40 py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Featured Work"
          title="Projects & Products"
          description="A selection of products I've built and contributed to as part of my professional work."
        />
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.name} delay={index * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

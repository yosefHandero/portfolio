import ProjectCard from "@/components/ProjectCard";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section
      id="work"
      className="mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      <Reveal className="mb-12 text-center sm:mb-14">
        <p className="section-eyebrow mb-3 text-xs font-semibold text-green-600">
          Selected Work
        </p>
        <h2 className="text-3xl font-semibold text-neutral-950 sm:text-4xl lg:text-5xl">
          Four apps, built and deployed
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg">
          Each project is a live demo — designed, coded, and shipped by me. Click
          through to see the real interface.
        </p>
      </Reveal>

      <Stagger
        className="grid grid-cols-1 gap-6 lg:grid-cols-2"
        stagger={0.1}
      >
        {projects.map((project) => (
          <StaggerItem key={project.title}>
            <ProjectCard project={project} />
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}

import { AnimatedProjectShowCase } from "@/components/ui/animated-projects";
import { SectionHeader } from "@/components/ui/section-header";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="min-h-screen">
      <div className="py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-10">
          <SectionHeader title="我的作品集" align="right" />
        </div>
      </div>
      <AnimatedProjectShowCase projects={projects} autoplay={false} />
    </section>
  );
}

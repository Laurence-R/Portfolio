import { HorizontalTimeline } from "@/components/ui/horizontal-timeline";
import { experienceEntries } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience">
      <div className="relative w-full overflow-clip">
        <HorizontalTimeline entries={experienceEntries} />
      </div>
    </section>
  );
}

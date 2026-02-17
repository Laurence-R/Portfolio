import Image from "next/image";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";

export default function Home() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen isolate">
      <Hero />
      <About />
      <Experience />
      <Projects />
    </div>
  );
}

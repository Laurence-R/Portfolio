import { AnimatedProjectShowCase } from "../ui/animated-projects"

const projects = [
  {
    title: "AI Tool Hub",
    labels: ["AI", "Workflow", "Productivity", "Social media platform"],
    description: "AI Tool Hub is a modern platform for exploring and sharing AI tools. It helps users discover, compare, and rate various AI tools. Additionally, the platform features a collection system, allowing users to share curated lists and enhance their workflow efficiency with the best tools.",
    imgSrc: "/projects/aitoolhub.png",
    demoLink: "https://example.com",
    sourceLink: "https://github.com/Laurence-R/AI-Tool-Hub"
  },
  {
    title: "GuardPixel",
    labels: ["Security", "Image", "Watermarking", "AI"],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi esse, ipsum repudiandae quae veritatis facilis eaque debitis. Illum, harum repellendus reiciendis eligendi recusandae, sequi esse cumque amet iste asperiores nemo.",
    imgSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    demoLink: "https://example.com",
    sourceLink: "https://example.com"
  },
  {
    title: "Project 3",
    labels: ["AI", "Workflow", "Productivity"],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi esse, ipsum repudiandae quae veritatis facilis eaque debitis. Illum, harum repellendus reiciendis eligendi recusandae, sequi esse cumque amet iste asperiores nemo.",
    imgSrc: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    demoLink: "https://example.com",
    sourceLink: "https://example.com"
  },{
    title: "Project 4",
    labels: ["AI", "Workflow", "Productivity"],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi esse, ipsum repudiandae quae veritatis facilis eaque debitis. Illum, harum repellendus reiciendis eligendi recusandae, sequi esse cumque amet iste asperiores nemo.",
    imgSrc: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    demoLink: "https://example.com",
    sourceLink: "https://example.com"
  },
]

export function Projects() {
  return (
    <section id="projects" className="min-h-screen">
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
          <h2 className="text-end text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl md:text-4xl mb-2 md:mb-4">
            我的作品集
          </h2>
        </div>

      </div>
      <AnimatedProjectShowCase 
        projects={projects}
      />
    </section>
  )
}

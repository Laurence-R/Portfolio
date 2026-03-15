import { img } from "motion/react-client"
import { AnimatedProjectShowCase } from "../ui/animated-projects"

const projects = [
  {
    title: "AI Tool Hub",
    labels: ["AI", "Workflow", "Productivity", "Social media platform"],
    description: "A full-stack platform for discovering, comparing, and reviewing AI tools. Built with Next.js 16, React 19, Tailwind CSS 4, and Prisma, featuring Glassmorphism UI with dark mode. Highlights include side-by-side tool comparison (up to 4), OAuth authentication, personalized collections, community reviews, and an admin dashboard.",
    imgSrc: "/projects/aitoolhub.png",
    demoLink: null,
    sourceLink: "https://github.com/Laurence-R/AI-Tool-Hub"
  },
  {
    title: "InvisiGuard",
    labels: ["Cyber Security", "Image", "Watermarking", "AI"],
    description: "A privacy-first, browser-based digital watermarking tool built with Next.js 16, React 19, and Tailwind CSS 4. Uses DWT and QIM algorithms to embed invisible, resilient watermarks into images. Runs 100% client-side via Web Workers — no server uploads, zero data leakage, and smooth performance even during bulk processing.",
    imgSrc: "/projects/invisiguard.png",
    demoLink: null,
    sourceLink: "https://github.com/Laurence-R/InvisiGuard"
  },
  {
    title: "Chicken Transformer",
    labels: ["AI", "Game", "Workout", "Fun", "Nvidia Jetson Orin Nano", "Object Detection"],
    description: "A vision-based fitness analytics system requiring no wearable sensors. Powered by YOLOv8-Pose with TensorRT FP16 on NVIDIA Jetson, it processes posture in real-time at sub-30ms latency. A geometry-driven rep counter achieves 96%+ accuracy across 10+ exercises, with a state machine to prevent false triggers.",
    imgSrc: "/projects/chickentransformer.png",
    demoLink: null,
    sourceLink: "https://github.com/Laurence-R/chicken-transformer"
  },
  {
    title: "Professor Personal Website",
    labels: ["Personal Website", "Next.js", "Tailwind CSS", "React", "Aceternity UI"],
    description: "A personal website built with Next.js 16, Tailwind CSS, and Aceternity UI, designed to showcase the professor's research, publications, and courses. The website features a clean and modern design with a focus on user experience and accessibility. It includes sections for the professor's biography, research interests, publications, and a contact form for inquiries.",
    imgSrc: "/projects/iccweb.png",
    demoLink: "https://personal-web-icc.vercel.app/",
    sourceLink: "https://github.com/Laurence-R/icc_web"
  },
  {
    title: "Scheduler Bot for GDGoC NCUE (In Progress)",
    labels: ["Full-stack", "Next.js", "Supabase", "Discord OAuth2", "Meeting Scheduler"],
    description: "A full-stack meeting scheduler for GDGoC NCUE built with Next.js 16 and Supabase. Features Discord OAuth2 authentication, real-time updates, calendar integration, and notifications for seamless community coordination.",
    imgSrc: "/projects/schedulerbot.png",
    demoLink: "https://discord-scheduler-bot.vercel.app/",
    sourceLink: "https://github.com/Laurence-R/NCUE-GDG-Scheduler-Bot"
  },
  {
    title: "Midas (In Progress)",
    labels: ["Desktop App", "Finance Manangement", "Edge AI", "Investment"],
    description: "A desktop application for personal finance management, built with CustomTKinter and Edge AI. Midas provides users with an intuitive interface to track expenses, set budgets, and receive AI-driven insights for smarter financial decisions. The app leverages local AI models to analyze spending patterns and offer personalized recommendations without compromising user privacy.",
    imgSrc: "/projects/midas.png",
    demoLink: null,
    sourceLink: null
  }
]

export function Projects() {
  return (
    <section id="projects" className="min-h-screen">
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
          <h2 className="text-center text-2xl font-bold text-slate-900 dark:text-white sm:text-end sm:text-3xl md:text-4xl mb-2 md:mb-4">
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

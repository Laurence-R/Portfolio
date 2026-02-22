import { AnimatedProjectShowCase } from "../ui/animated-projects"

const projects = [
  {
    title: "AI Tool Hub",
    labels: ["AI", "Workflow", "Productivity", "Social media platform"],
    description: "AI Tool Hub is a modern, full-stack platform designed for discovering, comparing, and reviewing AI tools. Built with a cutting-edge stack including Next.js 16, React 19, Tailwind CSS 4, and Prisma , it features a sleek Glassmorphism UI with seamless dark mode support. Key highlights include an intuitive side-by-side comparison feature (up to 4 tools), a robust user authentication system with OAuth integrations, personalized tool collections, and an interactive community review system. The platform is also fully equipped with a comprehensive admin dashboard for efficient data and user management.",
    imgSrc: "/projects/aitoolhub.png",
    demoLink: "https://example.com",
    sourceLink: "https://github.com/Laurence-R/AI-Tool-Hub"
  },
  {
    title: "InvisiGuard",
    labels: ["Cyber Security", "Image", "Watermarking", "AI"],
    description: "InvisiGuard is a privacy-first, browser-based digital watermarking solution that seamlessly blends robust copyright protection with high performance. Built with a modern stack including Next.js 16, React 19, and Tailwind CSS 4, it leverages advanced DWT (Discrete Wavelet Transform) and QIM (Quantization Index Modulation) algorithms to embed invisible, highly resilient watermarks into images. Its standout feature is its 100% client-side processing architecture powered by Native Web Workers, ensuring absolute data privacy with zero server uploads and a smooth, freeze-free user experience even during bulk image processing.",
    imgSrc: "/projects/invisiguard.png",
    demoLink: "https://example.com",
    sourceLink: "https://github.com/Laurence-R/InvisiGuard"
  },
  {
    title: "Chicken Transformer",
    labels: ["AI", "Game", "Workout", "Fun", "Nvidia Jetson Orin Nano", "Object Detection"],
    description: "Chicken Transformer is a vision-based autonomous fitness analytics system designed for zero-contact natural interaction without the need for any wearable sensors. Powered by edge computing on the NVIDIA Jetson platform , the system utilizes the YOLOv8-Pose model combined with TensorRT FP16 acceleration to process human posture in real-time. The project features three core innovations: extreme edge optimization that guarantees complete offline privacy with sub-30ms latency , a geometric algorithm-driven smart counter that achieves over 96% accuracy across 10+ core fitness exercises , and a robust natural user experience featuring a dynamic state machine to prevent false triggers and ensure seamless interaction.",
    imgSrc: "/projects/chickentransformer.png",
    demoLink: "https://example.com",
    sourceLink: "https://github.com/Laurence-R/chicken-transformer.git"
  }
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

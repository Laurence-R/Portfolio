"use client";
import { IconArrowLeft, IconArrowRight, IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";

type Projects = {
  title: string;
  labels: string[];
  description: string;
  imgSrc: string;
  demoLink: string;
  sourceLink: string;
}

export function AnimatedProjectShowCase ({ 
  projects, 
  autoplay=false 
}: {
  projects: Projects[]
  autoplay?: boolean
}) {
  const [active, setActive] = useState(0);

  // Button Handlers
  const handleNext = () => {
    setActive((prev) => (prev + 1) % projects.length);
  }

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + projects.length) % projects.length);
  }

  const isActive = (index: number) => {
    return index === active;
  }

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  // Pre-compute stable rotation values per project to avoid hydration mismatch
  const [rotations, setRotations] = useState<number[]>(() =>
    projects.map(() => 0)
  );

  useEffect(() => {
    setRotations(projects.map(() => Math.floor(Math.random() * 21) - 10));
  }, [projects.length]);

  return (
    <div className="mx-auto max-w-sm px-4 py-12 font-sans antialiased sm:max-w-xl md:max-w-5xl md:px-8 md:py-20 lg:max-w-7xl lg:px-12">
      <div className="relative grid grid-cols-1 gap-10 md:gap-16 md:grid-cols-[2fr_3fr]">
        {/* Image of projects */}
        <div>
          <div className="relative h-60 w-full sm:h-72 md:h-80">
            <AnimatePresence>
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: rotations[index] ?? 0,
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : rotations[index] ?? 0,
                    zIndex: isActive(index)
                      ? 40
                      : projects.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: rotations[index] ?? 0,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <img
                    src={project.imgSrc}
                    alt={project.title}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        {/* Info of projects */}
        <div className="flex flex-col justify-between py-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
            className=""
          >
            <h3 className="text-xl font-bold text-black dark:text-white sm:text-2xl">
              {projects[active].title}
            </h3>
            <p className="text-xs text-gray-500 dark:text-neutral-500 sm:text-sm">
              {projects[active].labels.join(" / ")}
            </p>
            <motion.p className="h-[300px] mt-4 text-sm text-gray-500 dark:text-neutral-300 sm:text-base md:mt-8 md:text-lg">
              {projects[active].description.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>

          {/* Action Buttons */}
          <div className="flex flex-col-reverse gap-4 mt-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex gap-3">
              <button
                onClick={handlePrev}
                className="group/button flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 transition-colors hover:bg-gray-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 sm:h-7 sm:w-7"
              >
                <IconArrowLeft className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400" />
              </button>
              <button
                onClick={handleNext}
                className="group/button flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 transition-colors hover:bg-gray-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 sm:h-7 sm:w-7"
              >
                <IconArrowRight className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400" />
              </button>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <Link
                href={projects[active].demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-indigo-600 px-3 py-2 text-xs font-medium text-white shadow-sm transition-all duration-200 hover:bg-indigo-700 hover:shadow-md active:scale-95 sm:flex-none sm:px-4 sm:text-sm"
              >
                <IconExternalLink size={14} className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:h-4 sm:w-4" />
                <span>Live Demo</span>
              </Link>
              <Link
                href={projects[active].sourceLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-neutral-300 bg-white px-3 py-2 text-xs font-medium text-neutral-700 shadow-sm transition-all duration-200 hover:border-neutral-400 hover:bg-neutral-50 active:scale-95 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:border-neutral-600 dark:hover:bg-neutral-800 sm:flex-none sm:px-4 sm:text-sm"
              >
                <IconBrandGithub size={14} className="transition-transform duration-200 group-hover:scale-110 sm:h-4 sm:w-4" />
                <span>Source</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
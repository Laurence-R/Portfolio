"use client";

import {
  IconArrowLeft,
  IconArrowRight,
  IconBrandGithub,
  IconExternalLink,
} from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { Project } from "@/types/portfolio";

function ProjectImage({
  project,
  isVisible,
  rotation,
  index,
  total,
}: {
  project: Project;
  isVisible: boolean;
  rotation: number;
  index: number;
  total: number;
}) {
  const [hasError, setHasError] = useState(false);
  const initial = project.title.charAt(0).toUpperCase();

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.9,
        z: -100,
        rotate: rotation,
      }}
      animate={{
        opacity: isVisible ? 1 : 0.7,
        scale: isVisible ? 1 : 0.95,
        z: isVisible ? 0 : -100,
        rotate: isVisible ? 0 : rotation,
        zIndex: isVisible ? 40 : total + 2 - index,
        y: isVisible ? [0, -80, 0] : 0,
      }}
      exit={{
        opacity: 0,
        scale: 0.9,
        z: 100,
        rotate: rotation,
      }}
      transition={{
        duration: 0.4,
        ease: "easeInOut",
      }}
      className="absolute inset-0 origin-bottom"
    >
      {hasError ? (
        <div className="flex h-full w-full items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-600 via-violet-600 to-indigo-800">
          <span className="text-6xl font-bold text-white/80">{initial}</span>
        </div>
      ) : (
        <img
          src={project.imgSrc}
          alt={project.title}
          width={500}
          height={500}
          draggable={false}
          onError={() => setHasError(true)}
          className="h-full w-full rounded-3xl object-cover object-center"
        />
      )}
    </motion.div>
  );
}

export function AnimatedProjectShowCase({
  projects,
  autoplay = false,
}: {
  projects: Project[];
  autoplay?: boolean;
}) {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const isActive = (index: number) => index === active;

  useEffect(() => {
    if (!autoplay || projects.length === 0) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % projects.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [autoplay, projects.length]);

  const [rotations, setRotations] = useState<number[]>(() =>
    projects.map(() => 0)
  );

  useEffect(() => {
    setRotations(projects.map(() => Math.floor(Math.random() * 21) - 10));
  }, [projects.length]);

  const activeProject = projects[active];
  if (!activeProject) {
    return null;
  }

  const githubUrl = activeProject.githubUrl;

  return (
    <div className="mx-auto max-w-sm px-4 py-12 font-sans antialiased sm:max-w-xl md:max-w-5xl md:px-8 md:py-20 lg:max-w-7xl lg:px-12">
      <div className="relative grid grid-cols-1 gap-10 md:grid-cols-[2fr_3fr] md:gap-16">
        <div>
          <div className="relative h-60 w-full sm:h-72 md:h-80">
            <AnimatePresence>
              {projects.map((project, index) => (
                <ProjectImage
                  key={project.title}
                  project={project}
                  isVisible={isActive(index)}
                  rotation={rotations[index] ?? 0}
                  index={index}
                  total={projects.length}
                />
              ))}
            </AnimatePresence>
          </div>
        </div>

        <div className="flex flex-col justify-between py-4">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <h3 className="text-xl font-bold text-black dark:text-white sm:text-2xl">
              {activeProject.title}
            </h3>
            <p className="text-xs text-gray-500 dark:text-neutral-500 sm:text-sm">
              {activeProject.labels.join(" / ")}
            </p>
            <motion.div
              className="mt-3 space-y-4 sm:mt-4 md:mt-6"
              initial={{ filter: "blur(8px)", opacity: 0, y: 8 }}
              animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
                {activeProject.description}
              </p>
              {activeProject.highlights.length > 0 ? (
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  {activeProject.highlights.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span
                        aria-hidden="true"
                        className="shrink-0 text-indigo-500 dark:text-indigo-400"
                      >
                        •
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </motion.div>
          </motion.div>

          <div className="mt-6 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex gap-3">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="上一件作品"
                className="group/button flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 transition-colors hover:bg-gray-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 sm:h-7 sm:w-7"
              >
                <IconArrowLeft className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="下一件作品"
                className="group/button flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 transition-colors hover:bg-gray-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 sm:h-7 sm:w-7"
              >
                <IconArrowRight className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400" />
              </button>
            </div>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {activeProject.actions.map((action) => (
                <Link
                  key={action.href}
                  href={action.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  prefetch={false}
                  className="group inline-flex items-center justify-center gap-1.5 rounded-lg bg-indigo-600 px-3 py-2 text-xs font-medium whitespace-nowrap text-white shadow-sm transition-all duration-200 hover:bg-indigo-700 hover:shadow-md active:scale-95 sm:px-4 sm:text-sm"
                >
                  <IconExternalLink
                    size={14}
                    className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:h-4 sm:w-4"
                  />
                  <span>{action.label}</span>
                </Link>
              ))}
              {githubUrl ? (
                <Link
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  prefetch={false}
                  className="group inline-flex items-center justify-center gap-1.5 rounded-lg border border-neutral-300 bg-white px-3 py-2 text-xs font-medium whitespace-nowrap text-neutral-700 shadow-sm transition-all duration-200 hover:border-neutral-400 hover:bg-neutral-50 active:scale-95 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:border-neutral-600 dark:hover:bg-neutral-800 sm:px-4 sm:text-sm"
                >
                  <IconBrandGithub
                    size={14}
                    className="transition-transform duration-200 group-hover:scale-110 sm:h-4 sm:w-4"
                  />
                  <span>GitHub</span>
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

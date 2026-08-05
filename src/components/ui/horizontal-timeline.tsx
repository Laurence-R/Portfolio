"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { ImageLightbox, useImageLightbox } from "@/components/ui/image-lightbox";
import { SectionHeader } from "@/components/ui/section-header";
import type { ExperienceEntry } from "@/types/portfolio";
import { cn } from "@/lib/utils";

type HorizontalTimelineProps = {
  entries: ExperienceEntry[];
};

export function HorizontalTimeline({ entries }: HorizontalTimelineProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const lightbox = useImageLightbox();
  const active = entries[activeIndex];

  const scrollToIndex = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(index, entries.length - 1));
    setActiveIndex(clamped);
    const container = scrollRef.current;
    const node = container?.children[clamped] as HTMLElement | undefined;
    node?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [entries.length]);

  const handlePrev = () => scrollToIndex(activeIndex - 1);
  const handleNext = () => scrollToIndex(activeIndex + 1);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") scrollToIndex(activeIndex - 1);
      if (e.key === "ArrowRight") scrollToIndex(activeIndex + 1);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex, scrollToIndex]);

  const progressPercent =
    entries.length > 1 ? (activeIndex / (entries.length - 1)) * 100 : 100;

  return (
    <div className="w-full bg-white px-4 font-sans dark:bg-neutral-950 md:px-10">
      <div className="mx-auto max-w-7xl py-12 md:py-20 md:px-8 lg:px-10">
        <SectionHeader
          title="我的經歷"
          subtitle="從剛上大學到現在，我一直在不斷探索和成長。這裡是我一些重要的經歷和成就存放的地方。"
        />
      </div>

      <div className="mx-auto max-w-7xl pb-6 md:pb-10">
        <div className="relative flex items-center gap-2">
          <button
            type="button"
            onClick={handlePrev}
            disabled={activeIndex === 0}
            className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-600 transition-colors hover:bg-neutral-50 disabled:opacity-30 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 md:flex"
            aria-label="Previous experience"
          >
            <IconArrowLeft size={16} />
          </button>

          <div
            ref={scrollRef}
            className="flex flex-1 snap-x snap-mandatory gap-4 overflow-x-auto pb-4 scrollbar-hide"
          >
            {entries.map((entry, index) => (
              <button
                key={`${entry.date}-${entry.title}`}
                type="button"
                onClick={() => scrollToIndex(index)}
                className={cn(
                  "flex shrink-0 snap-center flex-col items-center gap-2 rounded-xl border px-4 py-3 transition-all duration-300 min-w-[7rem]",
                  index === activeIndex
                    ? "border-indigo-400 bg-indigo-50 shadow-md shadow-indigo-500/10 dark:border-indigo-600 dark:bg-indigo-950/50"
                    : "border-neutral-200 bg-neutral-50 hover:border-indigo-200 dark:border-neutral-800 dark:bg-neutral-900/50"
                )}
              >
                <span
                  className={cn(
                    "text-xs font-semibold tracking-wide",
                    index === activeIndex
                      ? "text-indigo-600 dark:text-indigo-400"
                      : "text-neutral-500"
                  )}
                >
                  {entry.date}
                </span>
                <div
                  className={cn(
                    "h-3 w-3 rounded-full border-2 transition-all duration-300",
                    index === activeIndex
                      ? "border-indigo-400 bg-indigo-500 shadow-[0_0_12px_rgba(99,102,241,0.8)]"
                      : "border-neutral-300 bg-neutral-200 dark:border-neutral-600 dark:bg-neutral-700"
                  )}
                />
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={handleNext}
            disabled={activeIndex === entries.length - 1}
            className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-600 transition-colors hover:bg-neutral-50 disabled:opacity-30 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 md:flex"
            aria-label="Next experience"
          >
            <IconArrowRight size={16} />
          </button>
        </div>

        <div className="relative mx-4 mt-2 h-0.5 rounded-full bg-neutral-200 dark:bg-neutral-800">
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-indigo-600 via-violet-500 to-indigo-600"
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </div>

        <p className="mt-3 text-center text-xs text-neutral-400 md:hidden">
          左右滑動查看更多
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-12 md:px-8 md:pb-20 lg:px-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="min-h-[280px] rounded-2xl border border-neutral-200 bg-neutral-50/50 p-6 dark:border-neutral-800 dark:bg-neutral-900/30 md:p-8"
          >
            <span className="text-sm font-semibold text-indigo-500 dark:text-indigo-400">
              {active.date}
            </span>
            <h3 className="mt-2 text-xl font-bold text-slate-900 dark:text-slate-50 sm:text-2xl md:text-3xl">
              {active.title}
            </h3>
            {active.description && (
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 md:text-base">
                {active.description}
              </p>
            )}
            {active.imageSrcs && active.imageSrcs.length > 0 && (
              <div
                className={cn(
                  "mt-6 grid gap-3 sm:gap-4",
                  active.imageSrcs.length === 1
                    ? "grid-cols-1 max-w-sm"
                    : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                )}
              >
                {active.imageSrcs.map((src, index) => (
                  <Image
                    key={src}
                    src={src}
                    alt={`${active.title} - image ${index + 1}`}
                    width={500}
                    height={500}
                    className="cursor-pointer rounded-lg object-cover shadow-md transition-transform duration-200 hover:scale-[1.02] w-full"
                    onClick={() => lightbox.open(src)}
                  />
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <ImageLightbox
        src={lightbox.selectedImage}
        alt={active.title}
        onClose={lightbox.close}
      />
    </div>
  );
}

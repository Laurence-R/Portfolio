"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
  type MotionValue,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ImageLightbox, useImageLightbox } from "@/components/ui/image-lightbox";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

interface TimeLineBlockProps {
  title: string;
  description?: string | null;
  imageSrcs?: string[] | null;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 40%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const offset = useTransform(scrollYProgress, [0, 1], [0, height]);

  return (
    <div
      className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-12 px-4 md:py-20 md:px-8 lg:px-10">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl md:text-4xl mb-2 md:mb-4 max-w-4xl">
          我的經歷
        </h2>
        <p className="text-slate-600 dark:text-neutral-300 text-sm md:text-base max-w-md">
          從剛上大學到現在，我一直在不斷探索和成長。這裡是我一些重要的經歷和成就存放的地方。
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-10 md:pb-20">
        {data.map((item, index) => (
          <TimelineItem
            key={index}
            item={item}
            heightTransform={heightTransform}
            containerRef={ref}
          />
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-[19px] md:left-8 top-0 overflow-hidden w-[2px] md:w-[3px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-300 dark:via-neutral-600 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              offset: offset
            }}
            className="absolute inset-x-0 top-0 w-[2px] md:w-[3px] bg-gradient-to-t from-indigo-600 via-violet-500 to-indigo-600 rounded-full shadow-[0_0_16px_rgba(99,102,241,1),0_0_6px_rgba(139,92,246,0.9)]"
          />
        </div>
      </div>
    </div>
  );
};

function TimelineItem({
  item,
  heightTransform,
  containerRef,
}: {
  item: TimelineEntry;
  heightTransform: MotionValue<number>;
  containerRef: React.RefObject<HTMLDivElement | null>;
}) {
  const itemRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const unsubscribe = heightTransform.on("change", (latest) => {
      if (!itemRef.current || !containerRef.current) return;
      const containerTop = containerRef.current.getBoundingClientRect().top;
      const itemTop = itemRef.current.getBoundingClientRect().top;
      const itemOffsetFromContainer = itemTop - containerTop;
      setIsActive(latest >= itemOffsetFromContainer);
    });
    return () => unsubscribe();
  }, [heightTransform, containerRef]);

  return (
    <div
      ref={itemRef}
      className="flex justify-start pt-8 md:pt-40 md:gap-10"
    >
      <div className="sticky flex flex-col md:flex-row z-40 items-center top-28 md:top-40 self-start max-w-xs lg:max-w-sm md:w-full">
        <div className="h-8 w-8 md:h-10 md:w-10 absolute left-[7px] md:left-3 rounded-full bg-white dark:bg-black flex items-center justify-center">
          <div className="relative flex items-center justify-center">
            {/* Ripple rings */}
            {isActive && (
              <>
                <span className="absolute h-6 w-6 animate-[ping_2s_ease-in-out_infinite] rounded-full bg-indigo-400/40" />
                <span className="absolute h-8 w-8 animate-[ping_2s_ease-in-out_infinite_0.5s] rounded-full bg-indigo-400/20" />
              </>
            )}
            {/* Node dot */}
            <div
              className={`relative h-4 w-4 rounded-full p-2 border transition-all duration-500 ${
                isActive
                  ? "bg-indigo-500 border-indigo-400 shadow-[0_0_12px_rgba(99,102,241,0.8)]"
                  : "bg-neutral-200 dark:bg-neutral-800 border-neutral-300 dark:border-neutral-700"
              }`}
            />
          </div>
        </div>
        <h3
          className={`hidden md:block text-xl md:pl-20 md:text-5xl font-bold transition-colors duration-500 ${
            isActive
              ? "text-indigo-500 dark:text-indigo-400"
              : "text-neutral-500 dark:text-neutral-500"
          }`}
        >
          {item.title}
        </h3>
      </div>

      <div className="relative pl-12 pr-2 sm:pl-16 md:pl-4 w-full">
        <h3
          className={`md:hidden block text-lg sm:text-2xl mb-3 text-left font-bold transition-colors duration-500 ${
            isActive
              ? "text-indigo-500 dark:text-indigo-400"
              : "text-neutral-500 dark:text-neutral-500"
          }`}
        >
          {item.title}
        </h3>
        {item.content}{" "}
      </div>
    </div>
  );
}

export function TimeLineBlock({ title, description, imageSrcs }: TimeLineBlockProps) {
  const lightbox = useImageLightbox();

  return (
    <div>
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-50 sm:text-2xl md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-[600px] mt-2 text-sm font-normal text-neutral-800 sm:mt-3 md:mt-4 md:text-lg dark:text-neutral-200 leading-relaxed">
          {description}
        </p>
      )}
      {imageSrcs && imageSrcs.length > 0 && (
        <div className={`grid gap-3 mt-5 sm:gap-4 md:gap-6 md:mt-8 ${
          imageSrcs.length === 1 
            ? 'grid-cols-1 max-w-sm' 
            : 'grid-cols-1 sm:grid-cols-2'
        }`}>
          {imageSrcs.map((src, index) => (
            <Image
              key={src}
              src={src}
              alt={`${title} - image ${index + 1}`}
              width={500}
              height={500}
              className="rounded-lg object-cover shadow-md cursor-pointer transition-transform duration-200 hover:scale-[1.02] w-full"
              onClick={() => lightbox.open(src)}
            />
          ))}
        </div>
      )}

      <ImageLightbox
        src={lightbox.selectedImage}
        alt={title}
        onClose={lightbox.close}
      />
    </div>
  )
}

"use client";

import { CometCard } from "@/components/ui/comet-card";
import { FocusTabs } from "@/components/ui/focus-tabs";
import { SectionHeader } from "@/components/ui/section-header";
import { aboutContent } from "@/data/about";
import { ArrowUp } from "lucide-react";

export function About() {
  const { intro, skills, focusLabel, featuredFocus, secondaryFocus } =
    aboutContent;
  const focusItems = [featuredFocus, ...secondaryFocus];

  return (
    <section id="about" className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex min-h-screen flex-col lg:flex-row">
        <div className="flex items-center justify-center">
          <CometCard>
            <button
              type="button"
              className="my-10 flex w-72 cursor-pointer flex-col items-stretch rounded-3xl border-0 bg-[#1F2121] p-2 sm:w-80 md:my-20 md:p-4 lg:w-120"
              aria-label="Profile photo"
              style={{
                transformStyle: "preserve-3d",
                transform: "none",
                opacity: 1,
              }}
            >
              <div className="mx-2 flex-1">
                <div className="relative mt-2 aspect-3/4 w-full">
                  <img
                    loading="lazy"
                    className="absolute inset-0 h-full w-full rounded-3xl bg-[#000000] object-cover contrast-75"
                    alt="Profile photo"
                    src="about/me.jpg"
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                      opacity: 1,
                    }}
                  />
                </div>
              </div>
              <div className="mt-4 flex shrink-0 items-center pl-4 font-mono text-white">
                <ArrowUp />
                &nbsp;Me
              </div>
            </button>
          </CometCard>
        </div>

        <div className="flex flex-1 flex-col items-center gap-8 py-8 sm:gap-10 md:gap-12 lg:py-24 lg:pl-16 xl:pl-24">
          <div className="w-full space-y-6">
            <SectionHeader title="About Me" />
            {intro.map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                className="text-base leading-relaxed text-slate-600 dark:text-slate-400 md:text-lg"
              >
                {paragraph}
              </p>
            ))}
            <div className="flex flex-wrap gap-2 pt-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md bg-indigo-100 px-2.5 py-1 text-xs font-medium text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="w-full space-y-4">
            <p className="text-xl font-semibold uppercase tracking-[0.3em] text-indigo-500 dark:text-indigo-400">
              {focusLabel}
            </p>
            <FocusTabs items={focusItems} />
          </div>
        </div>
      </div>
    </section>
  );
}

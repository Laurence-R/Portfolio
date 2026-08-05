"use client";

import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { LayoutTextFlip } from "../ui/layout-text-flip";
import { FlipWords } from "../ui/flip-words";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Button } from "@/components/ui/moving-border";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { IconMail } from "@tabler/icons-react";
import { siteConfig } from "@/data/site";

export function Hero() {
  const identities = [
    "AI 極客",
    "全端技術愛好者",
    "彰師大資訊工程系學生",
    "Google Developer Group on Campus NCUE Member",
  ];

  return (
    <section id="home">
      <BackgroundBeamsWithCollision className="min-h-screen">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div className="relative my-4 flex flex-col items-center justify-center gap-3 text-center sm:mb-0 sm:gap-4 xl:flex-row xl:flex-nowrap xl:gap-5">
            <LayoutTextFlip
              text="哈囉，我是"
              words={["張勝麟", "Laurence", "Chang Sheng-Lin"]}
            />
          </motion.div>

          <div className="z-20 flex justify-center">
            <TextGenerateEffect
              words="Building meaningful solutions with code"
              className="text-center text-2xl md:text-4xl lg:text-5xl text-slate-900 dark:text-slate-50"
            />
          </div>

          <div className="mt-3 flex justify-center sm:mt-4">
            <FlipWords
              words={identities}
              className="text-sm font-bold text-indigo-700 dark:text-indigo-300 sm:text-base md:text-lg lg:text-2xl"
            />
          </div>

          <div className="mt-6 flex justify-center sm:mt-8 md:mt-12">
            <a
              href={siteConfig.mailtoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                borderRadius="1.75rem"
                className="cursor-pointer border-neutral-200 bg-white text-base font-bold text-black dark:border-slate-800 dark:bg-slate-900 dark:text-white sm:text-lg"
              >
                Contact Me <IconMail size={25} className="ml-2" />
              </Button>
            </a>
          </div>

          <motion.div
            className="absolute bottom-8 left-1/2 flex -translate-x-1/2 cursor-pointer flex-col items-center gap-2"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            onClick={() =>
              window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
            }
          >
            <span className="text-xs font-medium uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
              Scroll
            </span>
            <ChevronDown
              size={25}
              className="text-neutral-400 dark:text-neutral-500"
            />
          </motion.div>
        </div>
      </BackgroundBeamsWithCollision>
    </section>
  );
}

"use client";

import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { LayoutTextFlip } from "../ui/layout-text-flip";
import { FlipWords } from "../ui/flip-words";
import { Button } from "@/components/ui/moving-border";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { IconMail } from "@tabler/icons-react";

export function Hero() {
	const identities = [
		"AI 極客",
		"全端技術愛好者",
		"彰師大資訊工程系學生",
		"Google Developer Group on Campus NCUE Member"
	];
	return (
		<section id="home">
			<BackgroundBeamsWithCollision className="min-h-screen">
				<div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div className="relative my-4 flex flex-col items-center justify-center gap-3 text-center sm:gap-4 sm:mb-0 xl:flex-row xl:flex-nowrap xl:gap-5">
						<LayoutTextFlip 
							text="哈囉，我是"
							words={["張勝麟", "Laurence", "Chang Sheng-Lin"]}
						/>
					</motion.div>
					<h2 className="text-2xl md:text-4xl lg:text-7xl z-20 font-bold text-center text-slate-900 dark:text-slate-50 tracking-tight">
						
					</h2>
					<div className="mt-3 sm:mt-4 flex justify-center">
						<FlipWords words={identities} className="text-sm sm:text-base md:text-lg lg:text-2xl font-bold text-indigo-700 dark:text-indigo-300" />
					</div>
					<div className="flex justify-center mt-6 sm:mt-8 md:mt-12">
						<a href="https://mail.google.com/mail/?view=cm&to=sdjoid@gmail.com" target="_blank" rel="noopener noreferrer">
							<Button
								borderRadius="1.75rem"
								className="cursor-pointer bg-white dark:bg-slate-900 font-bold text-base sm:text-lg text-black dark:text-white border-neutral-200 dark:border-slate-800"
							>
								Contact Me <IconMail size={25} className="ml-2" />
							</Button>
						</a>
					</div>
					{/* Scroll Down Indicator */}
					<motion.div
						className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
						animate={{ y: [0, 16, 0] }}
						transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
						onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
					>
						<span className="text-xs font-medium tracking-widest uppercase text-neutral-400 dark:text-neutral-500">
							Scroll
						</span>
						<ChevronDown size={25} className="text-neutral-400 dark:text-neutral-500" />
					</motion.div>
				</div>
			</BackgroundBeamsWithCollision>
		</section>
	)
}
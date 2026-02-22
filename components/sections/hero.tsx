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
				<div>
					<motion.div className="relative mx-4 my-4 flex flex-col items-center justify-center gap-4 text-center sm:mx-0 sm:mb-0 sm:flex-row">
						<LayoutTextFlip 
							text="哈囉，我是"
							words={["張勝麟", "Laurence", "Chang Sheng-Lin"]}
						/>
					</motion.div>
					<h2 className="text-2xl md:text-4xl lg:text-7xl z-20 font-bold text-center text-slate-900 dark:text-slate-50 tracking-tight">
						
					</h2>
					<div className="mt-4">
						<FlipWords words={identities} className="text-md md:text-lg lg:text-2xl font-bold text-indigo-700 dark:text-indigo-300" />
					</div>
					<div className="flex justify-center mt-8 md:mt-12">
						<a href="https://mail.google.com/mail/?view=cm&to=sdjoid@gmail.com" target="_blank" rel="noopener noreferrer">
							<Button
								borderRadius="1.75rem"
								className="cursor-pointer bg-white dark:bg-slate-900 font-bold text-lg text-black dark:text-white border-neutral-200 dark:border-slate-800"
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
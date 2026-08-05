import type { Project } from "@/types/portfolio";
import { siteConfig } from "@/data/site";

export const projects: Project[] = [
  {
    title: "Fast-CLAHE",
    labels: ["Research", "Computer Vision", "GPU", "YOLO26", "Python"],
    description:
      "A monorepo for night-time HDR preprocessing (16-bit CLAHE) and YOLO26 detection ablation experiments. Implements GPU-accelerated contrast enhancement with linear tone mapping, achieving real-time preprocessing (P99 ~2.39 ms) and significant mAP50 improvements for night vision detection.",
    imgSrc: "/projects/fast-clahe.png",
    demoLink: null,
    sourceLink: "https://github.com/Laurence-R/fast-clahe",
  },
  {
    title: "Stardream Nails",
    labels: ["Full-stack", "LINE LIFF", "Supabase", "Next.js", "Booking System"],
    description:
      "A LINE LIFF booking system for a nail studio. Customers complete multi-step reservations with dynamic pricing inside LINE; admins manage services, schedules, and orders via Supabase Auth dashboard, with LINE Messaging API push notifications for booking events.",
    imgSrc: "/projects/stardream-nails.png",
    demoLink: "https://stardream-nails.vercel.app/",
    sourceLink: "https://github.com/Laurence-R/stardream-nails",
  },
  {
    title: "InvisiGuard",
    labels: ["Cyber Security", "Image", "Watermarking", "AI"],
    description:
      "A privacy-first, browser-based digital watermarking tool built with Next.js 16, React 19, and Tailwind CSS v4. Uses DWT and QIM algorithms to embed invisible, resilient watermarks into images. Runs 100% client-side via Web Workers — no server uploads, zero data leakage.",
    imgSrc: "/projects/invisiguard.png",
    demoLink: "https://invisi-guard.vercel.app/",
    sourceLink: "https://github.com/Laurence-R/InvisiGuard",
  },
  {
    title: "Easy-Enhance",
    labels: ["Desktop App", "Image Enhancement", "Research", "Python"],
    description:
      "A desktop tool designed for image enhancement research, providing a standardized workflow to import enhancement methods, perform batch testing, and automatically compute evaluation metrics for reproducible experiments.",
    imgSrc: "/projects/easy-enhance.png",
    demoLink: null,
    sourceLink: "https://github.com/Laurence-R/easy-enhance",
  },
  {
    title: "Professor Personal Website",
    labels: ["Personal Website", "Next.js", "Tailwind CSS", "React", "Aceternity UI"],
    description:
      "A personal website built with Next.js 16, Tailwind CSS, and Aceternity UI, designed to showcase the professor's research, publications, and courses. Migrated from legacy Big5 encoding to a modern, accessible web experience.",
    imgSrc: "/projects/iccweb.png",
    demoLink: "https://personal-web-icc.vercel.app/",
    sourceLink: "https://github.com/Laurence-R/icc_web",
  },
  {
    title: "Midas",
    labels: ["Desktop App", "Stock Market", "AI Analysis", "Python"],
    description:
      "An AI post-market analysis system for smart investment insights. Developed with speck-kit workflow, combining market data processing with AI-driven analysis to support post-trading decision making.",
    imgSrc: "/projects/midas.png",
    demoLink: null,
    sourceLink: "https://github.com/Laurence-R/midas",
  },
  {
    title: "Std Score Management",
    labels: ["AI", "RAG", "Education", "Python"],
    description:
      "A simple AI assistant project with RAG for student score management. Enables natural language queries over academic records with retrieval-augmented generation for accurate, context-aware responses.",
    imgSrc: "/projects/std-score-management.png",
    demoLink: null,
    sourceLink: "https://github.com/Laurence-R/std-score-management",
  },
  {
    title: "Portfolio",
    labels: ["Personal Website", "Next.js", "Tailwind CSS", "Aceternity UI"],
    description:
      "This is my personal portfolio website built with Next.js 16, React 19, Tailwind CSS 4, and Aceternity UI. It features animated sections, dark mode, and a data-driven architecture for easy content updates.",
    imgSrc: "/projects/portfolio.png",
    demoLink: siteConfig.portfolioUrl,
    sourceLink: "https://github.com/Laurence-R/Portfolio",
  },
];

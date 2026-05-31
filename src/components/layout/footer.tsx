"use client";

import React from "react";
import { motion, useInView } from "motion/react";
import {
  IconBrandGithub,
  IconMail,
  IconArrowUp,
  IconHeart,
} from "@tabler/icons-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Laurence-R",
    icon: IconBrandGithub,
  },
  {
    label: "Email",
    href: "https://mail.google.com/mail/?view=cm&to=sdjoid@gmail.com",
    icon: IconMail,
  },
];

function FooterLink({
  href,
  children,
  external,
  delay = 0,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  delay?: number;
}) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <motion.a
      href={href}
      onClick={handleClick}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className="relative text-sm text-neutral-500 dark:text-neutral-400 transition-colors duration-200 hover:text-indigo-600 dark:hover:text-indigo-400 group"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
    >
      {children}
      <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-indigo-500 dark:bg-indigo-400 transition-all duration-300 group-hover:w-full" />
    </motion.a>
  );
}

function BackToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 dark:border-white/[0.08] bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm text-neutral-500 dark:text-neutral-400 transition-all duration-300 hover:border-indigo-300 dark:hover:border-indigo-500/30 hover:text-indigo-600 dark:hover:text-indigo-400 hover:shadow-lg hover:shadow-indigo-500/10 cursor-pointer"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Back to top"
    >
      <IconArrowUp size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
    </motion.button>
  );
}

export function Footer() {
  const ref = React.useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <footer ref={ref} className="relative overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* Top gradient divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />

      {/* Subtle background glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-[300px] w-[600px] rounded-full bg-indigo-500/[0.03] dark:bg-indigo-500/[0.05] blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Main footer content */}
        <div className="grid grid-cols-1 gap-10 py-12 md:grid-cols-3 md:gap-8 md:py-16">
          {/* Brand section */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <a href="#home" className="group inline-flex items-center gap-2.5">
              <div className="relative h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-sm transition-shadow group-hover:shadow-md group-hover:shadow-indigo-500/25">
                <span className="text-sm font-bold text-white">SL</span>
              </div>
              <span className="text-base font-semibold tracking-tight text-neutral-900 dark:text-white">
                Sheng-Lin
              </span>
            </a>
            <p className="text-sm leading-relaxed text-neutral-500 dark:text-neutral-400 max-w-xs">
              彰師大資工系學生，熱衷 AI、全端開發與影像處理。致力於用技術解決實際問題，創造有意義的產品。
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3 pt-1">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 dark:border-white/[0.08] bg-white/60 dark:bg-neutral-900/60 backdrop-blur-sm text-neutral-500 dark:text-neutral-400 transition-all duration-300 hover:border-indigo-300 dark:hover:border-indigo-500/30 hover:text-indigo-600 dark:hover:text-indigo-400 hover:shadow-lg hover:shadow-indigo-500/10"
                  whileHover={{ y: -2, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
                  aria-label={link.label}
                >
                  <link.icon size={16} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500">
              Navigation
            </h3>
            <nav className="flex flex-col gap-2.5">
              {navLinks.map((link, i) => (
                <FooterLink key={link.href} href={link.href} delay={0.15 + i * 0.04}>
                  {link.label}
                </FooterLink>
              ))}
            </nav>
          </motion.div>

          {/* Contact / CTA */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500">
              Get In Touch
            </h3>
            <p className="text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
              歡迎聯繫我討論合作、技術交流，或者只是聊聊天！
            </p>
            <motion.a
              href="https://mail.google.com/mail/?view=cm&to=sdjoid@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-neutral-900 dark:bg-white/10 backdrop-blur-sm border border-neutral-800 dark:border-white/[0.12] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-neutral-800 dark:hover:bg-white/20 hover:shadow-md"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <IconMail size={16} />
              <span>Send a Message</span>
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          className="flex flex-col items-center justify-between gap-4 border-t border-neutral-200/60 dark:border-white/[0.06] py-6 sm:flex-row"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="flex items-center gap-1 text-xs text-neutral-400 dark:text-neutral-500">
            © {new Date().getFullYear()} Sheng-Lin Chang. Built with
            <IconHeart size={12} className="text-red-400 mx-0.5" />
            and Next.js
          </p>
          <BackToTop />
        </motion.div>
      </div>
    </footer>
  );
}

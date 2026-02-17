"use client";
import React, { useState, useEffect } from "react";
import {
  Menu,
} from "../ui/navbar-menu";
import Link from "next/link";
import { IconBrandGithub, IconMenu2, IconX } from "@tabler/icons-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

export function Navigation({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        setActive(null);
        setMobileOpen(false);
      }
    }
  };

  return (
    <>
      <motion.div
        className={cn(
          "fixed top-0 inset-x-0 z-100 transition-colors duration-300",
          scrolled
            ? "bg-white/80 dark:bg-neutral-950/80 backdrop-blur-xl border-b border-neutral-200/50 dark:border-white/[0.06] shadow-[0_1px_12px_rgb(0,0,0,0.04)] dark:shadow-[0_1px_12px_rgb(0,0,0,0.2)]"
            : "bg-transparent",
          className
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", damping: 20, stiffness: 200 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleSmoothScroll(e, "#home")}
              className="group flex items-center gap-2.5 shrink-0"
            >
              <div className="relative h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-sm transition-shadow group-hover:shadow-md group-hover:shadow-indigo-500/25">
                <span className="text-sm font-bold text-white">SL</span>
              </div>
              <span className="hidden sm:block text-base font-semibold tracking-tight text-neutral-900 dark:text-white">
                Sheng-Lin
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <Menu setActive={setActive}>
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="relative text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200 py-1"
                  >
                    {link.label}
                  </a>
                ))}
              </Menu>
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-2 shrink-0">
              <ThemeToggle />
              <Link
                href="https://github.com/Laurence-R"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-sm font-medium text-white rounded-full bg-neutral-900 dark:bg-white/10 backdrop-blur-sm border border-neutral-800 dark:border-white/[0.12] px-4 py-2 shadow-sm transition-all duration-200 hover:bg-neutral-800 dark:hover:bg-white/20 hover:shadow-md active:scale-95"
              >
                <IconBrandGithub
                  className="transition-transform duration-200 group-hover:scale-110"
                  size={16}
                />
                <span>GitHub</span>
              </Link>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle />
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 transition-colors hover:bg-neutral-200 dark:hover:bg-neutral-700"
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  {mobileOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <IconX size={18} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <IconMenu2 size={18} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[99] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />

            {/* Panel */}
            <motion.nav
              className="absolute top-16 inset-x-0 mx-4 rounded-2xl bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xl border border-neutral-200/60 dark:border-white/[0.08] shadow-2xl overflow-hidden"
              initial={{ opacity: 0, y: -12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.96 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className="py-3 px-2">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="flex items-center gap-3 rounded-xl px-4 py-3 text-[15px] font-medium text-neutral-700 dark:text-neutral-200 transition-colors hover:bg-neutral-100 dark:hover:bg-white/[0.06]"
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i, duration: 0.2 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>

              {/* Mobile GitHub Link */}
              <div className="border-t border-neutral-200/60 dark:border-white/[0.06] p-3">
                <Link
                  href="https://github.com/Laurence-R"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl bg-neutral-900 dark:bg-white/10 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-800 dark:hover:bg-white/20 active:scale-[0.98]"
                >
                  <IconBrandGithub size={18} />
                  <span>GitHub</span>
                </Link>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
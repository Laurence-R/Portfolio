"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import React from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-full bg-white/70 dark:bg-neutral-950/70 backdrop-blur-xl border border-neutral-200/50 dark:border-white/[0.08]" />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative w-9 h-9 rounded-full bg-white/70 dark:bg-neutral-950/70 backdrop-blur-xl border border-neutral-200/50 dark:border-white/[0.08] shadow-[0_2px_20px_rgb(0,0,0,0.04)] dark:shadow-[0_2px_20px_rgb(0,0,0,0.2)] flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-all duration-200 hover:shadow-[0_4px_24px_rgb(0,0,0,0.08)] dark:hover:shadow-[0_4px_24px_rgb(0,0,0,0.3)] cursor-pointer"
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="sun"
            initial={{ rotate: -90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: 90, scale: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Sun size={15} />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ rotate: 90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: -90, scale: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Moon size={15} />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}

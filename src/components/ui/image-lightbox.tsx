"use client";
import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";

interface ImageLightboxProps {
  src: string | null;
  alt?: string;
  onClose: () => void;
}

export function ImageLightbox({ src, alt = "放大檢視", onClose }: ImageLightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (src) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [src, onClose]);

  return (
    <AnimatePresence>
      {src && (
        <motion.div
          className="fixed inset-x-0 bottom-0 top-16 z-[200] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm cursor-zoom-out sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <motion.div
            className="relative max-h-full max-w-full"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Lightbox needs intrinsic sizing so mixed aspect ratios fit below the navbar. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={alt}
              className="block h-auto w-auto max-h-[calc(100dvh-8rem)] max-w-[calc(100dvw-2rem)] rounded-xl object-contain shadow-2xl sm:max-h-[calc(100dvh-10rem)] sm:max-w-[calc(100dvw-4rem)]"
            />
            <button
              type="button"
              onClick={onClose}
              className="absolute right-2 top-2 z-10 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white/90 text-sm text-neutral-700 shadow-lg backdrop-blur-sm transition-transform hover:scale-110 dark:bg-neutral-800/90 dark:text-neutral-200"
              aria-label="關閉預覽"
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function useImageLightbox() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const open = useCallback((src: string) => {
    setSelectedImage(src);
  }, []);

  const close = useCallback(() => {
    setSelectedImage(null);
  }, []);

  return { selectedImage, open, close };
}

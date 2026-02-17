"use client";
import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

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
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm cursor-zoom-out"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <motion.div
            className="relative max-w-[90vw] max-h-[90vh]"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={src}
              alt={alt}
              width={1200}
              height={900}
              className="rounded-xl object-contain max-h-[90vh] w-auto shadow-2xl"
            />
            <button
              onClick={onClose}
              className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 dark:bg-neutral-800/90 text-neutral-700 dark:text-neutral-200 shadow-lg backdrop-blur-sm transition-transform hover:scale-110 cursor-pointer"
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

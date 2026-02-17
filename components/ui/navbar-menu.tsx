"use client";
import React from "react";
import { motion } from "motion/react";

const transition = {
  type: "spring" as const,
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string | null) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      onMouseEnter={() => setActive(item)}
      onMouseLeave={() => setActive(null)}
      className="relative"
    >
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-white/80 dark:bg-neutral-950/80 backdrop-blur-xl rounded-2xl overflow-hidden border border-neutral-200/60 dark:border-white/[0.1] shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.3)]"
              >
                <motion.div
                  layout
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  const childrenArray = React.Children.toArray(children);

  return (
    <nav className="relative flex items-center gap-1">
      {childrenArray.map((child, i) => (
        <div
          key={i}
          className="relative px-3.5 py-2"
          onMouseEnter={() => setHoveredIndex(i)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {hoveredIndex === i && (
            <motion.span
              layoutId="nav-pill"
              className="absolute inset-0 rounded-full bg-neutral-100 dark:bg-white/[0.08]"
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
            />
          )}
          <span className="relative z-10">{child}</span>
        </div>
      ))}
    </nav>
  );
};

export const Logo = ({ title, href }: { title: string; href: string }) => {
  return (
    <a
      href={href}
      className="text-lg font-bold tracking-tight text-neutral-900 dark:text-white hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
    >
      {title}
    </a>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <a
      href={href}
      className="flex space-x-3 group"
    >
      <img
        src={src}
        width={140}
        height={70}
        alt={title}
        className="shrink-0 rounded-lg shadow-lg group-hover:shadow-xl transition-shadow"
      />
      <div>
        <h4 className="text-base font-semibold mb-1 text-neutral-900 dark:text-white group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
          {title}
        </h4>
        <p className="text-neutral-500 text-sm max-w-[10rem] dark:text-neutral-400 leading-relaxed">
          {description}
        </p>
      </div>
    </a>
  );
};

export const HoveredLink = ({ children, href, onClick, ...rest }: any) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(e);
    }
    if (href && href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  return (
    <a
      {...rest}
      href={href}
      onClick={handleClick}
      className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200"
    >
      {children}
    </a>
  );
};


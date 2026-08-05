import type { NavLink, SocialLink } from "@/types/portfolio";

export const siteConfig = {
  name: "Sheng-Lin Chang",
  email: "sdjoid@gmail.com",
  github: "https://github.com/Laurence-R",
  portfolioUrl: "https://slchang-portfolio.vercel.app/",
  mailtoUrl: "https://mail.google.com/mail/?view=cm&to=sdjoid@gmail.com",
} as const;

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: siteConfig.github,
    icon: "github",
  },
  {
    label: "Email",
    href: siteConfig.mailtoUrl,
    icon: "email",
  },
];

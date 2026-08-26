import type { HeroContent, NavLink, SocialLink } from "@/types/portfolio";

export const siteConfig = {
  name: "Sheng-Lin Chang",
  email: "sdjoid@gmail.com",
  github: "https://github.com/Laurence-R",
  portfolioUrl: "https://slchang-portfolio.vercel.app/",
  mailtoUrl: "https://mail.google.com/mail/?view=cm&to=sdjoid@gmail.com",
  blurb:
    "彰師大資工大四，做全端開發與電腦視覺。獨立交付過上線產品，也做過可量化的 GPU 影像前處理研究。",
} as const;

export const heroContent: HeroContent = {
  greeting: "哈囉，我是",
  names: ["張勝麟", "Laurence", "Chang Sheng-Lin"],
  tagline: "彰師大資工大四 ｜ 全端開發與電腦視覺",
  proof:
    "獨立交付過可上線的 LINE 預約系統；專題 Fast-CLAHE 以 GPU 加速夜間偵測前處理，夜間 mAP50 由 ≈0.001 提升至 0.67+。",
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
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

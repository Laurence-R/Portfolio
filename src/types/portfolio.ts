export type NavLink = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: "github" | "email";
};

export type Project = {
  title: string;
  labels: string[];
  description: string;
  imgSrc: string;
  tryNowUrl: string | null;
  sourceLink: string | null;
};

export type ExperienceEntry = {
  date: string;
  title: string;
  description?: string;
  imageSrcs?: string[];
};

export type FocusArea = {
  title: string;
  description: string;
  tabLabel?: string;
  badge?: string;
  tags?: string[];
  githubUrl?: string;
  tryNowUrl?: string;
  highlights?: string[];
};

export type AboutContent = {
  intro: string[];
  skills: string[];
  focusLabel: string;
  featuredFocus: FocusArea;
  secondaryFocus: FocusArea[];
};

export type HeroContent = {
  greeting: string;
  names: string[];
  tagline: string;
  proof: string;
};

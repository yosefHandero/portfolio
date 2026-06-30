export type ProjectIconVariant = "banking" | "market" | "movie" | "care";

export type Project = {
  title: string;
  tagline: string;
  problem: string;
  features: string[];
  stack: string[];
  icon: ProjectIconVariant;
  image: string;
  liveUrl: string;
  codeUrl?: string;
};

export type NavLink = {
  label: string;
  href: string;
};

export type Skill = {
  name: string;
};

export type SkillCategory = {
  label: string;
  skills: Skill[];
};

export type SocialLink = {
  label: string;
  href: string;
  icon: "mail" | "phone" | "github" | "linkedin";
};

export const contactInfo = {
  email: "yosefpetrosh@gmail.com",
  phone: "(248) 469-9579",
  phoneHref: "tel:2484699579",
};

/** Set real profile URLs here — empty strings hide the links in the UI */
export const profileLinks = {
  github: "",
  linkedin: "",
};

const PLACEHOLDER_PROFILE_HOSTS = ["github.com", "linkedin.com"];

export function isValidProfileUrl(url: string): boolean {
  if (!url.trim()) return false;
  try {
    const parsed = new URL(url);
    const isPlaceholderRoot =
      parsed.pathname === "/" ||
      parsed.pathname === "/in/" ||
      parsed.pathname === "/in";
    return !(
      PLACEHOLDER_PROFILE_HOSTS.includes(parsed.hostname) && isPlaceholderRoot
    );
  } catch {
    return false;
  }
}

export const navLinks: NavLink[] = [
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const projects: Project[] = [
  {
    title: "Modern Banking App",
    tagline: "A banking dashboard for accounts, transfers, and spending.",
    problem:
      "Designed and built the full dashboard flow — account overview, money movement, budgets, and transaction history — as a responsive Next.js app deployed to Vercel.",
    features: [
      "Accounts & transfers",
      "Budgets & savings goals",
      "Transactions & insights",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Responsive UI"],
    icon: "banking",
    image: "/projects/banking.png",
    liveUrl: "https://banking-kappa-rose.vercel.app/",
  },
  {
    title: "MarketMate",
    tagline: "A crypto market dashboard for quick price scanning.",
    problem:
      "Built a dark-themed market UI that pulls live asset data through REST APIs, with trending views and comparison tools optimized for fast scanning on any screen size.",
    features: [
      "Trending assets",
      "Price movement views",
      "Comparison tools",
    ],
    stack: ["Next.js", "TypeScript", "REST APIs", "Tailwind CSS"],
    icon: "market",
    image: "/projects/marketmate.png",
    liveUrl: "https://market-mate-ten.vercel.app/",
  },
  {
    title: "Movie Discovery App",
    tagline: "Browse, search, and save movies from a live catalog.",
    problem:
      "Integrated a third-party movie API end to end — search, genre browsing, detail pages with cast info, and watchlist persistence across mobile and desktop layouts.",
    features: [
      "Watchlists & genres",
      "Ratings & detail pages",
      "Cast & similar titles",
    ],
    stack: ["Next.js", "TypeScript", "API Integration", "Tailwind CSS"],
    icon: "movie",
    image: "/projects/movie.png",
    liveUrl: "https://movie-app-five-lovat-63.vercel.app/",
  },
  {
    title: "CareTrace",
    tagline: "A caregiver app for logging daily care details.",
    problem:
      "Structured a multi-section logging flow — medications, symptoms, vitals, hydration, and notes — that rolls into a single visit summary caregivers can share.",
    features: [
      "Medications & symptoms",
      "Vitals & hydration logs",
      "Reminders & visit summary",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Form UX"],
    icon: "care",
    image: "/projects/caretrace.png",
    liveUrl: "https://caretrace-lime.vercel.app/",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    label: "Frontend",
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Node.js" },
      { name: "REST APIs" },
      { name: "API Integration" },
    ],
  },
  {
    label: "Data & Storage",
    skills: [{ name: "PostgreSQL" }, { name: "SQL" }],
  },
  {
    label: "Tools",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Vercel" },
    ],
  },
];

export const aboutHighlights = [
  {
    label: "Live demos",
    value: "4 deployed",
    detail: "Each project is hosted and visitable",
  },
  {
    label: "How I work",
    value: "Design → Deploy",
    detail: "UI, API integration, and cloud shipping",
  },
  {
    label: "Core stack",
    value: "React / Next.js",
    detail: "TypeScript and Tailwind throughout",
  },
];

export function getSocialLinks(): SocialLink[] {
  const links: SocialLink[] = [
    {
      label: "Email",
      href: `mailto:${contactInfo.email}`,
      icon: "mail",
    },
    {
      label: "Phone",
      href: contactInfo.phoneHref,
      icon: "phone",
    },
  ];

  if (isValidProfileUrl(profileLinks.github)) {
    links.push({
      label: "GitHub",
      href: profileLinks.github,
      icon: "github",
    });
  }

  if (isValidProfileUrl(profileLinks.linkedin)) {
    links.push({
      label: "LinkedIn",
      href: profileLinks.linkedin,
      icon: "linkedin",
    });
  }

  return links;
}

export const aboutBio = [
  "I'm an independent full-stack developer who takes web apps from first layout to live deployment. My work centers on React and Next.js — building interfaces people can actually use, wiring them to APIs and data, and shipping to the cloud.",
  "The four projects below are real apps I designed, built, and deployed myself. Each one targets a specific use case — finance, markets, media, and caregiving — and shows how I think about structure, responsiveness, and polish.",
];

export const experience = {
  title: "What I do",
  points: [
    "Design and build responsive frontends with React, Next.js, and TypeScript",
    "Connect apps to REST APIs and backend services",
    "Work with PostgreSQL and data storage workflows",
    "Ship and maintain projects on Vercel and cloud platforms",
    "Own the full cycle: layout, logic, testing, and deployment",
  ],
};

import Image from "next/image";
import ContactPanel from "./ContactPanel";

type ProjectIconVariant = "banking" | "market" | "movie" | "care";

type Project = {
  title: string;
  description: string;
  icon: ProjectIconVariant;
  url: string;
};

const projects: Project[] = [
  {
    title: "Modern Banking App",
    description:
      "A polished banking dashboard for managing accounts, transfers, budgets, savings goals, transactions, and AI-powered financial insights in a clean demo experience.",
    icon: "banking",
    url: "https://banking-kappa-rose.vercel.app/",
  },
  {
    title: "MarketMate",
    description:
      "A crypto market dashboard for tracking live-style coin data, trending assets, market categories, price movement, and comparison views in a fast dark interface.",
    icon: "market",
    url: "https://market-mate-ten.vercel.app/",
  },
  {
    title: "Movie Discovery App",
    description:
      "A cinematic movie browsing app with watchlists, detail pages, genres, cast information, ratings, and similar movie recommendations.",
    icon: "movie",
    url: "https://movie-app-five-lovat-63.vercel.app/",
  },
  {
    title: "CareTrace",
    description:
      "A calm caregiver tracking app for logging medications, symptoms, vitals, meals, hydration, reminders, and notes, then turning scattered care details into a clear visit summary for doctors or family.",
    icon: "care",
    url: "https://caretrace-lime.vercel.app/",
  },
];

function ProjectIcon({ variant }: { variant: ProjectIconVariant }) {
  if (variant === "banking") {
    return (
      <svg
        aria-hidden="true"
        className="h-14 w-14"
        viewBox="0 0 64 64"
        fill="none"
      >
        <rect
          x="11"
          y="20"
          width="42"
          height="29"
          rx="8"
          className="fill-white stroke-neutral-950"
          strokeWidth="2.4"
        />
        <path
          d="M15 28h34"
          className="stroke-orange-500"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M21 39h11M38 39h5"
          className="stroke-neutral-950"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <path
          d="M24 16h16l5 4H19l5-4Z"
          className="fill-orange-100 stroke-neutral-950"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (variant === "market") {
    return (
      <svg
        aria-hidden="true"
        className="h-14 w-14"
        viewBox="0 0 64 64"
        fill="none"
      >
        <path
          d="M14 47h38"
          className="stroke-neutral-950"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <path
          d="M18 40l9-9 8 6 12-17"
          className="stroke-orange-500"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 21v24M34 17v28M46 25v20"
          className="stroke-neutral-950"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M18 27h8M30 25h8M42 33h8"
          className="stroke-neutral-950"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (variant === "care") {
    return (
      <svg
        aria-hidden="true"
        className="h-14 w-14"
        viewBox="0 0 64 64"
        fill="none"
      >
        <path
          d="M32 12l16 6v12c0 12-7 19-16 22-9-3-16-10-16-22V18l16-6Z"
          className="fill-white stroke-neutral-950"
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
        <path
          d="M32 41c-5-3.4-9-6.6-9-11a4.6 4.6 0 0 1 9-1.6A4.6 4.6 0 0 1 41 30c0 4.4-4 7.6-9 11Z"
          className="fill-orange-500 stroke-orange-500"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      className="h-14 w-14"
      viewBox="0 0 64 64"
      fill="none"
    >
      <rect
        x="12"
        y="17"
        width="40"
        height="32"
        rx="7"
        className="fill-white stroke-neutral-950"
        strokeWidth="2.4"
      />
      <path
        d="M18 17l6 10M32 17l6 10M46 17l6 10M13 28h38"
        className="stroke-neutral-950"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M28 35v8l8-4-8-4Z"
        className="fill-orange-500 stroke-orange-500"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="app-background min-h-screen bg-[#f7f7f5] text-neutral-950">
      <section className="mx-auto max-w-6xl px-5 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid min-h-[560px] items-center gap-10 rounded-[28px] border border-white/80 bg-white/55 px-6 py-10 shadow-[0_30px_100px_rgba(20,20,20,0.16)] backdrop-blur-sm sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-14">
          <div className="max-w-3xl">
            <p className="hero-kicker-3d mb-5 inline-flex rounded-full border border-orange-200 bg-white/70 px-4 py-2 text-sm font-medium text-orange-700">
              Full-Stack Web Developer
            </p>
            <h1 className="hero-title-3d text-4xl font-semibold leading-tight tracking-normal text-neutral-950 sm:text-5xl lg:text-6xl">
              Hi - I am Yosef Handero.
            </h1>
            <ContactPanel />
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="hero-photo-frame relative aspect-[4/5] w-full max-w-[430px] overflow-hidden rounded-[28px] border border-white">
              <Image
                src="/profile.jpg"
                alt="Yosef Handero"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 430px"
                className="hero-photo-image object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="work"
        className="mx-auto max-w-6xl px-5 py-12 sm:px-6 lg:px-8"
      >
        <h2 className="mb-8 text-3xl font-semibold text-neutral-950 sm:text-4xl">
          Projects
        </h2>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col rounded-[20px] border border-white/80 bg-white/70 p-4 shadow-[0_18px_45px_rgba(20,20,20,0.10)] backdrop-blur-sm transition duration-300 [transform-style:preserve-3d] hover:-translate-y-2 hover:shadow-[0_24px_70px_rgba(20,20,20,0.16)] hover:[transform:translateY(-0.5rem)_rotateX(2deg)_rotateY(-2deg)_scale(1.01)]"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/80 bg-white/90 text-neutral-950 shadow-[0_8px_20px_rgba(20,20,20,0.12)] transition duration-300 group-hover:-translate-y-1 group-hover:scale-105">
                <ProjectIcon variant={project.icon} />
              </div>
              <div className="pb-4 pt-4">
                <h3 className="text-lg font-semibold text-neutral-950">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-neutral-600">
                  {project.description}
                </p>
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="mt-auto inline-flex h-10 w-full items-center justify-center rounded-full bg-orange-500 px-4 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(249,115,22,0.22)] transition hover:bg-orange-600"
              >
                Visit Site
              </a>
            </article>
          ))}
        </div>
      </section>

      <footer className="h-10" aria-hidden="true" />
    </main>
  );
}

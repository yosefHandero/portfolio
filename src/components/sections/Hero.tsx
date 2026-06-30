"use client";

import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";
import { m } from "motion/react";
import Button from "@/components/ui/Button";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import Tilt3D from "@/components/ui/Tilt3D";
import { GridPattern } from "@/components/ui/magic/grid-pattern";
import { isValidProfileUrl, profileLinks } from "@/lib/data";
import { DURATION, EASE, staggerContainer } from "@/lib/motion";

export default function Hero() {
  const showGithub = isValidProfileUrl(profileLinks.github);
  const showLinkedin = isValidProfileUrl(profileLinks.linkedin);

  return (
    <section
      id="hero"
      className="relative mx-auto max-w-6xl px-5 pb-12 pt-24 sm:px-6 sm:pb-16 sm:pt-28 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[28px]">
        <GridPattern className="opacity-35" />
        <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-green-200/30 blur-3xl" />
      </div>

      <m.div
        initial="hidden"
        animate="show"
        variants={staggerContainer(0.12, 0.1)}
        className="glass-card relative grid min-h-[480px] items-center gap-10 rounded-[28px] px-6 py-10 shadow-[0_30px_100px_rgba(20,20,20,0.12)] sm:min-h-[520px] sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-14"
      >
        <div className="max-w-3xl">
          <m.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: DURATION.base, ease: EASE },
              },
            }}
            className="hero-kicker-3d section-eyebrow mb-5 inline-flex rounded-full border border-green-200 bg-white/50 px-4 py-2 text-xs font-semibold text-green-700 backdrop-blur-md sm:text-sm"
          >
            Full-Stack Web Developer
          </m.p>

          <m.h1
            variants={{
              hidden: { opacity: 0, y: 24 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: DURATION.slow, ease: EASE },
              },
            }}
            className="hero-title-3d text-4xl font-semibold leading-[1.1] tracking-tight text-neutral-950 sm:text-5xl lg:text-6xl"
          >
            I design, build, and deploy full-stack web apps.
          </m.h1>

          <m.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: DURATION.base, ease: EASE },
              },
            }}
            className="mt-5 max-w-xl text-base leading-7 text-neutral-600 sm:text-lg"
          >
            Hi — I&apos;m{" "}
            <span className="font-medium text-neutral-950">Yosef Handero</span>.
            I take projects from interface to API integration to live deployment
            — four real apps below, each built and shipped solo.
          </m.p>

          <m.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: DURATION.base, ease: EASE },
              },
            }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#work">
              <Button variant="primary" size="lg">
                View Work
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </a>
            <a href="#contact">
              <Button variant="secondary" size="lg">
                <Mail className="h-4 w-4" aria-hidden="true" />
                Get in Touch
              </Button>
            </a>
          </m.div>

          {showGithub || showLinkedin ? (
            <m.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: DURATION.base, ease: EASE },
                },
              }}
              className="mt-6 flex flex-wrap gap-3"
            >
              {showGithub ? (
                <a
                  href={profileLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  className="glass-card-solid inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-neutral-700 transition duration-300 hover:-translate-y-0.5 hover:text-green-700"
                >
                  <GithubIcon className="h-4 w-4 text-green-500" />
                  GitHub
                </a>
              ) : null}
              {showLinkedin ? (
                <a
                  href={profileLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="glass-card-solid inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-neutral-700 transition duration-300 hover:-translate-y-0.5 hover:text-green-700"
                >
                  <LinkedinIcon className="h-4 w-4 text-green-500" />
                  LinkedIn
                </a>
              ) : null}
            </m.div>
          ) : null}
        </div>

        <m.div
          variants={{
            hidden: { opacity: 0, scale: 0.96 },
            show: {
              opacity: 1,
              scale: 1,
              transition: { duration: DURATION.slow, ease: EASE },
            },
          }}
          className="flex justify-center lg:justify-end"
        >
          <Tilt3D className="w-full max-w-[430px]">
            <m.div className="hero-photo-frame relative aspect-[4/5] w-full overflow-hidden rounded-[28px] border border-white">
              <Image
                src="/profile.jpg"
                alt="Yosef Handero"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 430px"
                className="hero-photo-image object-cover"
              />
            </m.div>
          </Tilt3D>
        </m.div>
      </m.div>
    </section>
  );
}

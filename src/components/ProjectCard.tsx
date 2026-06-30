"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { MagicCard } from "@/components/ui/magic/magic-card";
import Tilt3D from "@/components/ui/Tilt3D";
import type { Project } from "@/lib/data";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Tilt3D className="h-full" maxTilt={6} lift={8}>
      <article className="group flex h-full flex-col">
        <MagicCard className="glass-card flex h-full flex-col overflow-hidden rounded-[24px] p-0">
          <div
            className={cn(
              "project-preview relative h-44 overflow-hidden border-b border-white/50 sm:h-48",
            )}
          >
            <Image
              src={project.image}
              alt={`Screenshot of ${project.title}`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:transform-none"
            />

            <div
              className="pointer-events-none absolute inset-0 bg-linear-to-t from-neutral-950/25 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              aria-hidden="true"
            />
          </div>

          <div className="flex flex-1 flex-col p-5 sm:p-6">
            <h3 className="text-xl font-semibold text-neutral-950">
              {project.title}
            </h3>
            <p className="mt-1 text-sm font-medium text-green-700">
              {project.tagline}
            </p>
            <p className="mt-3 text-sm leading-6 text-neutral-600">
              {project.problem}
            </p>

            <ul className="mt-4 flex flex-wrap gap-2">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="glass-card-solid rounded-full px-3 py-1 text-xs font-medium text-neutral-700 transition duration-300 hover:-translate-y-0.5 hover:border-green-200"
                >
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-green-50/80 px-2 py-0.5 text-xs font-medium text-green-900"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-auto flex flex-col gap-2 pt-5">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="hero-button-3d inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-green-400 px-4 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(74,222,128,0.3)] transition hover:-translate-y-0.5 hover:bg-green-500 hover:shadow-[0_16px_36px_rgba(74,222,128,0.35)]"
              >
                Visit Site
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
              {project.codeUrl ? (
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-full border border-neutral-200/80 bg-white/60 px-4 text-sm font-medium text-neutral-700 transition hover:-translate-y-0.5 hover:border-green-200 hover:text-green-800"
                >
                  View Code
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              ) : null}
            </div>
          </div>
        </MagicCard>
      </article>
    </Tilt3D>
  );
}

import {
  Cloud,
  Code2,
  Database,
  GitBranch,
  Globe,
  Layers,
  Server,
  Sparkles,
} from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { skillCategories } from "@/lib/data";
import { cn } from "@/lib/utils";

const skillIcons: Record<string, React.ReactNode> = {
  React: <Sparkles className="h-4 w-4" />,
  "Next.js": <Globe className="h-4 w-4" />,
  TypeScript: <Code2 className="h-4 w-4" />,
  "Tailwind CSS": <Layers className="h-4 w-4" />,
  "Node.js": <Server className="h-4 w-4" />,
  "API Integration": <Server className="h-4 w-4" />,
  "REST APIs": <Server className="h-4 w-4" />,
  PostgreSQL: <Database className="h-4 w-4" />,
  SQL: <Database className="h-4 w-4" />,
  Git: <GitBranch className="h-4 w-4" />,
  GitHub: <GitBranch className="h-4 w-4" />,
  Vercel: <Cloud className="h-4 w-4" />,
};

function SkillBadge({ name }: { name: string }) {
  return (
    <div
      className={cn(
        "glass-card-solid flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-neutral-700 transition duration-300 hover:-translate-y-0.5 hover:border-green-200 hover:text-green-800",
      )}
    >
      <span className="text-green-500">{skillIcons[name]}</span>
      {name}
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      <Reveal className="mb-12 text-left sm:mb-14">
        <p className="section-eyebrow mb-3 text-xs font-semibold text-green-600">
          Capabilities
        </p>
        <h2 className="text-3xl font-semibold text-neutral-950 sm:text-4xl lg:text-5xl">
          Skills &amp; Stack
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-600">
          The stack behind the projects below — from React interfaces to API
          integration and deployment.
        </p>
      </Reveal>

      <Stagger
        className="grid gap-6 sm:grid-cols-2"
        stagger={0.08}
      >
        {skillCategories.map((category) => (
          <StaggerItem key={category.label}>
            <div className="glass-card h-full rounded-[24px] p-6 transition duration-300 hover:border-green-200/80">
              <p className="section-eyebrow mb-4 text-xs font-semibold text-neutral-500">
                {category.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <SkillBadge key={skill.name} name={skill.name} />
                ))}
              </div>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}

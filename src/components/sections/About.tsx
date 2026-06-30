import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { aboutBio, aboutHighlights, experience } from "@/lib/data";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      <Reveal className="mb-12 text-center sm:mb-14">
        <p className="section-eyebrow mb-3 text-xs font-semibold text-green-600">
          Background
        </p>
        <h2 className="text-3xl font-semibold text-neutral-950 sm:text-4xl lg:text-5xl">
          About
        </h2>
      </Reveal>

      <div className="glass-card grid gap-8 rounded-[28px] p-6 shadow-[0_30px_100px_rgba(20,20,20,0.08)] sm:p-10 lg:grid-cols-[1.15fr_0.85fr]">
        <Stagger className="space-y-5" stagger={0.1}>
          {aboutBio.map((paragraph, index) => (
            <StaggerItem key={index}>
              <p className="max-w-prose text-base leading-7 text-neutral-600 sm:text-lg">
                {paragraph}
              </p>
            </StaggerItem>
          ))}

          <StaggerItem>
            <div className="glass-card-solid rounded-2xl p-5">
              <h3 className="text-sm font-semibold text-neutral-950">
                {experience.title}
              </h3>
              <ul className="mt-3 space-y-2">
                {experience.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-2 text-sm leading-6 text-neutral-600"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-green-500" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>
        </Stagger>

        <Stagger className="grid gap-4" stagger={0.08}>
          {aboutHighlights.map((item) => (
            <StaggerItem key={item.label}>
              <div className="glass-card-solid rounded-2xl p-5 transition duration-300 hover:-translate-y-0.5 hover:border-green-200">
                <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                  {item.label}
                </p>
                <p className="mt-2 text-xl font-semibold text-neutral-950">
                  {item.value}
                </p>
                <p className="mt-1 text-sm text-neutral-600">{item.detail}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

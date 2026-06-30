"use client";

import { Mail, Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import { MagicCard } from "@/components/ui/magic/magic-card";
import { Reveal } from "@/components/ui/Reveal";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import Tilt3D from "@/components/ui/Tilt3D";
import { contactInfo, getSocialLinks } from "@/lib/data";
import { scaleIn } from "@/lib/motion";

export default function Contact() {
  const secondaryLinks = getSocialLinks().filter(
    (link) => link.icon === "phone" || link.icon === "github" || link.icon === "linkedin",
  );

  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-5 py-20 pb-28 sm:px-6 sm:py-28 lg:px-8"
    >
      <Reveal className="mb-12 text-left sm:mb-14">
        <p className="section-eyebrow mb-3 text-xs font-semibold text-green-600">
          Get in touch
        </p>
        <h2 className="text-3xl font-semibold text-neutral-950 sm:text-4xl lg:text-5xl">
          Let&apos;s work together
        </h2>
        <p className="mt-4 max-w-xl text-base leading-7 text-neutral-600 sm:text-lg">
          Open to full-stack roles and project work. Send an email and I&apos;ll
          get back to you.
        </p>
      </Reveal>

      <Reveal variants={scaleIn}>
        <Tilt3D className="mx-auto max-w-lg sm:mx-0" maxTilt={6} lift={6}>
          <MagicCard className="glass-card p-8 sm:p-10">
            <div className="text-center sm:text-left">
              <p className="text-sm font-medium text-neutral-500">
                Best way to reach me
              </p>
              <p className="mt-2 text-xl font-semibold text-neutral-950 sm:text-2xl">
                {contactInfo.email}
              </p>
            </div>

            <div className="mt-8">
              <a href={`mailto:${contactInfo.email}`} className="block">
                <Button size="lg" className="w-full">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  Send an Email
                </Button>
              </a>
            </div>

            {secondaryLinks.length > 0 ? (
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:justify-start">
                {secondaryLinks.map((link) => {
                  if (link.icon === "phone") {
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        className="glass-card-solid inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium text-neutral-700 transition duration-300 hover:-translate-y-0.5 hover:text-green-700"
                        aria-label={`Call ${contactInfo.phone}`}
                      >
                        <Phone className="h-4 w-4 text-green-500" />
                        {contactInfo.phone}
                      </a>
                    );
                  }

                  if (link.icon === "github") {
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="glass-card-solid inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium text-neutral-700 transition duration-300 hover:-translate-y-0.5 hover:text-green-700"
                        aria-label="GitHub profile"
                      >
                        <GithubIcon className="h-4 w-4 text-green-500" />
                        GitHub
                      </a>
                    );
                  }

                  if (link.icon === "linkedin") {
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="glass-card-solid inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium text-neutral-700 transition duration-300 hover:-translate-y-0.5 hover:text-green-700"
                        aria-label="LinkedIn profile"
                      >
                        <LinkedinIcon className="h-4 w-4 text-green-500" />
                        LinkedIn
                      </a>
                    );
                  }

                  return null;
                })}
              </div>
            ) : (
              <div className="mt-6 flex justify-center sm:justify-start">
                <a
                  href={contactInfo.phoneHref}
                  className="glass-card-solid inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium text-neutral-700 transition duration-300 hover:-translate-y-0.5 hover:text-green-700"
                  aria-label={`Call ${contactInfo.phone}`}
                >
                  <Phone className="h-4 w-4 text-green-500" />
                  {contactInfo.phone}
                </a>
              </div>
            )}
          </MagicCard>
        </Tilt3D>
      </Reveal>
    </section>
  );
}

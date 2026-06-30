"use client";

import { useCallback, useEffect, useState } from "react";
import { m } from "motion/react";
import { navLinks } from "@/lib/data";
import { fade } from "@/lib/motion";
import { cn } from "@/lib/utils";

const sectionIds = ["hero", ...navLinks.map((link) => link.href.replace("#", ""))];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const visibleSections = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.id;
          if (entry.isIntersecting) {
            visibleSections.set(id, entry.intersectionRatio);
          } else {
            visibleSections.delete(id);
          }
        }

        if (visibleSections.size === 0) return;

        let bestId = "hero";
        let bestRatio = 0;

        for (const [id, ratio] of visibleSections) {
          if (ratio >= bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        }

        setActiveSection(bestId);
      },
      {
        root: null,
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      },
    );

    for (const id of sectionIds) {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const handleNavClick = useCallback((id: string) => {
    setActiveSection(id);
  }, []);

  return (
    <m.header
      initial="hidden"
      animate="show"
      variants={fade}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:px-6"
    >
      <nav
        aria-label="Main navigation"
        className={cn(
          "glass-card flex w-full max-w-2xl items-center justify-between rounded-full px-4 py-2 sm:px-6",
          scrolled && "shadow-[0_12px_40px_rgba(20,20,20,0.1)]",
        )}
      >
        <a
          href="#hero"
          onClick={() => handleNavClick("hero")}
          className="text-sm font-semibold text-neutral-950 transition hover:text-green-600"
        >
          YH
        </a>

        <ul className="flex items-center gap-1 sm:gap-2">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;

            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => handleNavClick(id)}
                  className={cn(
                    "relative rounded-full px-3 py-1.5 text-xs font-medium transition duration-300 sm:px-4 sm:text-sm",
                    isActive
                      ? "text-green-700"
                      : "text-neutral-600 hover:text-neutral-950",
                  )}
                >
                  {link.label}
                  {isActive && (
                    <m.span
                      layoutId="nav-indicator"
                      className="absolute inset-0 -z-10 rounded-full bg-green-100"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </m.header>
  );
}

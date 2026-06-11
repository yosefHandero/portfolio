"use client";

import { useState } from "react";

export default function ContactPanel() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-8 w-full max-w-sm">
      <button
        type="button"
        aria-controls="contact-panel"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
        className="hero-button-3d inline-flex h-12 items-center justify-center rounded-full bg-orange-500 px-7 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(249,115,22,0.28)] transition hover:-translate-y-0.5 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-[#efefeb]"
      >
        Contact
      </button>

      <div
        id="contact-panel"
        className={`grid transition-all duration-300 ease-out ${
          isOpen
            ? "mt-4 grid-rows-[1fr] opacity-100"
            : "mt-0 grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="rounded-2xl border border-white bg-white/75 p-4 text-sm leading-7 text-neutral-700 shadow-[0_16px_40px_rgba(20,20,20,0.08)] backdrop-blur">
            <p>
              <span className="font-semibold text-neutral-950">Email:</span>{" "}
              yosefpetrosh@gmail.com
            </p>
            <p>
              <span className="font-semibold text-neutral-950">Phone:</span>{" "}
              248-469-9579
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

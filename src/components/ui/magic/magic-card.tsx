"use client";

import { useCallback, useRef } from "react";
import { m, useMotionTemplate, useMotionValue, useSpring } from "motion/react";
import { cn } from "@/lib/utils";

type MagicCardProps = {
  children: React.ReactNode;
  className?: string;
  gradientSize?: number;
  gradientColor?: string;
};

export function MagicCard({
  children,
  className,
  gradientSize = 200,
  gradientColor = "rgba(74, 222, 128, 0.2)",
}: MagicCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(-gradientSize);
  const mouseY = useMotionValue(-gradientSize);

  const springConfig = { stiffness: 300, damping: 30 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);
  const background = useMotionTemplate`radial-gradient(${gradientSize}px circle at ${springX}px ${springY}px, ${gradientColor}, transparent 80%)`;

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const { left, top } = cardRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - left);
      mouseY.set(e.clientY - top);
    },
    [mouseX, mouseY],
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(-gradientSize);
    mouseY.set(-gradientSize);
  }, [mouseX, mouseY, gradientSize]);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "glass-card group relative overflow-hidden rounded-[20px]",
        className,
      )}
    >
      <m.div
        className="pointer-events-none absolute -inset-px rounded-[20px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background }}
      />
      {children}
    </div>
  );
}

"use client";

import { useRef, useSyncExternalStore } from "react";
import { m, useMotionValue, useSpring } from "motion/react";
import { cn } from "@/lib/utils";

type Tilt3DProps = {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  lift?: number;
};

function subscribeReducedMotion(onStoreChange: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", onStoreChange);
  return () => mq.removeEventListener("change", onStoreChange);
}

function getReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function Tilt3D({
  children,
  className,
  maxTilt = 10,
  lift = 12,
}: Tilt3DProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotion,
    () => true,
  );

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const translateZ = useMotionValue(0);

  const springConfig = { stiffness: 300, damping: 30 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);
  const springTranslateZ = useSpring(translateZ, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const percentX = (e.clientX - centerX) / (rect.width / 2);
    const percentY = (e.clientY - centerY) / (rect.height / 2);

    rotateY.set(percentX * maxTilt);
    rotateX.set(-percentY * maxTilt);
    translateZ.set(lift);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    translateZ.set(0);
  };

  return (
    <m.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn("h-full [perspective:1000px]", className)}
      style={
        reducedMotion
          ? undefined
          : {
              rotateX: springRotateX,
              rotateY: springRotateY,
              translateZ: springTranslateZ,
              transformStyle: "preserve-3d",
            }
      }
    >
      {children}
    </m.div>
  );
}

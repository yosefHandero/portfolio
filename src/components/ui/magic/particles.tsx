"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type ParticlesProps = {
  className?: string;
  quantity?: number;
  color?: string;
  size?: number;
  refresh?: boolean;
};

function hexToRgb(hex: string): string {
  const cleaned = hex.replace("#", "");
  const normalized =
    cleaned.length === 3
      ? cleaned
          .split("")
          .map((char) => char + char)
          .join("")
      : cleaned;
  const hexInt = parseInt(normalized, 16);
  const red = (hexInt >> 16) & 255;
  const green = (hexInt >> 8) & 255;
  const blue = hexInt & 255;
  return `${red}, ${green}, ${blue}`;
}

type Circle = {
  x: number;
  y: number;
  size: number;
  alpha: number;
  dx: number;
  dy: number;
};

export function Particles({
  className,
  quantity = 40,
  color = "#4ade80",
  size = 0.4,
  refresh = false,
}: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    let width = 0;
    let height = 0;
    let frameId = 0;
    const rgb = hexToRgb(color);
    const circles: Circle[] = [];

    const resize = () => {
      width = container.offsetWidth;
      height = container.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      circles.length = 0;

      for (let i = 0; i < quantity; i++) {
        circles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 2 + size,
          alpha: Math.random() * 0.35 + 0.1,
          dx: (Math.random() - 0.5) * 0.15,
          dy: (Math.random() - 0.5) * 0.15,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (const circle of circles) {
        circle.x += circle.dx;
        circle.y += circle.dy;

        if (circle.x < 0 || circle.x > width) circle.dx *= -1;
        if (circle.y < 0 || circle.y > height) circle.dy *= -1;

        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb}, ${circle.alpha})`;
        ctx.fill();
      }

      frameId = window.requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(frameId);
    };
  }, [color, quantity, refresh, size]);

  return (
    <div
      ref={containerRef}
      className={cn("pointer-events-none absolute inset-0", className)}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="size-full" />
    </div>
  );
}

import { cn } from "@/lib/utils";

export function AnimatedShinyText({
  children,
  className,
  shimmerWidth = 100,
}: {
  children: React.ReactNode;
  className?: string;
  shimmerWidth?: number;
}) {
  return (
    <span
      style={
        {
          "--shimmer-width": `${shimmerWidth}px`,
        } as React.CSSProperties
      }
      className={cn(
        "inline-flex items-center justify-center bg-[linear-gradient(110deg,#c2410c,45%,#fff,55%,#c2410c)] bg-[length:200%_100%] bg-clip-text text-transparent animate-shimmer",
        className,
      )}
    >
      {children}
    </span>
  );
}

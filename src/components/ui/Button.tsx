import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
};

const variantStyles = {
  primary:
    "bg-green-400 text-white shadow-[0_12px_30px_rgba(74,222,128,0.35)] hover:bg-green-500 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(74,222,128,0.4)]",
  secondary:
    "glass-surface border-white/60 bg-white/80 text-neutral-950 shadow-[0_8px_20px_rgba(20,20,20,0.08)] hover:bg-white/90 hover:-translate-y-0.5",
  ghost: "text-neutral-700 hover:bg-white/50 hover:text-neutral-950",
};

const sizeStyles = {
  sm: "h-9 px-4 text-xs",
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-7 text-sm",
};

export default function Button({
  className,
  variant = "primary",
  size = "md",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "hero-button-3d inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-[#f7f7f5] disabled:pointer-events-none disabled:opacity-50",
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

import type { ProjectIconVariant } from "@/lib/data";

export function ProjectIcon({ variant }: { variant: ProjectIconVariant }) {
  if (variant === "banking") {
    return (
      <svg
        aria-hidden="true"
        className="h-14 w-14"
        viewBox="0 0 64 64"
        fill="none"
      >
        <rect
          x="11"
          y="20"
          width="42"
          height="29"
          rx="8"
          className="fill-white stroke-neutral-950"
          strokeWidth="2.4"
        />
        <path
          d="M15 28h34"
          className="stroke-green-500"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M21 39h11M38 39h5"
          className="stroke-neutral-950"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <path
          d="M24 16h16l5 4H19l5-4Z"
          className="fill-green-100 stroke-neutral-950"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (variant === "market") {
    return (
      <svg
        aria-hidden="true"
        className="h-14 w-14"
        viewBox="0 0 64 64"
        fill="none"
      >
        <path
          d="M14 47h38"
          className="stroke-neutral-950"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <path
          d="M18 40l9-9 8 6 12-17"
          className="stroke-green-500"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 21v24M34 17v28M46 25v20"
          className="stroke-neutral-950"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M18 27h8M30 25h8M42 33h8"
          className="stroke-neutral-950"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (variant === "care") {
    return (
      <svg
        aria-hidden="true"
        className="h-14 w-14"
        viewBox="0 0 64 64"
        fill="none"
      >
        <path
          d="M32 12l16 6v12c0 12-7 19-16 22-9-3-16-10-16-22V18l16-6Z"
          className="fill-white stroke-neutral-950"
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
        <path
          d="M32 41c-5-3.4-9-6.6-9-11a4.6 4.6 0 0 1 9-1.6A4.6 4.6 0 0 1 41 30c0 4.4-4 7.6-9 11Z"
          className="fill-green-500 stroke-green-500"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      className="h-14 w-14"
      viewBox="0 0 64 64"
      fill="none"
    >
      <rect
        x="12"
        y="17"
        width="40"
        height="32"
        rx="7"
        className="fill-white stroke-neutral-950"
        strokeWidth="2.4"
      />
      <path
        d="M18 17l6 10M32 17l6 10M46 17l6 10M13 28h38"
        className="stroke-neutral-950"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M28 35v8l8-4-8-4Z"
        className="fill-green-500 stroke-green-500"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

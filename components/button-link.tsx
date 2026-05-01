import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const variants = {
  primary:
    "border-[#1A6FC4] bg-[#1A6FC4] text-white hover:border-[#0B5EA8] hover:bg-[#0B5EA8]",
  secondary:
    "border-[#CBD6E2] bg-white text-[#0B1E33] hover:border-[#1A6FC4] hover:bg-[#EEF5FC]",
  ghost:
    "border-transparent bg-transparent text-[#526070] hover:border-[#CBD6E2] hover:text-[#07111F]",
};

export function ButtonLink({ href, children, variant = "primary", className = "" }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={[
        "button-premium",
        "inline-flex min-h-11 items-center justify-center rounded-sm border px-5 py-3",
        "font-display text-sm font-bold uppercase",
        variants[variant],
        className,
      ].join(" ")}
    >
      {children}
    </Link>
  );
}

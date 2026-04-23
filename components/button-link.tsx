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
    "border-signal bg-signal text-white hover:border-[#44B5EF] hover:bg-[#44B5EF]",
  secondary:
    "border-steel/40 bg-cloud/0 text-cloud hover:border-signal/70 hover:bg-signal/10",
  ghost:
    "border-transparent bg-transparent text-mist hover:border-steel/30 hover:text-cloud",
};

export function ButtonLink({ href, children, variant = "primary", className = "" }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={[
        "button-premium",
        "inline-flex min-h-11 items-center justify-center rounded-sm border px-5 py-3",
        "font-display text-sm font-bold uppercase tracking-[0.16em]",
        variants[variant],
        className,
      ].join(" ")}
    >
      {children}
    </Link>
  );
}

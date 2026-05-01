import Link from "next/link";

type LogoProps = {
  href?: string;
  label: string;
  compact?: boolean;
};

export function Logo({ href = "/", label, compact = false }: LogoProps) {
  const content = (
    <span className="inline-flex items-center gap-3">
      <LogoMark className={compact ? "h-6 w-6" : "h-8 w-7"} />
      <span
        className={[
          "font-display font-black uppercase leading-none text-[#07111F]",
          compact ? "text-lg sm:text-xl" : "text-2xl",
        ].join(" ")}
      >
        DRONEOPS
      </span>
    </span>
  );

  return (
    <Link href={href} aria-label={label} className="inline-flex items-center rounded-sm">
      {content}
    </Link>
  );
}

type LogoMarkProps = {
  className?: string;
};

export function LogoMark({ className = "h-8 w-7" }: LogoMarkProps) {
  return (
    <svg className={className} viewBox="0 0 40 46" fill="none" aria-hidden="true">
      <line x1="0" y1="7" x2="40" y2="7" stroke="#1A6FC4" strokeWidth="2.7" strokeLinecap="round" />
      <polygon points="20,43 3,9 37,9" fill="none" stroke="#0B1E33" strokeWidth="2.7" strokeLinejoin="round" />
      <circle cx="20" cy="43" r="3.7" fill="#E05A1A" />
    </svg>
  );
}

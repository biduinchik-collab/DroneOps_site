import Link from "next/link";

import { locales, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";

type LanguageSwitcherProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function LanguageSwitcher({ locale, dictionary }: LanguageSwitcherProps) {
  return (
    <div
      aria-label={dictionary.language.label}
      className="inline-flex rounded-sm border border-steel/25 bg-void/70 p-1"
    >
      {locales.map((item) => {
        const active = item === locale;
        return (
          <Link
            key={item}
            href={`/${item}`}
            aria-current={active ? "page" : undefined}
            className={[
              "language-pill",
              "rounded-xs px-2.5 py-1.5 font-display text-[0.72rem] font-bold uppercase tracking-[0.18em]",
              active ? "bg-signal text-white" : "text-steel hover:bg-panel hover:text-cloud",
            ].join(" ")}
          >
            {dictionary.language[item]}
          </Link>
        );
      })}
    </div>
  );
}

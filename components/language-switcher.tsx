"use client";

import Link from "next/link";
import type { MouseEvent } from "react";

import { locales, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";

type LanguageSwitcherProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function LanguageSwitcher({ locale, dictionary }: LanguageSwitcherProps) {
  function preserveHash(targetLocale: Locale) {
    return (event: MouseEvent<HTMLAnchorElement>) => {
      const hash = window.location.hash;

      if (!hash) {
        return;
      }

      event.preventDefault();
      window.location.assign(`/${targetLocale}${hash}`);
    };
  }

  return (
    <div
      aria-label={dictionary.language.label}
      className="inline-flex rounded-sm border border-[#CBD6E2] bg-[#F7F8FA] p-1"
    >
      {locales.map((item) => {
        const active = item === locale;
        return (
          <Link
            key={item}
            href={`/${item}`}
            onClick={preserveHash(item)}
            aria-current={active ? "page" : undefined}
            className={[
              "language-pill",
              "rounded-xs px-2 py-1.5 font-display text-[0.68rem] font-bold uppercase",
              active ? "bg-[#0B1E33] text-white" : "text-[#526070] hover:bg-white hover:text-[#07111F]",
            ].join(" ")}
          >
            {dictionary.language[item]}
          </Link>
        );
      })}
    </div>
  );
}

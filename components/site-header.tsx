import Link from "next/link";

import { ButtonLink } from "@/components/button-link";
import { LanguageSwitcher } from "@/components/language-switcher";
import { Logo } from "@/components/logo";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";

type SiteHeaderProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function SiteHeader({ locale, dictionary }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-[#DDE5EF] bg-white/92 backdrop-blur-xl">
      <div className="site-shell flex min-h-[4.5rem] items-center justify-between gap-3 py-3">
        <Logo href={`/${locale}`} label={`${dictionary.common.siteName} home`} compact />

        <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">
          {dictionary.nav.items.map((item) => (
            <Link
              key={item.href}
              href={`/${locale}${item.href}`}
              className="nav-link font-display text-sm font-semibold uppercase text-[#526070] transition duration-300 hover:text-[#07111F]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <LanguageSwitcher locale={locale} dictionary={dictionary} />
          <ButtonLink href={`/${locale}#contact`} className="hidden sm:inline-flex">
            {dictionary.nav.cta}
          </ButtonLink>

          <details className="relative inline-flex flex-none lg:hidden">
            <summary
              aria-label={dictionary.nav.mobileSummary}
              className="button-premium inline-flex min-h-10 min-w-10 cursor-pointer list-none items-center justify-center rounded-sm border border-[#CBD6E2] px-2.5 font-display text-lg font-bold uppercase text-[#0B1E33] transition hover:border-[#1A6FC4]"
            >
              <span aria-hidden="true">☰</span>
              <span className="sr-only">{dictionary.nav.mobileSummary}</span>
            </summary>
            <div className="menu-panel absolute right-0 mt-3 w-64 rounded-md border border-[#CBD6E2] bg-white p-3 shadow-xl">
              <nav aria-label="Mobile navigation" className="grid gap-1">
                {dictionary.nav.items.map((item) => (
                  <Link
                    key={item.href}
                    href={`/${locale}${item.href}`}
                    className="rounded-sm px-3 py-3 font-display text-sm font-semibold uppercase text-[#526070] transition duration-300 hover:bg-[#F5F7FA] hover:text-[#07111F]"
                  >
                    {item.label}
                  </Link>
                ))}
                <ButtonLink href={`/${locale}#contact`} className="mt-2 w-full">
                  {dictionary.nav.cta}
                </ButtonLink>
              </nav>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}

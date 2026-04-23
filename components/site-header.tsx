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
    <header className="sticky top-0 z-50 border-b border-steel/20 bg-void/90 backdrop-blur-xl">
      <div className="site-shell flex min-h-20 items-center justify-between gap-4">
        <Logo href={`/${locale}`} label={`${dictionary.common.siteName} home`} compact />

        <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">
          {dictionary.nav.items.map((item) => (
            <Link
              key={item.href}
              href={`/${locale}${item.href}`}
              className="font-display text-sm font-medium uppercase tracking-[0.12em] text-steel transition duration-200 hover:text-cloud"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher locale={locale} dictionary={dictionary} />
          <ButtonLink href={`/${locale}#contact`} className="hidden sm:inline-flex">
            {dictionary.nav.cta}
          </ButtonLink>

          <details className="relative lg:hidden">
            <summary className="inline-flex min-h-10 cursor-pointer list-none items-center rounded-sm border border-steel/25 px-3 font-display text-xs font-bold uppercase tracking-[0.18em] text-cloud transition hover:border-signal/60">
              {dictionary.nav.mobileSummary}
            </summary>
            <div className="absolute right-0 mt-3 w-64 rounded-md border border-steel/20 bg-obsidian p-3 shadow-glow">
              <nav aria-label="Mobile navigation" className="grid gap-1">
                {dictionary.nav.items.map((item) => (
                  <Link
                    key={item.href}
                    href={`/${locale}${item.href}`}
                    className="rounded-sm px-3 py-3 font-display text-sm font-medium uppercase tracking-[0.12em] text-mist hover:bg-panel hover:text-cloud"
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

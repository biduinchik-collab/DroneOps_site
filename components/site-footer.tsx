import Link from "next/link";

import { Logo } from "@/components/logo";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";

type SiteFooterProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function SiteFooter({ locale, dictionary }: SiteFooterProps) {
  return (
    <footer className="border-t border-steel/20 bg-void">
      <div className="site-shell grid gap-12 py-14 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo href={`/${locale}`} label={`${dictionary.common.siteName} home`} compact />
          <p className="mt-5 max-w-md text-sm font-light leading-7 text-mist">{dictionary.footer.note}</p>
          <p className="mt-6 font-display text-xs uppercase tracking-[0.24em] text-steel">
            {dictionary.common.tagline}
          </p>
        </div>

        {dictionary.footer.sections.map((section) => (
          <div key={section.title}>
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-cloud">{section.title}</h2>
            <ul className="mt-4 grid gap-3">
              {section.links.map((link) => (
                <li key={link}>
                  <span className="text-sm font-light text-mist">{link}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-steel/20">
        <div className="site-shell flex flex-col gap-3 py-5 text-xs text-steel sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {dictionary.footer.copyright}</p>
          <Link href={`mailto:${dictionary.common.contactEmail}`} className="hover:text-cloud">
            {dictionary.common.contactEmail}
          </Link>
          <p>{dictionary.footer.legal}</p>
        </div>
      </div>
    </footer>
  );
}

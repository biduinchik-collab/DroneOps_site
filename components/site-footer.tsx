import Link from "next/link";

import { Logo } from "@/components/logo";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";

type SiteFooterProps = {
  locale: Locale;
  dictionary: Dictionary;
};

const footerLinkMap = [
  ["#nora", "#modes", "#integration", "#deployment"],
  ["#contact", "#contact", "#contact"],
] as const;

export function SiteFooter({ locale, dictionary }: SiteFooterProps) {
  return (
    <footer className="border-t border-[#DDE5EF] bg-white">
      <div className="site-shell grid gap-12 py-14 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo href={`/${locale}`} label={`${dictionary.common.siteName} home`} compact />
          <p className="mt-5 max-w-md text-sm leading-7 text-[#526070]">{dictionary.footer.note}</p>
          <p className="mt-6 font-display text-xs font-semibold uppercase text-[#1A6FC4]">
            {dictionary.common.tagline}
          </p>
        </div>

        {dictionary.footer.sections.map((section, sectionIndex) => (
          <div key={section.title}>
            <h2 className="font-display text-sm font-bold uppercase text-[#07111F]">{section.title}</h2>
            <ul className="mt-4 grid gap-3">
              {section.links.map((link, linkIndex) => (
                <li key={link}>
                  <Link
                    href={`/${locale}${footerLinkMap[sectionIndex]?.[linkIndex] ?? "#contact"}`}
                    className="nav-link text-sm text-[#526070] transition duration-300 hover:text-[#07111F]"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-[#DDE5EF]">
        <div className="site-shell flex flex-col gap-3 py-5 text-xs text-[#526070] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {dictionary.footer.copyright}</p>
          <Link href={`mailto:${dictionary.common.contactEmail}`} className="hover:text-[#07111F]">
            {dictionary.common.contactEmail}
          </Link>
          <p>{dictionary.footer.legal}</p>
        </div>
      </div>
    </footer>
  );
}

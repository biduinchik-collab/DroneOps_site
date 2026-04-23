import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { HomePage } from "@/components/home-page";
import { isLocale, locales, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://droneoperations.ai";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale: Locale = isLocale(locale) ? locale : "en";
  const dictionary = getDictionary(safeLocale);
  const canonical = `${siteUrl}/${safeLocale}`;

  return {
    metadataBase: new URL(siteUrl),
    title: dictionary.metadata.title,
    description: dictionary.metadata.description,
    alternates: {
      canonical,
      languages: {
        en: `${siteUrl}/en`,
        "uk-UA": `${siteUrl}/uk`,
      },
    },
    openGraph: {
      title: dictionary.metadata.ogTitle,
      description: dictionary.metadata.ogDescription,
      url: canonical,
      siteName: dictionary.common.siteName,
      locale: safeLocale === "uk" ? "uk_UA" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: dictionary.metadata.ogTitle,
      description: dictionary.metadata.ogDescription,
    },
  };
}

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale);

  return <HomePage locale={locale} dictionary={dictionary} />;
}

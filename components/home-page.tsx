import type { CSSProperties } from "react";

import { ButtonLink } from "@/components/button-link";
import { ContactForm } from "@/components/contact-form";
import { MissionConsole } from "@/components/mission-console";
import { MotionRuntime } from "@/components/motion-runtime";
import { NoraExplodedAnimation } from "@/components/nora-exploded-animation";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";

type HomePageProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function HomePage({ locale, dictionary }: HomePageProps) {
  return (
    <>
      <MotionRuntime />
      <SiteHeader locale={locale} dictionary={dictionary} />
      <main className="bg-[#F7F8FA] text-[#07111F]">
        <section className="relative overflow-hidden border-b border-[#DDE5EF] bg-[#F7F8FA]">
          <div className="technical-grid-light absolute inset-0 opacity-80" />
          <div className="absolute inset-x-0 top-0 h-px bg-[#1A6FC4]/35" />
          <div className="site-shell relative grid gap-12 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:py-20">
            <div className="hero-copy">
              <p className="micro-label">{dictionary.hero.eyebrow}</p>
              <HeroTitle title={dictionary.hero.title} />
              <p className="body-lead mt-7 max-w-2xl">{dictionary.hero.body}</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={`/${locale}#contact`}>{dictionary.hero.primaryCta}</ButtonLink>
                <ButtonLink href={`/${locale}#nora`} variant="secondary">
                  {dictionary.hero.secondaryCta}
                </ButtonLink>
              </div>
              <ul className="mt-8 flex flex-wrap gap-2">
                {dictionary.hero.proof.map((item) => (
                  <li
                    key={item}
                    className="rounded-xs border border-[#CBD6E2] bg-white px-3 py-2 font-display text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[#526070] shadow-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <MissionConsole visual={dictionary.hero.visual} />
          </div>
        </section>

        <section className="border-b border-[#DDE5EF] bg-white py-8">
          <div className="site-shell grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="micro-label">{dictionary.company.eyebrow}</p>
              <h2 className="mt-3 font-display text-2xl font-bold uppercase leading-tight tracking-[0.04em] text-[#07111F]">
                {dictionary.company.title}
              </h2>
            </div>
            <div>
              <p className="max-w-3xl text-base leading-8 text-[#526070]">{dictionary.company.body}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {dictionary.company.locations.map((item) => (
                  <li
                    key={item}
                    className="rounded-xs border border-[#DDE5EF] bg-[#F7F8FA] px-3 py-2 text-sm font-medium text-[#0B1E33]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section-pad border-b border-[#DDE5EF] bg-[#F5F7FA]">
          <div className="site-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <SectionHeading
              eyebrow={dictionary.beyond.eyebrow}
              title={dictionary.beyond.title}
              body={dictionary.beyond.body}
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {dictionary.products.items.map((item, index) => (
                <article
                  key={item.name}
                  data-reveal="card"
                  style={revealDelay(index)}
                  className="premium-card rounded-lg border border-[#CBD6E2] bg-white p-6 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-display text-[0.74rem] font-semibold uppercase tracking-[0.18em] text-[#1A6FC4]">
                        {item.status}
                      </p>
                      <h3 className="mt-3 font-display text-3xl font-bold uppercase leading-none tracking-[0.03em] text-[#07111F]">
                        {item.name}
                      </h3>
                    </div>
                    <TechnicalIcon index={index} />
                  </div>
                  <p className="mt-5 text-base leading-7 text-[#526070]">{item.summary}</p>
                  <ul className="mt-6 grid gap-2 border-t border-[#DDE5EF] pt-5">
                    {item.details.map((detail) => (
                      <li key={detail} className="flex gap-3 text-sm leading-6 text-[#526070]">
                        <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[#E05A1A]" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="nora" className="section-pad border-b border-[#DDE5EF] bg-white">
          <div className="site-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <SectionHeading eyebrow={dictionary.nora.eyebrow} title={dictionary.nora.title} body={dictionary.nora.body} />
              <p className="mt-6 rounded-md border border-[#DDE5EF] bg-[#F7F8FA] p-5 text-sm leading-7 text-[#526070]">
                {dictionary.nora.boundary}
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {dictionary.nora.stats.map((stat, index) => (
                <article
                  key={stat.label}
                  data-reveal="card"
                  style={revealDelay(index, 70)}
                  className="rounded-lg border border-[#CBD6E2] bg-[#F7F8FA] p-5"
                >
                  <p className="font-display text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#526070]">
                    {stat.label}
                  </p>
                  <p className="mt-3 font-display text-2xl font-bold uppercase tracking-[0.04em] text-[#0B1E33]">
                    {stat.value}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad border-b border-[#DDE5EF] bg-[#F5F7FA]">
          <div className="site-shell grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
            <div>
              <SectionHeading
                eyebrow={dictionary.schematic.eyebrow}
                title={dictionary.schematic.title}
                body={dictionary.schematic.body}
              />
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {dictionary.schematic.specs.map((spec, index) => (
                  <div
                    key={spec.label}
                    data-reveal="card"
                    style={revealDelay(index, 65)}
                    className="rounded-md border border-[#DDE5EF] bg-white p-4"
                  >
                    <p className="font-display text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#526070]">
                      {spec.label}
                    </p>
                    <p className="mt-2 text-base font-semibold text-[#07111F]">{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div data-reveal="interface">
              <NoraExplodedAnimation schematic={dictionary.schematic} />
            </div>
          </div>
        </section>

        <section id="modes" className="section-pad border-b border-[#DDE5EF] bg-white">
          <div className="site-shell">
            <SectionHeading
              eyebrow={dictionary.nora.eyebrow}
              title="NORA"
              body={dictionary.products.items[0].summary}
              align="center"
            />
            <div className="mt-12 grid gap-4 lg:grid-cols-3">
              {dictionary.nora.modes.map((mode, index) => (
                <article
                  key={mode.title}
                  data-reveal="card"
                  style={revealDelay(index, 80)}
                  className="premium-card rounded-lg border border-[#CBD6E2] bg-[#F7F8FA] p-6"
                >
                  <p className="font-display text-sm font-bold uppercase tracking-[0.18em] text-[#1A6FC4]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-5 font-display text-2xl font-bold uppercase leading-tight tracking-[0.04em] text-[#07111F]">
                    {mode.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-[#526070]">{mode.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="integration" className="section-pad border-b border-[#DDE5EF] bg-[#F5F7FA]">
          <div className="site-shell">
            <SectionHeading
              eyebrow={dictionary.integration.eyebrow}
              title={dictionary.integration.title}
              body={dictionary.integration.body}
            />
            <div className="mt-12 grid gap-4">
              {dictionary.integration.steps.map((step, index) => (
                <article
                  key={step.title}
                  data-reveal="row"
                  style={revealDelay(index, 70)}
                  className="grid gap-4 rounded-lg border border-[#DDE5EF] bg-white p-5 sm:grid-cols-[96px_1fr] lg:grid-cols-[120px_0.55fr_1fr]"
                >
                  <p className="font-display text-sm font-semibold uppercase tracking-[0.24em] text-[#E05A1A]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-display text-2xl font-bold uppercase leading-tight tracking-[0.04em] text-[#07111F]">
                    {step.title}
                  </h3>
                  <p className="text-base leading-8 text-[#526070]">{step.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="deployment" className="section-pad border-b border-[#DDE5EF] bg-white">
          <div className="site-shell">
            <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
              <div>
                <SectionHeading
                  eyebrow={dictionary.deployment.eyebrow}
                  title={dictionary.deployment.title}
                  body={dictionary.deployment.body}
                />
                <p className="mt-8 rounded-lg border border-[#CBD6E2] bg-[#0B1E33] p-5 text-base leading-8 text-[#EDF6FF]">
                  {dictionary.deployment.standalone}
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {dictionary.deployment.options.map((option, index) => (
                  <article
                    key={option.title}
                    data-reveal="card"
                    style={revealDelay(index, 70)}
                    className="premium-card rounded-lg border border-[#CBD6E2] bg-[#F7F8FA] p-5"
                  >
                    <h3 className="font-display text-xl font-bold uppercase leading-tight tracking-[0.04em] text-[#07111F]">
                      {option.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#526070]">{option.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad border-b border-[#DDE5EF] bg-[#F5F7FA]">
          <div className="site-shell">
            <SectionHeading
              eyebrow={dictionary.setup.eyebrow}
              title={dictionary.setup.title}
              body={dictionary.setup.body}
              align="center"
            />
            <div className="mt-12 grid gap-4 lg:grid-cols-3">
              {dictionary.setup.items.map((item, index) => (
                <article
                  key={item.title}
                  data-reveal="card"
                  style={revealDelay(index, 80)}
                  className="rounded-lg border border-[#CBD6E2] bg-white p-6"
                >
                  <div className="mb-5 h-px w-16 bg-[#1A6FC4]" />
                  <h3 className="font-display text-xl font-bold uppercase leading-tight tracking-[0.04em] text-[#07111F]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-[#526070]">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section-pad bg-[#0B1E33] text-white">
          <div className="site-shell">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <div>
                <SectionHeading
                  eyebrow={dictionary.contact.eyebrow}
                  title={dictionary.contact.title}
                  body={dictionary.contact.body}
                  tone="dark"
                />
                <div className="mt-8 rounded-lg border border-white/15 bg-white/5 p-5" data-reveal="card">
                  <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-[#9FB0C3]">
                    {dictionary.contact.direct}
                  </p>
                  <a
                    href={`mailto:${dictionary.common.contactEmail}`}
                    className="mt-2 inline-flex break-all font-display text-xl font-bold uppercase tracking-[0.06em] text-white underline decoration-[#1A6FC4] underline-offset-8 hover:text-[#8DD7FF]"
                  >
                    {dictionary.common.contactEmail}
                  </a>
                </div>
              </div>

              <div className="rounded-lg border border-white/15 bg-white p-5 text-[#07111F] shadow-2xl sm:p-7" data-reveal="card">
                <ContactForm locale={locale} contact={dictionary.contact} common={dictionary.common} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} dictionary={dictionary} />
    </>
  );
}

function TechnicalIcon({ index }: { index: number }) {
  const paths = [
    "M14 34 C22 18 36 14 50 30 M18 34 H58 M36 14 V54",
    "M18 44 L34 16 L50 44 Z M34 16 V58 M22 44 H46",
    "M16 18 H54 V50 H16 Z M24 28 H46 M24 38 H38",
  ];

  return (
    <div className="flex h-12 w-12 flex-none items-center justify-center rounded-md border border-[#CBD6E2] bg-[#F5F7FA]">
      <svg viewBox="0 0 70 70" className="h-9 w-9" fill="none" aria-hidden="true">
        <path
          d={paths[index] ?? paths[0]}
          stroke="#1A6FC4"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="36" cy="36" r="27" stroke="rgba(82,96,112,0.28)" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

function HeroTitle({ title }: { title: string }) {
  return (
    <h1 className="heading-xl mt-5 max-w-4xl">
      {title.split("\n").map((line, index) => (
        <span key={`${line}-${index}`} className={index === 1 ? "block text-[#1A6FC4]" : "block"}>
          {line}
        </span>
      ))}
    </h1>
  );
}

function revealDelay(index: number, step = 90): CSSProperties {
  return { "--reveal-delay": `${index * step}ms` } as CSSProperties;
}

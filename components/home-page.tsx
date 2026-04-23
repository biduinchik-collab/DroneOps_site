import type { CSSProperties } from "react";

import { ButtonLink } from "@/components/button-link";
import { ContactForm } from "@/components/contact-form";
import { MissionConsole } from "@/components/mission-console";
import { MotionRuntime } from "@/components/motion-runtime";
import { ProductPreview } from "@/components/product-preview";
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
      <main>
        <section className="ambient-scan relative overflow-hidden border-b border-steel/20 bg-void">
          <div className="technical-grid is-animated absolute inset-0 opacity-70" />
          <div className="absolute inset-x-0 top-0 h-px bg-signal/40" />
          <div className="site-shell relative grid gap-12 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:py-24">
            <div className="hero-copy">
              <p className="micro-label">{dictionary.hero.eyebrow}</p>
              <h1 className="heading-xl mt-5 max-w-4xl whitespace-pre-line">{dictionary.hero.title}</h1>
              <p className="body-lead mt-7 max-w-2xl">{dictionary.hero.body}</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={`/${locale}#contact`}>{dictionary.hero.primaryCta}</ButtonLink>
                <ButtonLink href={`/${locale}#solutions`} variant="secondary">
                  {dictionary.hero.secondaryCta}
                </ButtonLink>
              </div>
              <ul className="mt-8 flex flex-wrap gap-2">
                {dictionary.hero.proof.map((item) => (
                  <li
                    key={item}
                    className="hero-chip rounded-xs border border-steel/20 bg-panel/40 px-3 py-2 font-display text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-mist"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <MissionConsole visual={dictionary.hero.visual} />
          </div>
        </section>

        <section id="solutions" className="section-pad border-b border-steel/20 bg-obsidian">
          <div className="site-shell">
            <SectionHeading
              eyebrow={dictionary.solutions.eyebrow}
              title={dictionary.solutions.title}
              body={dictionary.solutions.body}
            />
            <div className="mt-12 grid gap-4 lg:grid-cols-3">
              {dictionary.solutions.items.map((item, index) => (
                <article
                  key={item.name}
                  data-reveal="card"
                  className="surface premium-card p-6"
                  style={revealDelay(index)}
                >
                  <TechnicalIcon index={index} />
                  <h3 className="heading-md mt-6">{item.name}</h3>
                  <p className="mt-4 text-base font-light leading-7 text-mist">{item.summary}</p>
                  <div className="mt-7 grid gap-4 border-t border-steel/20 pt-5">
                    <div>
                      <p className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-signal">
                        {item.forLabel}
                      </p>
                      <p className="mt-2 text-sm font-light leading-6 text-mist">{item.forText}</p>
                    </div>
                    <div>
                      <p className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-signal">
                        {item.valueLabel}
                      </p>
                      <p className="mt-2 text-sm font-light leading-6 text-mist">{item.valueText}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="workflow" className="section-pad border-b border-steel/20 bg-void">
          <div className="site-shell">
            <SectionHeading
              eyebrow={dictionary.workflow.eyebrow}
              title={dictionary.workflow.title}
              body={dictionary.workflow.body}
            />
            <div className="mt-12 grid gap-4">
              {dictionary.workflow.steps.map((step, index) => (
                <article
                  key={step.title}
                  data-reveal="row"
                  style={revealDelay(index, 70)}
                  className="grid gap-5 border-t border-steel/20 py-6 sm:grid-cols-[120px_1fr] lg:grid-cols-[160px_0.55fr_1fr]"
                >
                  <p className="font-display text-sm font-semibold uppercase tracking-[0.24em] text-signal">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-display text-2xl font-bold uppercase leading-tight tracking-[0.04em] text-cloud">
                    {step.title}
                  </h3>
                  <p className="text-base font-light leading-8 text-mist">{step.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="deployment" className="section-pad border-b border-steel/20 bg-navy/75">
          <div className="site-shell">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
              <SectionHeading
                eyebrow={dictionary.deployment.eyebrow}
                title={dictionary.deployment.title}
                body={dictionary.deployment.body}
              />
              <div className="grid gap-4 sm:grid-cols-2">
                {dictionary.deployment.options.map((option, index) => (
                  <article
                    key={option.title}
                    data-reveal="card"
                    className="premium-card rounded-md border border-steel/20 bg-void/50 p-5"
                    style={revealDelay(index, 70)}
                  >
                    <h3 className="font-display text-xl font-bold uppercase leading-tight tracking-[0.06em] text-cloud">
                      {option.title}
                    </h3>
                    <p className="mt-3 text-sm font-light leading-7 text-mist">{option.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad border-b border-steel/20 bg-obsidian">
          <div className="site-shell">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <SectionHeading eyebrow={dictionary.why.eyebrow} title={dictionary.why.title} body={dictionary.why.body} />
              <div className="grid gap-4 sm:grid-cols-2">
                {dictionary.why.points.map((point, index) => (
                  <article
                    key={point.title}
                    data-reveal="card"
                    className="premium-card border-t border-steel/25 pt-5"
                    style={revealDelay(index, 80)}
                  >
                    <h3 className="font-display text-xl font-bold uppercase leading-tight tracking-[0.06em] text-cloud">
                      {point.title}
                    </h3>
                    <p className="mt-3 text-sm font-light leading-7 text-mist">{point.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad border-b border-steel/20 bg-void">
          <div className="site-shell">
            <div className="grid gap-10 lg:grid-cols-[0.45fr_0.55fr] lg:items-end">
              <SectionHeading eyebrow={dictionary.preview.eyebrow} title={dictionary.preview.title} body={dictionary.preview.body} />
              <div className="hidden h-px bg-signal/40 lg:block" />
            </div>
            <div className="mt-12" data-reveal="interface">
              <ProductPreview preview={dictionary.preview} />
            </div>
          </div>
        </section>

        <section id="use-cases" className="section-pad border-b border-steel/20 bg-obsidian">
          <div className="site-shell">
            <SectionHeading
              eyebrow={dictionary.useCases.eyebrow}
              title={dictionary.useCases.title}
              body={dictionary.useCases.body}
              align="center"
            />
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {dictionary.useCases.items.map((item, index) => (
                <article
                  key={item.title}
                  data-reveal="card"
                  className="surface premium-card p-5"
                  style={revealDelay(index, 65)}
                >
                  <div className="mb-5 h-px w-16 bg-signal/50" />
                  <h3 className="font-display text-xl font-bold uppercase leading-tight tracking-[0.06em] text-cloud">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm font-light leading-7 text-mist">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="section-pad border-b border-steel/20 bg-void">
          <div className="site-shell">
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
              <SectionHeading eyebrow={dictionary.faq.eyebrow} title={dictionary.faq.title} />
              <div className="grid gap-3">
                {dictionary.faq.items.map((item, index) => (
                  <details
                    key={item.question}
                    data-reveal="row"
                    className="premium-card group rounded-md border border-steel/20 bg-panel/50 p-5"
                    style={revealDelay(index, 70)}
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-bold uppercase leading-tight tracking-[0.06em] text-cloud">
                      {item.question}
                      <span className="text-signal transition duration-200 group-open:rotate-45">+</span>
                    </summary>
                    <p className="mt-4 text-base font-light leading-8 text-mist">{item.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section-pad bg-navy/80">
          <div className="site-shell">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <div>
                <SectionHeading
                  eyebrow={dictionary.contact.eyebrow}
                  title={dictionary.contact.title}
                  body={dictionary.contact.body}
                />
                <div className="premium-card mt-8 rounded-md border border-steel/20 bg-void/50 p-5" data-reveal="card">
                  <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-steel">
                    {dictionary.contact.direct}
                  </p>
                  <a
                    href={`mailto:${dictionary.common.contactEmail}`}
                    className="mt-2 inline-flex font-display text-xl font-bold uppercase tracking-[0.08em] text-cloud underline decoration-signal/60 underline-offset-8 hover:text-signal"
                  >
                    {dictionary.contact.directLink}
                  </a>
                </div>
              </div>

              <div className="premium-card rounded-lg border border-steel/20 bg-obsidian p-5 shadow-glow sm:p-7" data-reveal="card">
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
    <div className="flex h-12 w-12 items-center justify-center rounded-md border border-steel/25 bg-void/70">
      <svg viewBox="0 0 70 70" className="h-9 w-9" fill="none" aria-hidden="true">
        <path d={paths[index] ?? paths[0]} stroke="#1A8FD1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="36" cy="36" r="27" stroke="rgba(143,180,204,0.22)" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

function revealDelay(index: number, step = 90): CSSProperties {
  return { "--reveal-delay": `${index * step}ms` } as CSSProperties;
}

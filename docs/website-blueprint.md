# Drone Operations Website Blueprint

## 1. Brand and UX Interpretation

Drone Operations should feel like a precise UAV autonomy and navigation company, not a bright SaaS startup. The interface uses the brand guideline system: deep void/navy backgrounds, Signal Blue `#1A8FD1`, steel-blue borders, Barlow Condensed display typography, Barlow body copy, tactical grid overlays, compact uppercase labels, and restrained operational UI patterns.

Assumptions:

- Canonical locale URLs are `/en` and `/uk`.
- Public brand mark is `DRONEOPS`; company name in copy is `Drone Operations`.
- Public intake email is `contact@droneoperations.ai`.
- Product names NORA/SONA from the brand guide inform the solution direction, but the homepage avoids unverified performance claims or fake statistics.

## 2. Recommended Site Map

- `/en` and `/uk`: Homepage
- `/en/solutions` and `/uk/solutions`: Optical Navigation, Satellite Navigation, Mission Planner
- `/en/platform` and `/uk/platform`: Product architecture, integrations, security posture
- `/en/deployment` and `/uk/deployment`: Hardware kit, license, custom integration, enterprise, on-prem
- `/en/use-cases` and `/uk/use-cases`: GPS-denied missions, contested environments, route execution, partner integration
- `/en/company` and `/uk/company`: Team, operating principles, procurement readiness
- `/en/contact` and `/uk/contact`: Demo request, technical discovery, secure contact instructions

## 3. Homepage Section Strategy

1. Header: visible logo, primary navigation, EN/UKR switcher, request-demo CTA.
2. Hero: concise positioning around navigation beyond reliable GPS with a mission-planning visual instead of stock imagery.
3. Solutions: three concrete offers, each with what it is, who it is for, and the value it brings.
4. How it works: operational flow from route intent through review.
5. Deployment: procurement-friendly delivery models.
6. Why Drone Operations: trust through technical clarity and restrained claims.
7. Interface preview: product-oriented mission UI, telemetry, route logic, and pre-flight workflow.
8. Use cases: environments where navigation resilience matters.
9. FAQ: procurement and technical objections answered directly.
10. Contact: short, trustworthy demo request flow with non-classified notice.
11. Footer: tagline, contact, engagement paths, legal/safety note.

## 4. Full Bilingual Copy

The canonical full bilingual homepage copy is implemented in `lib/i18n/dictionaries.ts`. It includes all metadata, navigation, CTA labels, hero copy, solution cards, workflow steps, deployment options, why-us points, interface preview labels, use cases, FAQ entries, contact form labels/placeholders/states, and footer text.

English homepage thesis:

> Navigation software for missions beyond reliable GPS.

Ukrainian homepage thesis:

> Навігаційне програмне забезпечення для місій поза надійним GPS.

## 5. Suggested Component Structure

- `SiteHeader`: logo, navigation, language switcher, CTA, mobile menu.
- `Logo`: reusable DRONEOPS mark and wordmark.
- `ButtonLink`: primary, secondary, and ghost CTA styling.
- `SectionHeading`: consistent section rhythm and hierarchy.
- `MissionConsole`: hero mission-planning and navigation visual.
- `ProductPreview`: route planner, telemetry panels, and pre-flight checklist.
- `ContactForm`: client-side demo request flow with localized states.
- `SiteFooter`: bilingual footer, contact, legal notice.

## 6. Suggested File and Folder Structure

```text
app/
  [locale]/
    layout.tsx
    page.tsx
  api/
    demo-request/
      route.ts
  globals.css
components/
  button-link.tsx
  contact-form.tsx
  home-page.tsx
  language-switcher.tsx
  logo.tsx
  mission-console.tsx
  product-preview.tsx
  section-heading.tsx
  site-footer.tsx
  site-header.tsx
lib/
  i18n/
    config.ts
    dictionaries.ts
middleware.ts
```

## 7. Full Implementation Code

The implementation is committed as source files in this project rather than pasted into a static document. Primary implementation entry points:

- `app/[locale]/page.tsx`: metadata and localized homepage rendering.
- `components/home-page.tsx`: complete homepage composition.
- `lib/i18n/dictionaries.ts`: full English and Ukrainian copy.
- `app/globals.css` and `tailwind.config.ts`: design system tokens, typography, surfaces, spacing, focus states.
- `app/api/demo-request/route.ts`: production-ready contact intake wrapper with optional webhook forwarding.

## 8. Notes for Extending the Site

- Add new pages under `app/[locale]/new-page/page.tsx`.
- Extend `lib/i18n/dictionaries.ts` with page-specific copy before building UI.
- Keep canonical URLs paired across locales and add metadata alternates per page.
- Reuse the existing section, button, surface, and typography patterns before adding new primitives.
- Connect `CONTACT_WEBHOOK_URL` to a real secure intake service before launch.
- Add Open Graph image assets once product screenshots or approved brand renders are available.

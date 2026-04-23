# Drone Operations Website

Premium bilingual marketing website for Drone Operations, built with Next.js, TypeScript, Tailwind CSS, and locale-based routing.

## Routes

- `/en` - English homepage
- `/uk` - Ukrainian homepage
- `/` redirects to `/en`

## Local Development

```bash
npm install
npm run dev
```

## Production Checks

```bash
npm run typecheck
npm run build
```

## Vercel Deployment

This project is a Next.js application. Vercel should use the Next.js framework preset and the default Next.js output, not a static `public` output directory.

The repo-level `vercel.json` sets:

- `framework: "nextjs"`
- `buildCommand: "npm run build"`
- `outputDirectory: null`

If a deployment still fails with `No Output Directory named "public" found`, clear the Output Directory override in Vercel Project Settings.

## Contact Form

The demo request API validates form input and returns a success response locally. To forward submissions to a CRM, secure intake service, or automation endpoint, set:

```bash
CONTACT_WEBHOOK_URL=https://your-intake-endpoint.example
```

Public forms should only be used for non-classified context.

## Content

The bilingual content source of truth lives in:

- `lib/i18n/dictionaries.ts`

Add future pages by extending the dictionary structure and creating locale-routed pages under `app/[locale]/`.

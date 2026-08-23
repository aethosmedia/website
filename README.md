# Aethos Media

A Next.js 14 (App Router) marketing site for a creative studio brand —
built with an agency-style visual language: bold display type, dark/light
themes, a custom trailing cursor, GSAP scroll reveals, parallax imagery,
and an intro loading animation.

This is an **original build** inspired by the general genre of "bold dark
creative-agency" template UX (custom cursor, scroll reveals, marquees,
accordion services) — content, copy, imagery, and code are original to
this project, not copied from any specific commercial template.

## Stack

- Next.js 14 (App Router, TypeScript)
- Tailwind CSS (theme tokens driven by CSS variables for dark/light)
- GSAP + ScrollTrigger for all motion (intro, reveals, parallax, magnetic buttons)
- next/font (Unbounded / Manrope / IBM Plex Mono)

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build
npm run start   # production server
```

## Structure

```
src/
  app/
    layout.tsx        # fonts, ThemeProvider, cursor, preloader, header/footer
    page.tsx           # homepage (all sections)
    studio/page.tsx     # about
    work/page.tsx        # work index
    work/[slug]/page.tsx # case study
    blog/page.tsx         # blog index
    blog/[slug]/page.tsx  # article
    contact/page.tsx       # contact form
    globals.css              # theme tokens, cursor, grain, marquee CSS
  components/
    CustomCursor.tsx    # trailing dot + ring, hover morph, GSAP quickTo
    Preloader.tsx        # intro animation (session-based, plays once)
    Header.tsx             # nav + full-screen animated menu overlay
    Footer.tsx
    Reveal.tsx              # scroll-triggered fade/slide-up wrapper
    ParallaxImage.tsx        # scroll-scrubbed image parallax
    Magnetic.tsx               # magnetic hover effect for buttons
    ThemeToggle.tsx             # light/dark switch
    sections/                    # homepage section components
  context/ThemeContext.tsx  # theme state, persisted to localStorage
  data/site.ts                # all copy/content in one place — edit here
```

## Customizing

- **Brand & copy**: everything lives in `src/data/site.ts` — name, email,
  services, projects, testimonials, pricing, FAQ, blog posts.
- **Colors**: edit the CSS variables in `src/app/globals.css` (`:root` for
  dark, `[data-theme="light"]` for light) and the `accent` value in
  `tailwind.config.ts`.
- **Images**: currently pulled from Unsplash via `next/image` remote
  patterns — swap in your own assets in `public/` and update paths in
  `src/data/site.ts`.
- **Fonts**: swapped via `next/font/google` in `src/app/layout.tsx`.

## Notes on motion

- The intro plays once per browser session (`sessionStorage`), then stays
  dismissed on internal navigation.
- The custom cursor auto-disables below 860px (touch devices) and falls
  back to the native cursor.
- All motion (intro, scroll reveals, parallax, magnetic buttons, custom
  cursor) checks `prefers-reduced-motion` via `src/lib/motion.ts` and
  falls back to static/instant states, including the native OS cursor.

## Deploying to Vercel

No project changes are needed beyond what's already here — push to a
GitHub repo and import it at vercel.com (Vercel auto-detects Next.js
and sets the correct build/output settings).

Once you attach a custom domain, set an environment variable in
Vercel's Project Settings → Environment Variables so Open Graph/Twitter
share previews use your real domain instead of the default
`*.vercel.app` URL:

```

```

Without it, the site falls back to Vercel's own `VERCEL_URL` (set
automatically at build time), so previews still work correctly on the
default `.vercel.app` URL even before you add a domain.

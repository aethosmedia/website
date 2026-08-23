import Link from "next/link";
import { brand, navLinks, socials } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 pb-8 pt-16 md:px-10 md:pt-24">
      <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <h2 className="max-w-2xl font-display text-[9vw] uppercase leading-[0.95] tracking-tightest text-ink md:text-6xl">
          Start your project with {brand.short}
          <span className="text-accent">.</span>
        </h2>
        <a
          href="/contact"
          data-cursor-hover
          className="inline-flex w-fit items-center gap-3 rounded-full border border-line px-6 py-3 font-mono text-xs uppercase tracking-widest2 text-ink transition-colors hover:border-accent hover:text-accent"
        >
          Get in touch
        </a>
      </div>

      <div className="grid grid-cols-2 gap-8 border-t border-line pt-10 text-sm md:grid-cols-4">
        <div className="col-span-2 flex flex-col gap-3 md:col-span-1">
          <span className="font-display text-lg uppercase text-ink">
            {brand.short}<span className="text-accent">.</span>
          </span>
          <p className="max-w-xs text-ink-muted">
            We create thoughtful, strategic brand and web experiences for ambitious companies.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <span className="eyebrow">Pages</span>
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              data-cursor-hover
              className="text-ink-muted transition-colors hover:text-accent"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <span className="eyebrow">Contact</span>
          <a
            href={`mailto:${brand.email}`}
            data-cursor-hover
            className="text-ink-muted transition-colors hover:text-accent"
          >
            {brand.email}
          </a>
          <a
            href="tel:+12025550102"
            data-cursor-hover
            className="text-ink-muted transition-colors hover:text-accent"
          >
            {brand.phone}
          </a>
        </div>

        <div className="flex flex-col gap-3">
          <span className="eyebrow">Social</span>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              data-cursor-hover
              className="text-ink-muted transition-colors hover:text-accent"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 font-mono text-[11px] uppercase tracking-widest text-ink-muted md:flex-row md:items-center md:justify-between">
        <span>©2026 {brand.name}. All rights reserved.</span>
        <span>Built by {brand.name}</span>
      </div>
    </footer>
  );
}

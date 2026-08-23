import Link from "next/link";
import { brand } from "@/data/site";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] flex-col items-start justify-center px-6 pt-32 md:px-10">
      <p className="eyebrow mb-4">404</p>
      <h1 className="max-w-2xl font-display text-[13vw] uppercase leading-[0.92] tracking-tightest text-ink md:text-7xl">
        Page not <span className="text-accent">found</span>.
      </h1>
      <p className="mt-6 max-w-md text-ink-muted">
        The page you're looking for doesn't exist or has moved. Let's get
        you back to {brand.name}.
      </p>
      <Link
        href="/"
        data-cursor-hover
        className="mt-10 inline-flex items-center gap-3 rounded-full border border-line px-6 py-3 font-mono text-xs uppercase tracking-widest2 text-ink transition-colors hover:border-accent hover:text-accent"
      >
        Back to home
      </Link>
    </section>
  );
}

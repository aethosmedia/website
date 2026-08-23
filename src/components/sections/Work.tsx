import Link from "next/link";
import ParallaxImage from "@/components/ParallaxImage";
import Reveal from "@/components/Reveal";
import { projects } from "@/data/site";

export default function Work() {
  return (
    <section className="border-t border-line px-6 py-20 md:px-10 md:py-28">
      <Reveal className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="eyebrow mb-3">Selected work</p>
          <h2 className="max-w-xl font-display text-[10vw] uppercase leading-[0.95] tracking-tightest text-ink md:text-6xl">
            Projects.
          </h2>
        </div>
        <p className="max-w-sm text-sm text-ink-muted">
          A small, deliberate slice of work — each project built on strategy
          first, craft second, and never the other way around.
        </p>
      </Reveal>

      <div className="flex flex-col">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.05}>
            <Link
              href={`/work/${p.slug}`}
              data-cursor-hover
              className="group grid grid-cols-1 items-center gap-6 border-t border-line py-8 last:border-b md:grid-cols-[80px_1fr_220px_140px]"
            >
              <span className="font-mono text-sm text-ink-muted">
                0{i + 1}
              </span>
              <h3 className="font-display text-4xl uppercase tracking-tightest text-ink transition-colors group-hover:text-accent md:text-5xl">
                {p.title}
              </h3>
              <span className="text-sm text-ink-muted">{p.category}</span>
              <div className="relative h-32 w-full overflow-hidden rounded-lg opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:h-24">
                <ParallaxImage
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full"
                  strength={20}
                />
              </div>
            </Link>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12">
        <Link
          href="/work"
          data-cursor-hover
          className="inline-flex items-center gap-3 rounded-full border border-line px-6 py-3 font-mono text-xs uppercase tracking-widest2 text-ink transition-colors hover:border-accent hover:text-accent"
        >
          View all projects
        </Link>
      </Reveal>
    </section>
  );
}

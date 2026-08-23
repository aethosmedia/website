import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import ParallaxImage from "@/components/ParallaxImage";
import Reveal from "@/components/Reveal";
import { projects, brand } from "@/data/site";

export const metadata: Metadata = { title: `Work — ${brand.name}` };

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Work"
        title="Selected projects."
        description="A slice of the work we're proudest of — strategy, identity, and product design for brands that wanted more than decoration."
      />

      <section className="px-6 pb-24 md:px-10">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-x-10 md:gap-y-24">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 0.08}>
              <Link href={`/work/${p.slug}`} data-cursor-hover className="group block">
                <ParallaxImage
                  src={p.image}
                  alt={p.title}
                  className="aspect-[4/3] w-full rounded-2xl"
                  strength={30}
                />
                <div className="mt-5 flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-3xl uppercase tracking-tightest text-ink transition-colors group-hover:text-accent md:text-4xl">
                    {p.title}
                  </h3>
                  <span className="font-mono text-xs text-ink-muted">
                    {p.year}
                  </span>
                </div>
                <p className="mt-1 text-sm text-ink-muted">{p.category}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

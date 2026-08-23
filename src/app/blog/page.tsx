import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { blogPosts, brand } from "@/data/site";

export const metadata: Metadata = { title: `Blog — ${brand.name}` };

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Latest articles."
        description="Notes on design, brand strategy, and the craft of building things that last."
      />

      <section className="px-6 pb-24 md:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {blogPosts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.06}>
              <Link href={`/blog/${post.slug}`} data-cursor-hover className="group block">
                <div className="relative mb-5 aspect-[4/3] overflow-hidden rounded-xl">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-aethos group-hover:scale-105"
                  />
                </div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-ink-muted">
                  {post.date}
                </p>
                <h3 className="mt-2 font-display text-xl uppercase leading-snug tracking-tight text-ink transition-colors group-hover:text-accent">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-ink-muted">{post.excerpt}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

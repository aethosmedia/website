import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { blogPosts } from "@/data/site";

export default function BlogPreview() {
  return (
    <section className="border-t border-line px-6 py-20 md:px-10 md:py-28">
      <Reveal className="mb-16 flex items-end justify-between gap-6">
        <div>
          <p className="eyebrow mb-3">Blog</p>
          <h2 className="font-display text-[9vw] uppercase leading-[0.95] tracking-tightest text-ink md:text-5xl">
            Latest articles.
          </h2>
        </div>
        <Link
          href="/blog"
          data-cursor-hover
          className="hidden shrink-0 items-center gap-2 font-mono text-xs uppercase tracking-widest2 text-ink hover:text-accent md:inline-flex"
        >
          View all
        </Link>
      </Reveal>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
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
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

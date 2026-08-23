import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import ParallaxImage from "@/components/ParallaxImage";
import Reveal from "@/components/Reveal";
import { blogPosts, brand } from "@/data/site";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  return { title: post ? `${post.title} — ${brand.name}` : brand.name };
}

export default function BlogDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <>
      <PageHeader eyebrow={post.date} title={post.title} />

      <section className="px-6 pb-16 md:px-10">
        <ParallaxImage
          src={post.image}
          alt={post.title}
          className="h-[50vh] w-full rounded-2xl md:h-[65vh]"
          strength={40}
        />
      </section>

      <section className="border-t border-line px-6 py-20 md:px-10 md:py-28">
        <Reveal className="mx-auto flex max-w-2xl flex-col gap-6 text-ink-muted">
          <p className="font-display text-2xl leading-snug text-ink">
            {post.excerpt}
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
          <p>
            Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
            Nunc ut sem vitae risus tristique posuere. Fusce vulputate eleifend
            sapien, non facilisis nibh commodo id.
          </p>
        </Reveal>
      </section>
    </>
  );
}

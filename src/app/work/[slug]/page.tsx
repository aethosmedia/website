import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import ParallaxImage from "@/components/ParallaxImage";
import Reveal from "@/components/Reveal";
import { projects, brand } from "@/data/site";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

type ParamsPromise = Promise<{ slug: string }>;

export async function generateMetadata({
  params,
}: {
  params: ParamsPromise;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return { title: project ? `${project.title} — ${brand.name}` : brand.name };
}

export default async function WorkDetailPage({
  params,
}: {
  params: ParamsPromise;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <>
      <PageHeader eyebrow={`${project.category} · ${project.year}`} title={project.title} />

      <section className="px-6 pb-16 md:px-10">
        <ParallaxImage
          src={project.image}
          alt={project.title}
          className="h-[55vh] w-full rounded-2xl md:h-[95vh]"
          strength={50}
        />
      </section>

      <section className="grid grid-cols-1 gap-10 border-t border-line px-6 py-20 md:grid-cols-[1fr_2fr] md:px-10 md:py-28">
        <Reveal>
          <p className="eyebrow mb-3">Overview</p>
          <div className="flex flex-col gap-4 text-sm text-ink-muted">
            <div>
              <span className="block text-ink">Client</span>
              {project.title}
            </div>
            <div>
              <span className="block text-ink">Services</span>
              {project.category}
            </div>
            <div>
              <span className="block text-ink">Year</span>
              {project.year}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="max-w-2xl font-display text-2xl leading-snug tracking-tight text-ink md:text-3xl">
            {project.summary}
          </p>
        </Reveal>
      </section>

      <section className="border-t border-line px-6 py-20 md:px-10 md:py-28">
        <Reveal className="mb-10">
          <p className="eyebrow">More projects</p>
        </Reveal>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {others.map((p) => (
            <Reveal key={p.slug}>
              <Link href={`/work/${p.slug}`} data-cursor-hover className="group block">
                <ParallaxImage
                  src={p.image}
                  alt={p.title}
                  className="aspect-[4/3] w-full rounded-2xl"
                  strength={20}
                />
                <h3 className="mt-5 font-display text-3xl uppercase tracking-tightest text-ink transition-colors group-hover:text-accent">
                  {p.title}
                </h3>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

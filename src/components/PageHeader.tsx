import Reveal from "@/components/Reveal";

export default function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="px-6 pb-16 pt-40 md:px-10 md:pb-20 md:pt-48">
      <Reveal>
        <p className="eyebrow mb-4">{eyebrow}</p>
        <h1 className="max-w-4xl font-display text-[11vw] uppercase leading-[0.92] tracking-tightest text-ink md:text-7xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-lg text-ink-muted">{description}</p>
        )}
      </Reveal>
    </section>
  );
}

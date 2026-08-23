import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";

const partners = [
  "Tickr",
  "Clothief",
  "Fursat Cafe",
  "AH Holding",
  "ASA Finance",
  "Strivo",
  "Halcyon",
  "Modra",
];

export default function Partners() {
  return (
    <section className="border-t border-line px-6 py-20 md:px-10 md:py-28">
      <Reveal>
        <p className="eyebrow mb-3">Partners</p>
        <h2 className="max-w-xl font-display text-3xl uppercase leading-tight tracking-tightest text-ink md:text-4xl">
          We collaborate with forward-thinking brands to build lasting
          creative impact.
        </h2>
      </Reveal>

      <Marquee className="mt-16 border-y border-line py-8">
        {partners.map((p) => (
          <span
            key={p}
            className="mx-10 font-display text-3xl uppercase tracking-tightest text-ink-muted md:text-4xl"
          >
            {p}
          </span>
        ))}
      </Marquee>
    </section>
  );
}

import Reveal from "@/components/Reveal";
import { pricing } from "@/data/site";

export default function Pricing() {
  return (
    <section className="border-t border-line px-6 py-20 md:px-10 md:py-28">
      <Reveal className="mb-16">
        <p className="eyebrow mb-3">Pricing</p>
        <h2 className="max-w-xl font-display text-[9vw] uppercase leading-[0.95] tracking-tightest text-ink md:text-5xl">
          Straightforward, affordable.
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {pricing.map((p, i) => (
          <Reveal key={p.tier} delay={i * 0.08}>
            <div
              className={`flex h-full flex-col justify-between rounded-2xl border p-8 md:p-10 ${
                p.popular ? "border-accent bg-accent/[0.04]" : "border-line"
              }`}
            >
              <div>
                <div className="mb-8 flex items-center justify-between">
                  <span className="eyebrow">{p.tag}</span>
                  {p.popular && (
                    <span className="rounded-full bg-accent px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-white">
                      Popular
                    </span>
                  )}
                </div>
                <h3 className="font-display text-3xl uppercase tracking-tightest text-ink">
                  {p.tier}
                </h3>
                <p className="mt-4 flex items-baseline gap-1">
                  <span className="font-display text-5xl tracking-tightest text-ink">
                    {p.price}
                  </span>
                  <span className="text-ink-muted">{p.period}</span>
                </p>

                <ul className="mt-8 flex flex-col gap-3">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-sm text-ink-muted"
                    >
                      <span className="mt-1 text-accent">—</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10">
                <a
                  href="/contact"
                  data-cursor-hover
                  className={`flex w-full items-center justify-center rounded-full py-3 font-mono text-xs uppercase tracking-widest2 transition-colors ${
                    p.popular
                      ? "bg-accent text-white hover:bg-accent/90"
                      : "border border-line text-ink hover:border-accent hover:text-accent"
                  }`}
                >
                  Learn more
                </a>
                <p className="mt-4 text-center font-mono text-[11px] uppercase tracking-widest text-ink-muted">
                  {p.note} · 7-day money-back guarantee
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

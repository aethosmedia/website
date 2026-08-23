"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { testimonials, stats } from "@/data/site";

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section className="border-t border-line px-6 py-20 md:px-10 md:py-28">
      <Reveal className="mb-16">
        <p className="eyebrow mb-3">Testimonials</p>
        <h2 className="max-w-xl font-display text-[9vw] uppercase leading-[0.95] tracking-tightest text-ink md:text-5xl">
          What our clients are saying.
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
        <Reveal className="flex flex-col justify-between gap-10">
          <div className="flex gap-1 text-accent">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>
          <blockquote className="font-display text-2xl leading-snug tracking-tight text-ink md:text-3xl">
            &ldquo;{t.quote}&rdquo;
          </blockquote>
          <div className="flex items-center gap-4">
            <div className="relative h-12 w-12 overflow-hidden rounded-full">
              <Image src={t.image} alt={t.name} fill className="object-cover" />
            </div>
            <div>
              <p className="text-ink">{t.name}</p>
              <p className="text-sm text-ink-muted">{t.role}</p>
            </div>
          </div>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                data-cursor-hover
                onClick={() => setActive(i)}
                aria-label={`Show testimonial ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === active ? "w-8 bg-accent" : "w-1.5 bg-line"
                }`}
              />
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="grid grid-cols-1 gap-8 sm:grid-cols-3 md:grid-cols-1">
          {stats.map((s) => (
            <div key={s.label} className="border-t border-line pt-6">
              <p className="font-display text-5xl tracking-tightest text-accent md:text-6xl">
                {s.value}
              </p>
              <p className="mt-2 max-w-[220px] text-sm text-ink-muted">
                {s.label}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

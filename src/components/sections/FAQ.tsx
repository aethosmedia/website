"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { faqs } from "@/data/site";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="border-t border-line px-6 py-20 md:px-10 md:py-28">
      <Reveal className="mb-16">
        <p className="eyebrow mb-3">FAQ</p>
        <h2 className="max-w-xl font-display text-[9vw] uppercase leading-[0.95] tracking-tightest text-ink md:text-5xl">
          Answered questions.
        </h2>
      </Reveal>

      <div className="mx-auto max-w-3xl">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q} className="border-t border-line last:border-b">
              <button
                data-cursor-hover
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span className="flex items-center gap-6">
                  <span className="font-mono text-sm text-ink-muted">
                    0{i + 1}
                  </span>
                  <span className="font-display text-lg uppercase tracking-tight text-ink md:text-xl">
                    {f.q}
                  </span>
                </span>
                <span
                  className={`shrink-0 font-mono text-xl text-accent transition-transform duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className="grid overflow-hidden transition-[grid-template-rows] duration-500 ease-aethos"
                style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
              >
                <div className="overflow-hidden">
                  <p className="max-w-xl pb-6 pl-0 text-ink-muted md:pl-16">
                    {f.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

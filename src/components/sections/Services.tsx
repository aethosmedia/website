"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import Reveal from "@/components/Reveal";
import { services } from "@/data/site";

export default function Services() {
  const [active, setActive] = useState(0);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggle = (i: number) => {
    const isOpening = active !== i;
    const prevPanel = panelRefs.current[active];
    const nextPanel = panelRefs.current[i];

    if (prevPanel && prevPanel !== nextPanel) {
      gsap.to(prevPanel, { height: 0, duration: 0.5, ease: "power3.inOut" });
    }
    if (isOpening && nextPanel) {
      gsap.set(nextPanel, { height: "auto" });
      gsap.from(nextPanel, { height: 0, duration: 0.5, ease: "power3.inOut" });
    }
    setActive(i);
  };

  return (
    <section className="border-t border-line px-6 py-20 md:px-10 md:py-28">
      <Reveal className="mb-16">
        <p className="eyebrow mb-3">Services</p>
        <h2 className="max-w-2xl font-display text-[9vw] uppercase leading-[0.95] tracking-tightest text-ink md:text-5xl">
          What we do, end to end.
        </h2>
      </Reveal>

      <div>
        {services.map((s, i) => (
          <div key={s.index} className="border-t border-line last:border-b">
            <button
              data-cursor-hover
              onClick={() => toggle(i)}
              className="flex w-full items-center justify-between gap-6 py-8 text-left"
            >
              <div className="flex items-center gap-6 md:gap-10">
                <span className="font-mono text-sm text-ink-muted">
                  {s.index}
                </span>
                <h3
                  className={`font-display text-[8vw] uppercase leading-none tracking-tightest transition-colors md:text-4xl ${
                    active === i ? "text-accent" : "text-ink"
                  }`}
                >
                  {s.title}
                </h3>
              </div>
              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line transition-transform duration-500 ${
                  active === i ? "rotate-45" : ""
                }`}
              >
                <span className="relative block h-3 w-3">
                  <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-ink" />
                  <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-ink" />
                </span>
              </span>
            </button>

            <div
              ref={(el) => {
                panelRefs.current[i] = el;
              }}
              style={{ height: active === i ? "auto" : 0 }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-1 gap-8 pb-10 md:grid-cols-[80px_1fr_1fr] md:gap-10">
                <div />
                <p className="max-w-md text-ink-muted">{s.copy}</p>
                <div className="flex flex-wrap gap-x-3 gap-y-2">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-line px-4 py-1.5 font-mono text-[11px] uppercase tracking-widest text-ink-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

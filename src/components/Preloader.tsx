"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { brand } from "@/data/site";
import { prefersReducedMotion } from "@/lib/motion";

export default function Preloader() {
  const [done, setDone] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLSpanElement>(null);
  const wordRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const alreadySeen = window.sessionStorage.getItem("aethos-intro-seen");
    if (alreadySeen || prefersReducedMotion()) {
      window.sessionStorage.setItem("aethos-intro-seen", "1");
      setDone(true);
      document.documentElement.classList.remove("intro-lock");
      return;
    }

    document.documentElement.classList.add("intro-lock");
    const counter = { val: 0 };

    const tl = gsap.timeline({
      defaults: { ease: "power3.inOut" },
      onComplete: () => {
        window.sessionStorage.setItem("aethos-intro-seen", "1");
        document.documentElement.classList.remove("intro-lock");
        setDone(true);
      },
    });

    tl.set(wordRef.current, { yPercent: 20, opacity: 0 })
      .to(wordRef.current, { yPercent: 0, opacity: 1, duration: 0.8 })
      .to(
        counter,
        {
          val: 100,
          duration: 1.6,
          ease: "power2.out",
          onUpdate: () => {
            if (countRef.current)
              countRef.current.textContent = String(Math.floor(counter.val));
          },
        },
        "<"
      )
      .to(barRef.current, { scaleX: 1, duration: 1.6, ease: "power2.out" }, "<")
      .to(wordRef.current, { yPercent: -20, opacity: 0, duration: 0.5 }, "+=0.15")
      .to(panelRef.current, {
        yPercent: -100,
        duration: 0.9,
        ease: "power4.inOut",
      });

    return () => {
      tl.kill();
    };
  }, []);

  if (done) return null;

  return (
    <div ref={rootRef} className="fixed inset-0 z-[200] pointer-events-none">
      <div
        ref={panelRef}
        className="absolute inset-0 flex flex-col items-center justify-center bg-[#0a0a0a] text-[#f5f5f0]"
      >
        <div className="overflow-hidden">
          <div
            ref={wordRef}
            className="font-display text-[13vw] leading-none tracking-tightest uppercase"
          >
            {brand.short}<span className="text-accent">.</span>
          </div>
        </div>
        <div className="mt-8 flex items-center gap-3 font-mono text-xs tracking-widest2 uppercase text-[#f5f5f0]/60">
          <span ref={countRef}>0</span>
          <span>%</span>
        </div>
        <div className="mt-4 h-px w-40 overflow-hidden bg-white/10">
          <div
            ref={barRef}
            className="h-full w-full origin-left scale-x-0 bg-accent"
          />
        </div>
      </div>
    </div>
  );
}

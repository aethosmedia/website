/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Marquee from "@/components/Marquee";
import { brand } from "@/data/site";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const tags = ["Web design", "Branding", "Content", "Social media"];

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = headlineRef.current;
    if (!el) return;

    const lines = el.querySelectorAll(".line-inner");

    const animation = gsap.fromTo(
      lines,
      {
        yPercent: 110,
      },
      {
        yPercent: 0,
        duration: 1.1,
        stagger: 0.12,
        ease: "power4.out",
        delay: 0.2,
      }
    );

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden pt-32">
      {/* =====================================================
          HERO BACKGROUND IMAGE
          ===================================================== */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.jpg"
          alt="Abstract studio visual"
          className="
            h-full
            w-full
            object-cover
            opacity-30
            transition-all
            duration-700
            dark:opacity-30
          "
        />
      </div>

      {/* =====================================================
          THEME-AWARE IMAGE OVERLAY

          Light mode:
          - subtle white overlay
          - image stays bright

          Dark mode:
          - stronger black overlay
          - image becomes cinematic/darker
          ===================================================== */}
      <div
        className="
          absolute
          inset-0
          z-[1]
          bg-white/0
          transition-all
          duration-700
          dark:bg-black/100
        "
      />

      {/* =====================================================
          HERO CONTENT
          ===================================================== */}
      <div className="relative z-10 min-w-0 w-full px-6 pb-16 md:px-10">
        {/* ===================================================
            MARQUEE
            =================================================== */}
        <Marquee
          className="
            mb-8
            border-y
            border-line
            py-3
          "
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <span
              key={i}
              className="
                mx-4
                font-mono
                text-xs
                uppercase
                tracking-widest2
                text-ink-muted
              "
            >
              Scroll to reveal —
            </span>
          ))}
        </Marquee>

        {/* ===================================================
            MAIN HEADLINE
            =================================================== */}
        <h1
          ref={headlineRef}
          className="
            font-display
            text-[13vw]
            uppercase
            leading-[0.92]
            tracking-tightest
            text-ink
            md:text-[7.5vw]
          "
        >
          {/* Line 1 */}
          <span className="block overflow-hidden">
            <span className="line-inner block">
              Not just a studio,
            </span>
          </span>

          {/* Line 2 */}
          <span className="block overflow-hidden">
            <span className="line-inner block">
              we are{" "}
              <span className="text-accent">strategic</span>.
            </span>
          </span>
        </h1>

        {/* ===================================================
            BOTTOM INFORMATION
            =================================================== */}
        <div
          className="
            mt-10
            flex
            flex-wrap
            items-center
            justify-between
            gap-6
            border-t
            border-line
            pt-6
          "
        >
          {/* Services */}
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="
                  font-mono
                  text-sm
                  font-regular
                  uppercase
                  tracking-widest
                  text-ink-muted
                "
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Description */}
          <p
            className="
              max-w-xs
              text-sm
              text-ink-muted
            "
          >
            We are {brand.name} — a creative studio partnering with ambitious
            brands to build unforgettable, timeless work.
          </p>
        </div>
      </div>
    </section>
  );
}
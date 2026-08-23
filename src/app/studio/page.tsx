import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ParallaxImage from "@/components/ParallaxImage";
import Reveal from "@/components/Reveal";
import Partners from "@/components/sections/Partners";
import Services from "@/components/sections/Services";
import { brand } from "@/data/site";

export const metadata: Metadata = { title: `Studio — ${brand.name}` };

export default function StudioPage() {
  return (
    <>
      <PageHeader
        eyebrow="Studio"
        title="We're a hands-on digital agency."
        description="Building thoughtful, strategic solutions for ambitious brands since day one — small team, big attention to detail."
      />

      <section className="px-6 pb-20 md:px-10 md:pb-28">
        <ParallaxImage
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop"
          alt="Studio workspace"
          className="h-[50vh] w-full rounded-2xl md:h-[70vh]"
          strength={50}
        />
      </section>

      <section className="grid grid-cols-1 gap-10 border-t border-line px-6 py-20 md:grid-cols-2 md:px-10 md:py-28">
        <Reveal>
          <p className="eyebrow mb-4">Our approach</p>
          <h2 className="font-display text-4xl uppercase leading-tight tracking-tightest text-ink md:text-5xl">
            Clarity first. Craft always.
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="text-ink-muted">
            {brand.name} was founded on a simple idea: the strongest brands
            are built on restraint, not noise. We work closely with a small
            number of clients at a time so every project gets the attention
            it deserves — from first strategy call to final line of code.
          </p>
          <p className="mt-4 text-ink-muted">
            Our team blends strategists, designers, and engineers who've
            spent their careers shipping work that holds up over time, not
            just at launch.
          </p>
        </Reveal>
      </section>

      <Partners />
      <Services />
    </>
  );
}

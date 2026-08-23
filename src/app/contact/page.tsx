"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import Magnetic from "@/components/Magnetic";
import { brand, socials } from "@/data/site";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's start a project."
        description="Tell us a little about what you're building — we reply within one business day."
      />

      <section className="grid grid-cols-1 gap-16 border-t border-line px-6 py-20 md:grid-cols-[1fr_1.4fr] md:px-10 md:py-28">
        <div className="flex flex-col gap-10">
          <div>
            <p className="eyebrow mb-2">Email</p>
            <a
              href={`mailto:${brand.email}`}
              data-cursor-hover
              className="font-display text-2xl text-ink hover:text-accent"
            >
              {brand.email}
            </a>
          </div>
          <div>
            <p className="eyebrow mb-2">Phone</p>
            <a
              href={`tel:${brand.phone}`}
              data-cursor-hover
              className="font-display text-2xl text-ink hover:text-accent"
            >
              {brand.phone}
            </a>
          </div>
          <div>
            <p className="eyebrow mb-2">Social</p>
            <div className="flex gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor-hover
                  className="font-mono text-xs uppercase tracking-widest text-ink-muted hover:text-accent"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="flex flex-col gap-6"
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <Field label="Name" name="name" placeholder="Jane Cooper" />
            <Field label="Email" name="email" type="email" placeholder="jane@company.com" />
          </div>
          <Field label="Company" name="company" placeholder="Company name" />
          <div className="flex flex-col gap-2">
            <label className="eyebrow" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Tell us about your project…"
              className="resize-none border-b border-line bg-transparent py-3 text-ink placeholder:text-ink-muted focus:border-accent focus:outline-none"
            />
          </div>

          <Magnetic className="mt-4 w-fit">
            <button
              type="submit"
              data-cursor-hover
              className="rounded-full bg-accent px-8 py-4 font-mono text-xs uppercase tracking-widest2 text-white transition-colors hover:bg-accent/90"
            >
              {sent ? "Sent — thank you" : "Send message"}
            </button>
          </Magnetic>
        </form>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="eyebrow" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="border-b border-line bg-transparent py-3 text-ink placeholder:text-ink-muted focus:border-accent focus:outline-none"
      />
    </div>
  );
}

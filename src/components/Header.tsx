"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { brand, navLinks, socials } from "@/data/site";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const overlayRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  /* =========================================================
     SCROLL DETECTION
     ========================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================================================
     MENU ANIMATION
     ========================================================= */

  useEffect(() => {
    const overlay = overlayRef.current;
    const links = linksRef.current?.querySelectorAll(".nav-link");

    if (!overlay) return;

    if (open) {
      // Prevent background page from scrolling
      document.body.style.overflow = "hidden";

      // Make overlay visible
      gsap.set(overlay, {
        display: "flex",
        clipPath: "inset(0 0 100% 0)",
      });

      // Open overlay
      gsap.to(overlay, {
        clipPath: "inset(0 0 0% 0)",
        duration: 0.7,
        ease: "power4.inOut",
      });

      // Animate links
      if (links) {
        gsap.set(links, {
          yPercent: 110,
          opacity: 0,
        });

        gsap.to(links, {
          yPercent: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.06,
          delay: 0.25,
          ease: "power3.out",
        });
      }
    } else {
      document.body.style.overflow = "";

      gsap.to(overlay, {
        clipPath: "inset(0 0 100% 0)",
        duration: 0.6,
        ease: "power4.inOut",
        onComplete: () => {
          gsap.set(overlay, {
            display: "none",
          });
        },
      });
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* =====================================================
          HEADER
          ===================================================== */}

      <header
        className={`
          fixed
          inset-x-0
          top-0
          z-[100]
          transition-all
          duration-500
          ease-out
          ${
            scrolled
              ? " border-line/50 bg-bg/80 backdrop-blur-xl"
              : "bg-transparent"
          }
        `}
      >
        <div
          className="
            relative
            z-[110]
            flex
            items-center
            justify-between
            px-6
            py-5
            md:px-10
            md:py-7
          "
        >
          {/* =================================================
              LOGO
              ================================================= */}

          <Link
            href="/"
            data-cursor-hover
            onClick={() => setOpen(false)}
            className="
              font-display
              text-xl
              uppercase
              tracking-tightest
              text-ink
            "
          >
            {brand.short}
            <span className="text-accent">.</span>
          </Link>

          {/* =================================================
              RIGHT SIDE
              ================================================= */}

          <div className="flex items-center gap-4 md:gap-6">
            {/* Desktop Theme Toggle */}

            <div className="hidden md:block">
              <ThemeToggle />
            </div>

            {/* Menu Button */}

            <button
              type="button"
              data-cursor-hover
              onClick={() => setOpen((value) => !value)}
              aria-label={
                open
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={open}
              className="
                relative
                z-[110]
                flex
                items-center
                gap-3
                font-mono
                text-xs
                uppercase
                tracking-widest2
                text-ink
              "
            >
              <span>
                {open ? "Close" : "Menu"}
              </span>

              <span
                className="
                  relative
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-line
                "
              >
                {/* First line */}

                <span
                  className={`
                    absolute
                    h-px
                    w-4
                    bg-ink
                    transition-transform
                    duration-300
                    ${
                      open
                        ? "rotate-45"
                        : "-translate-y-[3px]"
                    }
                  `}
                />

                {/* Second line */}

                <span
                  className={`
                    absolute
                    h-px
                    w-4
                    bg-ink
                    transition-transform
                    duration-300
                    ${
                      open
                        ? "-rotate-45"
                        : "translate-y-[3px]"
                    }
                  `}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* =====================================================
          FULLSCREEN NAVIGATION OVERLAY

          IMPORTANT:
          This is OUTSIDE the header.

          This prevents backdrop-blur on the header from
          affecting the fixed fullscreen navigation.
          ===================================================== */}

      <div
        ref={overlayRef}
        className="
          fixed
          inset-0
          z-[90]
          hidden
          flex-col
          justify-between
          bg-bg
          px-6
          pb-10
          pt-28
          md:px-10
          md:pt-32
        "
        style={{
          clipPath: "inset(0 0 100% 0)",
        }}
      >
        {/* =================================================
            NAVIGATION LINKS
            ================================================= */}

        <nav
          ref={linksRef}
          className="
            flex
            flex-col
            gap-2
          "
        >
          {navLinks.map((link, i) => (
            <div
              key={link.href}
              className="overflow-hidden"
            >
              <Link
                href={link.href}
                data-cursor-hover
                onClick={() => setOpen(false)}
                className="
                  nav-link
                  flex
                  items-baseline
                  gap-4
                  border-b
                  border-line
                  py-4
                  font-display
                  text-[12vw]
                  uppercase
                  leading-none
                  tracking-tightest
                  text-ink
                  transition-colors
                  duration-300
                  hover:text-accent
                  md:text-[5.5vw]
                "
              >
                {/* Number */}

                <span
                  className="
                    font-mono
                    text-sm
                    text-ink-muted
                  "
                >
                  0{i + 1}
                </span>

                {/* Label */}

                {link.label}
              </Link>
            </div>
          ))}
        </nav>

        {/* =================================================
            MENU FOOTER
            ================================================= */}

        <div
          className="
            flex
            flex-col
            gap-6
            md:flex-row
            md:items-end
            md:justify-between
          "
        >
          {/* Contact */}

          <div className="flex flex-col gap-1">
            <span className="eyebrow">
              Get in touch
            </span>

            <a
              href={`mailto:${brand.email}`}
              data-cursor-hover
              className="
                font-body
                text-lg
                text-ink
                transition-colors
                duration-300
                hover:text-accent
              "
            >
              {brand.email}
            </a>
          </div>

          {/* Theme + Socials */}

          <div className="flex items-center gap-4">
            <ThemeToggle />

            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                data-cursor-hover
                target="_blank"
                rel="noreferrer"
                className="
                  font-mono
                  text-xs
                  uppercase
                  tracking-widest
                  text-ink-muted
                  transition-colors
                  duration-300
                  hover:text-accent
                "
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
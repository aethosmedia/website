"use client";

import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      data-cursor-hover
      aria-label="Toggle light and dark mode"
      className="group relative flex h-9 w-16 items-center rounded-full border border-line px-1 transition-colors"
    >
      <span
        className={`absolute left-1 top-1 h-7 w-7 rounded-full bg-accent transition-transform duration-500 ease-aethos ${
          isDark ? "translate-x-0" : "translate-x-7"
        }`}
      />
      <span className="relative z-10 flex w-full items-center justify-between px-1 font-mono text-[9px] uppercase tracking-widest text-ink">
        <span className={isDark ? "opacity-0" : "opacity-70"}>Lt</span>
        <span className={isDark ? "opacity-70" : "opacity-0"}>Dk</span>
      </span>
    </button>
  );
}

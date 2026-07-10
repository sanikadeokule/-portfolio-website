"use client";
import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);
  return (
    <button
      onClick={() => setDark(!dark)}
      aria-label="Toggle theme"
      className="w-8 h-8 rounded-md border border-hero-line flex items-center justify-center text-sm hover:bg-hero-hover transition-colors"
    >
      {dark ? "☀" : "☾"}
    </button>
  );
}

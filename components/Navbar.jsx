"use client";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { profile } from "@/lib/data";

const links = [
  ["About", "#about"],
  ["Journey", "#journey"],
  ["Projects", "#projects"],
  ["Research", "#research"],
  ["Resume", "/Sanika_Deokule_Resume.pdf"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-hero text-hero-text">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#" className="font-extrabold tracking-tight">Sanika Deokule</a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          {links.map(([l, h]) => (
            <a key={h} href={h} className="opacity-80 hover:opacity-100 transition-opacity">{l}</a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a href={profile.linkedin} target="_blank" rel="noreferrer"
            className="hidden sm:block px-3.5 py-1.5 rounded-md bg-hero-text text-hero text-sm font-semibold hover:opacity-90 transition-opacity">
            LinkedIn
          </a>
          <ThemeToggle />
          {/* Hamburger — mobile only */}
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="md:hidden w-8 h-8 rounded-md border border-hero-line flex flex-col items-center justify-center gap-[5px]"
          >
            <span className={`block w-4 h-[2px] bg-hero-text transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block w-4 h-[2px] bg-hero-text transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block w-4 h-[2px] bg-hero-text transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-hero-line bg-hero px-6 py-4 flex flex-col gap-1">
          {links.map(([l, h]) => (
            <a key={h} href={h} onClick={() => setOpen(false)}
              className="py-2.5 text-base opacity-90 hover:opacity-100">
              {l}
            </a>
          ))}
          <a href={profile.linkedin} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}
            className="mt-2 text-center px-4 py-2.5 rounded-md bg-hero-text text-hero font-semibold">
            Connect on LinkedIn
          </a>
        </div>
      )}
    </nav>
  );
}

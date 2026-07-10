"use client";
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
  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-hero text-hero-text">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#" className="font-extrabold tracking-tight">Sanika Deokule</a>
        <div className="hidden md:flex items-center gap-6 text-sm">
          {links.map(([l, h]) => (
            <a key={h} href={h} className="opacity-80 hover:opacity-100 transition-opacity">{l}</a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a href={profile.linkedin} target="_blank" rel="noreferrer"
            className="px-3.5 py-1.5 rounded-md bg-hero-text text-hero text-sm font-semibold hover:opacity-90 transition-opacity">
            LinkedIn
          </a>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

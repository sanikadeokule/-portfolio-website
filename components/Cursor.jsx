"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    let x = 0, y = 0, rx = 0, ry = 0, raf;
    const move = (e) => {
      x = e.clientX; y = e.clientY;
      if (dot.current) dot.current.style.transform = `translate(${x - 3}px, ${y - 3}px)`;
      const t = e.target.closest("a, button, [data-magnetic]");
      if (ring.current) ring.current.style.width = ring.current.style.height = t ? "48px" : "28px";
    };
    const loop = () => {
      rx += (x - rx) * 0.15; ry += (y - ry) * 0.15;
      if (ring.current) {
        const s = parseFloat(ring.current.style.width || 28) / 2;
        ring.current.style.transform = `translate(${rx - s}px, ${ry - s}px)`;
      }
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", move);
    raf = requestAnimationFrame(loop);
    return () => { window.removeEventListener("mousemove", move); cancelAnimationFrame(raf); };
  }, []);

  return (
    <>
      <div ref={dot} className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-accent2 z-[100] pointer-events-none hidden md:block" />
      <div ref={ring} className="fixed top-0 left-0 w-7 h-7 rounded-full border border-accent/70 z-[99] pointer-events-none transition-[width,height] duration-200 hidden md:block" />
    </>
  );
}

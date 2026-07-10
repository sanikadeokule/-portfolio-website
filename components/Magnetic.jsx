"use client";
import { useRef } from "react";

export default function Magnetic({ children, className = "" }) {
  const ref = useRef(null);
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    ref.current.style.transform = `translate(${dx * 0.25}px, ${dy * 0.25}px)`;
  };
  const onLeave = () => (ref.current.style.transform = "translate(0,0)");
  return (
    <div ref={ref} data-magnetic onMouseMove={onMove} onMouseLeave={onLeave}
      className={`inline-block transition-transform duration-200 ease-out ${className}`}>
      {children}
    </div>
  );
}

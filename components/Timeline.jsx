"use client";
import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { timeline } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1];

export default function Timeline() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "end 0.6"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });

  return (
    <div ref={ref} className="relative max-w-3xl mx-auto">
      {/* track */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-[var(--line)]" />
      {/* line that draws itself as you scroll */}
      <motion.div
        style={{ scaleY: progress }}
        className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-brand origin-top"
      />
      {timeline.map((t, i) => (
        <motion.div
          key={t.title}
          initial={{ opacity: 0, x: i % 2 ? 48 : -48 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "0px 0px -40% 0px" }}
          transition={{ duration: 0.6, ease }}
          className={`relative pl-12 md:pl-0 pb-12 last:pb-0 md:w-1/2 ${
            i % 2 ? "md:ml-auto md:pl-12" : "md:pr-12 md:text-right"
          }`}
        >
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, margin: "0px 0px -40% 0px" }}
            transition={{ duration: 0.35, delay: 0.2, ease }}
            className={`absolute top-2 left-4 w-3 h-3 rounded-full bg-brand -translate-x-1/2 ${
              i % 2 ? "md:left-0" : "md:left-auto md:right-0 md:translate-x-1/2"
            }`}
          />
          <div className="inline-block text-left bg-bg border rule rounded-lg p-5 hover:border-brand transition-colors">
            <div className="flex items-baseline gap-3 mb-1">
              <span className="font-mono text-sm text-brand">{t.date}</span>
              <span className="text-xs font-semibold text-amber">{t.tag}</span>
            </div>
            <h3 className="font-bold">{t.title}</h3>
            <p className="muted text-sm mt-1.5 max-w-[55ch]">{t.detail}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

"use client";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1];
const [featured, ...rest] = projects;

function Chips({ stack }) {
  return (
    <p className="font-mono text-xs text-brand mt-4">{stack.join(" · ")}</p>
  );
}

export default function Projects() {
  return (
    <div className="space-y-10">
      {/* Featured — breaks the identical-grid pattern */}
      <motion.a
        href={featured.github} target="_blank" rel="noreferrer"
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6, ease }}
        className="block bg-hero text-hero-text rounded-xl p-8 md:p-10 hover:opacity-95 transition-opacity"
      >
        <p className="text-sm font-semibold text-hero-accent">Featured</p>
        <h3 className="text-3xl font-extrabold mt-2">{featured.name}</h3>
        <p className="mt-3 max-w-[60ch] text-hero-muted">{featured.desc}</p>
        <p className="font-mono text-xs mt-5 text-hero-accent">{featured.stack.join(" · ")}</p>
      </motion.a>

      <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
        {rest.map((p, i) => (
          <motion.a
            key={p.name} href={p.github} target="_blank" rel="noreferrer"
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.05, ease }}
            className="group border-t-2 border-[var(--line)] pt-5 hover:border-brand transition-colors"
          >
            <h3 className="font-bold text-xl group-hover:text-brand transition-colors">
              {p.name} {p.award && <span className="text-sm font-semibold text-amber ml-1">{p.award}</span>}
            </h3>
            <p className="muted mt-2 max-w-[55ch]">{p.desc}</p>
            <Chips stack={p.stack} />
          </motion.a>
        ))}
      </div>
    </div>
  );
}

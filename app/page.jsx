"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "@/components/Navbar";
import Terminal from "@/components/Terminal";
import Timeline from "@/components/Timeline";
import Projects from "@/components/Projects";
import BookChat from "@/components/BookChat";
import Email from "@/components/Email";
import Magnetic from "@/components/Magnetic";
import { profile, publications } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1];

function StaggerText({ text }) {
  return (
    <span aria-label={text} role="text">
      {text.split("").map((ch, i) => (
        <motion.span
          key={i}
          aria-hidden
          initial={{ opacity: 0, y: "0.4em" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 + i * 0.035, ease }}
          className="inline-block"
        >
          {ch === " " ? " " : ch}
        </motion.span>
      ))}
    </span>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-14 left-0 right-0 h-[3px] bg-amber origin-left z-50"
    />
  );
}

export default function Home() {
  return (
    <main className="relative overflow-x-clip">
      <Navbar />
      <ScrollProgress />

      {/* HERO — committed brand color, drenched band (fixed dark in both themes) */}
      <section className="bg-hero text-hero-text pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease }}>
            <p className="font-mono text-xl md:text-2xl text-hero-accent mb-4">Sanika Deokule</p>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.02] tracking-[-0.02em]">
              <StaggerText text="Curiosity," />
              <br />
              <StaggerText text="compiled." />
            </h1>
            <p className="mt-6 text-lg max-w-[55ch] text-hero-muted">
              SWE Intern at LinkedIn. I train the models, build the apps they live
              in, and publish the research behind them.
            </p>
            <div className="flex flex-wrap gap-4 mt-9">
              <Magnetic>
                <a href={profile.linkedin} target="_blank" rel="noreferrer"
                  className="px-6 py-3 rounded-lg bg-hero-text text-hero font-semibold hover:opacity-90 transition-opacity">
                  Connect on LinkedIn
                </a>
              </Magnetic>
              <Magnetic>
                <a href={profile.github} target="_blank" rel="noreferrer"
                  className="px-6 py-3 rounded-lg border border-hero-line font-semibold hover:bg-hero-hover transition-colors">
                  GitHub
                </a>
              </Magnetic>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15, ease }}>
            <Terminal />
          </motion.div>
        </div>
      </section>

      {/* PROOF LINE — prose, not stat cards */}
      <section className="border-b rule">
        <p className="max-w-6xl mx-auto px-6 py-6 text-sm muted">
          400+ problems on LeetCode · 9.1 CGPA · two papers at international
          conferences · selected into three national programs at the top 1% or better.
        </p>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-[1fr_2fr] gap-10">
        <h2 className="text-3xl font-bold">About</h2>
        <p className="text-lg leading-relaxed max-w-[65ch]">{profile.about}</p>
      </section>

      {/* JOURNEY */}
      <section id="journey" className="bg-surface border-y rule">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <h2 className="text-3xl font-bold mb-3">The journey</h2>
          <p className="muted mb-14 max-w-[60ch]">
            Four selections in three years, each narrower than the last.
          </p>
          <Timeline />
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold mb-3">Projects</h2>
        <p className="muted mb-12 max-w-[60ch]">
          ML systems and production-grade full-stack builds.
        </p>
        <Projects />
      </section>

      {/* RESEARCH */}
      <section id="research" className="bg-surface border-y rule">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <h2 className="text-3xl font-bold mb-12">Research</h2>
          <div className="max-w-3xl space-y-0 divide-y divide-[var(--line)]">
            {publications.map((p) => (
              <div key={p.title} className="py-6 first:pt-0 last:pb-0">
                <div className="flex items-baseline gap-3">
                  <span className={`text-xs font-semibold uppercase tracking-wide ${
                    p.status === "Accepted" ? "text-brand" : "text-amber"
                  }`}>{p.status}</span>
                  <span className="muted text-sm">{p.venue}</span>
                </div>
                <h3 className="font-semibold text-lg mt-2 max-w-[60ch]">{p.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-14 items-start">
        <div>
          <h2 className="text-3xl font-bold">Let's talk</h2>
          <p className="muted mt-4 max-w-[45ch]">
            Mentorship, collaboration, or just tech chat. Tell me the purpose and
            I'll reply with a Google Meet link if it's a fit.
          </p>
          <p className="mt-6 text-sm">
            Or directly:{" "}
            <Email className="text-brand font-semibold hover:underline" />
          </p>
          <a
            href="/Sanika_Deokule_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-5 px-5 py-2.5 rounded-md border border-[var(--line)] font-semibold text-sm hover:border-brand hover:text-brand transition-colors"
          >
            View resume (PDF)
          </a>
        </div>
        <BookChat />
      </section>

      <footer className="border-t rule py-8 text-center muted text-sm">
        © {new Date().getFullYear()} Sanika Deokule · Pune, India
      </footer>
    </main>
  );
}

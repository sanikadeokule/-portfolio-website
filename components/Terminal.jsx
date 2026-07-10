"use client";
import { useState, useRef, useEffect } from "react";
import { profile, projects } from "@/lib/data";

const COMMANDS = {
  help: () =>
    "Available commands:\n  whoami       — who is Sanika?\n  projects     — what has she built?\n  achievements — the numbers\n  contact      — reach out\n  clear        — clear terminal\n\n(hint: there's a hidden command. sudo may help.)",
  whoami: () =>
    `${profile.name} — ${profile.role}\nFinal-year Computer Engineering @ Cummins College, Pune (CGPA 9.1)`,
  projects: () =>
    projects.map((p) => `- ${p.name}: ${p.stack.slice(0, 3).join(", ")}`).join("\n") +
    "\n\nScroll down for details.",
  achievements: () =>
    "LinkedIn CoachIn — top 0.4% of 18,000+ applicants\nGoogle-supported WE Program — top 1% of 30,000+\nMicrosoft SEFA — selected from premier institutes\n400+ LeetCode | 2 research papers | 1st prize Buffer 5.0",
  contact: () =>
    `email:    ${profile.email}\nlinkedin: ${profile.linkedin}\ngithub:   ${profile.github}\n\nOr book a 15-min chat below.`,
};
const NAMES = [...Object.keys(COMMANDS), "sudo hire-me", "clear"];

function confetti() {
  const colors = ["#8a2d3b", "#d98e32", "#e8d5b5", "#5c1f2a"];
  for (let i = 0; i < 80; i++) {
    const el = document.createElement("div");
    const s = 6 + Math.random() * 6;
    el.style.cssText = `position:fixed;top:-12px;left:${Math.random() * 100}vw;width:${s}px;height:${s}px;background:${colors[i % 4]};z-index:9999;pointer-events:none;border-radius:${Math.random() > 0.5 ? "50%" : "2px"}`;
    document.body.appendChild(el);
    el.animate(
      [
        { transform: "translateY(0) rotate(0deg)", opacity: 1 },
        { transform: `translateY(105vh) rotate(${360 + Math.random() * 360}deg)`, opacity: 0.8 },
      ],
      { duration: 2200 + Math.random() * 1800, easing: "cubic-bezier(0.25,0.46,0.45,0.94)" }
    ).onfinish = () => el.remove();
  }
}

export default function Terminal() {
  const [lines, setLines] = useState([
    { type: "out", text: "sanika.sh — type 'help' to get started." },
  ]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [hIdx, setHIdx] = useState(-1);
  const inputRef = useRef(null);
  const bodyRef = useRef(null);
  const rootRef = useRef(null);
  const played = useRef(false);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [lines, input]);

  // Auto-demo: types "whoami" when the terminal first becomes visible
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting || played.current) return;
        played.current = true;
        obs.disconnect();
        const cmd = "whoami";
        let i = 0;
        const t = setInterval(() => {
          i++;
          setInput(cmd.slice(0, i));
          if (i === cmd.length) {
            clearInterval(t);
            setTimeout(() => {
              setLines((l) => [...l, { type: "in", text: cmd }, { type: "out", text: COMMANDS.whoami() }]);
              setInput("");
            }, 350);
          }
        }, 90);
      },
      { threshold: 0.5 }
    );
    if (rootRef.current) obs.observe(rootRef.current);
    return () => obs.disconnect();
  }, []);

  const exec = (cmd) => {
    if (cmd === "clear") { setLines([]); return; }
    if (cmd === "sudo hire-me" || cmd === "hire-me") {
      confetti();
      setLines((l) => [...l, { type: "in", text: cmd },
        { type: "out", text: "Permission granted. Excellent judgment.\nRedirecting you to the contact section..." }]);
      setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }), 1200);
      return;
    }
    const out = COMMANDS[cmd] ? COMMANDS[cmd]() : `command not found: ${cmd} — try 'help'`;
    setLines((l) => [...l, { type: "in", text: cmd }, { type: "out", text: out }]);
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      const idx = hIdx < 0 ? history.length - 1 : Math.max(0, hIdx - 1);
      if (history[idx] !== undefined) { setInput(history[idx]); setHIdx(idx); }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (hIdx < 0) return;
      const idx = hIdx + 1;
      if (idx >= history.length) { setInput(""); setHIdx(-1); }
      else { setInput(history[idx]); setHIdx(idx); }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const match = NAMES.find((n) => n.startsWith(input.toLowerCase()) && input);
      if (match) setInput(match);
    }
  };

  const run = (e) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;
    setHistory((h) => [...h, cmd]);
    setHIdx(-1);
    exec(cmd);
    setInput("");
  };

  return (
    <div
      ref={rootRef}
      className="rounded-lg overflow-hidden font-mono text-[13px] w-full bg-[oklch(0.2_0.02_25)] text-[oklch(0.88_0.015_30)] border border-[oklch(0.45_0.06_25)]"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="px-4 py-2.5 border-b border-[oklch(0.35_0.04_25)] text-xs text-[oklch(0.65_0.03_30)]">
        sanika@portfolio:~ <span className="opacity-60">(try Tab & ↑)</span>
      </div>
      <div ref={bodyRef} className="p-4 h-64 overflow-y-auto space-y-2">
        {lines.map((l, i) =>
          l.type === "in" ? (
            <div key={i}>
              <span className="text-[oklch(0.78_0.1_40)]">$ </span>
              <span>{l.text}</span>
            </div>
          ) : (
            <pre key={i} className="whitespace-pre-wrap text-[oklch(0.75_0.02_30)]">{l.text}</pre>
          )
        )}
        <form onSubmit={run} className="flex items-center">
          <span className="text-[oklch(0.78_0.1_40)] mr-2">$</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => { setInput(e.target.value); setHIdx(-1); }}
            onKeyDown={onKeyDown}
            className="bg-transparent outline-none flex-1 text-inherit"
            aria-label="terminal input"
            autoComplete="off"
            spellCheck="false"
          />
          <span className="terminal-caret" />
        </form>
      </div>
    </div>
  );
}

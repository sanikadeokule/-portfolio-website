"use client";
import { useState } from "react";
import { profile } from "@/lib/data";

const PURPOSES = ["Mentorship / career advice", "Collaboration / project idea", "Referral / opportunity", "Other"];
const field =
  "w-full px-4 py-2.5 text-sm rounded-md bg-surface border border-[var(--line)] outline-none focus:border-brand transition-colors";

export default function BookChat() {
  const [form, setForm] = useState({ name: "", email: "", purpose: PURPOSES[0], details: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    // Pre-filled Google Calendar link for Sanika: one click -> pick a time,
    // Meet link auto-attached, requester auto-invited.
    const gcal =
      "https://calendar.google.com/calendar/render?action=TEMPLATE" +
      "&text=" + encodeURIComponent(`15-min chat: ${form.purpose} — ${form.name}`) +
      "&details=" + encodeURIComponent(form.details) +
      "&add=" + encodeURIComponent(form.email) +
      "&vcon=meet";
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `[15-min chat request] ${form.purpose} — ${form.name}`,
          Name: form.name,
          Email: form.email,
          Purpose: form.purpose,
          Details: form.details,
          "APPROVE (opens Google Calendar with Meet + guest pre-filled)": gcal,
          _template: "table",
          _captcha: "false",
        }),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="rounded-md border border-[var(--line)] bg-surface p-8 text-center">
        <p className="text-2xl font-bold text-brand">Request sent ✓</p>
        <p className="muted mt-2 text-sm">
          Sanika reviews every request personally. If it's a fit, you'll receive a
          Google Meet invite at {form.email}.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <input required placeholder="Your name" value={form.name} onChange={set("name")} className={field} />
        <input required type="email" placeholder="Your email" value={form.email} onChange={set("email")} className={field} />
      </div>
      <select value={form.purpose} onChange={set("purpose")} className={field}>
        {PURPOSES.map((p) => <option key={p}>{p}</option>)}
      </select>
      <textarea required rows={4} value={form.details} onChange={set("details")}
        placeholder="What would you like to discuss? Requests without a clear purpose won't be approved."
        className={`${field} resize-none`} />
      <button type="submit" disabled={status === "sending"}
        className="w-full py-3 rounded-md bg-brand text-hero-text font-semibold hover:opacity-90 transition-opacity disabled:opacity-60">
        {status === "sending" ? "Sending…" : "Request a 15-min Google Meet"}
      </button>
      {status === "error" && (
        <p className="text-sm text-amber text-center">
          Couldn't send — email me directly instead: {profile.email}
        </p>
      )}
      <p className="muted text-xs text-center">
        Requests are reviewed personally — if approved, you'll get a Google Meet
        invite by email.
      </p>
    </form>
  );
}

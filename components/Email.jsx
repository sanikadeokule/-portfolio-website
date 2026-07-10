"use client";
import { useState, useEffect } from "react";
import { profile } from "@/lib/data";

// Renders the email only after mount, so it never appears in
// the pre-rendered HTML that scraper bots read.
export default function Email({ className = "" }) {
  const [addr, setAddr] = useState("");
  useEffect(() => setAddr(profile.email), []);
  if (!addr) return <span className={className}>email (loading…)</span>;
  return (
    <a href={`mailto:${addr}`} className={className}>
      {addr}
    </a>
  );
}

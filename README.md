# Sanika Deokule — Portfolio Website

Personal portfolio of **Sanika Deokule** — Software Developer Intern @ LinkedIn, final-year Computer Engineering student, ML + full-stack builder, and published researcher.

**Live site:** _(add your Vercel URL here after deploying)_

## ✨ Features

- **Interactive terminal hero** — a working shell (`whoami`, `projects`, `achievements`, `contact`) with Tab autocomplete, ↑/↓ command history, an auto-typed demo on first view, and a hidden `sudo hire-me` easter egg that fires confetti
- **Choreographed headline** — "Curiosity, compiled." staggers in letter by letter
- **Scroll-driven journey timeline** — a line that draws itself as you scroll, with milestone cards revealing one at a time (WE Program → CoachIn → SEFA → LinkedIn)
- **Reading progress bar** — spring-animated, fills as you scroll
- **Meeting requests with approval** — visitors request a 15-min chat with a required purpose; the owner receives an email with a one-click pre-filled Google Calendar link that auto-attaches a Google Meet link and invites the requester. Nothing is scheduled without approval.
- **Dark / light theme toggle** with a hero band that stays committed to the brand color in both themes
- **Sanitized downloadable resume** — contact details removed from the public PDF
- Fully responsive, `prefers-reduced-motion` support, WCAG-conscious contrast

## 🎨 Design

Styled against the [Impeccable](https://github.com/pbakaus/impeccable) design language to avoid generic AI-generated tells:

- OKLCH color system — committed oxblood/burgundy brand color with warm off-white and amber accent
- Bricolage Grotesque (display + body) with JetBrains Mono reserved for the terminal
- No gradient text, no glassmorphism, no identical card grids, no decorative grid backgrounds
- Exponential ease-out motion only; every animation has a reduced-motion fallback

## 🛠 Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router) |
| UI | React 18 + Tailwind CSS |
| Motion | Framer Motion (scroll-linked springs, stagger choreography) |
| Forms | FormSubmit AJAX relay (no backend needed) |
| Fonts | Bricolage Grotesque · JetBrains Mono |

## 🔒 Security

- Email assembled at runtime — never present in static HTML for scrapers
- CSP, `X-Frame-Options: DENY`, `nosniff`, referrer & permissions policies via `next.config.mjs`
- Dependabot enabled for automated dependency security updates
- Public resume PDF has phone/email removed at the content-stream level (not just hidden)

## 🚀 Run Locally

```bash
npm install
npm run dev        # http://localhost:3000
```

## 📦 Deploy

Push to GitHub → import the repo at [vercel.com](https://vercel.com) → framework auto-detected → Deploy. Zero config needed.

## 🗂 Structure

```
app/            layout, globals (design tokens), page
components/     Terminal, Timeline, Projects, BookChat, Navbar, ...
lib/data.js     ALL site content — edit this file to update the site
public/         resume PDF, static assets
```

All content (bio, projects, timeline, links) lives in `lib/data.js` — no component edits needed for content changes.

---

© Sanika Deokule · [LinkedIn](https://www.linkedin.com/in/sanika-deokule/) · [GitHub](https://github.com/sanikadeokule)

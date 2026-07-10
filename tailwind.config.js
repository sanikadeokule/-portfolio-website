/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        ink: "var(--ink)",
        soft: "var(--soft)",
        brand: "var(--brand)",
        line: "var(--line)",
        amber: "var(--amber)",
        hero: "var(--hero-bg)",
        "hero-text": "var(--hero-text)",
        "hero-muted": "var(--hero-muted)",
        "hero-accent": "var(--hero-accent)",
        "hero-line": "var(--hero-line)",
        "hero-hover": "var(--hero-hover)",
      },
      fontFamily: {
        sans: ["'Bricolage Grotesque'", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};

import "./globals.css";

export const metadata = {
  title: "Sanika Deokule — Software Engineer",
  description:
    "Final-year CS student · SWE Intern @ LinkedIn · ML + full-stack builder · published researcher. Let's connect.",
  openGraph: {
    title: "Sanika Deokule — Software Engineer",
    description:
      "SWE Intern @ LinkedIn · ML + full-stack builder · published researcher · top-1% program selections.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,300..800&family=JetBrains+Mono:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}

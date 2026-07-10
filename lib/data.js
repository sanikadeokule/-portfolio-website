export const profile = {
  name: "Sanika Deokule",
  role: "Software Engineer Intern @ LinkedIn",
  tagline: "ML + full-stack builder · published researcher · top-1% program selections",
  // Assembled at runtime to defeat scrapers reading static HTML
  get email() {
    return ["sanika", ".", "deokule"].join("") + "@" + ["gmail", "com"].join(".");
  },
  linkedin: "https://www.linkedin.com/in/sanika-deokule/",
  github: "https://github.com/sanikadeokule",
  about:
    "Final-year Computer Engineering student at Cummins College, Pune (CGPA 9.1), currently a Software Developer Intern at LinkedIn. I build at the intersection of machine learning and full-stack engineering — from CNN-based plant disease detection to production-grade Spring Boot systems with Stripe payments. Two research papers at international conferences, 400+ LeetCode problems, and selections into Microsoft SEFA, LinkedIn CoachIn (top 0.4%), and Google-supported WE Program (top 1%).",
};

export const timeline = [
  {
    date: "Feb 2024",
    title: "Women Engineers (WE) Program — TalentSprint × Google",
    detail:
      "Selected as one of 200 from 30,000+ applicants (top 1%). 100% scholarship + ₹1,00,000 award. Foundations in computational thinking, Python, DSA.",
    tag: "Top 1%",
  },
  {
    date: "Mar 2025",
    title: "LinkedIn CoachIn Program",
    detail:
      "One of 80 women selected from 18,000+ applicants (top 0.4%) for 1:1 mentorship and career support for women in tech.",
    tag: "Top 0.4%",
  },
  {
    date: "Jun 2025",
    title: "Microsoft SEFA Program",
    detail:
      "Selected from top engineering students across premier institutes in India for a hands-on end-to-end software engineering lifecycle program.",
    tag: "Microsoft",
  },
  {
    date: "Jun 2026",
    title: "Software Developer Intern — LinkedIn",
    detail: "Building software at scale at LinkedIn as an SWE Intern. Ongoing.",
    tag: "Now",
  },
];

export const projects = [
  {
    name: "CampaignIQ",
    desc: "Digital media campaign optimization tool — ML models, full-stack dashboard with JWT auth, OpenAI-powered chatbot, and Google Ads API integration.",
    stack: ["React", "FastAPI", "ML", "OpenAI API", "Google Ads API", "JWT"],
    github: "https://github.com/sanikadeokule/campaigniq-",
  },
  {
    name: "AgroVision AI",
    desc: "CNN-based plant disease prediction from leaf images. Flask web app with real-time inference, confidence scores, and actionable guidance.",
    stack: ["Python", "TensorFlow/Keras", "CNN", "Flask"],
    github: "https://github.com/sanikadeokule/Plant_disease_prediction_system",
  },
  {
    name: "AirBnB Clone",
    desc: "Production-ready booking platform with dynamic pricing, Stripe payments, JWT auth, and role-based access for users and hotel managers.",
    stack: ["Spring Boot", "React", "Stripe", "JWT"],
    github: "https://github.com/sanikadeokule/airbnb-fullstack",
  },
  {
    name: "Trippy",
    desc: "Travel package platform with RESTful APIs, search and smart sorting. 1st prize — Buffer 5.0 DSA Project Competition.",
    stack: ["Java", "Spring Boot", "PostgreSQL", "React"],
    github: "https://github.com/sanikadeokule/Travel-site-Web-Development",
    award: "🏆 1st Prize",
  },
  {
    name: "AI Mock Interview Platform",
    desc: "Generates domain-specific interview questions and scores candidate responses with NLP — feedback on content quality and communication.",
    stack: ["Python", "NLP", "ML", "OpenAI API"],
    github: "https://github.com/sanikadeokule/AI-MOCK-INTERVIEW",
  },
];

export const publications = [
  {
    title:
      "Enhancing the Identification of Plant Diseases Using the CBAM-Fused EfficientNet-B0: An Implementation Based on Transfer Learning",
    venue: "ICSCSD 2026 — International Conference on Smart Computing for Sustainable Development",
    status: "Under review",
  },
  {
    title:
      "A Comprehensive Review of Sanskrit Natural Language Processing: Pipeline, Progress, and Future Directions",
    venue: "ICACS 2026 — International Conference on AI, Communication Technologies & Smart Cities",
    status: "Under review",
  },
];

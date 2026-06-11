export const projects = [
  {
    id: "eployrs",
    name: "Eployrs",
    kind: "flagship",
    tagline: "AI-powered, multi-tenant recruitment SaaS",
    role: "Architect & Full-Stack Developer · Kavish Technology",
    year: "2024 — Present",
    description:
      "A multi-tenant recruitment platform supporting three job types (Normal, Pre-screening, Hiring Pipeline) with role-specific portals for Recruiters, Candidates, Organizations, and Admins.",
    problem:
      "Recruitment teams juggle scheduling, screening, and candidate evaluation across disconnected tools, with no isolation or standardization between organizations.",
    solution:
      "An end-to-end SaaS where AI handles screening and matching, async pipelines handle provisioning and notifications, and a multi-tenant architecture guarantees per-organization data isolation and RBAC.",
    highlights: [
      "AI video pre-screening: S3 session storage → Lambda analysis → structured scorecards",
      "AI job–candidate matching with fit scoring, NLP resume parsing & geo-proximity search",
      "Multi-tenant SSO (OIDC · PKCE · JWKS) with per-org credentials & dynamic DB switching",
      "RabbitMQ provisioning pipeline + Cashfree payments with HMAC-SHA256 webhook verification",
      "40%+ API latency reduction via Redis caching & MongoDB compound indexing",
    ],
    techStack: [
      "React", "TypeScript", "Node.js", "MongoDB", "Redis",
      "RabbitMQ", "AWS S3", "AWS Lambda", "OIDC", "Cashfree",
    ],
    liveUrl: "https://eployrs.com",
    caseStudy: "/work/eployrs",
    accent: "#22d3ee",
  },

  {
    id: "jobmailer",
    name: "JobMailer AI",
    kind: "flagship",
    tagline: "AI resume–JD matching & queue-backed email automation",
    role: "Solo Full-Stack Build",
    year: "2025",
    description:
      "A MERN platform that pairs bulk job-application email automation with a dual-LLM ATS engine — matching a resume against a job description and generating a tailored, ATS-friendly resume.",
    problem:
      "Job seekers blast the same generic resume to hundreds of HRs and never know why they're filtered out by ATS systems.",
    solution:
      "An async platform where RabbitMQ workers send personalized emails off the request path, while Gemini + Groq analyze the resume against the JD to produce an ATS score, gap analysis, and a regenerated JD-tailored resume.",
    highlights: [
      "RabbitMQ queue + worker threads decouple email sending for non-blocking, retryable delivery",
      "Dual-LLM engine (Google Gemini + Groq) for resilient, fast resume–JD analysis",
      "Generates ATS score, matched skills, missing skills & missing fields",
      "AI candidate summary + a regenerated, ATS-friendly resume tailored to the JD",
      "JWT-secured REST APIs with RBAC and a real-time activity dashboard",
    ],
    techStack: [
      "React", "Node.js", "Express", "MongoDB", "RabbitMQ",
      "Worker Threads", "Gemini API", "Groq API", "JWT",
    ],
    liveUrl: "https://email-sender-1-6sd3.onrender.com/",
    githubUrl: "https://github.com/shubham3619",
    caseStudy: "/work/jobmailer",
    accent: "#a78bfa",
  },

  {
    id: "podcast",
    name: "Podcast App",
    kind: "project",
    tagline: "Real-time podcast streaming platform",
    role: "Solo Build",
    year: "2023",
    description:
      "A feature-rich podcast streaming app with Firebase auth, audio/image storage, Firestore real-time DB, episode management, and subscriptions.",
    highlights: [
      "Firebase authentication with audio & image storage",
      "Firestore real-time database for episodes and subscriptions",
      "Global state via Redux Toolkit across 15+ components",
    ],
    techStack: ["React", "Redux Toolkit", "Firebase", "Firestore", "CSS3"],
    githubUrl: "https://github.com/shubham3619",
    accent: "#34d399",
  },
]

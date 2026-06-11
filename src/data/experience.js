export const experience = [
  {
    id: "kavish",
    company: "Kavish Technology Pvt Ltd",
    role: "Full-Stack Developer",
    location: "Remote · Jaipur",
    duration: "Jan 2024 – Present",
    type: "Full-time",
    summary:
      "Architected and delivered Eployrs — an AI-powered, multi-tenant recruitment SaaS — across recruiter, candidate, organization, and admin surfaces.",
    product: "Eployrs",
    productUrl: "https://eployrs.com",
    caseStudy: "/work/eployrs",

    // Achievements grouped into themed clusters (reads senior vs. a flat bullet list)
    clusters: [
      {
        title: "AI Pre-screening & Matching",
        icon: "brain",
        points: [
          "Built an AI-driven pre-screening interview engine: candidates record video interviews stored on AWS S3 by session ID, with Lambda functions triggering automated AI analysis pipelines that generate structured scorecards and weakness-feedback reports.",
          "Engineered an AI candidate–job matching system with percentage fit scoring, NLP-powered resume parsing, geo-proximity candidate search, and a Talent Outreach module that ranks recommendations from a job description.",
        ],
      },
      {
        title: "Multi-tenant SSO & Security",
        icon: "shield",
        points: [
          "Designed a multi-tenant SSO system using OIDC, JWT, PKCE, and JWKS with per-organization GCP credential configuration.",
          "Built a Super Admin portal with dynamic database connection switching for strict per-tenant data isolation and RBAC across Super Admin, Admin, and Marketing roles.",
          "Added a user-activity tracking & anomaly-detection module — session monitoring, suspicious-login flagging, and authentication audit logs.",
        ],
      },
      {
        title: "Async Provisioning & Integrations",
        icon: "queue",
        points: [
          "Developed a bulk user-provisioning pipeline on RabbitMQ message queues with dynamic PDF generation and automated email delivery.",
          "Integrated Google Meet & Microsoft Teams APIs for in-platform interview scheduling, plus organization-level monitoring dashboards and recruiter availability management — eliminating manual coordination.",
          "Integrated the WhatsApp Business API for promotional and lead-nurturing campaigns, and a cron-based job-notification system for personalized match alerts.",
        ],
      },
      {
        title: "Performance & Payments",
        icon: "gauge",
        points: [
          "Optimized backend performance with Redis caching and MongoDB compound indexing, reducing critical API response times by 40%+.",
          "Integrated the Cashfree payment gateway with HMAC-SHA256 webhook verification, idempotency controls, and dynamic enterprise pricing plans.",
        ],
      },
    ],

    techStack: [
      "React",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Redis",
      "RabbitMQ",
      "AWS S3",
      "AWS Lambda",
      "OIDC / PKCE",
    ],
  },
  {
    id: "itraction",
    company: "iTraction",
    role: "Software Engineer Intern",
    location: "Jaipur, Rajasthan",
    duration: "Sept 2023 – Dec 2023",
    type: "Internship",
    summary:
      "Developed and maintained Vuelitos — a full-featured flight-booking platform for travel to and from Venezuela — on the complete MERN stack with real-time capabilities.",
    product: "Vuelitos",
    productUrl: "https://www.vuelitos.com/",

    // Shorter role → flat points instead of themed clusters
    points: [
      "Optimized API performance using Prisma ORM and intelligent caching strategies, significantly reducing response latency under high-traffic conditions.",
      "Implemented real-time flight tracking with WebSockets, delivering live updates to users with sub-second latency.",
      "Built a responsive, accessible booking UI with React, HTML5, CSS3, and Material-UI — cross-browser and cross-device compatible.",
      "Improved state-management architecture with Redux Toolkit, eliminating redundant re-renders and lifting frontend performance.",
      "Followed modern Git workflows — feature branching, PR reviews, and CI/CD pipelines — for seamless deployments.",
    ],

    techStack: [
      "React",
      "Node.js",
      "Prisma ORM",
      "WebSockets",
      "Redux Toolkit",
      "Material-UI",
      "CI/CD",
    ],
  },
]

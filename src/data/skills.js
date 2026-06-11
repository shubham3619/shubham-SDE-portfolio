// `icon` values are react-icons slugs resolved in the Skills component
// (si* = simple-icons brand marks). null => render a text/monogram chip.
export const skillGroups = [
  {
    title: "Languages",
    items: [
      { name: "JavaScript (ES6+)", icon: "SiJavascript" },
      { name: "TypeScript", icon: "SiTypescript" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React.js", icon: "SiReact" },
      { name: "Redux Toolkit", icon: "SiRedux" },
      { name: "HTML5", icon: "SiHtml5" },
      { name: "CSS3", icon: "SiCss" },
      { name: "Material UI", icon: "SiMui" },
      { name: "Responsive Design", icon: null },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: "SiNodedotjs" },
      { name: "Express.js", icon: "SiExpress" },
      { name: "REST APIs", icon: null },
      { name: "GraphQL", icon: "SiGraphql" },
      { name: "WebSockets", icon: "SiSocketdotio" },
      { name: "RabbitMQ", icon: "SiRabbitmq" },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "MongoDB", icon: "SiMongodb" },
      { name: "Prisma ORM", icon: "SiPrisma" },
      { name: "Firestore", icon: "SiFirebase" },
      { name: "Redis", icon: "SiRedis" },
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      { name: "AWS S3", icon: null },
      { name: "AWS Lambda", icon: null },
      { name: "Docker", icon: "SiDocker" },
      { name: "CI/CD", icon: "SiGithubactions" },
      { name: "Git", icon: "SiGit" },
      { name: "GitHub", icon: "SiGithub" },
      { name: "Postman", icon: "SiPostman" },
      { name: "JIRA", icon: "SiJira" },
    ],
  },
  {
    title: "Auth & Security",
    items: [
      { name: "JWT", icon: "SiJsonwebtokens" },
      { name: "OAuth 2.0", icon: "SiAuth0" },
      { name: "OIDC", icon: null },
      { name: "PKCE", icon: null },
      { name: "JWKS", icon: null },
      { name: "RBAC", icon: null },
      { name: "HMAC-SHA256", icon: null },
    ],
  },
  {
    title: "AI & Integrations",
    items: [
      { name: "Google Gemini", icon: "SiGooglegemini" },
      { name: "Groq", icon: null },
      { name: "Google Meet API", icon: "SiGooglemeet" },
      { name: "Microsoft Teams API", icon: null },
      { name: "WhatsApp Business API", icon: "SiWhatsapp" },
      { name: "Cashfree", icon: null },
    ],
  },
  {
    title: "Core Concepts",
    items: [
      { name: "Data Structures & Algorithms", icon: null },
      { name: "System Design", icon: null },
      { name: "OOP", icon: null },
      { name: "MVC", icon: null },
      { name: "Multi-tenant SaaS", icon: null },
      { name: "State Management", icon: null },
    ],
  },
]

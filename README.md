# Shubham Sharma — Portfolio

A dark, minimal, multi-page portfolio for a full-stack developer. Built to read as
the work of an experienced engineer: deep case studies, restrained motion, and a
small WebGL accent.

## Stack

- **React 18 + Vite** — app + build
- **React Router 6** — multi-page routing with animated transitions
- **Tailwind CSS** — design tokens via CSS variables (dark-first)
- **Framer Motion** — scroll reveals, page transitions, count-ups, magnetic CTAs
- **react-three-fiber + drei** — subtle wireframe hero (lazy-loaded, reduced-motion safe)
- **react-icons** — brand/tech logos

## Structure

```
src/
├── components/
│   ├── case/        # Case-study building blocks (Pipeline, Shell, Sections)
│   ├── common/      # Reveal, MagneticButton, CountUp, SectionHeading, ScrollProgress
│   ├── layout/      # Header (section-aware nav), Footer
│   ├── sections/    # Home sections: Hero, Work, ExperienceTimeline, Stack, Approach, Contact
│   └── three/       # HeroCanvas (WebGL)
├── data/            # Source of truth: personalInfo, experience, projects, skills, education
├── lib/motion.js    # Shared Framer Motion variants
├── pages/           # HomePage, AboutPage, work/EployrsPage, work/JobMailerPage, NotFoundPage
├── App.jsx          # Routes + AnimatePresence
└── index.css        # Design tokens + base styles
```

## Routes

- `/` — home (hero, selected work, experience, stack, approach, contact)
- `/work/eployrs` — Eployrs case study
- `/work/jobmailer` — JobMailer AI case study
- `/about` — narrative, education, certifications

## Scripts

- `npm run dev` — dev server
- `npm run build` — production build (`dist/`)
- `npm run preview` — preview the build
- `npm run lint` — ESLint

## Editing content

All content lives in `src/data/`. Update those files and the UI follows.

## Design tokens

The palette is defined as space-separated RGB channels in `src/index.css` (`:root`)
and exposed to Tailwind via `rgb(var(--token) / <alpha-value>)` in `tailwind.config.js`,
so opacity modifiers (`bg-surface/60`) work. Change the accent by editing `--accent`.

---

**Shubham Sharma** · [LinkedIn](https://linkedin.com/in/shubhamsharma2002) · [GitHub](https://github.com/shubham3619)

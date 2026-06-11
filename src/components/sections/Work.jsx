import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react'
import { projects } from '../../data/projects'
import SectionHeading from '../common/SectionHeading'
import Reveal from '../common/Reveal'
import { stagger, fadeUp } from '../../lib/motion'

const FlagshipCard = ({ p }) => {
  // Cursor spotlight: track pointer position into CSS vars on the card.
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
  }

  return (
  <Reveal variants={fadeUp} className="group">
    <Link
      to={p.caseStudy}
      onMouseMove={onMove}
      className="card card-hover relative block overflow-hidden p-7 sm:p-9"
      style={{ '--p': p.accent, '--mx': '50%', '--my': '0%' }}
    >
      {/* cursor-tracked spotlight */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(260px circle at var(--mx) var(--my), ${p.accent}14, transparent 70%)`,
        }}
      />
      <div className="relative flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-text-faint">{p.year}</span>
            <span
              className="rounded-full px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider"
              style={{ background: 'var(--accent-soft)', color: p.accent }}
            >
              Case study
            </span>
          </div>
          <h3 className="mt-3 text-2xl font-semibold text-text">{p.name}</h3>
          <p className="mt-1 text-sm text-text-muted">{p.tagline}</p>
        </div>
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line text-text-muted transition-all duration-300 group-hover:border-transparent group-hover:bg-accent group-hover:text-[#04181c]">
          <ArrowUpRight size={18} />
        </span>
      </div>

      <p className="relative mt-5 max-w-xl text-sm leading-relaxed text-text-muted">
        {p.description}
      </p>

      <ul className="relative mt-5 space-y-2">
        {p.highlights.slice(0, 3).map((h) => (
          <li key={h} className="flex gap-2 text-sm text-text-muted">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full" style={{ background: p.accent }} />
            {h}
          </li>
        ))}
      </ul>

      <div className="relative mt-6 flex flex-wrap gap-2">
        {p.techStack.slice(0, 6).map((t) => (
          <span key={t} className="rounded-md border border-line px-2 py-1 font-mono text-[11px] text-text-faint">
            {t}
          </span>
        ))}
      </div>
    </Link>
  </Reveal>
  )
}

const SmallCard = ({ p }) => (
  <Reveal variants={fadeUp} className="card card-hover flex flex-col p-6">
    <div className="flex items-center justify-between">
      <h3 className="text-lg font-semibold text-text">{p.name}</h3>
      <span className="font-mono text-xs text-text-faint">{p.year}</span>
    </div>
    <p className="mt-1 text-sm text-text-muted">{p.tagline}</p>
    <ul className="mt-4 flex-1 space-y-1.5">
      {p.highlights.map((h) => (
        <li key={h} className="flex gap-2 text-sm text-text-muted">
          <span className="mt-2 h-1 w-1 shrink-0 rounded-full" style={{ background: p.accent }} />
          {h}
        </li>
      ))}
    </ul>
    <div className="mt-5 flex items-center gap-3">
      {p.githubUrl && (
        <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-text-muted transition-colors hover:text-accent">
          <Github size={15} /> Code
        </a>
      )}
      {p.liveUrl && (
        <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-text-muted transition-colors hover:text-accent">
          <ExternalLink size={15} /> Live
        </a>
      )}
    </div>
  </Reveal>
)

const Work = () => {
  const flagships = projects.filter((p) => p.kind === 'flagship')
  const others = projects.filter((p) => p.kind !== 'flagship')

  return (
    <section id="work" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="container-content">
        <SectionHeading
          index="01"
          eyebrow="Selected Work"
          title="Systems I've designed and shipped"
          lead="Two production platforms built on the same backbone — async, queue-driven architecture with AI pipelines on top."
        />

        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '0px 0px -15% 0px' }}
          className="mt-12 grid gap-6 lg:grid-cols-2"
        >
          {flagships.map((p) => (
            <FlagshipCard key={p.id} p={p} />
          ))}
        </motion.div>

        {others.length > 0 && (
          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '0px 0px -15% 0px' }}
            className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {others.map((p) => (
              <SmallCard key={p.id} p={p} />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Work

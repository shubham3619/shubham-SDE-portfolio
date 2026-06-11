import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { EASE } from '../../lib/motion'
import CountUp from '../common/CountUp'
import Reveal from '../common/Reveal'

/**
 * Shared header + outro for case-study pages.
 * `metrics` = [{ value, suffix, decimals, label }]
 */
const CaseStudyShell = ({ meta, children }) => (
  <div className="pt-28">
    <div className="container-content">
      <Reveal>
        <Link to="/" className="inline-flex items-center gap-1.5 font-mono text-xs text-text-muted transition-colors hover:text-accent">
          <ArrowLeft size={14} /> All work
        </Link>
      </Reveal>

      <div className="mt-8 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="flex items-center gap-3"
        >
          <span className="font-mono text-xs text-text-faint">{meta.year}</span>
          <span
            className="rounded-full px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider"
            style={{ background: 'var(--accent-soft)', color: meta.accent }}
          >
            {meta.label}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.05 }}
          className="mt-4 text-h1 font-semibold text-text"
        >
          {meta.name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-3 text-xl text-text-muted"
        >
          {meta.tagline}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-2 font-mono text-sm text-text-faint"
        >
          {meta.role}
        </motion.p>

        {meta.liveUrl && (
          <motion.a
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            href={meta.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost mt-6 inline-flex"
          >
            {meta.liveLabel || 'Visit live'} <ExternalLink size={15} />
          </motion.a>
        )}
      </div>

      {/* Metrics band */}
      {meta.metrics && (
        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-4">
          {meta.metrics.map((m) => (
            <div key={m.label} className="bg-surface p-5">
              <div className="font-mono text-2xl font-semibold text-text">
                <CountUp value={m.value} decimals={m.decimals || 0} />
                <span style={{ color: meta.accent }}>{m.suffix}</span>
              </div>
              <div className="mt-1 text-xs text-text-faint">{m.label}</div>
            </div>
          ))}
        </div>
      )}
    </div>

    {children}
  </div>
)

export default CaseStudyShell

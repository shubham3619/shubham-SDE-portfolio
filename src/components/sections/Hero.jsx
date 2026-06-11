import { lazy, Suspense, useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, FileText } from 'lucide-react'
import { personalInfo } from '../../data/personalInfo'
import { EASE } from '../../lib/motion'
import CountUp from '../common/CountUp'
import MagneticButton from '../common/MagneticButton'

const HeroCanvas = lazy(() => import('../three/HeroCanvas'))

const Hero = () => {
  const reduce = useReducedMotion()
  const [show3d, setShow3d] = useState(false)

  // Only mount WebGL on capable, motion-friendly devices, after first paint.
  useEffect(() => {
    if (reduce) return
    const lowPower = window.matchMedia('(max-width: 768px)').matches
    if (lowPower) return
    const id = window.requestIdleCallback
      ? window.requestIdleCallback(() => setShow3d(true), { timeout: 1000 })
      : setTimeout(() => setShow3d(true), 400)
    return () => (window.cancelIdleCallback ? window.cancelIdleCallback(id) : clearTimeout(id))
  }, [reduce])

  const words = personalInfo.headline.split(' ')
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  const socials = [
    { icon: Github, url: personalInfo.github, label: 'GitHub' },
    { icon: Linkedin, url: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: Mail, url: `mailto:${personalInfo.email}`, label: 'Email' },
  ]

  return (
    <section id="home" className="relative flex min-h-screen items-start overflow-hidden pb-16 lg:items-center lg:pb-0">
      {/* faint engineering grid */}
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />

      {/* 3D object — right side on desktop */}
      <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-1/2 items-center justify-center lg:flex">
        {show3d && (
          <Suspense fallback={null}>
            <div className="h-[78vh] w-full">
              <HeroCanvas />
            </div>
          </Suspense>
        )}
        {/* blend canvas into the bg on its left edge */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-bg to-transparent" />
      </div>

      <div className="container-content relative z-10 pt-24">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-3 py-1.5"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-[ping_2.5s_ease-out_infinite] rounded-full bg-emerald-400 opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="font-mono text-xs text-text-muted">Open to opportunities</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.08 }}
            className="eyebrow mt-5 flex items-center gap-3"
          >
            <span className="inline-block h-px w-8 bg-accent" />
            {personalInfo.role}
          </motion.p>

          {/* Signature: word-by-word reveal */}
          <h1 className="mt-6 text-display font-semibold text-balance text-text">
            {words.map((w, i) => (
              <span key={i} className="inline-block overflow-hidden align-bottom">
                <motion.span
                  className="inline-block"
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.7, ease: EASE, delay: 0.15 + i * 0.06 }}
                >
                  {w === 'AI-driven' || w === 'scale.' ? (
                    <span className="text-accent">{w}</span>
                  ) : (
                    w
                  )}
                  {i < words.length - 1 && ' '}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-text-muted"
          >
            {personalInfo.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.72 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <MagneticButton onClick={() => scrollTo('work')} className="btn-primary">
              View selected work
            </MagneticButton>
            <MagneticButton
              as="a"
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <FileText size={16} /> Résumé
            </MagneticButton>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="mt-12 flex flex-wrap gap-x-10 gap-y-6"
          >
            {personalInfo.stats.map((s) => (
              <div key={s.label}>
                <div className="font-mono text-3xl font-semibold text-text">
                  <CountUp value={parseFloat(s.value)} decimals={s.value.includes('.') ? 1 : 0} />
                  <span className="text-accent">{s.suffix}</span>
                </div>
                <div className="mt-1 text-xs text-text-faint">{s.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.95 }}
            className="mt-10 flex items-center gap-2"
          >
            {socials.map(({ icon: Icon, url, label }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-md border border-line text-text-muted transition-colors hover:border-accent hover:text-accent"
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      <button
        onClick={() => scrollTo('work')}
        aria-label="Scroll to work"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-text-faint transition-colors hover:text-accent"
      >
        <motion.span
          animate={reduce ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="block"
        >
          <ArrowDown size={20} />
        </motion.span>
      </button>
    </section>
  )
}

export default Hero

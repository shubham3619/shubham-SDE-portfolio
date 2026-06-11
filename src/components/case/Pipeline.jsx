import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Reveal from '../common/Reveal'

/**
 * Vertical architecture pipeline whose spine "draws" itself as you scroll,
 * with each stage revealing in turn. `steps` = [{ title, detail, tag }].
 */
const Pipeline = ({ steps, accent = '#22d3ee' }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 70%', 'end 60%'],
  })
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 25, mass: 0.4 })

  return (
    <div ref={ref} className="relative pl-10">
      {/* track */}
      <div className="absolute left-[14px] top-2 h-[calc(100%-1rem)] w-px bg-line" />
      {/* drawing spine */}
      <motion.div
        style={{ scaleY, background: accent }}
        className="absolute left-[14px] top-2 h-[calc(100%-1rem)] w-px origin-top"
      />

      <div className="space-y-10">
        {steps.map((s, i) => (
          <Reveal key={s.title} className="relative" delay={i * 0.02}>
            {/* node */}
            <span
              className="absolute -left-10 top-1 grid h-7 w-7 place-items-center rounded-full border bg-bg font-mono text-xs"
              style={{ borderColor: accent, color: accent }}
            >
              {i + 1}
            </span>
            <div className="card p-5">
              <div className="flex flex-wrap items-center gap-2">
                <h4 className="font-medium text-text">{s.title}</h4>
                {s.tag && (
                  <span
                    className="rounded-md px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider"
                    style={{ background: 'var(--accent-soft)', color: accent }}
                  >
                    {s.tag}
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">{s.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}

export default Pipeline

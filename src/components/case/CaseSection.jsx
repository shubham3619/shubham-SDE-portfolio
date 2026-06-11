import Reveal from '../common/Reveal'

/** A titled content block within a case study. */
export const CaseSection = ({ eyebrow, title, children, className = '' }) => (
  <section className={`container-content py-16 ${className}`}>
    {eyebrow && <Reveal as="p" className="eyebrow">{eyebrow}</Reveal>}
    {title && (
      <Reveal as="h2" className="mt-3 max-w-2xl text-h2 font-semibold text-text" delay={0.05}>
        {title}
      </Reveal>
    )}
    <div className="mt-8">{children}</div>
  </section>
)

/** Problem / Solution two-column. */
export const ProblemSolution = ({ problem, solution }) => (
  <div className="grid gap-6 md:grid-cols-2">
    <Reveal className="card p-7">
      <p className="eyebrow text-text-faint">The problem</p>
      <p className="mt-3 leading-relaxed text-text-muted">{problem}</p>
    </Reveal>
    <Reveal className="card p-7" delay={0.05}>
      <p className="eyebrow">The approach</p>
      <p className="mt-3 leading-relaxed text-text-muted">{solution}</p>
    </Reveal>
  </div>
)

export const TechRow = ({ items }) => (
  <Reveal className="flex flex-wrap gap-2">
    {items.map((t) => (
      <span key={t} className="rounded-md border border-line px-3 py-1.5 font-mono text-xs text-text-muted">
        {t}
      </span>
    ))}
  </Reveal>
)

export default CaseSection

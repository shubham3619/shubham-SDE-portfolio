import Reveal from './Reveal'

/** Consistent section header: mono eyebrow + large heading + optional lead. */
const SectionHeading = ({ index, eyebrow, title, lead, align = 'left' }) => (
  <div className={align === 'center' ? 'mx-auto max-w-prose text-center' : 'max-w-prose'}>
    <Reveal className="flex items-center gap-3">
      {index && <span className="font-mono text-xs text-text-faint">{index}</span>}
      <span className="eyebrow">{eyebrow}</span>
    </Reveal>
    <Reveal as="h2" className="mt-4 text-h2 font-semibold text-text" delay={0.05}>
      {title}
    </Reveal>
    {lead && (
      <Reveal as="p" className="mt-4 text-base leading-relaxed text-text-muted" delay={0.1}>
        {lead}
      </Reveal>
    )}
  </div>
)

export default SectionHeading

import { Link } from 'react-router-dom'
import { Brain, Shield, Workflow, Gauge, ArrowUpRight, ExternalLink } from 'lucide-react'
import { experience } from '../../data/experience'
import SectionHeading from '../common/SectionHeading'
import Reveal from '../common/Reveal'

const ICONS = { brain: Brain, shield: Shield, queue: Workflow, gauge: Gauge }

const ExperienceTimeline = () => (
  <section id="experience" className="relative scroll-mt-20 border-t border-line py-24 sm:py-32">
    <div className="container-content">
      <SectionHeading
        index="02"
        eyebrow="Experience"
        title="Where I've built it"
        lead="From a real-time flight-booking platform to an AI recruitment SaaS — the systems kept getting bigger."
      />

      <div className="mt-12 space-y-16">
        {experience.map((job) => (
          <div key={job.id}>
            <Reveal className="flex flex-col gap-1 border-l-2 border-accent pl-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
              <div>
                <h3 className="text-xl font-semibold text-text">
                  {job.role} <span className="text-text-muted">· {job.company}</span>
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-text-muted">{job.summary}</p>
              </div>
              <div className="shrink-0 text-left sm:text-right">
                <div className="font-mono text-xs text-accent">{job.duration}</div>
                <div className="font-mono text-xs text-text-faint">{job.location}</div>
              </div>
            </Reveal>

            {/* Deep roles: themed clusters */}
            {job.clusters && (
              <div className="mt-8 grid gap-5 pl-5 sm:grid-cols-2">
                {job.clusters.map((c) => {
                  const Icon = ICONS[c.icon] || Brain
                  return (
                    <Reveal key={c.title} className="card p-6">
                      <div className="flex items-center gap-3">
                        <span className="grid h-9 w-9 place-items-center rounded-md border border-line bg-elevated text-accent">
                          <Icon size={17} />
                        </span>
                        <h4 className="font-medium text-text">{c.title}</h4>
                      </div>
                      <ul className="mt-4 space-y-2.5">
                        {c.points.map((pt) => (
                          <li key={pt} className="flex gap-2.5 text-sm leading-relaxed text-text-muted">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </Reveal>
                  )
                })}
              </div>
            )}

            {/* Shorter roles: flat highlights */}
            {!job.clusters && job.points && (
              <Reveal className="card mt-8 ml-5 p-6">
                <ul className="space-y-2.5">
                  {job.points.map((pt) => (
                    <li key={pt} className="flex gap-2.5 text-sm leading-relaxed text-text-muted">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}

            {/* Tech + links */}
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 pl-5">
              {job.techStack && (
                <Reveal className="flex flex-wrap gap-2">
                  {job.techStack.map((t) => (
                    <span key={t} className="rounded-md border border-line px-2 py-1 font-mono text-[11px] text-text-faint">
                      {t}
                    </span>
                  ))}
                </Reveal>
              )}
              {job.caseStudy && (
                <Reveal>
                  <Link
                    to={job.caseStudy}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-opacity hover:opacity-80"
                  >
                    Read the {job.product} case study <ArrowUpRight size={15} />
                  </Link>
                </Reveal>
              )}
              {!job.caseStudy && job.productUrl && (
                <Reveal>
                  <a
                    href={job.productUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-opacity hover:opacity-80"
                  >
                    Visit {job.product} <ExternalLink size={14} />
                  </a>
                </Reveal>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default ExperienceTimeline

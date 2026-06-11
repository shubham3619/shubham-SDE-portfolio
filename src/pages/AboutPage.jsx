import { Link } from 'react-router-dom'
import { FileText, GraduationCap, Award, ArrowLeft } from 'lucide-react'
import { personalInfo } from '../data/personalInfo'
import { education, certifications } from '../data/education'
import Reveal from '../components/common/Reveal'
import MagneticButton from '../components/common/MagneticButton'

const AboutPage = () => (
  <div className="pt-28">
    <div className="container-content max-w-prose">
      <Reveal>
        <Link to="/" className="inline-flex items-center gap-1.5 font-mono text-xs text-text-muted transition-colors hover:text-accent">
          <ArrowLeft size={14} /> Home
        </Link>
      </Reveal>

      <Reveal as="h1" className="mt-8 text-h1 font-semibold text-text" delay={0.05}>
        About
      </Reveal>

      <div className="mt-8 space-y-5 text-lg leading-relaxed text-text-muted">
        <Reveal as="p">{personalInfo.summary}</Reveal>
        <Reveal as="p" delay={0.05}>
          I started at iTraction on Vuelitos, a flight-booking platform for travel to and
          from Venezuela — real-time flight tracking over WebSockets, Prisma-optimized APIs,
          and a responsive Material-UI booking flow. That's where the obsession with
          latency began.
        </Reveal>
        <Reveal as="p" delay={0.1}>
          Since then my work keeps returning to the same themes: asynchronous, queue-driven
          systems; AI handled as a disciplined pipeline; authentication designed as
          architecture; and performance backed by measurement. Whether it's Eployrs'
          multi-tenant SaaS or JobMailer's dual-LLM ATS engine, the backbone is the same.
        </Reveal>
      </div>

      <Reveal className="mt-8">
        <MagneticButton
          as="a"
          href={personalInfo.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          <FileText size={16} /> Download résumé
        </MagneticButton>
      </Reveal>

      {/* Education */}
      <Reveal as="h2" className="mt-16 flex items-center gap-2 text-xl font-semibold text-text">
        <GraduationCap size={20} className="text-accent" /> Education
      </Reveal>
      <div className="mt-6 space-y-4">
        {education.map((e) => (
          <Reveal key={e.id} className="card p-5">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-medium text-text">{e.degree}</h3>
              {e.duration && <span className="font-mono text-xs text-text-faint">{e.duration}</span>}
            </div>
            <p className="mt-1 text-sm text-text-muted">{e.university}{e.detail ? ` · ${e.detail}` : ''}</p>
            {e.focus && <p className="mt-1 text-sm text-text-faint">{e.focus}</p>}
          </Reveal>
        ))}
      </div>

      {/* Certifications */}
      <Reveal as="h2" className="mt-12 flex items-center gap-2 text-xl font-semibold text-text">
        <Award size={20} className="text-accent" /> Certifications
      </Reveal>
      <div className="mt-6 space-y-4 pb-8">
        {certifications.map((c) => (
          <Reveal key={c.id} className="card p-5">
            <h3 className="font-medium text-text">{c.name}</h3>
            <p className="mt-1 text-sm text-text-muted">{c.issuer}</p>
          </Reveal>
        ))}
      </div>
    </div>
  </div>
)

export default AboutPage

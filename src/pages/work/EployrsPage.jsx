import CaseStudyShell from '../../components/case/CaseStudyShell'
import CaseSection, { ProblemSolution, TechRow } from '../../components/case/CaseSection'
import Pipeline from '../../components/case/Pipeline'
import Reveal from '../../components/common/Reveal'
import { projects } from '../../data/projects'

const p = projects.find((x) => x.id === 'eployrs')
const ACCENT = '#22d3ee'

const PRESCREEN_PIPELINE = [
  { title: 'Candidate records video interview', tag: 'Client', detail: 'Recorded in-browser; each session is keyed by a unique session ID for traceability.' },
  { title: 'Stored on AWS S3', tag: 'AWS S3', detail: 'Video assets are uploaded to S3 against the session ID — durable, decoupled from the app servers.' },
  { title: 'Lambda triggers analysis', tag: 'AWS Lambda', detail: 'An S3 event fires a Lambda that orchestrates the automated AI video-analysis pipeline.' },
  { title: 'AI generates a scorecard', tag: 'AI', detail: 'The pipeline produces a structured evaluation scorecard plus a weakness-feedback report.' },
  { title: 'Recruiter reviews results', tag: 'Portal', detail: 'Structured output surfaces in the recruiter portal — no manual screening of raw footage.' },
]

const MATCH_PIPELINE = [
  { title: 'Resume parsed with NLP', tag: 'NLP', detail: 'Resumes are parsed into structured fields for downstream matching and search.' },
  { title: 'Fit scoring against the JD', tag: 'Matching', detail: 'Candidates receive a percentage fit score relative to the job description.' },
  { title: 'Geo-proximity search', tag: 'Search', detail: 'Candidates are ranked with geo-proximity factored into discovery.' },
  { title: 'Talent Outreach ranking', tag: 'Outreach', detail: 'A JD input surfaces ranked candidate recommendations for proactive outreach.' },
]

const EployrsPage = () => (
  <CaseStudyShell
    meta={{
      name: 'Eployrs',
      tagline: p.tagline,
      role: p.role,
      year: p.year,
      label: 'Flagship · SaaS',
      accent: ACCENT,
      liveUrl: p.liveUrl,
      liveLabel: 'Visit eployrs.com',
      metrics: [
        { value: 40, suffix: '%+', label: 'API latency reduced' },
        { value: 3, suffix: '', label: 'Job types supported' },
        { value: 4, suffix: '', label: 'Role-based portals' },
        { value: 1, suffix: '', label: 'Multi-tenant core' },
      ],
    }}
  >
    <CaseSection eyebrow="Overview" title="An AI-powered recruitment platform, built multi-tenant from day one">
      <ProblemSolution problem={p.problem} solution={p.solution} />
    </CaseSection>

    <CaseSection eyebrow="System 01" title="AI video pre-screening pipeline">
      <Reveal as="p" className="mb-10 max-w-2xl leading-relaxed text-text-muted">
        Candidates complete recorded video interviews. Rather than block on processing, the
        platform stores footage and lets event-driven compute do the heavy lifting.
      </Reveal>
      <Pipeline steps={PRESCREEN_PIPELINE} accent={ACCENT} />
    </CaseSection>

    <CaseSection eyebrow="System 02" title="AI candidate–job matching">
      <Pipeline steps={MATCH_PIPELINE} accent={ACCENT} />
    </CaseSection>

    <CaseSection eyebrow="System 03" title="Multi-tenant SSO & security">
      <div className="grid gap-6 md:grid-cols-2">
        <Reveal className="card p-7">
          <h3 className="font-medium text-text">Identity</h3>
          <p className="mt-3 leading-relaxed text-text-muted">
            A multi-tenant SSO system built on OIDC, JWT, PKCE, and JWKS, with per-organization
            GCP credential configuration so each tenant authenticates against its own setup.
          </p>
        </Reveal>
        <Reveal className="card p-7" delay={0.05}>
          <h3 className="font-medium text-text">Isolation & RBAC</h3>
          <p className="mt-3 leading-relaxed text-text-muted">
            A Super Admin portal with dynamic database-connection switching enforces strict
            per-tenant data isolation, with RBAC across Super Admin, Admin, and Marketing roles,
            plus anomaly detection and authentication audit logs.
          </p>
        </Reveal>
      </div>
    </CaseSection>

    <CaseSection eyebrow="System 04" title="Async provisioning, payments & performance">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { h: 'RabbitMQ provisioning', b: 'Bulk user provisioning runs through RabbitMQ queues, with dynamic PDF generation and automated email delivery off the request path.' },
          { h: 'Scheduling integrations', b: 'Google Meet & Microsoft Teams APIs power in-platform interview scheduling, monitoring dashboards, and recruiter availability.' },
          { h: 'WhatsApp + cron', b: 'WhatsApp Business API drives lead-nurturing campaigns; a cron-based system sends personalized job-match alerts.' },
          { h: 'Cashfree payments', b: 'Integrated with HMAC-SHA256 webhook verification, idempotency controls, and dynamic enterprise pricing.' },
          { h: 'Redis + indexing', b: 'Redis caching and MongoDB compound indexing reduced critical API response times by 40%+.' },
          { h: 'Tech stack', b: null, tech: p.techStack },
        ].map((c) => (
          <Reveal key={c.h} className="card p-6">
            <h3 className="font-medium text-text">{c.h}</h3>
            {c.b && <p className="mt-3 text-sm leading-relaxed text-text-muted">{c.b}</p>}
            {c.tech && <div className="mt-3"><TechRow items={c.tech} /></div>}
          </Reveal>
        ))}
      </div>
    </CaseSection>
  </CaseStudyShell>
)

export default EployrsPage

import CaseStudyShell from '../../components/case/CaseStudyShell'
import CaseSection, { ProblemSolution, TechRow } from '../../components/case/CaseSection'
import Pipeline from '../../components/case/Pipeline'
import Reveal from '../../components/common/Reveal'
import { projects } from '../../data/projects'

const p = projects.find((x) => x.id === 'jobmailer')
const ACCENT = '#a78bfa'

const EMAIL_PIPELINE = [
  { title: 'User composes a campaign', tag: 'Client', detail: 'Resume + recipient list + template are submitted from the React client.' },
  { title: 'Job pushed to RabbitMQ', tag: 'RabbitMQ', detail: 'The API publishes the send job to a queue and returns immediately — the request never blocks on delivery.' },
  { title: 'Worker threads consume', tag: 'Workers', detail: 'Worker threads pull jobs off the queue and send personalized emails concurrently, with retries on failure.' },
  { title: 'Activity tracked', tag: 'Dashboard', detail: 'Delivery and engagement feed a real-time analytics dashboard, secured behind JWT + RBAC.' },
]

const ATS_PIPELINE = [
  { title: 'Resume + JD submitted', tag: 'Input', detail: 'The candidate provides their resume and a target job description.' },
  { title: 'Dual-LLM analysis', tag: 'Gemini + Groq', detail: 'Google Gemini and Groq analyze the pair — two providers for resilience and speed/quality trade-offs.' },
  { title: 'ATS score + gap analysis', tag: 'Scorecard', detail: 'The engine returns an ATS score, matched skills, missing skills, and missing fields.' },
  { title: 'Candidate summary', tag: 'AI', detail: 'A concise AI summary frames the candidate against the role.' },
  { title: 'Tailored resume generated', tag: 'Output', detail: 'An ATS-friendly resume is regenerated, rewritten to align with the job description.' },
]

const JobMailerPage = () => (
  <CaseStudyShell
    meta={{
      name: 'JobMailer AI',
      tagline: p.tagline,
      role: p.role,
      year: p.year,
      label: 'Flagship · Solo build',
      accent: ACCENT,
      liveUrl: p.liveUrl,
      liveLabel: 'Try it live',
      metrics: [
        { value: 2, suffix: '', label: 'LLM providers' },
        { value: 5, suffix: '', label: 'AI outputs generated' },
        { value: 1, suffix: '', label: 'Queue-backed sender' },
        { value: 100, suffix: '%', label: 'Async delivery' },
      ],
    }}
  >
    <CaseSection eyebrow="Overview" title="Bulk email automation, with an AI resume engine bolted on">
      <ProblemSolution problem={p.problem} solution={p.solution} />
    </CaseSection>

    <CaseSection eyebrow="System 01" title="Queue-backed email delivery">
      <Reveal as="p" className="mb-10 max-w-2xl leading-relaxed text-text-muted">
        Sending hundreds of emails synchronously would tie up the API and fail loudly. Instead,
        delivery is decoupled onto a queue and processed by worker threads.
      </Reveal>
      <Pipeline steps={EMAIL_PIPELINE} accent={ACCENT} />
    </CaseSection>

    <CaseSection eyebrow="System 02" title="Dual-LLM ATS engine">
      <Reveal as="p" className="mb-10 max-w-2xl leading-relaxed text-text-muted">
        The differentiator: the platform doesn't just send resumes — it tells the candidate why
        they'd be filtered out, and rewrites the resume to fix it.
      </Reveal>
      <Pipeline steps={ATS_PIPELINE} accent={ACCENT} />
    </CaseSection>

    <CaseSection eyebrow="Why two LLMs" title="A deliberate provider split">
      <div className="grid gap-6 md:grid-cols-2">
        <Reveal className="card p-7">
          <h3 className="font-medium text-text">Resilience</h3>
          <p className="mt-3 leading-relaxed text-text-muted">
            If one provider rate-limits or degrades, the other keeps the analysis flowing — AI
            features stay dependable rather than going dark on a single upstream.
          </p>
        </Reveal>
        <Reveal className="card p-7" delay={0.05}>
          <h3 className="font-medium text-text">Speed vs. depth</h3>
          <p className="mt-3 leading-relaxed text-text-muted">
            Groq's low-latency inference handles fast passes; Gemini brings depth where the
            analysis needs it — routing the right work to the right model.
          </p>
        </Reveal>
      </div>
    </CaseSection>

    <CaseSection eyebrow="Stack" title="Built with">
      <TechRow items={p.techStack} />
    </CaseSection>
  </CaseStudyShell>
)

export default JobMailerPage

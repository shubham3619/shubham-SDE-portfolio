import { Boxes, Brain, ShieldCheck, Gauge } from 'lucide-react'
import SectionHeading from '../common/SectionHeading'
import Reveal from '../common/Reveal'

const PRINCIPLES = [
  {
    icon: Boxes,
    title: 'Decouple with queues',
    body: 'Slow or failable work — emails, provisioning, AI analysis — belongs off the request path. RabbitMQ + workers keep APIs fast and retryable.',
  },
  {
    icon: Brain,
    title: 'Treat AI as a pipeline',
    body: 'LLMs are one stage, not the whole system. Structured inputs, validated outputs, and fallbacks (dual-provider) make AI features dependable.',
  },
  {
    icon: ShieldCheck,
    title: 'Auth is architecture',
    body: 'Multi-tenant isolation, OIDC/PKCE/JWKS, and RBAC are designed up front — not bolted on. Security shapes the data model, not the other way around.',
  },
  {
    icon: Gauge,
    title: 'Measure, then optimize',
    body: 'Redis caching and the right indexes cut critical API latency by 40%+. I profile before I tune, and I keep the proof.',
  },
]

const Approach = () => (
  <section id="approach" className="relative scroll-mt-20 border-t border-line py-24 sm:py-32">
    <div className="container-content">
      <SectionHeading
        index="04"
        eyebrow="How I Work"
        title="Principles behind the systems"
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {PRINCIPLES.map((p) => (
          <Reveal key={p.title} className="card card-hover p-7">
            <span className="grid h-10 w-10 place-items-center rounded-md border border-line bg-elevated text-accent">
              <p.icon size={18} />
            </span>
            <h3 className="mt-5 text-lg font-medium text-text">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-text-muted">{p.body}</p>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
)

export default Approach

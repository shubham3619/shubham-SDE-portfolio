import { motion } from 'framer-motion'
import { Mail, MapPin, ArrowUpRight } from 'lucide-react'
import { personalInfo } from '../../data/personalInfo'
import Reveal from '../common/Reveal'
import MagneticButton from '../common/MagneticButton'

const Contact = () => (
  <section id="contact" className="relative scroll-mt-20 border-t border-line py-24 sm:py-32">
    <div className="container-content">
      <div className="relative overflow-hidden rounded-card border border-line bg-surface/50 p-10 sm:p-16">
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
        <div className="relative max-w-2xl">
          <Reveal as="p" className="eyebrow">Get in touch</Reveal>
          <Reveal as="h2" className="mt-4 text-h2 font-semibold text-text text-balance" delay={0.05}>
            Have a role or a system that needs building?
          </Reveal>
          <Reveal as="p" className="mt-4 text-text-muted" delay={0.1}>
            I'm open to full-stack roles and interesting product work. The fastest way to reach me is email.
          </Reveal>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <MagneticButton as="a" href={`mailto:${personalInfo.email}`} className="btn-primary">
              <Mail size={16} /> {personalInfo.email}
            </MagneticButton>
            <MagneticButton
              as="a"
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              LinkedIn <ArrowUpRight size={15} />
            </MagneticButton>
          </motion.div>

          <Reveal className="mt-8 flex items-center gap-2 font-mono text-xs text-text-faint" delay={0.2}>
            <MapPin size={13} /> {personalInfo.location}
          </Reveal>
        </div>
      </div>
    </div>
  </section>
)

export default Contact

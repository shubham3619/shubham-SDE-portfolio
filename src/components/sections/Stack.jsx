import {
  SiJavascript, SiTypescript, SiReact, SiRedux, SiHtml5, SiCss, SiMui,
  SiNodedotjs, SiExpress, SiGraphql, SiSocketdotio, SiRabbitmq,
  SiMongodb, SiPrisma, SiFirebase, SiRedis,
  SiDocker, SiGithubactions, SiGit, SiGithub, SiPostman, SiJira,
  SiJsonwebtokens, SiAuth0, SiGooglegemini, SiGooglemeet, SiWhatsapp,
} from 'react-icons/si'
import { motion } from 'framer-motion'
import { skillGroups } from '../../data/skills'
import SectionHeading from '../common/SectionHeading'
import { stagger, fadeUp } from '../../lib/motion'

const ICON_MAP = {
  SiJavascript, SiTypescript, SiReact, SiRedux, SiHtml5, SiCss, SiMui,
  SiNodedotjs, SiExpress, SiGraphql, SiSocketdotio, SiRabbitmq,
  SiMongodb, SiPrisma, SiFirebase, SiRedis,
  SiDocker, SiGithubactions, SiGit, SiGithub, SiPostman, SiJira,
  SiJsonwebtokens, SiAuth0, SiGooglegemini, SiGooglemeet, SiWhatsapp,
}

const Chip = ({ name, icon }) => {
  const Icon = icon ? ICON_MAP[icon] : null
  return (
    <motion.span
      variants={fadeUp}
      className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface/60 px-3 py-2 text-sm text-text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/50 hover:text-text"
    >
      {Icon ? (
        <Icon className="h-4 w-4 text-text-faint transition-colors" aria-hidden />
      ) : (
        <span className="grid h-4 w-4 place-items-center rounded-sm bg-elevated font-mono text-[9px] text-accent">
          {name.charAt(0)}
        </span>
      )}
      {name}
    </motion.span>
  )
}

const Stack = () => (
  <section id="stack" className="relative scroll-mt-20 border-t border-line py-24 sm:py-32">
    <div className="container-content">
      <SectionHeading
        index="03"
        eyebrow="Tech Stack"
        title="Tools I reach for"
        lead="Grouped the way I actually use them — from language to cloud to the security layer."
      />

      <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-text-faint">
              {group.title}
            </h3>
            <motion.div
              variants={stagger(0.04)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '0px 0px -10% 0px' }}
              className="mt-4 flex flex-wrap gap-2"
            >
              {group.items.map((s) => (
                <Chip key={s.name} name={s.name} icon={s.icon} />
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Stack

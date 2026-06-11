import { useEffect, useState } from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'
import { personalInfo } from '../../data/personalInfo'

const useLocalTime = () => {
  const [time, setTime] = useState('')
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat('en-IN', {
      hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'Asia/Kolkata',
    })
    const tick = () => setTime(fmt.format(new Date()))
    tick()
    const id = setInterval(tick, 30_000)
    return () => clearInterval(id)
  }, [])
  return time
}

const Footer = () => {
  const time = useLocalTime()
  const links = [
    { icon: Github, url: personalInfo.github, label: 'GitHub' },
    { icon: Linkedin, url: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: Mail, url: `mailto:${personalInfo.email}`, label: 'Email' },
  ]

  return (
    <footer className="relative z-10 border-t border-line">
      <div className="container-content flex flex-col items-center justify-between gap-4 py-10 sm:flex-row">
        <p className="font-mono text-xs text-text-faint">
          © 2026 {personalInfo.name} — built with React, Vite & Framer Motion.
          {time && <span className="ml-3 text-text-muted">Jaipur · {time} IST</span>}
        </p>
        <div className="flex items-center gap-2">
          {links.map(({ icon: Icon, url, label }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="grid h-9 w-9 place-items-center rounded-md border border-line text-text-muted transition-colors hover:border-accent hover:text-accent"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer

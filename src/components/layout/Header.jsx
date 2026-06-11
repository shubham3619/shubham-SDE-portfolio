import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { personalInfo } from '../../data/personalInfo'

const NAV = [
  { label: 'Work', target: 'work' },
  { label: 'Experience', target: 'experience' },
  { label: 'Stack', target: 'stack' },
  { label: 'About', to: '/about' },
  { label: 'Contact', target: 'contact' },
]

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const location = useLocation()
  const navigate = useNavigate()
  const onHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Section-aware highlight (home only)
  useEffect(() => {
    if (!onHome) return
    const ids = NAV.filter((n) => n.target).map((n) => n.target)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [onHome, location.pathname])

  const go = (item) => {
    setOpen(false)
    if (item.to) { navigate(item.to); return }
    if (!onHome) { navigate('/', { state: { scrollTo: item.target } }); return }
    document.getElementById(item.target)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled ? 'border-b border-line bg-bg/80 backdrop-blur-xl' : 'border-b border-transparent'
      }`}
    >
      <nav className="container-content flex h-16 items-center justify-between">
        <Link to="/" className="group flex items-center gap-2 font-mono text-sm font-medium">
          <span className="grid h-7 w-7 place-items-center rounded-md border border-line bg-surface text-accent">S</span>
          <span className="text-text transition-colors group-hover:text-accent">
            {personalInfo.firstName.toLowerCase()}
            <span className="text-text-faint">.dev</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => {
            const isActive = item.target && active === item.target
            return (
              <li key={item.label}>
                <button
                  onClick={() => go(item)}
                  className={`relative rounded-full px-4 py-2 text-sm transition-colors ${
                    isActive ? 'text-text' : 'text-text-muted hover:text-text'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-elevated"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  {item.label}
                </button>
              </li>
            )
          })}
        </ul>

        <a
          href={personalInfo.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden text-sm font-medium text-text-muted transition-colors hover:text-accent md:inline-flex"
        >
          Résumé ↗
        </a>

        <button
          className="grid h-9 w-9 place-items-center rounded-md border border-line text-text md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-line bg-bg/95 backdrop-blur-xl md:hidden"
          >
            <ul className="container-content flex flex-col py-4">
              {NAV.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => go(item)}
                    className="w-full py-3 text-left text-text-muted transition-colors hover:text-text"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-3 text-accent"
                >
                  Résumé ↗
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header

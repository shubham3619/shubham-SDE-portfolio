import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import ScrollProgress from './components/common/ScrollProgress'
import { pageTransition } from './lib/motion'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import EployrsPage from './pages/work/EployrsPage'
import JobMailerPage from './pages/work/JobMailerPage'
import NotFoundPage from './pages/NotFoundPage'

const Page = ({ children }) => (
  <motion.main
    id="main"
    variants={pageTransition}
    initial="initial"
    animate="animate"
    exit="exit"
    className="relative z-10"
  >
    {children}
  </motion.main>
)

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [pathname])
  return null
}

function App() {
  const location = useLocation()
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-[#04181c]"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <Header />
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Page><HomePage /></Page>} />
          <Route path="/about" element={<Page><AboutPage /></Page>} />
          <Route path="/work/eployrs" element={<Page><EployrsPage /></Page>} />
          <Route path="/work/jobmailer" element={<Page><JobMailerPage /></Page>} />
          <Route path="*" element={<Page><NotFoundPage /></Page>} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  )
}

export default App

import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/sections/Hero'
import Work from '../components/sections/Work'
import ExperienceTimeline from '../components/sections/ExperienceTimeline'
import Stack from '../components/sections/Stack'
import Approach from '../components/sections/Approach'
import Contact from '../components/sections/Contact'

const HomePage = () => {
  const location = useLocation()

  // Scroll to a section when arriving from another route via nav.
  useEffect(() => {
    const target = location.state?.scrollTo
    if (!target) return
    const t = setTimeout(() => {
      document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
    return () => clearTimeout(t)
  }, [location.state])

  return (
    <>
      <Hero />
      <Work />
      <ExperienceTimeline />
      <Stack />
      <Approach />
      <Contact />
    </>
  )
}

export default HomePage

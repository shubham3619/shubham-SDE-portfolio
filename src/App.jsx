import { ViewModeProvider } from './context/ViewModeContext'
import { ThemeProvider } from './context/ThemeContext'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Experience from './components/sections/Experience'
import Projects from './components/sections/ProjectCaseStudy'
import Education from './components/sections/Education'
import EngineeringPhilosophy from './components/sections/EngineeringPhilosophy'
import PerformanceProof from './components/sections/PerformanceProof'
import ArchitectureVisualization from './components/sections/ArchitectureVisualization'
import WhyIBuiltIt from './components/sections/WhyIBuiltIt'
import Contact from './components/sections/Contact'
import ViewModeToggle from './components/common/ViewModeToggle'
import ThemeToggle from './components/common/ThemeToggle'
import AnimatedBackground from './components/common/AnimatedBackground'

function App() {
  return (
    <ThemeProvider>
      <ViewModeProvider>
        <div className="App relative min-h-screen">
          <AnimatedBackground />
          <Header />
          <main className="relative z-10">
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <WhyIBuiltIt />
            <ArchitectureVisualization />
            <PerformanceProof />
            <EngineeringPhilosophy />
            <Education />
            <Contact />
          </main>
          <Footer />
          <ViewModeToggle />
          <ThemeToggle />
        </div>
      </ViewModeProvider>
    </ThemeProvider>
  )
}

export default App


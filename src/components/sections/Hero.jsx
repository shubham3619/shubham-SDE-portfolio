import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, Code, Terminal } from 'lucide-react'
import { personalInfo } from '../../data/personalInfo'
import CodeSnippet from '../common/CodeSnippet'

const Hero = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: personalInfo.github,
      ariaLabel: 'Visit GitHub profile',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: personalInfo.linkedin,
      ariaLabel: 'Visit LinkedIn profile',
    },
    {
      name: 'Email',
      icon: Mail,
      url: `mailto:${personalInfo.email}`,
      ariaLabel: 'Send email',
    },
  ]

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white dark:bg-dark-bg transition-colors duration-300"
    >
      {/* Hero-specific background accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-72 h-72 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            background: 'radial-gradient(circle, rgba(14, 165, 233, 0.4) 0%, transparent 70%)',
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5,
          }}
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)',
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.h1
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <span className="text-gray-900 dark:text-white">Hi, I'm</span>
                  <br />
                  <motion.span
                    className="gradient-text inline-block"
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  >
                    Shubham Sharma
                  </motion.span>
                </motion.h1>

                <motion.h2
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-gray-700 dark:text-gray-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {personalInfo.title}
                </motion.h2>

                <motion.p
                  className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  {personalInfo.tagline}
                </motion.p>

                {/* Developer Badge */}
                <motion.div
                  className="flex items-center gap-3 mb-8 justify-center lg:justify-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <motion.div
                    className="dev-badge"
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <Code size={14} />
                    <span>Full-Stack Developer</span>
                  </motion.div>
                  <motion.div
                    className="dev-badge"
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <Terminal size={14} />
                    <span>MERN Stack</span>
                  </motion.div>
                </motion.div>

                {/* Code Snippet Preview */}
                <motion.div
                  className="mb-8 max-w-2xl mx-auto lg:mx-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <CodeSnippet
                    code={`const developer = {
  name: "Shubham Sharma",
  role: "Full-Stack Developer",
  stack: ["React", "Node.js", "MongoDB"],
  experience: "2+ years",
  passion: "Building scalable solutions"
};`}
                    language="javascript"
                    className="text-xs sm:text-sm"
                  />
                </motion.div>

                <motion.div
                  className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <motion.button
                    onClick={() => scrollToSection('#projects')}
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 sm:px-8 py-3 bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all relative overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      View My Work
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                    />
                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{ x: ['-200%', '200%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                    />
                  </motion.button>
                  <motion.button
                    onClick={() => scrollToSection('#contact')}
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 sm:px-8 py-3 glass text-gray-900 dark:text-white border-2 border-gray-300 dark:border-dark-border rounded-xl font-semibold hover:border-primary-500 dark:hover:border-primary-400 transition-all shadow-md hover:shadow-lg relative overflow-hidden group"
                  >
                    <span className="relative z-10">Get in Touch</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary-50/50 to-purple-50/50 dark:from-primary-900/20 dark:to-purple-900/20"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                </motion.div>

                <motion.div
                  className="flex items-center justify-center lg:justify-start space-x-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  {socialLinks.map((link, index) => {
                    const Icon = link.icon
                    return (
                      <motion.a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.ariaLabel}
                        whileHover={{ scale: 1.2, rotate: 5, y: -3 }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 + index * 0.1 }}
                        className="glass text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors p-3 rounded-full border border-gray-200 dark:border-dark-border hover:border-primary-500 dark:hover:border-primary-400 card-glow"
                      >
                        <Icon size={24} />
                      </motion.a>
                    )
                  })}
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Column - Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80">
                {/* Animated gradient border */}
                <motion.div
                  className="absolute inset-0 rounded-full p-1"
                  style={{
                    background: 'linear-gradient(45deg, #0ea5e9, #8b5cf6, #ec4899, #0ea5e9)',
                    backgroundSize: '300% 300%',
                  }}
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    rotate: 360,
                  }}
                  transition={{
                    backgroundPosition: { duration: 5, repeat: Infinity, ease: 'linear' },
                    rotate: { duration: 10, repeat: Infinity, ease: 'linear' },
                  }}
                >
                  <div className="w-full h-full rounded-full bg-white dark:bg-dark-bg" />
                </motion.div>
                
                {/* Profile Image */}
                <motion.div
                  className="absolute inset-2 rounded-full overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <motion.img
                    src="/image/shubham-sharma.jpeg"
                    alt="Shubham Sharma"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center 30%' }}
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.1 }}
                  />
                  {/* Overlay gradient on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-purple-500/20 opacity-0"
                    whileHover={{ opacity: 1 }}
                  />
                </motion.div>

                {/* Floating badges */}
                <motion.div
                  className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 glass text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-xl border border-primary-500/50"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  whileHover={{ scale: 1.1 }}
                  style={{
                    background: 'linear-gradient(135deg, #0ea5e9, #0284c7)',
                  }}
                >
                  <span className="text-xs sm:text-sm font-semibold">2+ Years</span>
                </motion.div>
                <motion.div
                  className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 glass text-gray-900 dark:text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-xl border border-gray-300 dark:border-dark-border"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="text-xs sm:text-sm font-semibold">MERN Stack</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <button
            onClick={() => scrollToSection('#about')}
            className="text-gray-600 hover:text-primary-600 transition-colors animate-bounce"
            aria-label="Scroll to about section"
          >
            <ArrowDown size={32} />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero


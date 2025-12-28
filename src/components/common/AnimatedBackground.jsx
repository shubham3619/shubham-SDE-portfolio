import { useCallback } from 'react'
import Particles from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { useTheme } from '../../context/ThemeContext'
import { useViewMode } from '../../context/ViewModeContext'

const AnimatedBackground = () => {
  const { theme } = useTheme()
  const { viewMode } = useViewMode()
  const isDark = theme === 'dark'

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine)
  }, [])

  // Light mode colors
  const lightColors = {
    primary: '#0ea5e9',
    secondary: '#8b5cf6',
    accent: '#ec4899',
  }

  // Dark mode colors (GitHub-inspired)
  const darkColors = {
    primary: '#58a6ff',
    secondary: '#bc8cff',
    accent: '#ff7b72',
  }

  const colors = isDark ? darkColors : lightColors

  const particlesConfig = {
    background: {
      color: {
        value: 'transparent',
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: 'push',
        },
        onHover: {
          enable: true,
          mode: 'repulse',
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: [colors.primary, colors.secondary, colors.accent],
      },
      links: {
        color: isDark ? '#58a6ff' : '#0ea5e9',
        distance: 120,
        enable: true,
        opacity: isDark ? 0.15 : 0.25,
        width: 0.8,
        triangles: {
          enable: false,
        },
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'bounce',
        },
        random: false,
        speed: 0.8,
        straight: false,
        attract: {
          enable: false,
        },
      },
      number: {
        density: {
          enable: true,
          area: 1000,
        },
        value: viewMode === 'engineer' ? 60 : 50,
      },
      opacity: {
        value: isDark ? 0.3 : 0.5,
        animation: {
          enable: true,
          speed: 0.5,
          sync: false,
        },
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 3 },
        animation: {
          enable: true,
          speed: 2,
          sync: false,
        },
      },
    },
    detectRetina: true,
  }

  return (
    <div className="fixed inset-0 -z-0 overflow-hidden pointer-events-none">
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 opacity-30 dark:opacity-20"
        style={{
          background: isDark
            ? 'radial-gradient(ellipse at top, rgba(88, 166, 255, 0.1) 0%, transparent 50%), radial-gradient(ellipse at bottom, rgba(188, 140, 255, 0.1) 0%, transparent 50%)'
            : 'radial-gradient(ellipse at top, rgba(14, 165, 233, 0.15) 0%, transparent 50%), radial-gradient(ellipse at bottom, rgba(139, 92, 246, 0.15) 0%, transparent 50%)',
        }}
      />
      
      {/* Particles net/grid effect */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesConfig}
        className="absolute inset-0"
      />
      
      {/* Additional gradient mesh */}
      <div
        className="absolute inset-0 opacity-20 dark:opacity-15"
        style={{
          background: `
            radial-gradient(circle at 20% 20%, ${colors.primary}15 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, ${colors.secondary}15 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, ${colors.accent}10 0%, transparent 50%)
          `,
        }}
      />
    </div>
  )
}

export default AnimatedBackground


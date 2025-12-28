import { createContext, useContext, useState } from 'react'

const ViewModeContext = createContext()

export const ViewModeProvider = ({ children }) => {
  const [viewMode, setViewMode] = useState('recruiter') // 'recruiter' or 'engineer'

  const toggleViewMode = () => {
    setViewMode(prev => prev === 'recruiter' ? 'engineer' : 'recruiter')
  }

  return (
    <ViewModeContext.Provider value={{ viewMode, toggleViewMode }}>
      {children}
    </ViewModeContext.Provider>
  )
}

export const useViewMode = () => {
  const context = useContext(ViewModeContext)
  if (!context) {
    throw new Error('useViewMode must be used within ViewModeProvider')
  }
  return context
}


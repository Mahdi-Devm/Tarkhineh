import React, { createContext, useContext, useState, useEffect } from 'react'

interface NumberContextType {
  mobile: string
  setMobile: (mobile: string) => void
}

const NumberContext = createContext<NumberContextType | undefined>(undefined)

export const NumberProvider: React.FC = ({ children }) => {
  const savedMobile = localStorage.getItem('mobile')
  const [mobile, setMobile] = useState<string>(savedMobile || '')

  useEffect(() => {
    if (mobile) {
      localStorage.setItem('mobile', mobile)
    }
  }, [mobile])

  return (
    <NumberContext.Provider value={{ mobile, setMobile }}>
      {children}
    </NumberContext.Provider>
  )
}

export const useNumber = (): NumberContextType => {
  const context = useContext(NumberContext)
  if (!context) {
    throw new Error('useNumber must be used within an NumberProvider')
  }
  return context
}

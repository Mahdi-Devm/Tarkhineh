import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react'

interface NumberContextType {
  mobile: string
  setMobile: (mobile: string) => void
}

const NumberContext = createContext<NumberContextType | undefined>(undefined)

interface NumberProviderProps {
  children: ReactNode
}

export const NumberProvider: React.FC<NumberProviderProps> = ({ children }) => {
  const savedMobile = localStorage.getItem('mobile')
  const [mobile, setMobile] = useState<string>(savedMobile || '')

  useEffect(() => {
    if (mobile) localStorage.setItem('mobile', mobile)
  }, [mobile])

  return (
    <NumberContext.Provider value={{ mobile, setMobile }}>
      {children}
    </NumberContext.Provider>
  )
}

export const useNumber = (): NumberContextType => {
  const context = useContext(NumberContext)
  if (!context) throw new Error('useNumber باید در NumberProvider استفاده شود')
  return context
}

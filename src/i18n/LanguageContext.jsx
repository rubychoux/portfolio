import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext({ lang: 'en', toggle: () => {}, setLang: () => {} })

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem('lang') || 'en'
    }
    return 'en'
  })

  useEffect(() => {
    if (typeof localStorage !== 'undefined') localStorage.setItem('lang', lang)
    if (typeof document !== 'undefined') document.documentElement.lang = lang
  }, [lang])

  const toggle = () => setLang((l) => (l === 'en' ? 'ko' : 'en'))

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  return useContext(LanguageContext)
}

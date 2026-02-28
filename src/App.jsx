import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Founder from './components/Founder/Founder'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import FinFlowCaseStudy from './components/CaseStudy/FinFlowCaseStudy'
import AURACaseStudy from './components/CaseStudy/AURACaseStudy'
import InterOcciCaseStudy from './components/CaseStudy/InterOcciCaseStudy'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <main>
              <Hero />
              <Projects />
              <About />
              <Founder />
              <Experience />
              <Skills />
              <Contact />
            </main>
          </>
        }
      />
      <Route path="/projects/finflow" element={<FinFlowCaseStudy />} />
      <Route path="/projects/aura" element={<AURACaseStudy />} />
      <Route path="/projects/interocci" element={<InterOcciCaseStudy />} />
    </Routes>
    </>
  )
}

export default App

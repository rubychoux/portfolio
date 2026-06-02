import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Founder from './components/Founder/Founder'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import Writing from './components/Writing/Writing'
import Contact from './components/Contact/Contact'
import CaramelCaseStudy from './components/CaseStudy/CaramelCaseStudy'
import InterOcciCaseStudy from './components/CaseStudy/InterOcciCaseStudy'
import WritingPost from './components/Writing/WritingPost'
import QuotesPage from './components/Writing/QuotesPage'

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
              <Writing />
              <Contact />
            </main>
          </>
        }
      />
      <Route path="/projects/caramel" element={<CaramelCaseStudy />} />
      <Route path="/projects/interocci" element={<InterOcciCaseStudy />} />
      <Route path="/writing/:slug" element={<WritingPost />} />
      <Route path="/quotes" element={<QuotesPage />} />
    </Routes>
    </>
  )
}

export default App

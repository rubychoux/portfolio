import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import './App.css'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import FounderPage from './components/Founder/FounderPage'
import Experience from './components/Experience/Experience'
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
        {/* Pages with the navbar */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/founder" element={<FounderPage />} />
          <Route path="/projects" element={<Navigate to="/founder" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* Full-page detail views (own back navigation) */}
        <Route path="/projects/caramel" element={<CaramelCaseStudy />} />
        <Route path="/projects/interocci" element={<InterOcciCaseStudy />} />
        <Route path="/writing/:slug" element={<WritingPost />} />
        <Route path="/quotes" element={<QuotesPage />} />
      </Routes>
    </>
  )
}

export default App

import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import './App.css'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import FounderPage from './components/Founder/FounderPage'
import Engineer from './components/Engineer/Engineer'
import Creator from './components/Creator/Creator'
import Writing from './components/Writing/Writing'
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
          <Route path="/engineer" element={<Engineer />} />
          <Route path="/experience" element={<Navigate to="/engineer" replace />} />
          <Route path="/creator" element={<Creator />} />
          <Route path="/writing" element={<Writing />} />
        </Route>

        {/* Full-page detail views (own back navigation) */}
        <Route path="/projects/caramel" element={<CaramelCaseStudy />} />
        <Route path="/projects/interocci" element={<InterOcciCaseStudy />} />
        <Route path="/writing/:slug" element={<WritingPost />} />
        <Route path="/quotes" element={<QuotesPage />} />

        {/* Unknown routes (incl. the removed /contact) go home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}

export default App

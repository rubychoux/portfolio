import Projects from '../Projects/Projects'
import Founder from './Founder'

// Merged page: projects first, then the founder journey.
export default function FounderPage() {
  return (
    <>
      <Projects />
      <Founder />
    </>
  )
}

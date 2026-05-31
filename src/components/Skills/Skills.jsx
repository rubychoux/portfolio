import './Skills.css'

const SKILL_GROUPS = [
  {
    category: 'Product & Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind', 'Three.js'],
  },
  {
    category: 'AI & Backend',
    skills: ['Google Gemini', 'Supabase', 'Postgres', 'Python', 'Machine Learning', 'API Design'],
  },
  {
    category: 'Founder Toolkit',
    skills: ['Shipping solo', 'Payments & Billing', 'Vercel', 'Figma', 'Fundraising'],
  },
]

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-inner container">
        <p className="section-label">Skills</p>
        <h2 className="section-title">How I build</h2>

        <div className="skills-grid">
          {SKILL_GROUPS.map(({ category, skills }) => (
            <div key={category} className="skill-group">
              <h3 className="skill-category">{category}</h3>
              <ul className="skill-list">
                {skills.map((skill) => (
                  <li key={skill} className="skill-item">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

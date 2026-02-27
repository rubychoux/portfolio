import './Skills.css'

const SKILL_GROUPS = [
  {
    category: 'Frontend',
    skills: ['React', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Vite'],
  },
  {
    category: 'AI / ML',
    skills: ['Python', 'Machine Learning', 'Data Analysis', 'TensorFlow'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'VS Code', 'Vercel', 'Figma', 'Three.js'],
  },
]

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-inner container">
        <p className="section-label">Skills</p>
        <h2 className="section-title">What I work with</h2>

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

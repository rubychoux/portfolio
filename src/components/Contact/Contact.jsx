import './Contact.css'

const CONTACT_LINKS = [
  {
    label: 'Email',
    display: 'chouxxkim@gmail.com',
    href: 'mailto:chouxxkim@gmail.com',
    external: false,
  },
  {
    label: 'LinkedIn',
    display: 'linkedin.com/in/rubychoux',
    href: 'https://linkedin.com/in/rubychoux',
    external: true,
  },
  {
    label: 'GitHub',git 
    display: 'github.com/rubychoux',
    href: 'https://github.com/rubychoux',
    external: true,
  },
]

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-inner container">
        <p className="section-label">Contact</p>

        <h2 className="contact-headline">Let's build something.</h2>
        <p className="contact-subtext">
          Open to Frontend Engineering roles and founder conversations.
        </p>

        <ul className="contact-list">
          {CONTACT_LINKS.map(({ label, display, href, external }) => (
            <li key={label} className="contact-item">
              <span className="contact-item-label">{label}</span>
              <a
                href={href}
                className="contact-item-value"
                {...(external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
              >
                {display} ↗
              </a>
            </li>
          ))}
        </ul>

        <p className="contact-footer">
          © {new Date().getFullYear()} Ruby Choux Kim
        </p>
      </div>
    </section>
  )
}

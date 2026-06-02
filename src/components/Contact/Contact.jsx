import './Contact.css'
import { useLang } from '../../i18n/LanguageContext'

const CONTACT_LINKS = [
  {
    label: 'Email',
    display: 'chouxxkim@gmail.com',
    href: 'mailto:chouxxkim@gmail.com',
    external: false,
  },
  {
    label: 'Instagram',
    display: 'instagram.com/rubychoux',
    href: 'https://instagram.com/rubychoux',
    external: true,
  },
  {
    label: 'LinkedIn',
    display: 'linkedin.com/in/rubychoux',
    href: 'https://linkedin.com/in/rubychoux',
    external: true,
  },
  {
    label: 'GitHub',
    display: 'github.com/rubychoux',
    href: 'https://github.com/rubychoux',
    external: true,
  },
]

const T = {
  en: {
    label: 'Contact',
    headline: "Let's build something.",
    subtext: 'Open to conversations with investors, collaborators, and fellow builders.',
  },
  ko: {
    label: '연락',
    headline: '함께 만들어요.',
    subtext: '투자자, 협업자, 그리고 함께 만드는 사람들과의 대화를 환영합니다.',
  },
}

export default function Contact() {
  const { lang } = useLang()
  const t = T[lang]

  return (
    <section className="contact" id="contact">
      <div className="contact-inner container">
        <p className="section-label">{t.label}</p>

        <h2 className="contact-headline">{t.headline}</h2>
        <p className="contact-subtext">{t.subtext}</p>

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

import { useEffect, useState } from 'react'
import { common } from './data/common'
import type { Lang } from './data/types'
import { FlagBR, FlagUK } from './Flags'
import { IconDownload, IconGitHub, IconLinkedIn, IconMail } from './Icons'
import { LangContext, useI18n } from './i18n'

type Theme = 'light' | 'dark'

const SECTIONS = ['about', 'experience', 'skills', 'education', 'contact'] as const

function store(key: string, value: string) {
  try {
    localStorage.setItem(key, value)
  } catch {
    /* storage unavailable */
  }
}

// The initial theme is applied by an inline script in index.html (no flash);
// React only takes over after hydration.
function useTheme() {
  const [theme, setTheme] = useState<Theme | null>(null)
  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light')
  }, [])
  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = next
    store('theme', next)
    setTheme(next)
  }
  return [theme, toggle] as const
}

function LangSwitch() {
  const { lang, t } = useI18n()
  const items: { l: Lang; flag: React.ReactNode }[] = [
    { l: 'pt', flag: <FlagBR /> },
    { l: 'en', flag: <FlagUK /> },
  ]
  return (
    <div className="lang-switch" role="group" aria-label="Idioma / Language">
      {items.map(({ l, flag }) => (
        <a
          key={l}
          href={common.paths[l]}
          hrefLang={l === 'pt' ? 'pt-BR' : 'en'}
          lang={l === 'pt' ? 'pt-BR' : 'en'}
          className={l === lang ? 'active' : ''}
          aria-current={l === lang ? 'true' : undefined}
          aria-label={t.langNames[l]}
          title={t.langNames[l]}
          onClick={() => store('lang', l)}
        >
          {flag}
          <span>{l.toUpperCase()}</span>
        </a>
      ))}
    </div>
  )
}

function Header() {
  const { t } = useI18n()
  const [theme, toggle] = useTheme()
  const [open, setOpen] = useState(false)
  return (
    <header className="header">
      <a className="skip-link" href="#main">
        {t.skipToContent}
      </a>
      <div className="container header-inner">
        <a href="#top" className="brand">
          <span className="brand-mark">LN</span>
          <span className="brand-name">{common.name}</span>
        </a>
        <nav className={`nav ${open ? 'nav-open' : ''}`} aria-label="Menu">
          {SECTIONS.map(id => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              {t.nav[id]}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <LangSwitch />
          <button className="icon-btn" onClick={toggle} aria-label={t.toggleTheme} title={t.toggleTheme}>
            {theme === 'dark' ? '☀' : '☾'}
          </button>
          <button className="icon-btn menu-btn" onClick={() => setOpen(o => !o)} aria-label={t.menu} aria-expanded={open}>
            ☰
          </button>
        </div>
      </div>
    </header>
  )
}

function CvButtons() {
  const { t, lang } = useI18n()
  const items = [
    { l: 'pt' as Lang, label: t.cvPt, href: common.cv.pt },
    { l: 'en' as Lang, label: t.cvEn, href: common.cv.en },
  ].sort(a => (a.l === lang ? -1 : 1))
  return (
    <>
      {items.map(i => (
        <a key={i.l} className="btn" href={i.href} download hrefLang={i.l} type="application/pdf">
          <IconDownload /> {i.label}
        </a>
      ))}
    </>
  )
}

function Hero() {
  const { t, p } = useI18n()
  return (
    <section className="hero" id="top">
      <div className="hero-bg" aria-hidden="true" />
      <div className="container hero-grid">
        <div>
          <p className="eyebrow">{t.hello}</p>
          <h1>
            {common.name}
            <span className="h1-sub">{p.headline}</span>
          </h1>
          <p className="lead">{t.heroLine}</p>
          <ul className="tagline">
            {p.tagline.map(x => (
              <li key={x}>{x}</li>
            ))}
          </ul>
          <p className="hero-meta">
            📍 {p.location}
          </p>
          <div className="hero-actions">
            <div className="cta">
              <a className="btn btn-primary" href={`mailto:${common.email}`}>
                <IconMail /> {t.getInTouch}
              </a>
              <a className="btn" href={common.linkedin} target="_blank" rel="noopener me">
                <IconLinkedIn /> {t.myLinkedIn}
              </a>
              <a className="btn" href={common.github} target="_blank" rel="noopener me">
                <IconGitHub /> {t.myGitHub}
              </a>
            </div>
            <div className="cv-box">
              <span className="cv-box-label">{t.downloadCv}</span>
              <div className="cv-box-buttons">
                <CvButtons />
              </div>
            </div>
          </div>
        </div>
        <div className="hero-photo">
          <img src={common.photo} alt={t.photoAlt} width={640} height={640} fetchPriority="high" />
        </div>
      </div>
      <div className="container stats">
        {p.stats.map(s => (
          <div key={s.label} className="stat photo-card">
            <img className="photo-card-img" src={common.statImages[s.icon]} alt="" width={720} height={540} decoding="async" />
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

// Deterministic pseudo-random sequence (mulberry32), so server and client render the same sparkles.
function seeded(seed: string) {
  let a = [...seed].reduce((h, c) => Math.imul(h ^ c.charCodeAt(0), 2654435761), 1)
  return () => {
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function Sparkles({ seed, count = 12 }: { seed: string; count?: number }) {
  const rand = seeded(seed)
  // Most sparkles go in the side margins, where cards don't cover them; a few near the heading.
  const items = Array.from({ length: count }, (_, i) => ({
    left: i % 4 === 3 ? 20 + rand() * 60 : i % 2 ? 1 + rand() * 7 : 92 + rand() * 7,
    top: i % 4 === 3 ? 2 + rand() * 8 : 4 + rand() * 92,
    size: 8 + rand() * 12,
    delay: rand() * 6,
    duration: 3 + rand() * 4,
  }))
  return (
    <div className="sparkles" aria-hidden="true">
      {items.map((s, i) => (
        <svg
          key={i}
          className="sparkle"
          viewBox="0 0 24 24"
          style={{
            left: `${s.left.toFixed(2)}%`,
            top: `${s.top.toFixed(2)}%`,
            width: `${s.size.toFixed(1)}px`,
            height: `${s.size.toFixed(1)}px`,
            animationDelay: `${s.delay.toFixed(2)}s`,
            animationDuration: `${s.duration.toFixed(2)}s`,
          }}
        >
          <path d="M12 0C12.9 7.6 16.4 11.1 24 12 16.4 12.9 12.9 16.4 12 24 11.1 16.4 7.6 12.9 0 12 7.6 11.1 11.1 7.6 12 0Z" />
        </svg>
      ))}
    </div>
  )
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <Sparkles seed={id} />
      <div className="container">
        <h2 id={`${id}-title`}>{title}</h2>
        {children}
      </div>
    </section>
  )
}

function About() {
  const { t, p } = useI18n()
  return (
    <Section id="about" title={t.about}>
      <div className="about-grid">
        <div className="prose">
          {p.summary.map((x, i) => (
            <p key={i}>{x}</p>
          ))}
          <img
            className="about-photo"
            src={common.photoEarth}
            alt={t.photoEarthAlt}
            width={1080}
            height={730}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="card">
          <h3>{t.highlights}</h3>
          <ul className="checks">
            {p.highlights.map(h => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}

function Job({ e }: { e: (ReturnType<typeof useI18n>)['p']['experience'][number] }) {
  return (
    <li className="timeline-item">
      <div className="timeline-dot" />
      <article className="timeline-body">
        <div className="timeline-head">
          <div>
            <h3>{e.role}</h3>
            <p className="company">
              {e.company}
              {e.location && <span className="muted"> · {e.location}</span>}
            </p>
          </div>
          <span className="period">{e.period}</span>
        </div>
        <ul>
          {e.bullets.map(b => (
            <li key={b}>{b}</li>
          ))}
        </ul>
        {e.tags && (
          <div className="chips">
            {e.tags.map(x => (
              <span key={x} className="chip">
                {x}
              </span>
            ))}
          </div>
        )}
      </article>
    </li>
  )
}

function ExperienceSection() {
  const { t, p } = useI18n()
  const recent = p.experience.filter(e => !e.earlier)
  const earlier = p.experience.filter(e => e.earlier)
  return (
    <Section id="experience" title={t.experience}>
      <ol className="timeline">
        {recent.map(e => (
          <Job key={e.company + e.period} e={e} />
        ))}
      </ol>
      {earlier.length > 0 && (
        <details className="earlier">
          <summary>{t.earlierCareer}</summary>
          <ol className="timeline">
            {earlier.map(e => (
              <Job key={e.company + e.period} e={e} />
            ))}
          </ol>
        </details>
      )}
    </Section>
  )
}

function Skills() {
  const { t, p } = useI18n()
  return (
    <Section id="skills" title={t.skills}>
      <div className="skills-grid">
        {p.skills.map(g => (
          <div key={g.name} className="card photo-card skill-card">
            <img
              className="photo-card-img"
              src={common.skillImages[g.image]}
              alt=""
              width={800}
              height={450}
              loading="lazy"
              decoding="async"
            />
            <h3>{g.name}</h3>
            <div className="chips">
              {g.items.map(i => (
                <span key={i} className="chip">
                  {i}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

function Education() {
  const { t, p } = useI18n()
  const [showAll, setShowAll] = useState(false)
  return (
    <Section id="education" title={t.educationTitle}>
      <div className="edu-grid">
        <div>
          <div className="card">
            <h3>{t.education}</h3>
            {p.education.map(e => (
              <div key={e.degree} className="edu-item">
                <strong>{e.degree}</strong>
                <span className="muted">
                  {e.school} · {e.period}
                </span>
              </div>
            ))}
          </div>
          <div className="card">
            <h3>{t.languages}</h3>
            {p.languages.map(l => (
              <div key={l.name} className="lang">
                <div className="lang-row">
                  <span>{l.name}</span>
                  <span className="muted">{l.level}</span>
                </div>
                <div className="meter" role="presentation">
                  <div style={{ width: `${l.score * 20}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="card">
          <h3>{t.certifications}</h3>
          {p.certifications.map(g => (
            <div key={g.name} className="cert-group">
              <h4>{g.name}</h4>
              <ul className="cert-list">
                {g.items.map((c, i) => (
                  <li key={c.title} hidden={!showAll && i >= 4}>
                    <span>{c.title}</span>
                    <span className="muted mono">
                      {c.issuer} · {c.year}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <button className="btn btn-small" onClick={() => setShowAll(s => !s)} aria-expanded={showAll}>
            {showAll ? t.showLess : t.showAll}
          </button>
        </div>
      </div>
    </Section>
  )
}

function Contact() {
  const { t } = useI18n()
  return (
    <Section id="contact" title={t.contactTitle}>
      <div className="card contact">
        <p>
          {t.contactText}
        </p>
        <div className="cta">
          <a className="btn btn-primary" href={`mailto:${common.email}`}>
            <IconMail /> {common.email}
          </a>
          <a className="btn" href={common.linkedin} target="_blank" rel="noopener me">
            <IconLinkedIn /> {common.linkedinLabel}
          </a>
          <a className="btn" href={common.github} target="_blank" rel="noopener me">
            <IconGitHub /> {common.githubLabel}
          </a>
          <CvButtons />
        </div>
      </div>
    </Section>
  )
}

function Footer() {
  const { t } = useI18n()
  return (
    <footer className="footer">
      <div className="container">
        © {new Date().getFullYear()} {common.name} · {t.builtWith}
      </div>
    </footer>
  )
}

export default function App({ lang }: { lang: Lang }) {
  return (
    <LangContext.Provider value={lang}>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <ExperienceSection />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </LangContext.Provider>
  )
}

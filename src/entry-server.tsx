import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App'
import { common } from './data/common'
import type { Lang } from './data/types'
import { strings } from './i18n'

export function render(lang: Lang) {
  return renderToString(
    <StrictMode>
      <App lang={lang} />
    </StrictMode>,
  )
}

/** Page metadata and structured data, consumed by scripts/prerender.mjs. */
export function head(lang: Lang) {
  const { p } = strings(lang)
  const url = common.siteUrl + common.paths[lang]
  const current = p.experience[0]
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    url,
    inLanguage: lang === 'pt' ? 'pt-BR' : 'en',
    mainEntity: {
      '@type': 'Person',
      name: common.name,
      jobTitle: p.headline,
      description: p.seo.description,
      url,
      image: common.siteUrl + common.photo,
      email: `mailto:${common.email}`,
      sameAs: [common.linkedin, 'https://leoneves.weebly.com/'],
      address: { '@type': 'PostalAddress', addressLocality: 'Guarulhos', addressRegion: 'SP', addressCountry: 'BR' },
      worksFor: { '@type': 'Organization', name: current.company },
      alumniOf: [
        { '@type': 'CollegeOrUniversity', name: 'UNIVESP – Universidade Virtual do Estado de São Paulo' },
        { '@type': 'EducationalOrganization', name: 'ETESP Horácio Augusto da Silveira' },
      ],
      knowsLanguage: ['pt-BR', 'en', 'es'],
      knowsAbout: p.skills.flatMap(s => s.items).slice(0, 40),
    },
  }
  return {
    lang: lang === 'pt' ? 'pt-BR' : 'en',
    title: p.seo.title,
    description: p.seo.description,
    keywords: p.seo.keywords,
    url,
    alternates: {
      'pt-BR': common.siteUrl + common.paths.pt,
      en: common.siteUrl + common.paths.en,
      'x-default': common.siteUrl + common.paths.pt,
    },
    ogLocale: lang === 'pt' ? 'pt_BR' : 'en_US',
    ogLocaleAlt: lang === 'pt' ? 'en_US' : 'pt_BR',
    ogImage: common.siteUrl + common.ogImage,
    jsonLd,
  }
}

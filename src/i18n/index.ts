import { createContext, useContext } from 'react'
import { common } from '../data/common'
import { profileEn } from '../data/profile.en'
import { profilePt } from '../data/profile.pt'
import type { Lang, ProfileContent, UiStrings } from '../data/types'

const ui: Record<Lang, UiStrings> = {
  en: {
    nav: { about: 'About', experience: 'Experience', skills: 'Skills', education: 'Education', contact: 'Contact' },
    hello: "Hi, I'm",
    heroLine: 'I build software that runs businesses.',
    skipToContent: 'Skip to content',
    photoAlt: 'Portrait of Leonardo Neves',
    photoEarthAlt: 'Leonardo Neves smiling, with the Earth seen from the Moon in the background',
    earlierCareer: 'Earlier career — industrial engineering & optical media (1995–2010)',
    langNames: { pt: 'Português', en: 'English' },
    getInTouch: 'Get in touch',
    myLinkedIn: 'My LinkedIn',
    myGitHub: 'My GitHub',
    downloadCv: 'Download CV',
    cvEn: 'CV · English',
    cvPt: 'CV · Portuguese',
    about: 'About',
    highlights: 'Career highlights',
    experience: 'Experience',
    skills: 'Tech stack',
    education: 'Education',
    educationTitle: 'Education & certifications',
    languages: 'Languages',
    certifications: 'Certifications',
    showAll: 'Show all certifications',
    showLess: 'Show less',
    contactTitle: "Let's talk",
    contactText: 'The best way to reach me is by email or LinkedIn.',
    toggleTheme: 'Toggle color theme',
    menu: 'Menu',
    builtWith: 'Built with React',
  },
  pt: {
    nav: { about: 'Sobre', experience: 'Experiência', skills: 'Tecnologias', education: 'Formação', contact: 'Contato' },
    hello: 'Olá, eu sou',
    heroLine: 'Construo software que move negócios.',
    skipToContent: 'Pular para o conteúdo',
    photoAlt: 'Foto de Leonardo Neves',
    photoEarthAlt: 'Leonardo Neves sorrindo, com a Terra vista da Lua ao fundo',
    earlierCareer: 'Início de carreira — engenharia industrial e mídia óptica (1995–2010)',
    langNames: { pt: 'Português', en: 'English' },
    getInTouch: 'Fale comigo',
    myLinkedIn: 'Meu LinkedIn',
    myGitHub: 'Meu GitHub',
    downloadCv: 'Baixar CV',
    cvEn: 'CV · Inglês',
    cvPt: 'CV · Português',
    about: 'Sobre',
    highlights: 'Destaques de carreira',
    experience: 'Experiência',
    skills: 'Stack tecnológico',
    education: 'Formação',
    educationTitle: 'Formação & certificações',
    languages: 'Idiomas',
    certifications: 'Certificações',
    showAll: 'Ver todas as certificações',
    showLess: 'Ver menos',
    contactTitle: 'Vamos conversar',
    contactText: 'A melhor forma de falar comigo é por e-mail ou LinkedIn.',
    toggleTheme: 'Alternar tema claro/escuro',
    menu: 'Menu',
    builtWith: 'Feito com React',
  },
}

const content: Record<Lang, ProfileContent> = { en: profileEn, pt: profilePt }

export function strings(lang: Lang) {
  return { t: ui[lang], p: content[lang] }
}

export function langFromPath(pathname: string): Lang {
  return pathname.startsWith(common.paths.en) ? 'en' : 'pt'
}

export const LangContext = createContext<Lang>('pt')

export function useI18n() {
  const lang = useContext(LangContext)
  return { lang, ...strings(lang) }
}

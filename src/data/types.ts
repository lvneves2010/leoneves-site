export type Lang = 'en' | 'pt'

export interface Experience {
  role: string
  company: string
  location?: string
  period: string
  bullets: string[]
  tags?: string[]
  /** Shown collapsed under "Earlier career". */
  earlier?: boolean
}

export interface SkillGroup {
  name: string
  items: string[]
}

export interface CertGroup {
  name: string
  items: { title: string; issuer: string; year: string }[]
}

/** Content that changes with the selected language. */
export interface ProfileContent {
  seo: { title: string; description: string; keywords: string }
  headline: string
  tagline: string[]
  location: string
  summary: string[]
  stats: { value: string; label: string }[]
  highlights: string[]
  experience: Experience[]
  skills: SkillGroup[]
  languages: { name: string; level: string; score: number }[]
  education: { degree: string; school: string; period: string }[]
  certifications: CertGroup[]
}

/** Interface labels. */
export interface UiStrings {
  nav: { about: string; experience: string; skills: string; education: string; contact: string }
  hello: string
  heroLine: string
  skipToContent: string
  photoAlt: string
  photoEarthAlt: string
  earlierCareer: string
  langNames: Record<Lang, string>
  getInTouch: string
  downloadCv: string
  cvEn: string
  cvPt: string
  about: string
  highlights: string
  experience: string
  skills: string
  education: string
  educationTitle: string
  languages: string
  certifications: string
  showAll: string
  showLess: string
  contactTitle: string
  contactText: string
  toggleTheme: string
  menu: string
  builtWith: string
}

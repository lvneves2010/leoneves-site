// Inline SVG flags: emoji flags don't render on Windows.

export function FlagBR() {
  return (
    <svg className="flag" viewBox="0 0 28 20" aria-hidden="true">
      <rect width="28" height="20" fill="#009c3b" />
      <path d="M14 2.2 25.6 10 14 17.8 2.4 10z" fill="#ffdf00" />
      <circle cx="14" cy="10" r="4.6" fill="#002776" />
      <path d="M9.6 9.1a9 9 0 0 1 8.8 2.3" stroke="#fff" strokeWidth="0.9" fill="none" />
    </svg>
  )
}

export function FlagUK() {
  return (
    <svg className="flag" viewBox="0 0 60 30" aria-hidden="true" preserveAspectRatio="none">
      <clipPath id="uk-s">
        <path d="M0,0 v30 h60 v-30 z" />
      </clipPath>
      <clipPath id="uk-t">
        <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
      </clipPath>
      <g clipPath="url(#uk-s)">
        <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
        <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#uk-t)" stroke="#C8102E" strokeWidth="4" />
        <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
      </g>
    </svg>
  )
}

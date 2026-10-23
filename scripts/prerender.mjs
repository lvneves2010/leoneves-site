// Renders each language to static HTML (dist/index.html, dist/en/index.html)
// so search engines and link previews get the full content without running JS.
import { mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

const dist = resolve('dist')
const ssr = await import(pathToFileURL(resolve('dist-ssr/entry-server.js')).href)
const template = readFileSync(resolve(dist, 'index.html'), 'utf8')

// Preload the Latin subset of Inter (the font of almost all text) so it arrives with the CSS
// instead of after it, avoiding a late font swap.
const interLatin = readdirSync(resolve(dist, 'assets')).find(f => /^inter-latin-wght-normal-.*\.woff2$/.test(f))
if (!interLatin) throw new Error('Inter latin font not found in dist/assets')

const esc = s => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

const outputs = { pt: 'index.html', en: 'en/index.html' }

for (const [lang, file] of Object.entries(outputs)) {
  const h = ssr.head(lang)
  const tags = [
    `<link rel="preload" href="/assets/${interLatin}" as="font" type="font/woff2" crossorigin />`,
    `<title>${esc(h.title)}</title>`,
    `<meta name="description" content="${esc(h.description)}" />`,
    `<meta name="keywords" content="${esc(h.keywords)}" />`,
    `<meta name="robots" content="index, follow, max-image-preview:large" />`,
    `<link rel="canonical" href="${h.url}" />`,
    ...Object.entries(h.alternates).map(([hl, href]) => `<link rel="alternate" hreflang="${hl}" href="${href}" />`),
    `<meta property="og:type" content="profile" />`,
    `<meta property="og:site_name" content="Leonardo Neves" />`,
    `<meta property="og:title" content="${esc(h.title)}" />`,
    `<meta property="og:description" content="${esc(h.description)}" />`,
    `<meta property="og:url" content="${h.url}" />`,
    `<meta property="og:image" content="${h.ogImage}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:locale" content="${h.ogLocale}" />`,
    `<meta property="og:locale:alternate" content="${h.ogLocaleAlt}" />`,
    `<meta property="profile:first_name" content="Leonardo" />`,
    `<meta property="profile:last_name" content="Neves" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(h.title)}" />`,
    `<meta name="twitter:description" content="${esc(h.description)}" />`,
    `<meta name="twitter:image" content="${h.ogImage}" />`,
    `<script type="application/ld+json">${JSON.stringify(h.jsonLd).replace(/</g, '\\u003c')}</script>`,
  ].join('\n    ')

  const html = template
    .replace('<html lang="pt-BR">', `<html lang="${h.lang}">`)
    .replace('<!--head-->', tags)
    .replace('<!--app-->', ssr.render(lang))

  const out = resolve(dist, file)
  mkdirSync(dirname(out), { recursive: true })
  writeFileSync(out, html)
  console.log(`prerendered ${lang} -> dist/${file}`)
}

rmSync(resolve('dist-ssr'), { recursive: true, force: true })

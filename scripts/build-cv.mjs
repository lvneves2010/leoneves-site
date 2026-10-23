// Renders cv-src/cv-pt.html to public/cv/leonardo-neves-cv-pt.pdf using headless Edge/Chrome.
import { execFileSync } from 'node:child_process'
import { existsSync, mkdtempSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

const candidates = [
  process.env.BROWSER_PATH,
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  '/usr/bin/google-chrome',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
].filter(Boolean)

const browser = candidates.find(p => existsSync(p))
if (!browser) {
  console.error('Edge/Chrome not found. Set BROWSER_PATH.')
  process.exit(1)
}

const src = pathToFileURL(resolve('cv-src/cv-pt.html')).href
const out = resolve('public/cv/leonardo-neves-cv-pt.pdf')
const profile = mkdtempSync(join(tmpdir(), 'cv-'))

execFileSync(browser, [
  '--headless=new',
  '--disable-gpu',
  '--no-pdf-header-footer',
  `--user-data-dir=${profile}`,
  `--print-to-pdf=${out}`,
  src,
], { stdio: 'inherit' })

console.log(`CV written to ${out}`)

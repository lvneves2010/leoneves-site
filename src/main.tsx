import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { langFromPath } from './i18n'

const root = document.getElementById('root')!
const app = (
  <StrictMode>
    <App lang={langFromPath(window.location.pathname)} />
  </StrictMode>
)

// Production pages are prerendered (scripts/prerender.mjs); dev starts empty.
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)

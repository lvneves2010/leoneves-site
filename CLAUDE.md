# CLAUDE.md

Site pessoal de Leonardo Neves: portfólio bilíngue (PT/EN) em Vite + React 19 + TypeScript, pré-renderizado em HTML estático e publicado no Firebase Hosting.

- Produção: https://leoneves-eng-de-software.web.app (PT em `/`, EN em `/en/`)
- Repositório: https://github.com/lvneves2010/leoneves-site
- Firebase: projeto `leoneves-eng-de-software`, plano Spark (gratuito)

## Comandos

```bash
npm run dev       # dev server (http://localhost:5173) — renderiza só no cliente, sem pré-render
npm run build     # tsc + build do cliente + build SSR + scripts/prerender.mjs → dist/
npm run preview   # serve dist/ (abra / e /en/)
npm run lint      # ESLint
npm run cv        # regenera public/cv/leonardo-neves-cv-pt.pdf a partir de cv-src/cv-pt.html (Edge/Chrome headless)
npm run deploy    # build + firebase deploy --only hosting
```

Antes de publicar: `npm run build` e `npx eslint .` sem erros.

## Onde fica cada coisa

| Arquivo | Conteúdo |
| --- | --- |
| `src/data/profile.pt.ts` / `profile.en.ts` | **Todo o conteúdo** do site (resumo, experiência, skills, certificações, SEO) |
| `src/data/types.ts` | Tipos `ProfileContent` (conteúdo) e `UiStrings` (textos da interface) |
| `src/data/common.ts` | Dados sem idioma: nome, `siteUrl`, e-mail, LinkedIn, caminhos de fotos/CVs, rotas por idioma |
| `src/i18n/index.ts` | Textos da interface (menu, botões) nos dois idiomas; `langFromPath()` |
| `src/App.tsx` | Todos os componentes da página |
| `src/Flags.tsx` | Bandeiras em SVG inline (emojis de bandeira não aparecem no Windows) |
| `src/Icons.tsx` | Ícones em SVG inline (e-mail, download, LinkedIn, GitHub) |
| `src/entry-server.tsx` | `render(lang)` e `head(lang)`: metatags, hreflang e JSON-LD (`ProfilePage`/`Person`) |
| `scripts/prerender.mjs` | Gera `dist/index.html` (PT) e `dist/en/index.html` (EN) |
| `index.html` | Template: `<!--head-->` e `<!--app-->` são substituídos no pré-render; script inline aplica o tema antes do primeiro paint |
| `public/` | CVs (`cv/`), fotos (`img/`), `robots.txt`, `sitemap.xml`, `404.html`, `favicon.svg` |
| `cv-src/cv-pt.html` | Fonte do CV em português (A4, 2 páginas) |
| `firebase.json` | Hosting: `cleanUrls`, `trailingSlash`, cache de assets, sem rewrite para SPA (404 real) |

## Regras de manutenção

- **Os dois idiomas andam juntos.** Toda mudança em `profile.pt.ts` precisa da equivalente em `profile.en.ts` (mesma ordem de itens). O mesmo vale para `UiStrings` em `src/i18n/index.ts`; o TypeScript acusa chave faltando.
- **Experiência:** a primeira entrada de `experience` é o emprego atual. O JSON-LD usa essa entrada como `worksFor`. Entradas com `earlier: true` ficam no bloco recolhível "Início de carreira".
- **Código precisa rodar no servidor (SSR).** Nada de `window`, `document` ou `localStorage` durante o render; use `useEffect`. O tema é aplicado pelo script inline de `index.html` e o React só assume depois da hidratação (`useTheme`). O idioma vem da URL, não do `localStorage`.
- **Mudou o domínio?** Atualize `siteUrl` em `src/data/common.ts`, `public/robots.txt` e `public/sitemap.xml` (as URLs do sitemap são fixas).
- **Mudou o conteúdo?** Atualize `<lastmod>` em `public/sitemap.xml`.
- **Novo idioma ou rota:** adicione em `common.paths`, em `outputs` de `scripts/prerender.mjs`, em `alternates` de `entry-server.tsx` e no sitemap.
- Comentários de código em inglês; conteúdo e documentação em português.

## CVs

- **Inglês** (`public/cv/leonardo-neves-cv-en.pdf`): é o PDF original do Leonardo, feito no Word (fonte em `Documents\pessoal\*.docx`, fora do repo). Para atualizar, substitua o arquivo.
- **Português** (`public/cv/leonardo-neves-cv-pt.pdf`): edite `cv-src/cv-pt.html` e rode `npm run cv`. Confira se continua com 2 páginas e sem corte no fim da coluna de certificações (a página tem `overflow: hidden`).
- Mantenha o conteúdo dos CVs coerente com `profile.*.ts`.

## Imagens

- Fotos em WebP em `public/img/`, com `width`/`height` explícitos no `<img>`.
- Versões menores para celular ficam ao lado da original como `<nome>-<largura>.webp` (ex.: `leonardo-neves-220.webp`) e entram pelo `srcSet()` de `App.tsx`, com `sizes` igual à largura exibida. Se trocar uma foto que tem variantes, gere as variantes de novo.
- Fontes (Inter e JetBrains Mono) são hospedadas no próprio site via `@fontsource` (importadas em `src/main.tsx`), sem Google Fonts. `scripts/prerender.mjs` adiciona um `preload` do arquivo latino da Inter.
- O brilho do hero (`.hero-bg`) tem altura e posição em pixels de propósito: em % ele "pulava" quando a fonte carregava (CLS).
- `leonardo-neves.webp`: retrato com fundo transparente (o original do Weebly tinha fundo branco, removido para funcionar no tema escuro).
- `og-image.jpg` (1200×630): prévia em LinkedIn/WhatsApp. Se mudar nome ou cargo, gere de novo.
- Fotos de fundo dos cards: `public/img/stats/` (números do topo, 720×540) e `public/img/skills/` (stack tecnológico, 800×450). A chave de cada foto é `icon` em `stats` e `image` em `skills` (`profile.*.ts`); os caminhos ficam em `common.statImages` / `common.skillImages`. O estilo é `.photo-card` em `index.css`.
- Essas fotos vêm do Wikimedia Commons e são **só CC0 ou domínio público** (sem exigência de crédito). Ao trocar uma, mantenha essa regra e atualize o `CREDITS.md` da pasta.
- O fundo das seções (brilhos, pontos e sparkles) é só CSS/SVG: `.section::before/::after` e o componente `Sparkles` em `App.tsx`. A posição dos sparkles vem de um gerador fixo por seção (mesmo resultado no SSR e no cliente).
- **Não use** os fundos de "fumaça azul" do tema Weebly (licenciados só para a Weebly) nem a imagem "DevOps Automation" (educba.com). O brilho azul do hero é CSS (`.hero-bg`).

## Decisões do dono do site

- **Telefone:** não aparece na página; só nos PDFs.
- **Disponibilidade** ("remoto, híbrido ou realocação"): retirada do site a pedido do Leonardo. Não reintroduzir. Ela ainda aparece nos PDFs.
- **E-mail público:** `lvneves2010@gmail.com` (o do CV). O LinkedIn usa outro e-mail; não use esse.
- **LinkedIn** bloqueia acesso automatizado (HTTP 999). Para dados novos, peça ao Leonardo o PDF exportado do perfil ("Mais → Salvar como PDF").

## Git e deploy

- O git **global** desta máquina usa o e-mail da Jadlog. Este repo tem `user.email = lvneves2010@gmail.com` na config local; confira com `git config user.email` antes de commitar.
- Deploy: `npm run deploy` (o Firebase CLI é devDependency; login com `npx firebase login`). Depois de publicar, confira https://leoneves-eng-de-software.web.app e `/en/`.

## Verificação visual

- `npm run build && npm run preview` e abra `/` e `/en/`.
- Screenshots com Edge headless: a largura mínima real é cerca de 496px. Para testar celular (375px), sirva uma página com `<iframe style="width:375px" src="/en/">` pelo próprio servidor de preview (`file://` não carrega o iframe).

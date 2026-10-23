# leoneves-site

Página pessoal de Leonardo Neves — React + TypeScript + Vite, bilíngue (PT/EN), responsiva, com download do CV em PDF nos dois idiomas.

## Onde editar

| O quê | Arquivo |
| --- | --- |
| Conteúdo em inglês | [`src/data/profile.en.ts`](src/data/profile.en.ts) |
| Conteúdo em português | [`src/data/profile.pt.ts`](src/data/profile.pt.ts) |
| Nome, e-mail, LinkedIn, caminhos dos CVs | [`src/data/common.ts`](src/data/common.ts) |
| Textos da interface (menu, botões) | [`src/i18n/index.ts`](src/i18n/index.ts) |
| CV em inglês (PDF) | `public/cv/leonardo-neves-cv-en.pdf` — substitua pelo novo arquivo |
| CV em português (fonte HTML) | [`cv-src/cv-pt.html`](cv-src/cv-pt.html) → `npm run cv` gera `public/cv/leonardo-neves-cv-pt.pdf` |

| Fotos | `public/img/` (WebP) · imagem de compartilhamento: `public/img/og-image.jpg` (1200×630) |
| SEO (título/descrição por idioma) | campo `seo` em `profile.*.ts` · `public/sitemap.xml` · `public/robots.txt` |

Idiomas por URL: português em `/`, inglês em `/en/`. O `npm run build` pré-renderiza as duas páginas em HTML estático (`scripts/prerender.mjs`) com title, description, canonical, hreflang, Open Graph e JSON-LD — o Google indexa o conteúdo completo sem depender de JavaScript.

Ao mudar o conteúdo, atualize o `<lastmod>` em `public/sitemap.xml`.

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera dist/
npm run cv       # regenera o PDF do CV em português (usa Edge/Chrome headless)
```

## Deploy no Firebase Hosting (grátis, plano Spark)

O projeto já está configurado para o ID `leoneves-eng-de-software` (`.firebaserc`), o que dá a URL
**https://leoneves-eng-de-software.web.app**. O Firebase CLI já está nas devDependencies.

Primeira vez:

```bash
npx firebase login
npx firebase projects:create leoneves-eng-de-software --display-name "Leo Neves"
npm run deploy
```

Próximas atualizações: só `npm run deploy`.

Se o ID estiver ocupado, escolha outro (ex.: `leoneves-eng-software`), troque em `.firebaserc` e repita o `projects:create`.

Domínio próprio (opcional): Firebase Console → Hosting → *Add custom domain*. Se mudar o domínio, troque `siteUrl` em `src/data/common.ts`, `public/robots.txt` e `public/sitemap.xml`.

## Depois do primeiro deploy

1. Google Search Console (https://search.google.com/search-console) → adicionar propriedade "Prefixo do URL" com a URL do site → verificar (método "Tag HTML": cole a meta tag em `index.html`, faça deploy, clique em Verificar).
2. Em "Sitemaps", envie `sitemap.xml`.
3. Coloque o link do site no LinkedIn (Informações de contato → Site) e no Weebly.

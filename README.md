# Riverview High The Musical

Source for [www.riverviewhighthemusical.com](https://www.riverviewhighthemusical.com), built with [Astro](https://astro.build).

## Develop

Requires Node 22.12+.

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
npm run preview   # serve the built site
npm run check     # type-check
```

## Where things live

- `src/pages/` – one file per page
- `src/content/albums/`, `src/content/scores/` – products on the Soundtrack and Sheet Music pages; add a Markdown file here to list a new one
- `src/assets/img/` – images, optimized to WebP at build time
- `src/styles/global.css` – all styles
- `src/consts.ts` – site title, contact email, YouTube link

## Deploy

Pushing to `master` runs `.github/workflows/deploy.yml`, which builds the site and deploys it
to GitHub Pages (Settings → Pages → Source: GitHub Actions). To roll back, revert the commit on
`master`, or re-run an earlier deploy from the Actions tab.

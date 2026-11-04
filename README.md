# Mitchell Gray, Senior Software Engineer | AI/ML Engineer

**Python · JavaScript · React · LLMs · AI agents · RAG · ML pipelines**

A personal site for a software and AI/ML engineer: one long scroll story on a dark page grid, with Antonio for display, Inter for reading, and emerald as the only accent.

Nine years building software: web applications and REST APIs at Architech and Tech Mahindra, backend services and then AI/ML at BenchSci, and LLM applications, multi-agent workflows, and ML pipelines at Waabi. Now an independent consultant in Woodstock, Ontario, building custom software and AI agents for businesses.

## Make it yours

Everything personal lives in a few files:

| What                              | Where                                                                                   |
| --------------------------------- | --------------------------------------------------------------------------------------- |
| Name, email, city, intro, links   | `src/data/profile.ts` (`GITHUB_USER`, `links.linkedin`, `SITE_URL`)                     |
| Roles and achievements            | `src/data/experience.ts`                                                                |
| Work case studies                 | `src/data/projects.ts` (cards are grouped in `src/components/WorkSection.tsx`)          |
| Articles (optional)               | `src/data/writing.ts`                                                                   |
| Splash-screen words               | `src/data/loader.ts`                                                                    |
| Résumé download                   | put your PDF at `public/mitchell-gray-resume.pdf`                                       |
| Hero image (particle effect)      | `public/images/avatar-cutout.webp`, 1672×941, transparent background                    |
| Small portrait and "belief" image | `public/images/portrait.{webp,jpg}` (593×640), `portrait-belief.{webp,jpg}` (1024×1536) |
| Social card and icons             | `public/og-image.jpg`, `public/pwa-*.png`, `public/apple-touch-icon.png`, favicon       |

Setting `GITHUB_USER` turns on the "Experiments" list of public repos, the "Latest on GitHub" card, the GitHub links, and the build-time repo snapshot. Left empty, those parts stay hidden.

The images that ship with the site are generated artwork (a 3D neural-network globe and an "MG" monogram). To use a photo in the hero, cut yourself out onto a transparent background: every opaque pixel becomes a particle when you scroll.

## What's on the site

- **Splash screen:** a word flip that ends on the name, shown on every visit and device.
- **Hero:** "Hey, I'm Mitchell." beside the hero image, which comes apart into a WebGL particle twin as you scroll.
- **What I believe:** a pinned statement with the numbers behind it: years building software, years in AI/ML, the modalities in production, and the teams worked with.
- **Who I am:** a statement that fills in as you read it, then a bento with a live years-of-experience counter.
- **Work:** twelve projects on five cards: client work, roles at Waabi and BenchSci, earlier web work, and open-source tools, each with its approach and stack.
- **What I build:** five services, each with its stack and where it shipped.
- **How I think:** three principles coming down a grid corridor.
- **Experience:** "Shipping since 2017", then a camera pull-back from one LLM agent to the agents and models around it, the workflows they run, the production system, and the employers from 2017 to today. Each role then pins while its achievements light up in turn.
- **Contact:** a small card on a pale grid grows until it fills the screen.
- **Desktop extras:** a custom cursor, `⌘K` / `Ctrl+K` for a quick menu, and `` ` `` for an interactive terminal.

Phones get native scrolling and lighter effects, and reduced motion gets a static page with the same content.

## Tech stack

| Layer     | Choice                                                                   |
| --------- | ------------------------------------------------------------------------ |
| Framework | React 18 + TypeScript (strict), Vite 8                                   |
| Styling   | Tailwind CSS 3                                                           |
| Animation | Framer Motion, Lenis smooth scroll (desktop), raw WebGL and Canvas 2D    |
| Routing   | React Router 7 (hash routing for GitHub Pages)                           |
| Data      | GitHub REST API, cached in localStorage, with a build-time snapshot      |
| Quality   | Vitest, Playwright smoke tests, ESLint, Prettier, Husky with lint-staged |
| PWA       | vite-plugin-pwa (auto-updating service worker)                           |

## Run it

Requires Node 20.19+ or 22.12+ (`.nvmrc` pins 22).

```bash
npm install
npm run dev          # http://localhost:8080
```

```bash
npm run build        # snapshot GitHub repos (if GITHUB_USER is set), then build to dist/
npm run preview      # serve the build at http://localhost:4173/
npm run test:run     # vitest, once
npm run test:e2e     # Playwright smoke tests against the production build (run `npm run build` first)
npm run lint         # eslint
npm run type-check   # tsc for app and config
```

## Deploy

Live at **[devsmilegod.github.io](https://devsmilegod.github.io/)**, served by GitHub Pages from the `gh-pages` branch of the `DevsmileGod.github.io` repository.

```bash
npm run deploy       # build, then publish dist/ to the gh-pages branch
```

`ci/github-actions-deploy.yml` is a full CI pipeline (format, lint, types, tests, build, Playwright smoke tests, deploy) that also refreshes the GitHub repo snapshot weekly. To switch to it, move it to `.github/workflows/deploy.yml` (pushing workflow files needs a token with the `workflow` scope, or add it through the GitHub web editor), then set Settings → Pages → Source to "GitHub Actions".

### Custom domain

1. In Namecheap's **Advanced DNS** for the domain, delete the parking records, then add four `A` records for host `@` (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`) and a `CNAME` for host `www` pointing to `devsmilegod.github.io.`
2. Set `CUSTOM_DOMAIN` in `src/data/profile.ts` (e.g. `"mitchellgray.dev"`), then commit, `git push`, and `npm run deploy`. The build writes the `CNAME` file and serves the site from the domain's root.
3. On GitHub: repo **Settings → Pages → Custom domain**, enter the domain, **Save**, and tick **Enforce HTTPS** once it becomes available.

## Credits

The site's design and code are adapted from an MIT-licensed portfolio template; see [`LICENSE`](LICENSE).

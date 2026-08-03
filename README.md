# Portfolio Website

Personal portfolio site — originally designed in Figma, now a React + Vite project so it can be updated in code.

**Live site:** enabled via GitHub Pages once this repo is pushed (Settings → Pages → Source: GitHub Actions).

## Running locally

```bash
npm install     # first time only
npm run dev     # start dev server, usually http://localhost:5173
```

Other commands:

```bash
npm run build     # production build into dist/
npm run preview   # preview the production build locally
```

## Where things live

| Path | What's in it |
|------|--------------|
| `src/app/routes.ts` | The three pages and their URLs |
| `src/app/components/HomePage.tsx` | Home page |
| `src/app/components/GalleryPage.tsx` | Gallery page |
| `src/app/components/ResumePage.tsx` | Resume page |
| `src/app/components/Navbar.tsx` | Top navigation |
| `src/app/components/Layout.tsx` | Shared page shell |
| `src/app/components/ui/` | Reusable shadcn/ui building blocks (buttons, cards, etc.) |
| `src/assets/` | Images |
| `src/styles/` | Global styles, theme colors, fonts |
| `guidelines/Guidelines.md` | Design guidelines carried over from Figma |

## Making changes

Edit any file under `src/`, then commit and push to `main`. The GitHub Actions workflow in
`.github/workflows/deploy.yml` rebuilds and redeploys the site automatically — usually live in a
couple of minutes. Check progress under the repo's **Actions** tab.

## Tech stack

React 18 · TypeScript · Vite · Tailwind CSS v4 · React Router · shadcn/ui · Motion

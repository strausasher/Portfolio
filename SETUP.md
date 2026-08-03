# Putting your portfolio on GitHub

Your Figma export is already a working React + Vite project. These files fix the few things
that stop it building outside Figma, and add automatic deployment.

## Step 1 — Unzip your Figma export

Unzip `Revise Portfolio Website Design.zip` somewhere permanent, e.g. `Documents\portfolio-website`.

## Step 2 — Copy these files in

Copy everything in this folder **into that unzipped folder**, keeping the folder structure and
overwriting when asked. You should end up with:

```
portfolio-website/
├─ .github/workflows/deploy.yml   (new)
├─ .gitignore                     (new)
├─ README.md                      (new)
├─ package.json                   (replaced)
├─ vite.config.ts                 (replaced)
└─ src/app/
   ├─ routes.ts                   (replaced)
   └─ components/Gallery.tsx      (replaced)
```

## Step 3 — Check it runs

In a terminal, from inside that folder:

```bash
npm install
npm run dev
```

Open the URL it prints (usually http://localhost:5173). All three pages should work.

## Step 4 — Create the GitHub repo

1. Go to https://github.com/new
2. Name it `portfolio-website`, set it **Public**
3. Do **not** tick "Add a README" — the repo must start empty
4. Click **Create repository**

## Step 5 — Push your code

Back in the terminal, in your project folder (replace `YOUR-USERNAME`):

```bash
git init -b main
git add .
git commit -m "Portfolio site from Figma export"
git remote add origin https://github.com/YOUR-USERNAME/portfolio-website.git
git push -u origin main
```

## Step 6 — Turn on the live site

1. In your repo: **Settings → Pages**
2. Under **Source**, choose **GitHub Actions**

That's it. The included workflow builds and publishes the site on every push to `main`.
Watch progress in the **Actions** tab. Your site will be at:

```
https://YOUR-USERNAME.github.io/portfolio-website/
```

## Updating the site from now on

Edit files under `src/`, then:

```bash
git add .
git commit -m "describe your change"
git push
```

The site rebuilds itself within a couple of minutes.

---

## What changed, and why

| Change | Reason |
|---|---|
| `react` + `react-dom` moved into `dependencies` | They were listed as *optional* peer dependencies, so `npm install` skipped them and the build failed outside Figma. |
| `base` added to `vite.config.ts` | GitHub Pages serves project sites from a subfolder; without this, CSS and images 404. |
| `basename` added to `routes.ts` | Same reason, for page links. Works locally and on Pages. |
| `deploy.yml` workflow added | Builds and deploys automatically on push, and copies `index.html` to `404.html` so `/gallery` and `/resume` work on refresh. |
| `.gitignore` added | Keeps `node_modules/` and `dist/` out of the repo. |
| 4 gallery images commented out in `Gallery.tsx` | See below. |

## Two things worth knowing

**1. Four gallery images are missing from the Figma export.** These were referenced by the code
but no image file was included in the zip:

```
dd613cd0b0f374337ee6efe762febd776e0f5a7c.png   (artCampus, Art)
f7db2bcaee0e512d859c06f9a22ecad88ad98ca1.png   (artPainting, Art)
fc304488c3a7f9212c50b49522c344c0400143ed.png   (artFormulaCar, Engineering)
efd9bd591f8ea54056bae4b29bb76fbcabeabb56.png   (processWhiteboard, Engineering)
```

They're commented out in `Gallery.tsx` with `TODO(missing-asset)` markers so the site builds.
To restore one: export it from Figma, save it into `src/assets/` under the exact filename above,
then uncomment the two matching lines.

**2. Your images are very large.** They total 89MB, with single files at 12MB and 11MB. The site
will work, but the gallery will be slow to load for visitors and GitHub will warn about large
files. Re-encoding them losslessly does not help — Figma's PNGs are already well compressed.
Converting to WebP at high quality would cut this by roughly 90% with no visible difference on
screen. Worth doing later if load time bothers you.

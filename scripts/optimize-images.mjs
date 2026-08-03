// Resize + re-encode raster images to WebP in place, then delete the originals.
//
//   node scripts/optimize-images.mjs
//
// Covers both image trees: src/assets (Figma exports, imported via figma:asset/)
// and src/imports (project photo sets, imported by relative path).
//
// Safe to re-run: anything already stored as .webp is left alone. Drop new photos
// in as .png/.jpg, run this, fix up the import paths, then run
// gen-image-dimensions.mjs.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIRS = ['src/assets', 'src/imports'];
const MAX = 2000;      // longest edge, px — plenty for full-screen lightbox viewing
const QUALITY = 82;

const signature = buf => {
  if (buf.slice(1, 4).toString() === 'PNG') return 'png';
  if (buf[0] === 0xff && buf[1] === 0xd8) return 'jpeg';
  if (buf.slice(0, 3).toString() === 'GIF') return 'gif';
  return 'other';
};

function* walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else if (entry.isFile()) yield full;
  }
}

const mb = n => (n / 1048576).toFixed(2) + 'MB';
let before = 0;
let after = 0;
let count = 0;

for (const dir of DIRS) {
  const abs = path.join(ROOT, dir);
  if (!fs.existsSync(abs)) continue;

  for (const full of walk(abs)) {
    const buf = fs.readFileSync(full);
    const kind = signature(buf);
    if (kind === 'other') continue;                       // e.g. the résumé PDF

    // A multi-frame GIF would lose its animation, so skip those.
    if (kind === 'gif') {
      const { pages = 1 } = await sharp(buf).metadata();
      if (pages > 1) {
        console.log(`skip (animated gif) ${path.relative(ROOT, full)}`);
        continue;
      }
    }

    const out = full.replace(/\.[^.]+$/, '.webp');
    await sharp(buf)
      .rotate()  // bake in EXIF orientation, which WebP output would otherwise drop
      .resize({ width: MAX, height: MAX, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(out);

    fs.unlinkSync(full);
    const outSize = fs.statSync(out).size;
    before += buf.length;
    after += outSize;
    count++;
    console.log(`${path.relative(ROOT, full)}  ${mb(buf.length)} -> ${mb(outSize)}`);
  }
}

if (count === 0) {
  console.log('Nothing to convert — all images are already optimized.');
} else {
  console.log(`\n${count} files: ${mb(before)} -> ${mb(after)} (${(100 * (1 - after / before)).toFixed(1)}% smaller)`);
  console.log('Now update any .png/.jpg import paths, then run: node scripts/gen-image-dimensions.mjs');
}

import fs from "fs";
import path from "path";

const ROOT = "public/images/itineraries";
const OUT = "src/generated/itinerary-manifest.json";
const EXCLUDED_SLUGS = new Set(["8-day-pyramids-nile-cruise"]);

const data = {};

for (const slug of fs.readdirSync(ROOT)) {
  const dir = path.join(ROOT, slug);
  if (!fs.statSync(dir).isDirectory()) continue;
  if (EXCLUDED_SLUGS.has(slug)) continue;

  const files = fs
    .readdirSync(dir)
    .filter((file) => /^day-\d+\.(jpg|jpeg|webp|png)$/i.test(file))
    .sort((a, b) => {
      const na = Number(a.match(/\d+/)[0]);
      const nb = Number(b.match(/\d+/)[0]);
      return na - nb;
    })
    .map((file) => `/images/itineraries/${slug}/${file}`);

  if (files.length) data[slug] = files;
}

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, JSON.stringify(data, null, 2));

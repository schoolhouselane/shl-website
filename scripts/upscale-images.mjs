/**
 * AI Image Upscaler + WebP Converter for SHL Website
 *
 * - Images < 300px wide  → 4× AI upscale via Real-ESRGAN → WebP
 * - Images 300–799px wide → 2× AI upscale via Real-ESRGAN → WebP
 * - Images ≥ 800px wide   → convert to WebP only (already high-res)
 *
 * Originals untouched. Output saved as .webp alongside originals.
 * Use git to roll back if needed.
 */

import Replicate from "replicate";
import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");

// Load .env.local
const envPath = path.join(ROOT, ".env.local");
if (fs.existsSync(envPath)) {
  for (const line of fs.readFileSync(envPath, "utf8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eqIdx = trimmed.indexOf("=");
    if (eqIdx > 0) {
      const key = trimmed.slice(0, eqIdx).trim();
      const val = trimmed.slice(eqIdx + 1).trim();
      process.env[key] = val;
    }
  }
}

const TOKEN = process.env.REPLICATE_API_TOKEN;
if (!TOKEN) {
  console.error("❌ Missing REPLICATE_API_TOKEN in .env.local");
  process.exit(1);
}

const replicate = new Replicate({ auth: TOKEN });

const IMAGE_DIRS = [
  path.join(ROOT, "public/images"),
  path.join(ROOT, "public/images/blog"),
  path.join(ROOT, "public/images/jobs"),
];

// Skip these — they are full-page design mockups or UI screenshots, not photos
const SKIP_FILES = new Set([
  "footer-preview.png",
  "hero-1.png", "hero-2.png", "hero-3.png",
  "gallery-hero.png",
  "work-hero.png", "work-hero-fashion.png", "work-hero-fashion.jpg",
  "services-hero.png",
  "about-hero.png",
  "cs-shelby-hero.png",
]);

function getScale(width) {
  if (width < 300) return 4;
  if (width < 800) return 2;
  return null; // large enough — just convert to WebP
}

async function upscale(inputPath, scale) {
  const buffer = fs.readFileSync(inputPath);
  const ext = path.extname(inputPath).slice(1).toLowerCase();
  const mime = ["jpg", "jpeg"].includes(ext) ? "image/jpeg" : "image/png";
  const b64 = `data:${mime};base64,${buffer.toString("base64")}`;

  const output = await replicate.run(
    "nightmareai/real-esrgan:b3ef194191d13140337468c916c2c5b96dd0cb06dffc032a022a31807f6a5ea8",
    { input: { image: b64, scale, face_enhance: false } }
  );

  const url = typeof output === "string" ? output : String(output);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Fetch failed: ${res.statusText}`);
  return Buffer.from(await res.arrayBuffer());
}

async function processFile(inputPath) {
  const filename = path.basename(inputPath);
  const dir = path.dirname(inputPath);
  const stem = path.parse(filename).name;
  const outPath = path.join(dir, `${stem}.webp`);

  if (fs.existsSync(outPath)) {
    console.log(`  ⏭️  Already done: ${stem}.webp`);
    return;
  }

  if (SKIP_FILES.has(filename)) {
    console.log(`  ⏭️  Skip mockup: ${filename}`);
    return;
  }

  const meta = await sharp(inputPath).metadata();
  const width = meta.width;
  const scale = getScale(width);

  const label = scale ? `${scale}× AI upscale → WebP` : `WebP convert only`;
  console.log(`  📸 ${filename} (${width}×${meta.height}) → ${label}`);

  try {
    let buf;
    if (scale) {
      buf = await upscale(inputPath, scale);
      const m2 = await sharp(buf).metadata();
      console.log(`     ↳ upscaled to ${m2.width}×${m2.height}`);
    } else {
      buf = fs.readFileSync(inputPath);
    }

    await sharp(buf).webp({ quality: 85, effort: 4 }).toFile(outPath);

    const inKB = Math.round(fs.statSync(inputPath).size / 1024);
    const outKB = Math.round(fs.statSync(outPath).size / 1024);
    const saved = Math.round((1 - outKB / inKB) * 100);
    console.log(`     ✅ ${stem}.webp — ${outKB}KB (was ${inKB}KB, ${saved > 0 ? `-${saved}%` : `+${Math.abs(saved)}%`})`);
  } catch (err) {
    console.error(`     ❌ Failed: ${err.message}`);
    // Fallback: convert to WebP without upscaling
    try {
      await sharp(inputPath).webp({ quality: 85 }).toFile(outPath);
      console.log(`     ⚠️  Fallback WebP saved (no upscale)`);
    } catch (e2) {
      console.error(`     ❌ Fallback also failed: ${e2.message}`);
    }
  }
}

async function main() {
  console.log("🚀 SHL Website — AI Image Upscaler + WebP Converter\n");

  const allFiles = [];
  for (const dir of IMAGE_DIRS) {
    if (!fs.existsSync(dir)) continue;
    const files = fs.readdirSync(dir)
      .filter((f) => /\.(png|jpg|jpeg)$/i.test(f))
      .map((f) => path.join(dir, f));
    allFiles.push(...files);
  }

  console.log(`Found ${allFiles.length} images across ${IMAGE_DIRS.length} directories\n`);

  for (const file of allFiles) {
    await processFile(file);
  }

  console.log("\n✅ All done! Next step: update code references .png/.jpg → .webp");
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const iconData = [
  { name: 'Receptionist.jpg', cx: 511.5, cy: 472.5, opticalSize: 650, borderRGB: { r: 215, g: 233, b: 240 } },
  { name: 'Customer Support Call.jpg', cx: 512.5, cy: 478.5, opticalSize: 657, borderRGB: { r: 215, g: 232, b: 239 } },
  { name: 'Customer Support Widget.jpg', cx: 512, cy: 512, opticalSize: 493, borderRGB: { r: 214, g: 231, b: 238 } },
  { name: 'Spam.jpg', cx: 512.5, cy: 512.5, opticalSize: 647, borderRGB: { r: 212, g: 229, b: 236 } },
  { name: 'Lead.jpg', cx: 512, cy: 509.5, opticalSize: 574, borderRGB: { r: 213, g: 230, b: 237 } },
  { name: 'Review.jpg', cx: 513, cy: 518, opticalSize: 720, borderRGB: { r: 210, g: 228, b: 235 } },
  { name: 'Consulting.jpg', cx: 703.5, cy: 383, opticalSize: 490, borderRGB: { r: 209, g: 229, b: 240 } },
  { name: 'Full time.jpg', cx: 704, cy: 383.5, opticalSize: 593, borderRGB: { r: 216, g: 234, b: 241 } }
];

const TARGET_OPTICAL_SIZE = 580;
const OUT_W = 1200;
const OUT_H = 750;

async function processImage(item) {
  const origPath = path.join('originals', item.name);
  if (!fs.existsSync(origPath)) {
    console.error('Missing original:', origPath);
    return;
  }

  const meta = await sharp(origPath).metadata();
  const scale = TARGET_OPTICAL_SIZE / item.opticalSize;
  const cropW = Math.round(OUT_W / scale);
  const cropH = Math.round(OUT_H / scale);
  const cropLeft = Math.round(item.cx - cropW / 2);
  const cropTop = Math.round(item.cy - cropH / 2);
  const cropRight = cropLeft + cropW;
  const cropBottom = cropTop + cropH;

  // Calculate padding needed to cover the crop rectangle
  const padLeft = Math.max(0, -cropLeft);
  const padTop = Math.max(0, -cropTop);
  const padRight = Math.max(0, cropRight - meta.width);
  const padBottom = Math.max(0, cropBottom - meta.height);

  let currentBuffer = await fs.promises.readFile(origPath);

  if (padLeft > 0 || padTop > 0 || padRight > 0 || padBottom > 0) {
    currentBuffer = await sharp(currentBuffer)
      .extend({
        top: padTop,
        bottom: padBottom,
        left: padLeft,
        right: padRight,
        background: item.borderRGB
      })
      .toBuffer();
  }

  const extractLeft = cropLeft + padLeft;
  const extractTop = cropTop + padTop;

  const finalBuffer = await sharp(currentBuffer)
    .extract({
      left: Math.max(0, extractLeft),
      top: Math.max(0, extractTop),
      width: cropW,
      height: cropH
    })
    .resize(OUT_W, OUT_H, {
      kernel: sharp.kernel.lanczos3,
      fit: 'fill'
    })
    .jpeg({ quality: 95 })
    .toBuffer();

  // Write to public/
  fs.writeFileSync(path.join('public', item.name), finalBuffer);
  // Write to root
  fs.writeFileSync(path.join('.', item.name), finalBuffer);
  // Write to dist/ if dist exists
  if (fs.existsSync('dist')) {
    fs.writeFileSync(path.join('dist', item.name), finalBuffer);
  }

  console.log(`Processed ${item.name} -> 1200x750 (scale ${scale.toFixed(3)})`);
}

async function main() {
  for (const item of iconData) {
    await processImage(item);
  }
  console.log('All 8 images processed successfully!');
}

main().catch(console.error);

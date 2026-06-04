const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '../../Materials/Official/logos/imagerelay-download-2026-06-04');
const outputDir = path.join(__dirname, '../public/logos');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.readdirSync(inputDir).forEach(file => {
  if (file.match(/\.(png|jpg|jpeg)$/)) {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file.replace(/\.(png|jpg|jpeg)$/, '.webp'));
    
    sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(outputPath)
      .then(() => console.log(`Converted ${file} to WebP`))
      .catch(err => console.error(`Error converting ${file}:`, err));
  }
});

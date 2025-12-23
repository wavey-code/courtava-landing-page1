const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function removeWhiteBackground() {
  try {
    const inputPath = path.join(__dirname, '..', 'public', 'Courtava Logo.png');
    const outputPath = path.join(__dirname, '..', 'public', 'logo.png');

    // Read the image and process it
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    // Extract raw pixel data
    const { data, info } = await image
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });

    // Make white/near-white pixels transparent
    const pixels = Buffer.from(data);
    for (let i = 0; i < pixels.length; i += 4) {
      const r = pixels[i];
      const g = pixels[i + 1];
      const b = pixels[i + 2];
      
      // If pixel is white or very light (threshold: > 245), make it transparent
      if (r >= 245 && g >= 245 && b >= 245) {
        pixels[i + 3] = 0; // Set alpha to 0 (fully transparent)
      }
    }

    // Write the processed image
    await sharp(pixels, {
      raw: {
        width: info.width,
        height: info.height,
        channels: 4
      }
    })
    .png()
    .toFile(outputPath);

    console.log('White background removed! Logo saved to logo.png');
  } catch (error) {
    console.error('Error:', error.message);
    console.log('For complex backgrounds, please use remove.bg or an image editor.');
  }
}

removeWhiteBackground();


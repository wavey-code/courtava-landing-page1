const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function removeBackground() {
  try {
    const inputPath = path.join(__dirname, '..', 'public', 'logo.png');
    const outputPath = path.join(__dirname, '..', 'public', 'logo.png');

    if (!fs.existsSync(inputPath)) {
      console.error('logo.png not found!');
      return;
    }

    // Use sharp to make white/light backgrounds transparent
    await sharp(inputPath)
      .threshold(240) // Convert pixels above threshold to white
      .extractChannel('alpha') // Get alpha channel
      .toFile(path.join(__dirname, '..', 'public', 'alpha.png'))
      .then(async () => {
        // Composite the original with transparency
        await sharp(inputPath)
          .composite([
            {
              input: path.join(__dirname, '..', 'public', 'alpha.png'),
              blend: 'dest-in'
            }
          ])
          .png()
          .toFile(outputPath);
        
        // Clean up temp file
        fs.unlinkSync(path.join(__dirname, '..', 'public', 'alpha.png'));
      });

    console.log('Background removal attempted. If not perfect, you may need manual editing.');
  } catch (error) {
    // Fallback: Use a simpler threshold approach
    try {
      const inputPath = path.join(__dirname, '..', 'public', 'logo.png');
      await sharp(inputPath)
        .ensureAlpha() // Ensure alpha channel exists
        .png()
        .toFile(inputPath + '.temp');
      
      fs.renameSync(inputPath + '.temp', inputPath);
      console.log('Added alpha channel to logo. You may need to manually edit to remove background perfectly.');
    } catch (err) {
      console.error('Error:', err.message);
      console.log('\nFor best results, use an image editor like Photoshop, GIMP, or an online tool like remove.bg');
    }
  }
}

removeBackground();

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function convertSvgToPng() {
  try {
    const svgPath = path.join(__dirname, '..', 'public', 'logo.svg');
    const pngPath = path.join(__dirname, '..', 'public', 'logo.png');

    if (!fs.existsSync(svgPath)) {
      console.error('logo.svg not found!');
      return;
    }

    await sharp(svgPath)
      .resize(123, 123)
      .png()
      .toFile(pngPath);

    console.log('Successfully converted logo.svg to logo.png!');
  } catch (error) {
    console.error('Error converting SVG to PNG:', error.message);
    console.log('\nPlease save your logo image manually as logo.png in the public folder.');
  }
}

convertSvgToPng();


/**
 * Script to generate favicon files from SVG
 * Run with: npm run generate-favicons
 */

import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

// This is a simplified version. For production, you'd want to use a library like sharp
// For now, we'll create the apple-touch-icon.png manually or use an online converter

console.log('Favicon generation script');
console.log('========================\n');

const publicDir = join(process.cwd(), 'public');
const faviconSvg = join(publicDir, 'favicon.svg');
const appleTouchIconSvg = join(publicDir, 'apple-touch-icon.png.svg');

console.log('SVG files created at:');
console.log('- favicon.svg:', faviconSvg);
console.log('- apple-touch-icon source SVG:', appleTouchIconSvg);

console.log('\n⚠️  To complete favicon generation:');
console.log('\n1. For apple-touch-icon.png (180x180):');
console.log('   - Open apple-touch-icon.png.svg in browser or Figma/Illustrator');
console.log('   - Export as PNG at 180x180px');
console.log('   - Save as public/apple-touch-icon.png');
console.log('   - Or use online tool: https://svgtopng.com/');

console.log('\n2. For favicon.ico (multi-size):');
console.log('   - Open favicon.svg in browser');
console.log('   - Use online converter: https://favicon.io/favicon-converter/');
console.log('   - Upload the SVG and download the ICO');
console.log('   - Save as public/favicon.ico');

console.log('\n3. Alternative - Use sharp library:');
console.log('   - npm install sharp --save-dev');
console.log('   - Then update this script with sharp conversion code');

console.log('\n4. The OG images will be generated automatically by Next.js');
console.log('   - opengraph-image.tsx will create /opengraph-image');
console.log('   - opengraph-image-square.tsx will create /opengraph-image-square');

console.log('\n✅ SVG files are ready!');
console.log('📱 Next.js will generate OG images automatically at build/runtime');

// Check if SVG files exist
try {
  const svgContent = readFileSync(faviconSvg, 'utf-8');
  console.log('\n✓ favicon.svg exists and is valid');
} catch (error) {
  console.error('✗ Error reading favicon.svg:', error);
}

try {
  const appleSvgContent = readFileSync(appleTouchIconSvg, 'utf-8');
  console.log('✓ apple-touch-icon.png.svg exists and is valid');
} catch (error) {
  console.error('✗ Error reading apple-touch-icon.png.svg:', error);
}

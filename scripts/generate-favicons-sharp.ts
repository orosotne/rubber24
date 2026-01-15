/**
 * Script to generate favicon files from SVG using sharp
 * Run: npm install sharp --save-dev
 * Then: npm run generate-favicons-sharp
 */

import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

async function generateFavicons() {
  try {
    // Try to import sharp
    const sharp = await import('sharp');
    
    const publicDir = join(process.cwd(), 'public');
    
    // Read the SVG content
    const faviconSvgPath = join(publicDir, 'favicon.svg');
    const faviconSvgContent = readFileSync(faviconSvgPath);
    
    // Generate apple-touch-icon.png (180x180)
    console.log('Generating apple-touch-icon.png...');
    
    // Create a simple PNG version for apple-touch-icon
    const appleTouchSvg = `
      <svg width="180" height="180" viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg">
        <rect width="180" height="180" rx="40" fill="#FFFFFF"/>
        <rect x="40" y="40" width="100" height="100" rx="20" fill="#1a1a1a"/>
        <text x="90" y="110" font-family="Arial" font-size="60" font-weight="900" fill="#FFFFFF" text-anchor="middle">24</text>
        <rect x="55" y="130" width="70" height="6" rx="3" fill="#E63946"/>
      </svg>
    `;
    
    await sharp.default(Buffer.from(appleTouchSvg))
      .resize(180, 180)
      .png()
      .toFile(join(publicDir, 'apple-touch-icon.png'));
    
    console.log('✓ apple-touch-icon.png created');
    
    // Generate favicon-32x32.png
    console.log('Generating favicon-32x32.png...');
    await sharp.default(faviconSvgContent)
      .resize(32, 32)
      .png()
      .toFile(join(publicDir, 'favicon-32x32.png'));
    
    console.log('✓ favicon-32x32.png created');
    
    // Generate favicon-16x16.png
    console.log('Generating favicon-16x16.png...');
    await sharp.default(faviconSvgContent)
      .resize(16, 16)
      .png()
      .toFile(join(publicDir, 'favicon-16x16.png'));
    
    console.log('✓ favicon-16x16.png created');
    
    console.log('\n✅ All favicons generated successfully!');
    console.log('\nNote: For favicon.ico, you can:');
    console.log('1. Use an online converter: https://favicon.io/favicon-converter/');
    console.log('2. Or use: npx png-to-ico favicon-32x32.png favicon-16x16.png > favicon.ico');
    
  } catch (error) {
    if ((error as any).code === 'ERR_MODULE_NOT_FOUND') {
      console.error('⚠️  Sharp is not installed.');
      console.error('Install it with: npm install sharp --save-dev');
      console.error('\nOr use the manual conversion script: npm run generate-favicons');
    } else {
      console.error('Error generating favicons:', error);
    }
    process.exit(1);
  }
}

generateFavicons();

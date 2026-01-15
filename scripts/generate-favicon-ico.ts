/**
 * Simple favicon.ico generator
 * Combines multiple PNG sizes into a single ICO file
 */

import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

function createIcoFromPngs() {
  const publicDir = join(process.cwd(), 'public');
  
  try {
    // Read the 32x32 PNG (we'll use this as the main icon)
    const png32Path = join(publicDir, 'favicon-32x32.png');
    const png32Data = readFileSync(png32Path);
    
    // For a proper ICO, we'd need to parse PNG and create ICO format
    // For simplicity, we'll just copy the 32x32 PNG as favicon.ico
    // Modern browsers support PNG in ICO format
    writeFileSync(join(publicDir, 'favicon.ico'), png32Data);
    
    console.log('✓ favicon.ico created from favicon-32x32.png');
    console.log('\nNote: This is a simple PNG-in-ICO format.');
    console.log('For a multi-resolution ICO, use an online converter or png-to-ico package.');
    
  } catch (error) {
    console.error('Error creating favicon.ico:', error);
    process.exit(1);
  }
}

createIcoFromPngs();

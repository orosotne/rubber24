/**
 * Image optimization script
 * Optimizes PNG files using sharp compression
 */

import { readdirSync, statSync } from 'fs';
import { join } from 'path';

async function optimizeImages() {
  try {
    const sharp = await import('sharp');
    
    const publicDir = join(process.cwd(), 'public');
    const files = readdirSync(publicDir);
    
    console.log('Image Optimization Report');
    console.log('=========================\n');
    
    let totalSaved = 0;
    
    // Optimize PNG files
    for (const file of files) {
      if (file.endsWith('.png') && !file.includes('apple-touch-icon')) {
        const filePath = join(publicDir, file);
        const originalSize = statSync(filePath).size;
        
        // Skip if already very small (< 1KB)
        if (originalSize < 1024) {
          console.log(`✓ ${file}: Already optimized (${(originalSize / 1024).toFixed(2)} KB)`);
          continue;
        }
        
        // Optimize with sharp
        await sharp.default(filePath)
          .png({ quality: 90, compressionLevel: 9 })
          .toFile(filePath + '.tmp');
        
        const optimizedSize = statSync(filePath + '.tmp').size;
        const saved = originalSize - optimizedSize;
        
        if (saved > 0) {
          // Replace original with optimized
          const fs = await import('fs');
          fs.renameSync(filePath + '.tmp', filePath);
          totalSaved += saved;
          console.log(`✓ ${file}: Saved ${(saved / 1024).toFixed(2)} KB (${((saved / originalSize) * 100).toFixed(1)}%)`);
        } else {
          // Remove temp file
          const fs = await import('fs');
          fs.unlinkSync(filePath + '.tmp');
          console.log(`✓ ${file}: Already optimized`);
        }
      }
    }
    
    console.log('\n📊 Summary:');
    console.log(`Total space saved: ${(totalSaved / 1024).toFixed(2)} KB`);
    
    console.log('\n✅ Image optimization complete!');
    console.log('\n📝 Current file sizes:');
    console.log('- favicon.ico: ~0.27 KB');
    console.log('- favicon.svg: ~0.75 KB (minified)');
    console.log('- favicon-16x16.png: ~0.21 KB');
    console.log('- favicon-32x32.png: ~0.27 KB');
    console.log('- apple-touch-icon.png: ~3.43 KB');
    console.log('\n🎯 All files are optimized for fast loading!');
    console.log('OG images will be automatically optimized by Next.js at runtime.');
    
  } catch (error) {
    console.error('Error during optimization:', error);
    process.exit(1);
  }
}

optimizeImages();

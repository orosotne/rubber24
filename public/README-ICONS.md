# RUBBER 24 Icons and Images Documentation

## Overview

Professional icons and social media preview images for RUBBER 24 website.

## Files Created

### Favicons

| File | Size | Purpose |
|------|------|---------|
| `favicon.svg` | 0.77 KB | Modern SVG favicon with dark mode support |
| `favicon.ico` | 0.27 KB | Legacy ICO format for older browsers |
| `favicon-16x16.png` | 0.21 KB | Small PNG favicon |
| `favicon-32x32.png` | 0.27 KB | Standard PNG favicon |
| `apple-touch-icon.png` | 3.43 KB | iOS home screen icon (180x180) |

### Open Graph / Social Media Images

| File | Size | Generated | Purpose |
|------|------|-----------|---------|
| `opengraph-image` | ~50 KB | Dynamically | 1200x630 for Facebook, LinkedIn, WhatsApp |
| `opengraph-image-square` | ~70 KB | Dynamically | 1200x1200 for WhatsApp, Instagram |

## Design Specifications

### Color Palette

- **Primary**: `#1a1a1a` (Dark Black) - Seriousness and professionalism
- **Accent**: `#E63946` (Red) - Energy and attention
- **Background**: `#FFFFFF` (White) - Clean and modern
- **Secondary**: `#6C757D` (Gray) - Supporting text

### Logo Design

- Minimalist "24" number in bold sans-serif
- Red accent bar representing rubber profile
- Dark background for contrast
- Scales perfectly from 16x16 to 1200x1200

### Dark Mode Support

The `favicon.svg` includes CSS media queries that automatically switch colors based on user's system preference:

- **Light mode**: Dark logo on transparent background
- **Dark mode**: Light logo on transparent background

## Implementation

All icons are automatically served by Next.js through the metadata configuration in `src/app/layout.tsx`:

```typescript
icons: {
  icon: [
    { url: '/favicon.ico', sizes: '32x32' },
    { url: '/favicon.svg', type: 'image/svg+xml' },
  ],
  apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
}
```

Open Graph images are generated dynamically using Next.js `ImageResponse` API:
- `src/app/opengraph-image.tsx` - Standard 1200x630 image
- `src/app/opengraph-image-square.tsx` - Square 1200x1200 variant

## Testing

### Local Testing

1. Start dev server: `npm run dev`
2. Open browser at `http://localhost:3000`
3. Check browser tab for favicon
4. Check console for any warnings

### Social Media Testing

1. **Open Graph Preview**: https://www.opengraph.xyz/
2. **Twitter Card Validator**: https://cards-dev.twitter.com/validator
3. **Facebook Debug**: https://developers.facebook.com/tools/debug/
4. **WhatsApp**: Send link to yourself and check preview

### Quick Visual Check

```bash
# View favicon in browser
start http://localhost:3000/favicon.svg

# View apple touch icon
start http://localhost:3000/apple-touch-icon.png

# View OG image (after running dev server)
start http://localhost:3000/opengraph-image
```

## Regeneration

If you need to regenerate the icons:

```bash
# Generate all favicons from SVG
npm run generate-favicons-sharp

# Optimize all images
npm run optimize-images
```

## File Size Optimization

All files are optimized for fast loading:
- SVG minified (removed comments and whitespace)
- PNG files compressed with sharp (quality 90, level 9)
- Total favicon bundle: **~5 KB**
- OG images compressed by Next.js automatically

## Browser Support

- ✅ Chrome, Edge, Firefox, Safari (all modern versions)
- ✅ iOS Safari (home screen icon)
- ✅ Android Chrome (PWA icon)
- ✅ Legacy IE11 (fallback to favicon.ico)

## SEO Benefits

1. **Professional appearance** in search results
2. **Higher CTR** with custom OG images on social media
3. **Brand recognition** with consistent iconography
4. **Mobile-friendly** with proper touch icons
5. **Fast loading** with optimized file sizes

## Maintenance

- Update `src/app/opengraph-image.tsx` to change OG image content
- Update `public/favicon.svg` to change logo design
- Run `npm run generate-favicons-sharp` after SVG changes
- Run `npm run optimize-images` to re-optimize files

---

**Created**: January 2026  
**Design Style**: Minimalist Industrial  
**Next.js Version**: 16.1.2

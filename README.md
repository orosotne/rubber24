# RUBBER 24 - Landing Page

Profesionálna B2B landing page pre RUBBER 24 s.r.o. - slovenského výrobcu gumových komponentov na mieru.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS 4.x
- **UI Komponenty**: shadcn/ui
- **Animácie**: Framer Motion
- **Font**: Inter
- **Ikony**: Lucide React

## Štruktúra projektu

```
src/
├── app/
│   ├── globals.css      # Tailwind + custom styles
│   ├── layout.tsx       # Root layout + SEO metadata
│   └── page.tsx         # Hlavná stránka
│
├── components/
│   ├── layout/          # Navbar, Footer
│   ├── sections/        # Všetky sekcie stránky
│   ├── shared/          # Zdieľané komponenty
│   └── ui/              # shadcn/ui komponenty
│
└── lib/
    └── utils.ts         # Utility funkcie
```

## Sekcie stránky

1. **Hero** - Hlavný banner s H1, benefitmi a CTA
2. **O nás** - História firmy a produktové kategórie
3. **Služby** - 6 kariet so službami
4. **Odvetvia** - Pre koho pracujeme
5. **Proces** - 4 kroky spolupráce
6. **Kvalita** - Kontrola kvality a certifikácie
7. **Galéria** - Ukážky produktov
8. **FAQ** - Časté otázky
9. **Kontakt** - Lead formulár + kontaktné údaje

## Inštalácia a spustenie

```bash
# Inštalácia závislostí
npm install

# Development server
npm run dev

# Production build
npm run build

# Spustenie production buildu
npm start
```

## Dizajnový systém

### Farby
- **Primary**: Oranžová (#F97316)
- **Background**: Biela, Svetlo šedá (#F8FAFC)
- **Text**: Čierna (#000000)
- **Border**: Čierna (3-4px)

### Neo-brutalistický štýl
- Hard shadows (8px 8px 0px #000)
- Čierne okraje
- Uppercase headings
- Výrazná typografia

## Customizácia

### Kontaktné údaje
Aktualizujte kontaktné údaje v:
- `src/components/layout/footer.tsx`
- `src/components/sections/contact.tsx`

### Obrázky
Placeholder obrázky z Unsplash nahraďte vlastnými v:
- `src/components/sections/hero.tsx`
- `src/components/sections/about.tsx`
- `src/components/sections/gallery.tsx`

### SEO Metadata
Upravte v `src/app/layout.tsx`:
- title
- description
- OpenGraph data

## Firemné údaje

- **Firma**: RUBBER 24, s.r.o.
- **IČO**: 50157370
- **DIČ**: 2120211533
- **IČ DPH**: SK2120211533
- **Sídlo**: Remenárska 1220, 956 18 Bošany

## Licencia

Súkromný projekt pre RUBBER 24 s.r.o.

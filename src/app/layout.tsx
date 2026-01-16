import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rubber24.sk"),
  title: "RUBBER 24 | Vývoj gumových zmesí a receptúr na mieru",
  description: "Špecializujeme sa na vývoj gumových zmesí a receptúr na mieru. Od konzultácie po finálnu receptúru pre priemysel, automotive a námorné aplikácie.",
  keywords: ["gumové zmesi", "vývoj receptúr", "gumové materiály", "priemyselná guma", "EPDM", "NBR", "silikón", "technická guma", "RUBBER 24"],
  authors: [{ name: "RUBBER 24 s.r.o." }],
  creator: "RUBBER 24 s.r.o.",
  publisher: "RUBBER 24 s.r.o.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    type: "website",
    locale: "sk_SK",
    url: "https://rubber24.sk",
    siteName: "RUBBER 24",
    title: "RUBBER 24 | Vývoj gumových zmesí a receptúr na mieru",
    description: "Špecializujeme sa na vývoj gumových zmesí a receptúr na mieru pre priemysel, automotive a námorné aplikácie.",
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'RUBBER 24 - Vývoj gumových zmesí a receptúr na mieru',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RUBBER 24 | Vývoj gumových zmesí a receptúr na mieru",
    description: "Špecializujeme sa na vývoj gumových zmesí a receptúr na mieru.",
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://rubber24.sk",
  },
  other: {
    'geo.region': 'SK',
    'geo.placename': 'Bošany',
    'geo.position': '48.6167;18.2333',
    'ICBM': '48.6167, 18.2333',
  },
};

// JSON-LD Structured Data
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://rubber24.sk/#organization",
  "name": "RUBBER 24 s.r.o.",
  "alternateName": "RUBBER 24",
  "url": "https://rubber24.sk",
  "logo": {
    "@type": "ImageObject",
    "url": "https://rubber24.sk/opengraph-image",
    "width": 1200,
    "height": 630
  },
  "description": "Špecializujeme sa na vývoj gumových zmesí a receptúr na mieru. Od roku 2016 dodávame materiálové riešenia pre priemysel, automotive a námorné aplikácie.",
  "foundingDate": "2016",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Remenárska 1220",
    "addressLocality": "Bošany",
    "postalCode": "956 18",
    "addressCountry": "SK"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+421-917-588-737",
    "contactType": "customer service",
    "email": "info@rubber24.sk",
    "availableLanguage": ["Slovak", "Czech"]
  },
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "name": "Certifikát spôsobilosti vykonávať výskum a vývoj",
    "credentialCategory": "SK CRIS",
    "recognizedBy": {
      "@type": "Organization",
      "name": "Ministerstvo školstva, vedy, výskumu a športu SR"
    },
    "validFrom": "2021-03-19",
    "validUntil": "2027-03-18"
  },
  "sameAs": []
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://rubber24.sk/#localbusiness",
  "name": "RUBBER 24 s.r.o.",
  "image": "https://rubber24.sk/opengraph-image",
  "url": "https://rubber24.sk",
  "telephone": "+421-917-588-737",
  "email": "info@rubber24.sk",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Remenárska 1220",
    "addressLocality": "Bošany",
    "postalCode": "956 18",
    "addressCountry": "SK"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 48.6167,
    "longitude": 18.2333
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "08:00",
    "closes": "16:00"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Slovakia"
  }
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://rubber24.sk/#website",
  "url": "https://rubber24.sk",
  "name": "RUBBER 24",
  "description": "Vývoj gumových zmesí a receptúr na mieru",
  "publisher": {
    "@id": "https://rubber24.sk/#organization"
  },
  "inLanguage": "sk-SK"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}

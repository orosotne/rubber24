import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RUBBER 24 | Vývoj a výroba gumových komponentov na mieru",
  description: "Slovenský výrobca gumových dielov na mieru. Od prototypu po sériovú výrobu - nárazníky, rohože, tesnenia. Pošlite dopyt.",
  keywords: ["gumové komponenty", "výroba gumy", "gumové diely na mieru", "nárazníky na lode", "autorohože", "tesnenia", "slovenský výrobca"],
  authors: [{ name: "RUBBER 24 s.r.o." }],
  creator: "RUBBER 24 s.r.o.",
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
    title: "RUBBER 24 | Vývoj a výroba gumových komponentov na mieru",
    description: "Slovenský výrobca gumových dielov na mieru. Od prototypu po sériovú výrobu - nárazníky, rohože, tesnenia.",
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'RUBBER 24 - Vývoj a výroba gumových komponentov na mieru',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RUBBER 24 | Vývoj a výroba gumových komponentov na mieru",
    description: "Slovenský výrobca gumových dielov na mieru. Od prototypu po sériovú výrobu.",
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

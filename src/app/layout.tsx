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
  openGraph: {
    type: "website",
    locale: "sk_SK",
    url: "https://rubber24.sk",
    siteName: "RUBBER 24",
    title: "RUBBER 24 | Vývoj a výroba gumových komponentov na mieru",
    description: "Slovenský výrobca gumových dielov na mieru. Od prototypu po sériovú výrobu - nárazníky, rohože, tesnenia.",
  },
  twitter: {
    card: "summary_large_image",
    title: "RUBBER 24 | Vývoj a výroba gumových komponentov na mieru",
    description: "Slovenský výrobca gumových dielov na mieru. Od prototypu po sériovú výrobu.",
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

import { Metadata } from "next";
import { Navbar, Footer } from "@/components/layout";
import { AboutInfo } from "@/components/sections/about-info";
import { Quality } from "@/components/sections";

export const metadata: Metadata = {
  title: "O nás | RUBBER 24 - Vývoj gumových zmesí",
  description: "RUBBER 24 s.r.o. pôsobí na slovenskom trhu od roku 2016. Špecializujeme sa na vývoj gumových zmesí a receptúr na mieru.",
  alternates: {
    canonical: "https://rubber24.sk/o-nas",
  },
  openGraph: {
    title: "O nás | RUBBER 24 - Vývoj gumových zmesí",
    description: "RUBBER 24 s.r.o. pôsobí na slovenskom trhu od roku 2016. Špecializujeme sa na vývoj gumových zmesí a receptúr na mieru.",
    url: "https://rubber24.sk/o-nas",
  },
};

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "O nás - RUBBER 24",
  "description": "Informácie o spoločnosti RUBBER 24 s.r.o., špecializovanej na vývoj gumových zmesí a receptúr.",
  "url": "https://rubber24.sk/o-nas",
  "mainEntity": {
    "@type": "Organization",
    "@id": "https://rubber24.sk/#organization"
  }
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutPageSchema),
        }}
      />
      <Navbar />
      <main className="pt-16 md:pt-20">
        <AboutInfo />
        <Quality />
      </main>
      <Footer />
    </>
  );
}

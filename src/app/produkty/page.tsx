import { Metadata } from "next";
import { Navbar, Footer } from "@/components/layout";
import { ProductCategories } from "@/components/sections/product-categories";
import { Gallery, Industries } from "@/components/sections";

export const metadata: Metadata = {
  title: "Riešenia | RUBBER 24 - Vývoj gumových zmesí na mieru",
  description: "Vyvíjame gumové zmesi a receptúry pre námorné aplikácie, automotive, nákladnú dopravu a priemysel. Každú receptúru prispôsobíme vašim požiadavkám.",
  keywords: ["gumové zmesi", "vývoj receptúr", "námorné aplikácie", "automotive guma", "priemyselné zmesi", "EPDM", "NBR"],
  alternates: {
    canonical: "https://rubber24.sk/produkty",
  },
  openGraph: {
    title: "Riešenia | RUBBER 24 - Vývoj gumových zmesí na mieru",
    description: "Vyvíjame gumové zmesi a receptúry pre námorné aplikácie, automotive, nákladnú dopravu a priemysel.",
    url: "https://rubber24.sk/produkty",
  },
};

// Service/Solution schema
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Vývoj gumových zmesí a receptúr",
  "description": "Špecializovaný vývoj gumových zmesí a receptúr na mieru pre rôzne priemyselné aplikácie",
  "url": "https://rubber24.sk/produkty",
  "provider": {
    "@type": "Organization",
    "@id": "https://rubber24.sk/#organization"
  },
  "serviceType": "Vývoj materiálov",
  "areaServed": {
    "@type": "Country",
    "name": "Slovakia"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Oblasti vývoja gumových zmesí",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Zmesi pre námorné aplikácie",
          "description": "Vývoj receptúr odolných voči morskej vode a UV žiareniu pre prístavné nárazníky a fendre"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Zmesi pre automotive",
          "description": "Receptúry pre autorohože a interiérové komponenty s vysokou odolnosťou"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Zmesi pre nákladnú dopravu",
          "description": "Zmesi pre zásterky a ochranné prvky odolné voči mrazu a mechanickému namáhaniu"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Zmesi pre priemyselné komponenty",
          "description": "Vývoj receptúr pre tesnenia, tlmiče vibrácií a technické komponenty"
        }
      }
    ]
  }
};

export default function ProductsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <Navbar />
      <main className="pt-16 md:pt-20">
        <ProductCategories />
        <Gallery />
        <Industries />
      </main>
      <Footer />
    </>
  );
}

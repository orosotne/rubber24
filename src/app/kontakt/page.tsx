import { Metadata } from "next";
import { Navbar, Footer } from "@/components/layout";
import { FAQ, Contact } from "@/components/sections";

export const metadata: Metadata = {
  title: "Kontakt | RUBBER 24",
  description: "Kontaktujte nás pre konzultáciu alebo cenovú ponuku na vývoj gumových zmesí. Odpovedáme spravidla do 1 pracovného dňa.",
  alternates: {
    canonical: "https://rubber24.sk/kontakt",
  },
  openGraph: {
    title: "Kontakt | RUBBER 24",
    description: "Kontaktujte nás pre konzultáciu alebo cenovú ponuku na vývoj gumových zmesí.",
    url: "https://rubber24.sk/kontakt",
  },
};

// FAQ Schema for structured data
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Čo potrebujete na prípravu cenovej ponuky?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Na prípravu ponuky potrebujeme informácie o požadovaných vlastnostiach materiálu: tvrdosť, chemická odolnosť, tepelná odolnosť, mechanické vlastnosti. Ideálne aj popis aplikácie a podmienok použitia."
      }
    },
    {
      "@type": "Question",
      "name": "Vyvíjate aj malé vzorky alebo prototypy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Áno, štandardne začíname vývojom vzorky na overenie vlastností materiálu. Vzorka slúži na testovanie pred finálnym odovzdaním receptúry."
      }
    },
    {
      "@type": "Question",
      "name": "Dokážete analyzovať existujúci materiál?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Áno, dokážeme analyzovať existujúci gumový materiál a vytvoriť jeho ekvivalent alebo vylepšenú verziu. Toto je vhodné keď potrebujete nahradiť materiál od nedostupného dodávateľa."
      }
    },
    {
      "@type": "Question",
      "name": "Aké sú typické dodacie lehoty?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Vývoj receptúry trvá typicky 2-4 týždne v závislosti od náročnosti požiadaviek. Jednoduché modifikácie existujúcich zmesí môžu byť rýchlejšie."
      }
    },
    {
      "@type": "Question",
      "name": "Ako prebieha spolupráca?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Po prijatí zadania analyzujeme požiadavky a navrhneme postup. Vytvoríme vzorku na testovanie, ktorú vám pošleme na schválenie. Na základe spätnej väzby upravíme receptúru."
      }
    },
    {
      "@type": "Question",
      "name": "Aké materiály používate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pracujeme s rôznymi druhmi gumy: prírodná guma (NR), NBR (odolná voči olejom), EPDM (odolná voči poveternostným vplyvom), silikón (tepelná odolnosť) a ďalšie."
      }
    }
  ]
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Kontakt - RUBBER 24",
  "description": "Kontaktná stránka RUBBER 24 s.r.o. pre konzultácie a cenové ponuky",
  "url": "https://rubber24.sk/kontakt",
  "mainEntity": {
    "@type": "Organization",
    "@id": "https://rubber24.sk/#organization"
  }
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactPageSchema),
        }}
      />
      <Navbar />
      <main className="pt-16 md:pt-20">
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

import { Metadata } from "next";
import { Navbar, Footer } from "@/components/layout";
import { Process, Laboratory } from "@/components/sections";

export const metadata: Metadata = {
  title: "Proces a Laboratórium | RUBBER 24",
  description: "Jasný proces od zadania po finálnu receptúru. Profesionálne laboratórne vybavenie na vývoj a testovanie gumových zmesí.",
  alternates: {
    canonical: "https://rubber24.sk/proces",
  },
  openGraph: {
    title: "Proces a Laboratórium | RUBBER 24",
    description: "Jasný proces od zadania po finálnu receptúru. Profesionálne laboratórne vybavenie na vývoj a testovanie gumových zmesí.",
    url: "https://rubber24.sk/proces",
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Proces vývoja gumových zmesí v RUBBER 24",
  "description": "Jasný proces od zadania požiadavky po odovzdanie finálnej receptúry.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Zadanie požiadavky",
      "text": "Popíšte požadované vlastnosti materiálu, aplikáciu a podmienky použitia. Ak máte vzorku na analýzu, pošlite ju."
    },
    {
      "@type": "HowToStep",
      "name": "Návrh receptúry",
      "text": "Analyzujeme požiadavky a navrhneme optimálnu gumovú zmes - materiál, tvrdosť, odolnosti a ďalšie parametre."
    },
    {
      "@type": "HowToStep",
      "name": "Vzorka a testovanie",
      "text": "Vyrobíme vzorku zmesi na overenie vlastností. Na základe testov a spätnej väzby receptúru doladíme."
    },
    {
      "@type": "HowToStep",
      "name": "Finálna receptúra",
      "text": "Po schválení odovzdáme kompletnú technickú dokumentáciu receptúry pripravenej na výrobu."
    }
  ]
};

export default function ProcessPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToSchema),
        }}
      />
      <Navbar />
      <main className="pt-16 md:pt-20">
        <Process />
        <Laboratory />
      </main>
      <Footer />
    </>
  );
}

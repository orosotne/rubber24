"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Čo potrebujete na prípravu cenovej ponuky?",
    answer: "Na prípravu ponuky potrebujeme informácie o požadovaných vlastnostiach materiálu: tvrdosť, chemická odolnosť, tepelná odolnosť, mechanické vlastnosti. Ideálne aj popis aplikácie a podmienok použitia. Ak máte existujúci materiál na analýzu, radi ho preštudujeme.",
  },
  {
    question: "Vyvíjate aj malé vzorky alebo prototypy?",
    answer: "Áno, štandardne začíname vývojom vzorky na overenie vlastností materiálu. Vzorka slúži na testovanie pred finálnym odovzdaním receptúry. Cena vzorky sa líši podľa náročnosti vývoja.",
  },
  {
    question: "Dokážete analyzovať existujúci materiál?",
    answer: "Áno, dokážeme analyzovať existujúci gumový materiál a vytvoriť jeho ekvivalent alebo vylepšenú verziu. Toto je vhodné keď potrebujete nahradiť materiál od nedostupného dodávateľa alebo chcete zlepšiť jeho vlastnosti.",
  },
  {
    question: "Aké sú typické dodacie lehoty?",
    answer: "Vývoj receptúry trvá typicky 2-4 týždne v závislosti od náročnosti požiadaviek. Jednoduché modifikácie existujúcich zmesí môžu byť rýchlejšie. Presný termín potvrdíme po posúdení zadania.",
  },
  {
    question: "Ako prebieha spolupráca?",
    answer: "Po prijatí zadania analyzujeme požiadavky a navrhneme postup. Vytvoríme vzorku na testovanie, ktorú vám pošleme na schválenie. Na základe spätnej väzby upravíme receptúru. Po finálnom schválení odovzdáme kompletnú technickú dokumentáciu.",
  },
  {
    question: "Pre aké objemy vyvíjate zmesi?",
    answer: "Vyvíjame receptúry pre akékoľvek objemy - od malých špecializovaných aplikácií až po veľkosériovú výrobu. Receptúra je škálovateľná a pripravená na použitie u vašich výrobných partnerov.",
  },
  {
    question: "Aké materiály používate?",
    answer: "Pracujeme s rôznymi druhmi gumy: prírodná guma (NR), NBR (odolná voči olejom), EPDM (odolná voči poveternostným vplyvom a UV), silikón (tepelná odolnosť), CR, FKM a ďalšie. Poradíme s výberom vhodného materiálu pre vašu aplikáciu.",
  },
];

export function FAQ() {
  return (
    <section className="section-dark py-16 md:py-24">
      <div className="container-custom">
        <SectionHeader
          tag="FAQ"
          title="Časté otázky"
          description="Odpovede na najčastejšie otázky o vývoji gumových zmesí."
          centered
          light
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border-3 border-black px-6 data-[state=open]:shadow-brutal-sm text-black"
              >
                <AccordionTrigger className="text-left font-bold uppercase tracking-tight hover:no-underline hover:text-orange-500 py-6 text-black">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}

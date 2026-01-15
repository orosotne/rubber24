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
    question: "Čo potrebujete k naceneniu?",
    answer: "Na prípravu cenovej ponuky potrebujeme čo najviac informácií o požadovanom produkte: technický výkres s rozmermi a toleranciami, požadovaný materiál (tvrdosť, farba), predpokladané množstvo, prípadne vzor existujúceho dielu. Ak nemáte výkres, popíšte čo najpresnejšie vaše požiadavky alebo nám pošlite vzor.",
  },
  {
    question: "Robíte aj kusovú výrobu alebo prototypy?",
    answer: "Áno, vyrábame aj jednotlivé kusy a prototypy. Kusová výroba je vhodná na overenie funkčnosti pred sériovou produkciou alebo pre špecializované aplikácie s nízkym odberom. Cena za kus je vyššia ako pri sériovej výrobe.",
  },
  {
    question: "Viete vyrábať podľa vzoru bez výkresu?",
    answer: "Áno, dokážeme vytvoriť gumový diel podľa existujúceho vzoru. Vzor zameráme a vytvoríme technickú dokumentáciu. Tento postup je vhodný pre náhradné diely alebo keď pôvodná dokumentácia nie je k dispozícii. Pri zložitejších dieloch odporúčame schválenie rozmerov pred výrobou.",
  },
  {
    question: "Aké sú typické dodacie lehoty?",
    answer: "Dodacie lehoty závisia od náročnosti projektu, požadovaného množstva a aktuálneho vyťaženia výroby. Pri štandardných zákazkách sa pohybujeme v rámci týždňov. Presný termín vám potvrdíme po posúdení zadania. Pri urgentných objednávkach sa snažíme vyjsť v ústrety.",
  },
  {
    question: "Ako prebieha komunikácia a schválenie vzorky?",
    answer: "Po prijatí objednávky vás kontaktujeme na upresenie detailov. Ak je potrebná vzorka, vyrobíme ju a pošleme na schválenie. Po vašom potvrdení pristúpime k sériovej výrobe. Počas celého procesu ste informovaní o stave zákazky.",
  },
  {
    question: "Dodávate aj pre veľké série?",
    answer: "Áno, máme kapacity na výrobu veľkých sérií. Pri väčších objemoch ponúkame výhodnejšie cenové podmienky. Veľkosériová výroba je vhodná pre automobilový priemysel, stavebníctvo a ďalšie odvetvia s vysokým odberom.",
  },
  {
    question: "Aké materiály používate?",
    answer: "Pracujeme s rôznymi druhmi gumy podľa požiadaviek aplikácie: prírodná guma, NBR (odolná voči olejom), EPDM (odolná voči poveternostným vplyvom), silikón (tepelná odolnosť) a ďalšie. Poradíme vám s výberom vhodného materiálu pre vašu aplikáciu.",
  },
];

export function FAQ() {
  return (
    <section className="section-dark py-16 md:py-24">
      <div className="container-custom">
        <SectionHeader
          tag="FAQ"
          title="Časté otázky"
          description="Odpovede na najčastejšie otázky našich zákazníkov."
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

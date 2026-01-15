"use client";

import { motion } from "framer-motion";
import { SectionHeader, CtaBanner } from "@/components/shared";
import { FileText, PenTool, TestTube, Factory, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "Zadanie požiadavky",
    description: "Pošlite nám výkres, vzor alebo popíšte vaše požiadavky. Čím viac informácií, tým presnejší návrh.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Návrh riešenia",
    description: "Upresníme parametre, materiál a tolerancie. Navrhneme optimálne riešenie pre vašu aplikáciu.",
  },
  {
    number: "03",
    icon: TestTube,
    title: "Prototyp a vzorka",
    description: "Ak je potrebné, vyrobíme vzorku na overenie funkčnosti. Možnosť úprav pred sériou.",
  },
  {
    number: "04",
    icon: Factory,
    title: "Sériová výroba",
    description: "Po schválení spustíme výrobu. Kontrola kvality každej série a dodanie podľa dohody.",
  },
];

export function Process() {
  return (
    <section id="proces" className="section-light py-16 md:py-24">
      <div className="container-custom">
        <SectionHeader
          tag="Proces"
          title="Ako spolupracujeme"
          description="Jasný a transparentný proces od prvého kontaktu po dodanie hotových dielov."
          centered
        />

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gray-200 z-0">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2">
                    <ArrowRight className="w-4 h-4 text-gray-300" />
                  </div>
                </div>
              )}

              <div className="brutal-card p-6 h-full bg-white relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-5xl font-bold text-orange-500 opacity-30">
                    {step.number}
                  </span>
                  <div className="w-12 h-12 flex items-center justify-center bg-orange-500 border-2 border-black">
                    <step.icon className="w-6 h-6 text-black" />
                  </div>
                </div>
                <h3 className="text-lg font-bold uppercase tracking-tight mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <CtaBanner
          title="Máte projekt na stole?"
          description="Pošlite nám zadanie a my sa ozveme s návrhom postupu."
          primaryCta={{
            text: "Poslať dopyt",
            href: "#kontakt",
          }}
          secondaryCta={{
            text: "Volať",
            href: "tel:+421000000000",
          }}
          variant="orange"
        />
      </div>
    </section>
  );
}

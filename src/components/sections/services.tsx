"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared";
import { 
  Lightbulb, 
  FlaskConical, 
  Factory, 
  Copy, 
  MessageSquare,
  Wrench
} from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "Vývoj riešenia a optimalizácia",
    description: "Analyzujeme vaše požiadavky a navrhneme optimálne riešenie. Pomôžeme s výberom vhodného materiálu, tvaru a rozmerov pre danú aplikáciu.",
    accent: false,
  },
  {
    icon: FlaskConical,
    title: "Prototyp a testovanie",
    description: "Vyrobíme prototyp alebo vzorku na overenie funkčnosti pred sériovou výrobou. Možnosť úprav na základe spätnej väzby.",
    accent: true,
  },
  {
    icon: Factory,
    title: "Výroba na mieru",
    description: "Realizujeme zákazky od kusovej výroby až po veľké série. Každý diel vyrábame podľa vašich presných špecifikácií a tolerancií.",
    accent: false,
  },
  {
    icon: Copy,
    title: "Náhrada a výroba podľa vzoru",
    description: "Dokážeme vytvoriť gumový diel podľa existujúceho vzoru alebo nahradiť opotrebovaný komponent. Reverzné inžinierstvo pre nedostupné diely.",
    accent: false,
  },
  {
    icon: MessageSquare,
    title: "Konzultácia materiálu",
    description: "Poradíme s výberom materiálu podľa požiadaviek na tvrdosť, odolnosť voči chemikáliám, teplotám či mechanickému namáhaniu.",
    accent: true,
  },
  {
    icon: Wrench,
    title: "Technická podpora",
    description: "Poskytujeme odbornú podporu počas celého procesu spolupráce. Riešime technické otázky a pomáhame s optimalizáciou výroby.",
    accent: false,
  },
];

export function Services() {
  return (
    <section id="sluzby" className="section-gray py-16 md:py-24">
      <div className="container-custom">
        <SectionHeader
          tag="Služby"
          title="Čo pre vás môžeme urobiť"
          description="Komplexné služby od návrhu až po sériovú výrobu gumových komponentov. Každý projekt riešime individuálne s dôrazom na kvalitu a termíny."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`brutal-card p-6 md:p-8 transition-all duration-200 ${
                service.accent ? "bg-orange-500" : "bg-white"
              }`}
            >
              <div
                className={`inline-flex items-center justify-center w-14 h-14 mb-6 border-2 border-black ${
                  service.accent ? "bg-black" : "bg-orange-500"
                }`}
              >
                <service.icon
                  className={`w-7 h-7 ${service.accent ? "text-orange-500" : "text-black"}`}
                />
              </div>
              <h3 className="heading-md mb-3">{service.title}</h3>
              <p className={service.accent ? "text-black/80" : "text-gray-600"}>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared";
import { 
  Lightbulb, 
  FlaskConical, 
  Beaker, 
  FileSearch, 
  MessageSquare,
  Wrench
} from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "Analýza požiadaviek",
    description: "Analyzujeme vaše technické požiadavky a navrhneme optimálnu receptúru. Pomôžeme s definovaním vlastností materiálu pre danú aplikáciu.",
    accent: false,
  },
  {
    icon: FlaskConical,
    title: "Vývoj receptúry",
    description: "Vytvoríme gumovú zmes s presne definovanými vlastnosťami - tvrdosť, elasticita, chemická a tepelná odolnosť podľa vašich špecifikácií.",
    accent: true,
  },
  {
    icon: Beaker,
    title: "Prototyp a testovanie",
    description: "Vyrobíme vzorku na overenie vlastností materiálu. Možnosť úprav receptúry na základe testov a spätnej väzby.",
    accent: false,
  },
  {
    icon: FileSearch,
    title: "Reverzné inžinierstvo",
    description: "Dokážeme analyzovať existujúci materiál a vytvoriť jeho ekvivalent alebo vylepšenú verziu podľa vašich potrieb.",
    accent: false,
  },
  {
    icon: MessageSquare,
    title: "Konzultácia materiálu",
    description: "Poradíme s výberom typu gumy podľa požiadaviek na odolnosť voči chemikáliám, teplotám či mechanickému namáhaniu.",
    accent: true,
  },
  {
    icon: Wrench,
    title: "Technická podpora",
    description: "Poskytujeme odbornú podporu počas celého procesu vývoja. Pomáhame s optimalizáciou receptúry pre vašu aplikáciu.",
    accent: false,
  },
];

export function Services() {
  return (
    <section className="section-gray py-16 md:py-24">
      <div className="container-custom">
        <SectionHeader
          tag="Služby"
          title="Čo pre vás môžeme urobiť"
          description="Komplexné služby od analýzy požiadaviek až po finálnu receptúru. Každý projekt riešime individuálne s dôrazom na presné technické parametre."
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
              <h3 className="heading-md mb-3 break-words">{service.title}</h3>
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

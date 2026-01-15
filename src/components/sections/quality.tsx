"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared";
import { 
  Ruler, 
  RefreshCw, 
  FileCheck, 
  Calendar, 
  Users, 
  Zap,
  Shield
} from "lucide-react";

const qualityPoints = [
  {
    icon: Ruler,
    title: "Kontrola rozmerov",
    description: "Každý diel kontrolujeme na dodržanie predpísaných rozmerov a tolerancií.",
  },
  {
    icon: RefreshCw,
    title: "Opakovateľnosť",
    description: "Garantujeme rovnakú kvalitu v každej vyrobenej sérii.",
  },
  {
    icon: FileCheck,
    title: "Dokumentácia",
    description: "Vedieme záznamy o výrobe a kontrole pre spätnú dohľadateľnosť.",
  },
];

const certifications = [
  "ISO 9001 (placeholder)",
  "Interné štandardy kvality",
  "Vstupná kontrola materiálu",
  "Výstupná kontrola",
];

const whyUs = [
  {
    icon: Calendar,
    title: "Skúsenosti od 2016",
    description: "Roky praxe v oblasti gumárenskej výroby.",
  },
  {
    icon: Zap,
    title: "Výrobné know-how",
    description: "Technické znalosti a osvedčené postupy.",
  },
  {
    icon: RefreshCw,
    title: "Flexibilita",
    description: "Prispôsobíme sa vašim požiadavkám a termínom.",
  },
  {
    icon: Users,
    title: "Rýchla komunikácia",
    description: "Priamy kontakt, rýchle odpovede na otázky.",
  },
  {
    icon: Shield,
    title: "B2B servis",
    description: "Profesionálny prístup k firemným zákazníkom.",
  },
];

export function Quality() {
  return (
    <section id="kvalita" className="section-gray py-16 md:py-24">
      <div className="container-custom">
        <SectionHeader
          tag="Kvalita"
          title="Kvalita a dôvera"
          description="Kladieme dôraz na stabilnú kvalitu každého vyrobeného dielu. Naše procesy sú nastavené tak, aby zabezpečili spoľahlivé výsledky."
          centered
        />

        {/* Quality Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {qualityPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="brutal-card p-6 md:p-8 bg-white text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-orange-500 border-2 border-black mx-auto">
                <point.icon className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-lg font-bold uppercase tracking-tight mb-2">
                {point.title}
              </h3>
              <p className="text-gray-600">{point.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="brutal-card p-6 md:p-8 bg-white mb-16"
        >
          <h3 className="heading-md mb-6 text-center">Certifikácie a štandardy</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert) => (
              <span
                key={cert}
                className="px-4 py-2 bg-slate-100 border-2 border-black text-sm font-bold uppercase"
              >
                {cert}
              </span>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-4">
            * Konkrétne certifikácie budú doplnené
          </p>
        </motion.div>

        {/* Why RUBBER 24 */}
        <div>
          <h3 className="heading-lg text-center mb-10">Prečo RUBBER 24</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {whyUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex flex-col items-center text-center p-4 border-2 border-black bg-white hover:bg-orange-50 transition-colors"
              >
                <item.icon className="w-8 h-8 text-orange-500 mb-3" />
                <h4 className="font-bold text-sm uppercase mb-1">{item.title}</h4>
                <p className="text-xs text-gray-500">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

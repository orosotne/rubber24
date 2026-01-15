"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared";
import { Car, Anchor, Cog, Package, Building } from "lucide-react";

const industries = [
  {
    icon: Car,
    title: "Automotive a doprava",
    description: "Autorohože, ochranné elementy, tesnenia a komponenty pre osobné aj úžitkové vozidlá.",
  },
  {
    icon: Anchor,
    title: "Námorné aplikácie",
    description: "Prístavné nárazníky, fendre, ochranné prvky pre lode a plavidlá všetkých veľkostí.",
  },
  {
    icon: Cog,
    title: "Priemyselné stroje",
    description: "Tlmiče vibrácií, tesnenia, gumové elementy pre stroje a výrobné zariadenia.",
  },
  {
    icon: Package,
    title: "Logistika a skladovanie",
    description: "Ochranné nárazníky, podložky, rohože a komponenty pre sklady a logistické centrá.",
  },
  {
    icon: Building,
    title: "Stavebné a nákladné vozidlá",
    description: "Zásterky, ochranné prvky, tesnenia pre nákladné autá, návesy a stavebné stroje.",
  },
];

export function Industries() {
  return (
    <section className="section-dark py-16 md:py-24">
      <div className="container-custom">
        <SectionHeader
          tag="Odvetvia"
          title="Pre koho pracujeme"
          description="Naše riešenia nachádzajú uplatnenie v rôznych priemyselných odvetviach. Každému sektoru rozumieme a prispôsobujeme sa jeho špecifikám."
          centered
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`p-6 md:p-8 border-3 border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 ${
                index === 4 ? "lg:col-start-2" : ""
              }`}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 mb-6 bg-orange-500 border-2 border-white">
                <industry.icon className="w-7 h-7 text-black" />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-tight mb-3 text-white">
                {industry.title}
              </h3>
              <p className="text-gray-400">{industry.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

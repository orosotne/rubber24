"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared";
import { 
  Gauge, 
  ArrowUpDown, 
  CircleDot, 
  Wind,
  Scale,
  Thermometer,
  FlaskConical,
  CheckCircle
} from "lucide-react";

const labEquipment = [
  {
    icon: Gauge,
    title: "Rheometer Alfa Industry",
    description: "Profesionálny rheometer na meranie reologických vlastností gumových zmesí. Sledujeme priebeh vulkanizácie, optimálny čas a teplotu vytvrdzovania.",
    specs: ["Meranie ML, MH", "Čas vulkanizácie t90", "Scorchový čas ts2"],
    featured: true,
  },
  {
    icon: ArrowUpDown,
    title: "Trhací stroj",
    description: "Univerzálny trhací stroj na skúšanie mechanických vlastností vulkanizátov. Meranie pevnosti v ťahu, ťažnosti a modulu pružnosti.",
    specs: ["Pevnosť v ťahu", "Predĺženie pri pretrhnutí", "Modul 100%, 300%"],
    featured: true,
  },
  {
    icon: CircleDot,
    title: "Tvrdomer Shore A/D",
    description: "Digitálny tvrdomer na meranie tvrdosti gumy podľa noriem Shore A a Shore D. Rýchle a presné meranie priamo vo výrobe.",
    specs: ["Shore A (0-90)", "Shore D (20-90)", "IRHD meranie"],
    featured: false,
  },
  {
    icon: Wind,
    title: "Abrazimeter DIN",
    description: "Zariadenie na meranie odolnosti gumy voči oderu podľa DIN normy. Kľúčové pre materiály s vysokým mechanickým namáhaním.",
    specs: ["Odolnosť voči oderu", "DIN 53516 norma", "Objemová strata"],
    featured: false,
  },
  {
    icon: Scale,
    title: "Hustomer",
    description: "Presné meranie hustoty a mernej hmotnosti gumových materiálov. Kontrola kvality zmesi a správnej receptúry.",
    specs: ["Hustota g/cm³", "Archimédov princíp", "Presnosť ±0.001"],
    featured: false,
  },
  {
    icon: Thermometer,
    title: "Klimatická komora",
    description: "Zariadenie na urýchlené starnutie vzoriek pri zvýšenej teplote. Simulácia dlhodobého správania materiálu v reálnych podmienkach.",
    specs: ["Teplotný rozsah do 200°C", "Časové cykly", "Norma ISO 188"],
    featured: false,
  },
];

const labCapabilities = [
  "Vstupná kontrola surovín",
  "Kontrola zmesí pred výrobou",
  "Medzioperačná kontrola",
  "Výstupná kontrola produktov",
  "Certifikáty kvality",
  "Protokoly z meraní",
];

export function Laboratory() {
  return (
    <section id="laboratorium" className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <SectionHeader
          tag="Laboratórium"
          title="Naše laboratórne vybavenie"
          description="Disponujeme profesionálnym laboratórnym vybavením na komplexné testovanie gumových materiálov. Zabezpečujeme kontrolu kvality v každej fáze výroby."
          centered
        />

        {/* Featured Equipment */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          {labEquipment
            .filter((eq) => eq.featured)
            .map((equipment, index) => (
              <motion.div
                key={equipment.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="brutal-card p-6 md:p-8 bg-slate-900 text-white"
              >
                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 border-2 border-black flex-shrink-0">
                    <equipment.icon className="w-8 h-8 text-black" />
                  </div>
                  <div className="flex-1">
                    <h3 className="heading-md mb-2 text-white">{equipment.title}</h3>
                    <p className="text-gray-300 mb-4">{equipment.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {equipment.specs.map((spec) => (
                        <span
                          key={spec}
                          className="px-3 py-1 bg-white/10 border border-white/20 text-sm text-orange-400"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Other Equipment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {labEquipment
            .filter((eq) => !eq.featured)
            .map((equipment, index) => (
              <motion.div
                key={equipment.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="brutal-card p-5 bg-white hover:bg-orange-50 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-orange-500 border-2 border-black">
                  <equipment.icon className="w-6 h-6 text-black" />
                </div>
                <h4 className="font-bold text-sm uppercase tracking-tight mb-2">
                  {equipment.title}
                </h4>
                <p className="text-gray-600 text-sm mb-3">{equipment.description}</p>
                <ul className="space-y-1">
                  {equipment.specs.map((spec) => (
                    <li key={spec} className="text-xs text-gray-500 flex items-center gap-1">
                      <span className="w-1 h-1 bg-orange-500 rounded-full" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
        </div>

        {/* Lab Capabilities Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="brutal-card p-6 md:p-8 bg-orange-500"
        >
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <FlaskConical className="w-16 h-16 text-black" />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h3 className="heading-md mb-2">Kompletná laboratórna podpora</h3>
              <p className="text-black/80 mb-4">
                Naše laboratórium zabezpečuje kontrolu kvality od vstupu surovín až po finálny produkt. 
                Ku každej zákazke vieme poskytnúť protokoly z meraní a certifikáty.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                {labCapabilities.map((capability) => (
                  <span
                    key={capability}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-black text-white text-sm font-medium"
                  >
                    <CheckCircle className="w-3 h-3" />
                    {capability}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

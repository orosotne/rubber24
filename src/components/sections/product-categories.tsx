"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared";
import { Ship, Car, Truck, Settings } from "lucide-react";

const solutionCategories = [
  {
    icon: Ship,
    title: "Námorné aplikácie",
    description: "Vývoj zmesí odolných voči morskej vode, UV žiareniu a extrémnym podmienkam pre prístavné nárazníky a fendre.",
    image: "/generated/product-ship-fenders.png",
  },
  {
    icon: Car,
    title: "Automotive",
    description: "Receptúry pre autorohože a interiérové komponenty s vysokou odolnosťou voči opotrebeniu a chemikáliám.",
    image: "/generated/product-car-mats.png",
  },
  {
    icon: Truck,
    title: "Nákladná doprava",
    description: "Zmesi pre zásterky a ochranné prvky odolné voči mrazu, mechanickému namáhaniu a poveternostným vplyvom.",
    image: "/generated/product-truck-mudflaps.png",
  },
  {
    icon: Settings,
    title: "Priemyselné komponenty",
    description: "Vývoj receptúr pre tesnenia, tlmiče vibrácií a technické komponenty podľa presných špecifikácií.",
    image: "/generated/product-components.png",
  },
];

export function ProductCategories() {
  return (
    <section className="section-light py-16 md:py-24">
      <div className="container-custom">
        <SectionHeader
          tag="Riešenia"
          title="Pre aké aplikácie vyvíjame zmesi"
          description="Špecializujeme sa na vývoj gumových zmesí pre rôzne odvetvia. Každú receptúru prispôsobíme vašim presným technickým požiadavkám."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {solutionCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white border-3 border-black shadow-brutal overflow-hidden group"
            >
              <div className="relative h-48 md:h-56 overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/30" />
                <div className="absolute bottom-4 left-4">
                  <div className="bg-orange-500 p-3 border-2 border-black inline-block">
                    <category.icon className="w-6 h-6 text-black" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="heading-md mb-3 break-words">{category.title}</h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

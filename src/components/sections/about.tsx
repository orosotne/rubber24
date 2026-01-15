"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared";
import { Ship, Car, Truck, Settings } from "lucide-react";

const productCategories = [
  {
    icon: Ship,
    title: "Nárazníky na lode",
    description: "Ochranné gumové nárazníky pre prístavy, móla a plavidlá. Vysoká odolnosť voči morskej vode a UV žiareniu.",
    image: "/generated/product-ship-fenders.png",
  },
  {
    icon: Car,
    title: "Autorohože",
    description: "Gumové rohože pre osobné a úžitkové vozidlá. Presné tvarovanie podľa modelu, jednoduché čistenie.",
    image: "/generated/product-car-mats.png",
  },
  {
    icon: Truck,
    title: "Zásterky na nákladné autá",
    description: "Ochranné zásterky pre nákladné vozidlá a návesy. Odolnosť voči mechanickému poškodeniu a poveternostným vplyvom.",
    image: "/generated/product-truck-mudflaps.png",
  },
  {
    icon: Settings,
    title: "Menšie komponenty",
    description: "Gumové zvony, tesnenia, tlmiče a ďalšie technické komponenty na mieru podľa vašich špecifikácií.",
    image: "/generated/product-components.png",
  },
];

export function About() {
  return (
    <section id="o-nas" className="section-light py-16 md:py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16 md:mb-24">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeader
              tag="O nás"
              title="Čomu sa venujeme"
            />
            
            <div className="space-y-6 text-lg text-gray-600">
              <p>
                RUBBER 24 s.r.o. pôsobí na slovenskom trhu od roku 2016. Za túto dobu 
                sme si vybudovali silné postavenie vo výrobe produktov z gumy a získali 
                dôveru zákazníkov z rôznych priemyselných odvetví.
              </p>
              <p>
                Špecializujeme sa na vývoj a výrobu gumových komponentov na mieru – 
                od jednoduchých tesnení až po komplexné priemyselné diely. Náš prístup 
                je založený na precíznosti, flexibilite a priamej komunikácii so zákazníkom.
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { value: "2016", label: "Založenie" },
                { value: "B2B", label: "Zameranie" },
                { value: "100%", label: "Na mieru" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center p-4 border-2 border-black bg-slate-50"
                >
                  <p className="font-bold text-2xl md:text-3xl text-orange-500">{stat.value}</p>
                  <p className="text-sm uppercase font-bold text-gray-500">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] border-3 border-black bg-white shadow-brutal overflow-hidden">
              <Image
                src="/generated/about-production.png"
                alt="Výrobný proces gumových komponentov"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Product Categories */}
        <div id="produkty">
          <SectionHeader
            tag="Produkty"
            title="Produktové kategórie"
            description="Vyrábame širokú škálu gumových produktov pre rôzne odvetvia. Každý výrobok prispôsobíme vašim presným požiadavkám."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {productCategories.map((category, index) => (
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
                  <h3 className="heading-md mb-3">{category.title}</h3>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

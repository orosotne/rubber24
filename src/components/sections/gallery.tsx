"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared";

const products = [
  {
    title: "Prístavný nárazník",
    description: "Vývoj zmesi odolnej voči morskej vode a UV žiareniu.",
    image: "/generated/gallery-port-fender.png",
  },
  {
    title: "Gumová rohož",
    description: "Receptúra s vysokou odolnosťou voči opotrebeniu a olejom.",
    image: "/generated/gallery-rubber-mat.png",
  },
  {
    title: "Technické tesnenie",
    description: "Zmes s presnou tvrdosťou a chemickou odolnosťou.",
    image: "/generated/gallery-seals.png",
  },
  {
    title: "Ochranná zásterka",
    description: "Receptúra odolná voči mrazu a mechanickému namáhaniu.",
    image: "/generated/gallery-mudflap-detail.png",
  },
  {
    title: "Tlmič vibrácií",
    description: "Zmes s optimálnymi tlmiacimi vlastnosťami.",
    image: "/generated/gallery-vibration-damper.png",
  },
  {
    title: "Gumový profil",
    description: "Vývoj zmesi pre extrudované profily a tesnenia.",
    image: "/generated/gallery-rubber-profile.png",
  },
  {
    title: "Podlahová krytina",
    description: "Receptúra s protišmykovou povrchovou úpravou.",
    image: "/generated/gallery-floor-covering.png",
  },
  {
    title: "Špeciálny komponent",
    description: "Zákazkový vývoj zmesi podľa vašich požiadaviek.",
    image: "/generated/gallery-custom-part.png",
  },
];

export function Gallery() {
  return (
    <section className="section-light py-16 md:py-24">
      <div className="container-custom">
        <SectionHeader
          tag="Vývoj receptúr"
          title="Pre aké produkty vyvíjame zmesi"
          description="Nevyrábame finálne výrobky – špecializujeme sa na vývoj receptúr a gumových zmesí na mieru. Tu sú ukážky produktov, pre ktoré sme vyvinuli optimálne materiálové riešenia."
          centered
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: (index % 4) * 0.1 }}
              className="bg-white border-2 border-black shadow-brutal-sm overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 group-hover:from-black/50" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-bold uppercase text-sm">
                    {product.title}
                  </h3>
                </div>
              </div>
              <div className="p-4 bg-white">
                <p className="text-gray-600 text-sm">{product.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <p className="text-gray-500">
            Zobrazené obrázky sú ilustračné. <strong className="text-gray-700">Vyrábame gumové zmesi a receptúry</strong> – finálne produkty vznikajú u našich partnerov alebo priamo u vás.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared";

export function AboutInfo() {
  return (
    <section className="section-light py-16 md:py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
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
                sme si vybudovali silné postavenie vo vývoji gumových zmesí a získali 
                dôveru zákazníkov z rôznych priemyselných odvetví.
              </p>
              <p>
                Špecializujeme sa na vývoj gumových zmesí a receptúr na mieru – 
                od jednoduchých materiálových riešení až po komplexné technické zmesi. 
                Náš prístup je založený na precíznosti, flexibilite a priamej komunikácii 
                so zákazníkom.
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-8">
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
                  className="text-center p-2 sm:p-4 border-2 border-black bg-slate-50"
                >
                  <p className="font-bold text-xl sm:text-2xl md:text-3xl text-orange-500">{stat.value}</p>
                  <p className="text-xs sm:text-sm uppercase font-bold text-gray-500">{stat.label}</p>
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
                alt="Laboratórium vývoja gumových zmesí"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

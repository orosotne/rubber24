"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Cog, Factory, Headphones, ArrowRight, FileText } from "lucide-react";

const benefits = [
  {
    icon: Cog,
    title: "Vývoj zmesí",
    description: "Receptúry na mieru",
  },
  {
    icon: Factory,
    title: "Výroba zmesí",
    description: "Presné technické parametre",
  },
  {
    icon: Headphones,
    title: "Technická podpora",
    description: "Konzultácie a optimalizácia",
  },
];

export function Hero() {
  return (
    <section className="relative pt-20 md:pt-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-slate-50">
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `repeating-linear-gradient(
                0deg,
                transparent,
                transparent 50px,
                #000 50px,
                #000 51px
              ),
              repeating-linear-gradient(
                90deg,
                transparent,
                transparent 50px,
                #000 50px,
                #000 51px
              )`,
            }}
          />
        </div>
      </div>

      <div className="container-custom relative z-10 py-12 md:py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="brutal-tag mb-6">Od roku 2016</span>
            
            <h1 className="heading-xl mb-6">
              Výskum a vývoj
              <br />
              <span className="text-orange-500">gumových zmesí</span>
              <br />
              na mieru
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
              Navrhujeme a vyrábame gumové zmesi s technickými parametrami 
              presne podľa vašich požiadaviek. Špecializujeme sa na vývoj 
              receptúr pre priemysel, automotive a námorné aplikácie.
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3 p-3 bg-white border-2 border-black"
                >
                  <benefit.icon className="w-8 h-8 text-orange-500 flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <p className="font-bold text-sm uppercase break-words">{benefit.title}</p>
                    <p className="text-xs text-gray-500 break-words">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="#kontakt" className="brutal-btn flex items-center justify-center gap-2">
                Požiadať o konzultáciu
                <ArrowRight size={18} />
              </Link>
              <Link href="#kontakt" className="brutal-btn-outline flex items-center justify-center gap-2">
                <FileText size={18} />
                Poslať zadanie
              </Link>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="brutal-card bg-black p-6 md:p-10 aspect-square md:aspect-[4/3] flex items-center justify-center relative overflow-hidden">
              {/* Laboratory visual */}
              <div className="absolute inset-0">
                <Image
                  src="/generated/hero-industrial.png"
                  alt="Laboratórium vývoja gumových zmesí"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-black/50" />
              </div>
              <div className="relative z-10 text-center">
                <div className="text-orange-500 text-6xl md:text-8xl lg:text-9xl font-bold animate-pulse">
                  [R&D]
                </div>
                <p className="text-white/80 text-sm md:text-base uppercase tracking-widest mt-4">
                  Výskum & Vývoj
                </p>
              </div>
            </div>
            
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="absolute -bottom-4 -left-4 md:-left-8 bg-orange-500 border-3 border-black p-4 md:p-6"
              style={{ boxShadow: "4px 4px 0px #000" }}
            >
              <p className="font-bold text-2xl md:text-4xl">8+</p>
              <p className="text-xs md:text-sm font-bold uppercase">Rokov skúseností</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

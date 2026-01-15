"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface CtaBannerProps {
  title: string;
  description?: string;
  primaryCta: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  variant?: "orange" | "black";
}

export function CtaBanner({
  title,
  description,
  primaryCta,
  secondaryCta,
  variant = "orange",
}: CtaBannerProps) {
  const isOrange = variant === "orange";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`border-3 border-black p-8 md:p-12 ${
        isOrange ? "bg-orange-500" : "bg-black"
      }`}
      style={{ boxShadow: "8px 8px 0px #000000" }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className={`text-center md:text-left ${isOrange ? "text-black" : "text-white"}`}>
          <h3 className="text-2xl md:text-3xl font-bold uppercase mb-2">{title}</h3>
          {description && (
            <p className={`text-lg ${isOrange ? "text-black/80" : "text-gray-300"}`}>
              {description}
            </p>
          )}
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href={primaryCta.href}
            className={`px-6 py-3 font-bold uppercase tracking-wide border-3 border-black transition-all duration-100 flex items-center justify-center gap-2 ${
              isOrange
                ? "bg-black text-white hover:bg-gray-900"
                : "bg-orange-500 text-black hover:bg-orange-400"
            }`}
            style={{ boxShadow: "4px 4px 0px " + (isOrange ? "#000" : "#F97316") }}
          >
            {primaryCta.text}
            <ArrowRight size={18} />
          </Link>
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className={`px-6 py-3 font-bold uppercase tracking-wide border-3 border-black transition-all duration-100 text-center ${
                isOrange
                  ? "bg-white text-black hover:bg-gray-100"
                  : "bg-white text-black hover:bg-gray-100"
              }`}
              style={{ boxShadow: "4px 4px 0px #000" }}
            >
              {secondaryCta.text}
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  tag?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeader({
  tag,
  title,
  description,
  centered = false,
  light = false,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={`mb-10 md:mb-16 ${centered ? "text-center" : ""}`}
    >
      {tag && (
        <span
          className={`inline-block px-3 py-1 text-sm font-bold uppercase mb-4 border-2 border-black ${
            light ? "bg-white text-black" : "bg-orange-500 text-black"
          }`}
        >
          {tag}
        </span>
      )}
      <h2
        className={`heading-lg mb-4 ${
          light ? "text-white" : "text-black"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-lg max-w-2xl ${
            centered ? "mx-auto" : ""
          } ${light ? "text-gray-300" : "text-gray-600"}`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}

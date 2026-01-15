"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedCardProps {
  children: ReactNode;
  index?: number;
  className?: string;
  variant?: "default" | "accent" | "dark";
}

export function AnimatedCard({
  children,
  index = 0,
  className = "",
  variant = "default",
}: AnimatedCardProps) {
  const baseClasses = "brutal-card p-6 md:p-8 transition-all duration-200";
  
  const variantClasses = {
    default: "bg-white",
    accent: "bg-orange-500",
    dark: "bg-black text-white",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </motion.div>
  );
}

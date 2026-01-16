"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { href: "/o-nas", label: "O nás" },
  { href: "/produkty", label: "Produkty" },
  { href: "/proces", label: "Proces" },
  { href: "/kontakt", label: "Kontakt" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-3 border-black">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="bg-black text-white px-4 py-2 font-bold text-xl md:text-2xl uppercase tracking-widest">
              RUBBER 24
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-bold uppercase text-sm tracking-wide transition-colors ${
                  isActive(item.href) 
                    ? "text-orange-500" 
                    : "hover:text-orange-500"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Link href="/kontakt" className="brutal-btn text-sm">
              Dopyt
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 border-2 border-black hover:bg-gray-100 transition-colors"
            aria-label={isOpen ? "Zavrieť menu" : "Otvoriť menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t-3 border-black overflow-hidden"
          >
            <div className="container-custom py-4">
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`font-bold uppercase text-lg tracking-wide transition-colors py-2 border-b border-gray-200 ${
                      isActive(item.href) 
                        ? "text-orange-500" 
                        : "hover:text-orange-500"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/kontakt"
                  onClick={() => setIsOpen(false)}
                  className="brutal-btn text-center mt-4"
                >
                  Dopyt
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

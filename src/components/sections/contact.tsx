"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  MapPin, 
  Mail, 
  Phone, 
  Clock, 
  Upload,
  Send
} from "lucide-react";

const productTypes = [
  { value: "naraznik", label: "Nárazníky na lode" },
  { value: "rohoz", label: "Autorohože" },
  { value: "zasterka", label: "Zásterky na nákladné autá" },
  { value: "tesnenie", label: "Tesnenia" },
  { value: "tlmic", label: "Tlmiče vibrácií" },
  { value: "ine", label: "Iné" },
];

const contactInfo = [
  {
    icon: MapPin,
    title: "Adresa",
    content: ["Remenárska 1220", "956 18 Bošany", "Slovensko"],
  },
  {
    icon: Mail,
    title: "Email",
    content: ["info@rubber24.sk"],
    href: "mailto:info@rubber24.sk",
  },
  {
    icon: Phone,
    title: "Telefón",
    content: ["[doplníme]"],
    href: "tel:+421000000000",
  },
  {
    icon: Clock,
    title: "Pracovná doba",
    content: ["Po - Pi: 8:00 - 16:00"],
  },
];

export function Contact() {
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    productType: "",
    message: "",
    gdprConsent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    alert("Ďakujeme za váš dopyt. Ozveme sa vám čo najskôr.");
  };

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section id="kontakt" className="section-gray py-16 md:py-24">
      <div className="container-custom">
        <SectionHeader
          tag="Kontakt"
          title="Pošlite zadanie"
          description="Ozveme sa vám s návrhom postupu. Odpovedáme spravidla do 1 pracovného dňa."
          centered
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="brutal-card p-6 md:p-8 bg-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Company */}
                <div>
                  <Label htmlFor="company" className="font-bold uppercase text-sm mb-2 block">
                    Firma *
                  </Label>
                  <Input
                    id="company"
                    required
                    value={formData.company}
                    onChange={(e) => handleChange("company", e.target.value)}
                    className="brutal-input"
                    placeholder="Názov spoločnosti"
                  />
                </div>

                {/* Name */}
                <div>
                  <Label htmlFor="name" className="font-bold uppercase text-sm mb-2 block">
                    Meno *
                  </Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className="brutal-input"
                    placeholder="Vaše meno"
                  />
                </div>

                {/* Email */}
                <div>
                  <Label htmlFor="email" className="font-bold uppercase text-sm mb-2 block">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className="brutal-input"
                    placeholder="vas@email.sk"
                  />
                </div>

                {/* Phone */}
                <div>
                  <Label htmlFor="phone" className="font-bold uppercase text-sm mb-2 block">
                    Telefón
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className="brutal-input"
                    placeholder="+421 ..."
                  />
                </div>

                {/* Product Type */}
                <div className="md:col-span-2">
                  <Label htmlFor="productType" className="font-bold uppercase text-sm mb-2 block">
                    Typ produktu
                  </Label>
                  <Select
                    value={formData.productType}
                    onValueChange={(value) => handleChange("productType", value)}
                  >
                    <SelectTrigger className="brutal-input">
                      <SelectValue placeholder="Vyberte kategóriu..." />
                    </SelectTrigger>
                    <SelectContent>
                      {productTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Message */}
                <div className="md:col-span-2">
                  <Label htmlFor="message" className="font-bold uppercase text-sm mb-2 block">
                    Popis požiadavky *
                  </Label>
                  <Textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    className="brutal-input resize-none"
                    placeholder="Popíšte váš projekt, rozmery, množstvo, materiál..."
                  />
                </div>

                {/* File Upload Placeholder */}
                <div className="md:col-span-2">
                  <Label className="font-bold uppercase text-sm mb-2 block">
                    Príloha (výkres, fotka)
                  </Label>
                  <div className="border-2 border-dashed border-gray-300 p-6 text-center hover:border-orange-500 transition-colors cursor-pointer">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-500">
                      Kliknutím alebo pretiahnutím nahrajte súbor
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      PDF, DWG, JPG, PNG (max. 10MB)
                    </p>
                  </div>
                </div>

                {/* GDPR Consent */}
                <div className="md:col-span-2">
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="gdprConsent"
                      checked={formData.gdprConsent}
                      onCheckedChange={(checked) => handleChange("gdprConsent", checked as boolean)}
                      className="mt-1"
                      required
                    />
                    <Label htmlFor="gdprConsent" className="text-sm text-gray-600 cursor-pointer">
                      Súhlasím so spracovaním osobných údajov za účelom vybavenia dopytu. 
                      Viac informácií nájdete v sekcii{" "}
                      <a href="/ochrana-sukromia" className="text-orange-500 hover:underline">
                        Ochrana súkromia
                      </a>
                      . *
                    </Label>
                  </div>
                </div>

                {/* Submit */}
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="brutal-btn w-full flex items-center justify-center gap-2"
                  >
                    <Send size={18} />
                    Odoslať dopyt
                  </button>
                </div>
              </div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="brutal-card-sm p-6 bg-white"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-orange-500 border-2 border-black">
                    <info.icon className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase text-sm mb-1">{info.title}</h4>
                    {info.content.map((line, i) => (
                      <p key={i} className="text-gray-600">
                        {info.href && i === 0 ? (
                          <a
                            href={info.href}
                            className="hover:text-orange-500 transition-colors"
                          >
                            {line}
                          </a>
                        ) : (
                          line
                        )}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Company Info */}
            <div className="brutal-card-sm p-6 bg-black text-white">
              <h4 className="font-bold uppercase text-sm mb-3 text-orange-500">
                Firemné údaje
              </h4>
              <div className="space-y-1 text-sm text-gray-300">
                <p><strong className="text-white">RUBBER 24, s.r.o.</strong></p>
                <p>IČO: 50157370</p>
                <p>DIČ: 2120211533</p>
                <p>IČ DPH: SK2120211533</p>
                <p className="text-xs text-gray-500 mt-2">
                  Registrácia podľa §4, od 1.4.2016
                </p>
              </div>
            </div>

            {/* Response Time */}
            <div className="p-4 bg-orange-100 border-2 border-orange-500">
              <p className="text-sm font-medium text-orange-800">
                Odpovedáme spravidla do 1 pracovného dňa.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

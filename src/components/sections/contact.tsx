"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  Send,
  Loader2,
  CheckCircle,
  XCircle,
  X,
  FileText
} from "lucide-react";
import { companyInfo, productTypes } from "@/lib/data";

const contactInfo = [
  {
    icon: MapPin,
    title: "Adresa",
    content: [companyInfo.address.street, `${companyInfo.address.zip} ${companyInfo.address.city}`, companyInfo.address.country],
  },
  {
    icon: Mail,
    title: "Email",
    content: [companyInfo.contact.email],
    href: `mailto:${companyInfo.contact.email}`,
  },
  {
    icon: Phone,
    title: "Telefón",
    content: [companyInfo.contact.phone],
    href: `tel:${companyInfo.contact.phone.replace(/\s/g, '')}`,
  },
  {
    icon: Clock,
    title: "Pracovná doba",
    content: [companyInfo.workingHours],
  },
];

const MAX_FILE_SIZE = 10 * 1024 * 1024;
const ALLOWED_EXTENSIONS = ['pdf', 'dwg', 'jpg', 'jpeg', 'png', 'webp'];
const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

export function Contact() {
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    productType: "",
    message: "",
    gdprConsent: false,
  });
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!RECAPTCHA_SITE_KEY) return;
    if (window.grecaptcha) {
      setRecaptchaLoaded(true);
      return;
    }
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
    script.async = true;
    script.onload = () => {
      window.grecaptcha.ready(() => setRecaptchaLoaded(true));
    };
    document.head.appendChild(script);
  }, []);

  const resetForm = () => {
    setFormData({
      company: "",
      name: "",
      email: "",
      phone: "",
      productType: "",
      message: "",
      gdprConsent: false,
    });
    setFile(null);
  };

  const validateFile = (file: File): string | null => {
    const extension = file.name.split('.').pop()?.toLowerCase();
    if (!extension || !ALLOWED_EXTENSIONS.includes(extension)) {
      return `Nepovolený typ súboru. Povolené sú: ${ALLOWED_EXTENSIONS.join(', ')}`;
    }
    if (file.size > MAX_FILE_SIZE) {
      return 'Súbor je príliš veľký. Maximálna veľkosť je 10MB.';
    }
    return null;
  };

  const handleFileSelect = (selectedFile: File) => {
    const error = validateFile(selectedFile);
    if (error) {
      setErrorMessage(error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
      return;
    }
    setFile(selectedFile);
    setErrorMessage("");
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) handleFileSelect(droppedFile);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) handleFileSelect(selectedFile);
  };

  const removeFile = () => {
    setFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.gdprConsent) {
      setErrorMessage("Pre odoslanie dopytu je potrebný súhlas so spracovaním osobných údajov.");
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
      return;
    }

    setSubmitStatus('loading');
    setErrorMessage("");

    try {
      let recaptchaToken = '';
      if (RECAPTCHA_SITE_KEY && recaptchaLoaded && window.grecaptcha) {
        try {
          recaptchaToken = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'submit_inquiry' });
        } catch {
          // Continue without token
        }
      }

      const submitData = new FormData();
      submitData.append('company', formData.company);
      submitData.append('name', formData.name);
      submitData.append('email', formData.email);
      submitData.append('phone', formData.phone);
      submitData.append('productType', formData.productType);
      submitData.append('message', formData.message);
      submitData.append('gdprConsent', String(formData.gdprConsent));
      submitData.append('recaptchaToken', recaptchaToken);
      
      if (file) submitData.append('attachment', file);

      const response = await fetch('/api/inquiry', {
        method: 'POST',
        body: submitData,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Chyba pri odosielaní dopytu');
      }

      setSubmitStatus('success');
      resetForm();
      setTimeout(() => setSubmitStatus('idle'), 10000);
      
    } catch (error) {
      console.error('Submit error:', error);
      setErrorMessage(error instanceof Error ? error.message : 'Nastala neočakávaná chyba');
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  return (
    <section className="section-gray py-16 md:py-24">
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
            <AnimatePresence>
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mb-6 p-4 bg-green-100 border-2 border-green-500 flex items-center gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-green-800">Dopyt bol úspešne odoslaný!</p>
                    <p className="text-sm text-green-700">Ďakujeme za váš záujem. Ozveme sa vám čo najskôr.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {submitStatus === 'error' && errorMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mb-6 p-4 bg-red-100 border-2 border-red-500 flex items-center gap-3"
                >
                  <XCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-red-800">Chyba pri odosielaní</p>
                    <p className="text-sm text-red-700">{errorMessage}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="brutal-card p-6 md:p-8 bg-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="company" className="font-bold uppercase text-sm mb-2 block">
                    Firma *
                  </Label>
                  <Input
                    id="company"
                    required
                    disabled={submitStatus === 'loading'}
                    value={formData.company}
                    onChange={(e) => handleChange("company", e.target.value)}
                    className="brutal-input"
                    placeholder="Názov spoločnosti"
                  />
                </div>

                <div>
                  <Label htmlFor="name" className="font-bold uppercase text-sm mb-2 block">
                    Meno *
                  </Label>
                  <Input
                    id="name"
                    required
                    disabled={submitStatus === 'loading'}
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className="brutal-input"
                    placeholder="Vaše meno"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="font-bold uppercase text-sm mb-2 block">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    disabled={submitStatus === 'loading'}
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className="brutal-input"
                    placeholder="vas@email.sk"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="font-bold uppercase text-sm mb-2 block">
                    Telefón
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    disabled={submitStatus === 'loading'}
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className="brutal-input"
                    placeholder="+421 ..."
                  />
                </div>

                <div className="md:col-span-2">
                  <Label htmlFor="productType" className="font-bold uppercase text-sm mb-2 block">
                    Typ služby
                  </Label>
                  <Select
                    value={formData.productType}
                    onValueChange={(value) => handleChange("productType", value)}
                    disabled={submitStatus === 'loading'}
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

                <div className="md:col-span-2">
                  <Label htmlFor="message" className="font-bold uppercase text-sm mb-2 block">
                    Popis požiadavky *
                  </Label>
                  <Textarea
                    id="message"
                    required
                    rows={5}
                    disabled={submitStatus === 'loading'}
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    className="brutal-input resize-none"
                    placeholder="Popíšte váš projekt, požadované vlastnosti materiálu, aplikáciu..."
                  />
                </div>

                <div className="md:col-span-2">
                  <Label className="font-bold uppercase text-sm mb-2 block">
                    Príloha (výkres, špecifikácia)
                  </Label>
                  
                  {file ? (
                    <div className="border-2 border-green-500 bg-green-50 p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <FileText className="w-8 h-8 text-green-600" />
                        <div>
                          <p className="font-medium text-green-800 truncate max-w-[200px] sm:max-w-none">{file.name}</p>
                          <p className="text-sm text-green-600">{formatFileSize(file.size)}</p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={removeFile}
                        disabled={submitStatus === 'loading'}
                        className="p-2 hover:bg-green-200 rounded transition-colors"
                        aria-label="Odstrániť súbor"
                      >
                        <X className="w-5 h-5 text-green-700" />
                      </button>
                    </div>
                  ) : (
                    <div
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      onClick={() => fileInputRef.current?.click()}
                      className={`
                        border-2 border-dashed p-6 text-center transition-colors cursor-pointer
                        ${isDragging ? 'border-orange-500 bg-orange-50' : 'border-gray-300 hover:border-orange-500'}
                        ${submitStatus === 'loading' ? 'opacity-50 cursor-not-allowed' : ''}
                      `}
                    >
                      <input
                        ref={fileInputRef}
                        type="file"
                        onChange={handleFileInputChange}
                        accept=".pdf,.dwg,.jpg,.jpeg,.png,.webp"
                        className="hidden"
                        disabled={submitStatus === 'loading'}
                      />
                      <Upload className={`w-8 h-8 mx-auto mb-2 ${isDragging ? 'text-orange-500' : 'text-gray-400'}`} />
                      <p className="text-sm text-gray-500">
                        {isDragging ? 'Pustite súbor tu' : 'Kliknutím alebo pretiahnutím nahrajte súbor'}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        PDF, DWG, JPG, PNG (max. 10MB)
                      </p>
                    </div>
                  )}
                </div>

                <div className="md:col-span-2">
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="gdprConsent"
                      checked={formData.gdprConsent}
                      onCheckedChange={(checked) => handleChange("gdprConsent", checked as boolean)}
                      className="mt-1"
                      disabled={submitStatus === 'loading'}
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

                <div className="md:col-span-2">
                  <button
                    type="submit"
                    disabled={submitStatus === 'loading'}
                    className="brutal-btn w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submitStatus === 'loading' ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Odosiela sa...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Odoslať dopyt
                      </>
                    )}
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
              <div key={info.title} className="brutal-card-sm p-6 bg-white">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-orange-500 border-2 border-black">
                    <info.icon className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase text-sm mb-1">{info.title}</h4>
                    {info.content.map((line, i) => (
                      <p key={i} className="text-gray-600">
                        {info.href && i === 0 ? (
                          <a href={info.href} className="hover:text-orange-500 transition-colors">
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

            <div className="brutal-card-sm p-6 bg-black text-white">
              <h4 className="font-bold uppercase text-sm mb-3 text-orange-500">
                Firemné údaje
              </h4>
              <div className="space-y-1 text-sm text-gray-300">
                <p><strong className="text-white">{companyInfo.name}</strong></p>
                <p>IČO: {companyInfo.ico}</p>
                <p>DIČ: {companyInfo.dic}</p>
                <p>IČ DPH: {companyInfo.icDph}</p>
              </div>
            </div>

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

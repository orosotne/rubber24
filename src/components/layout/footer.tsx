import Link from "next/link";
import { FlaskConical } from "lucide-react";

const quickLinks = [
  { href: "/o-nas", label: "O nás" },
  { href: "/produkty", label: "Riešenia" },
  { href: "/proces", label: "Proces" },
  { href: "/kontakt", label: "Kontakt" },
];

const legalLinks = [
  { href: "/ochrana-sukromia", label: "Ochrana súkromia" },
  { href: "/gdpr", label: "GDPR" },
  { href: "/obchodne-podmienky", label: "Obchodné podmienky" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white border-t-4 border-orange-500">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="bg-white text-black px-4 py-2 font-bold text-2xl uppercase tracking-widest inline-block mb-6">
              RUBBER 24
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Špecializujeme sa na vývoj gumových zmesí a receptúr na mieru. Od roku 2016 
              dodávame materiálové riešenia pre priemysel, automotive a námorné aplikácie.
            </p>
            
            {/* SK CRIS Badge */}
            <div className="flex items-center gap-3 mb-4 p-3 bg-slate-900 border border-slate-700 max-w-md">
              <FlaskConical className="w-6 h-6 text-orange-500 flex-shrink-0" />
              <div className="text-sm">
                <p className="text-orange-500 font-bold">SK CRIS certifikovaný</p>
                <p className="text-gray-400 text-xs">Spôsobilosť vykonávať výskum a vývoj</p>
              </div>
            </div>

            <div className="text-gray-400 text-sm space-y-1">
              <p>RUBBER 24, s.r.o.</p>
              <p>IČO: 50157370</p>
              <p>DIČ: 2120211533</p>
              <p>IČ DPH: SK2120211533</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold uppercase tracking-wide text-lg mb-4 text-orange-500">
              Rýchle odkazy
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white hover:underline transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold uppercase tracking-wide text-lg mb-4 text-orange-500">
              Kontakt
            </h4>
            <div className="space-y-3 text-gray-300">
              <p>
                <span className="block text-white font-bold">Adresa:</span>
                Remenárska 1220<br />
                956 18 Bošany<br />
                Slovensko
              </p>
              <p>
                <span className="block text-white font-bold">Email:</span>
                <a href="mailto:info@rubber24.sk" className="hover:text-orange-500 transition-colors break-all">
                  info@rubber24.sk
                </a>
                <br />
                <a href="mailto:rubber24rubber24@gmail.com" className="hover:text-orange-500 transition-colors break-all">
                  rubber24rubber24@gmail.com
                </a>
              </p>
              <p>
                <span className="block text-white font-bold">Telefón:</span>
                <a href="tel:+421917588737" className="hover:text-orange-500 transition-colors">
                  +421 917 588 737
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} RUBBER 24 s.r.o. Všetky práva vyhradené.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

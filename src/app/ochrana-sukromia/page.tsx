import { Metadata } from "next";
import Link from "next/link";
import { Navbar, Footer } from "@/components/layout";

export const metadata: Metadata = {
  title: "Ochrana súkromia | RUBBER 24",
  description: "Zásady ochrany osobných údajov spoločnosti RUBBER 24, s.r.o. Informácie o spracovaní osobných údajov, cookies a vašich právach.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-black text-white py-16 md:py-24 border-b-4 border-orange-500">
          <div className="container-custom">
            <h1 className="heading-xl mb-4">Ochrana súkromia</h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Zásady ochrany osobných údajov spoločnosti RUBBER 24, s.r.o.
            </p>
            <p className="text-gray-400 mt-4">Účinné od: 15. januára 2026</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              
              {/* Prevádzkovateľ */}
              <div className="brutal-card p-6 md:p-8 mb-8">
                <h2 className="heading-md mb-4 text-orange-500">1. Prevádzkovateľ</h2>
                <div className="space-y-2 text-gray-700">
                  <p><strong>RUBBER 24, s.r.o.</strong></p>
                  <p>Remenárska 1220, 956 18 Bošany</p>
                  <p>IČO: 50157370</p>
                  <p>DIČ: 2120211533</p>
                  <p>IČ DPH: SK2120211533</p>
                  <p>Dátum vzniku: 10. februára 2016</p>
                  <p>SK NACE: 22190 – Výroba ostatných výrobkov z gumy</p>
                </div>
                <div className="mt-4 pt-4 border-t-2 border-black">
                  <p className="font-bold">Kontakt pre otázky ochrany údajov:</p>
                  <p>Email: <a href="mailto:info@rubber24.sk" className="text-orange-500 hover:underline">info@rubber24.sk</a></p>
                  <p>Alternatívny email: <a href="mailto:rubber24rubber24@gmail.com" className="text-orange-500 hover:underline">rubber24rubber24@gmail.com</a></p>
                  <p>Telefón: <a href="tel:+421917588737" className="text-orange-500 hover:underline">+421 917 588 737</a></p>
                </div>
              </div>

              {/* Aké údaje zbierame */}
              <div className="brutal-card p-6 md:p-8 mb-8">
                <h2 className="heading-md mb-4 text-orange-500">2. Aké osobné údaje zbierame</h2>
                <p className="text-gray-700 mb-4">V závislosti od vašej interakcie s naším webom môžeme spracúvať:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Identifikačné údaje:</strong> meno, priezvisko</li>
                  <li><strong>Kontaktné údaje:</strong> email, telefónne číslo</li>
                  <li><strong>Prihlasovacie údaje:</strong> email, heslo (uložené v šifrovanej forme)</li>
                  <li><strong>Fakturačné a doručovacie údaje:</strong> adresa, IČO, DIČ (pri firemných zákazníkoch)</li>
                  <li><strong>Obsah komunikácie:</strong> správy z kontaktného formulára alebo chatu</li>
                  <li><strong>Technické údaje:</strong> IP adresa, typ prehliadača, operačný systém, logy prístupov</li>
                  <li><strong>Cookies a analytické údaje:</strong> identifikátory pre Google Analytics</li>
                </ul>
              </div>

              {/* Účely spracovania */}
              <div className="brutal-card p-6 md:p-8 mb-8">
                <h2 className="heading-md mb-4 text-orange-500">3. Účely a právne základy spracovania</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-2 border-black">
                    <thead className="bg-orange-500">
                      <tr>
                        <th className="p-3 border-b-2 border-black font-bold">Účel</th>
                        <th className="p-3 border-b-2 border-black font-bold">Právny základ</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700">
                      <tr className="border-b border-gray-300">
                        <td className="p-3">Vytvorenie a správa účtu</td>
                        <td className="p-3">Plnenie zmluvy / predzmluvné konanie</td>
                      </tr>
                      <tr className="border-b border-gray-300 bg-gray-50">
                        <td className="p-3">Vybavenie dopytov a podpora</td>
                        <td className="p-3">Plnenie zmluvy / oprávnený záujem</td>
                      </tr>
                      <tr className="border-b border-gray-300">
                        <td className="p-3">Fakturácia a účtovníctvo</td>
                        <td className="p-3">Zákonná povinnosť</td>
                      </tr>
                      <tr className="border-b border-gray-300 bg-gray-50">
                        <td className="p-3">Newsletter a marketing</td>
                        <td className="p-3">Súhlas (odvolateľný)</td>
                      </tr>
                      <tr className="border-b border-gray-300">
                        <td className="p-3">Analytika a zlepšovanie webu</td>
                        <td className="p-3">Súhlas / oprávnený záujem</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="p-3">Bezpečnosť a prevencia zneužitia</td>
                        <td className="p-3">Oprávnený záujem</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Doba uchovávania */}
              <div className="brutal-card p-6 md:p-8 mb-8">
                <h2 className="heading-md mb-4 text-orange-500">4. Doba uchovávania údajov</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Údaje z účtu a podpory:</strong> po dobu trvania vzťahu + 3 roky</li>
                  <li><strong>Účtovné doklady:</strong> 10 rokov od konca účtovného obdobia</li>
                  <li><strong>Bezpečnostné logy:</strong> 1 rok</li>
                  <li><strong>Newsletter:</strong> do odhlásenia / odvolania súhlasu</li>
                  <li><strong>Analytické údaje (GA):</strong> štandardne 26 mesiacov</li>
                </ul>
              </div>

              {/* Príjemcovia */}
              <div className="brutal-card p-6 md:p-8 mb-8">
                <h2 className="heading-md mb-4 text-orange-500">5. Príjemcovia údajov</h2>
                <p className="text-gray-700 mb-4">Vaše údaje môžeme zdieľať s:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Poskytovateľmi hostingu a IT infraštruktúry</li>
                  <li>Externými účtovníkmi</li>
                  <li>Poskytovateľom analytiky (Google Ireland Limited)</li>
                  <li>Poskytovateľom emailových/newsletter nástrojov</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  <strong>Prenosy mimo EÚ:</strong> Pri využívaní služieb Google Analytics môže dochádzať 
                  k prenosu údajov mimo EÚ. Spoliehame sa na štandardné zmluvné doložky EÚ.
                </p>
              </div>

              {/* Cookies */}
              <div className="brutal-card p-6 md:p-8 mb-8">
                <h2 className="heading-md mb-4 text-orange-500">6. Cookies</h2>
                <p className="text-gray-700 mb-4">Na našom webe používame:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  <li><strong>Nevyhnutné cookies:</strong> zabezpečujú základnú funkčnosť webu</li>
                  <li><strong>Analytické cookies (Google Analytics):</strong> pomáhajú nám zlepšovať obsah a výkon webu</li>
                </ul>
                <p className="text-gray-700 mb-4">
                  Analytické cookies aktivujeme len po vašom súhlase prostredníctvom cookies banneru.
                </p>
                <p className="text-gray-700">
                  <strong>Správa súhlasov:</strong> Súhlas môžete kedykoľvek odvolať zmenou nastavení 
                  v cookies banneri alebo vo svojom prehliadači. Pre blokovanie Google Analytics môžete 
                  použiť doplnok <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline">Google Analytics Opt-out</a>.
                </p>
              </div>

              {/* Práva */}
              <div className="brutal-card p-6 md:p-8 mb-8">
                <h2 className="heading-md mb-4 text-orange-500">7. Vaše práva</h2>
                <p className="text-gray-700 mb-4">Ako dotknutá osoba máte právo na:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  <li><strong>Prístup</strong> k vašim osobným údajom</li>
                  <li><strong>Opravu</strong> nesprávnych alebo neúplných údajov</li>
                  <li><strong>Vymazanie</strong> údajov („právo byť zabudnutý")</li>
                  <li><strong>Obmedzenie</strong> spracovania</li>
                  <li><strong>Prenosnosť</strong> údajov</li>
                  <li><strong>Námietku</strong> proti spracovaniu založenému na oprávnenom záujme</li>
                  <li><strong>Odvolanie súhlasu</strong> kedykoľvek bez vplyvu na zákonnosť predchádzajúceho spracovania</li>
                </ul>
                <p className="text-gray-700">
                  Žiadosti posielajte na <a href="mailto:info@rubber24.sk" className="text-orange-500 hover:underline">info@rubber24.sk</a> alebo <a href="mailto:rubber24rubber24@gmail.com" className="text-orange-500 hover:underline">rubber24rubber24@gmail.com</a>. 
                  Na vašu žiadosť odpovieme do 30 dní.
                </p>
              </div>

              {/* Sťažnosť */}
              <div className="brutal-card p-6 md:p-8 mb-8">
                <h2 className="heading-md mb-4 text-orange-500">8. Sťažnosť na dozorný orgán</h2>
                <p className="text-gray-700">
                  Ak sa domnievate, že spracovanie vašich údajov porušuje predpisy o ochrane údajov, 
                  máte právo podať sťažnosť na:
                </p>
                <div className="mt-4 p-4 bg-gray-50 border-2 border-black">
                  <p><strong>Úrad na ochranu osobných údajov Slovenskej republiky</strong></p>
                  <p>Hraničná 12, 820 07 Bratislava 27</p>
                  <p>Web: <a href="https://dataprotection.gov.sk" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline">dataprotection.gov.sk</a></p>
                </div>
              </div>

              {/* Bezpečnosť */}
              <div className="brutal-card p-6 md:p-8 mb-8">
                <h2 className="heading-md mb-4 text-orange-500">9. Bezpečnosť údajov</h2>
                <p className="text-gray-700">
                  Implementujeme primerané technické a organizačné opatrenia na ochranu vašich údajov, vrátane:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mt-4">
                  <li>Šifrovania hesiel a citlivých údajov</li>
                  <li>Zabezpečeného pripojenia (HTTPS)</li>
                  <li>Obmedzeného prístupu len pre poverené osoby</li>
                  <li>Pravidelných zálohovacích procesov</li>
                </ul>
              </div>

              {/* Deti */}
              <div className="brutal-card p-6 md:p-8 mb-8">
                <h2 className="heading-md mb-4 text-orange-500">10. Deti</h2>
                <p className="text-gray-700">
                  Náš web nie je určený pre osoby mladšie ako 16 rokov. Vedome nezhromažďujeme 
                  osobné údaje detí. Ak zistíme, že sme získali údaje dieťaťa, bezodkladne ich vymažeme.
                </p>
              </div>

              {/* Zmeny */}
              <div className="brutal-card p-6 md:p-8 mb-8">
                <h2 className="heading-md mb-4 text-orange-500">11. Zmeny zásad</h2>
                <p className="text-gray-700">
                  Tieto zásady môžeme priebežne aktualizovať. Aktuálna verzia bude vždy zverejnená 
                  na tejto stránke s uvedeným dátumom účinnosti. O významných zmenách vás budeme informovať.
                </p>
              </div>

              {/* Súvisiace stránky */}
              <div className="flex flex-wrap gap-4 mt-8">
                <Link href="/gdpr" className="brutal-btn-outline text-sm">
                  GDPR informácie
                </Link>
                <Link href="/obchodne-podmienky" className="brutal-btn-outline text-sm">
                  Obchodné podmienky
                </Link>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

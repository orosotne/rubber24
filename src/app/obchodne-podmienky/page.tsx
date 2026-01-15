import { Metadata } from "next";
import Link from "next/link";
import { Navbar, Footer } from "@/components/layout";

export const metadata: Metadata = {
  title: "Obchodné podmienky | RUBBER 24",
  description: "Obchodné podmienky a podmienky používania webovej stránky RUBBER 24, s.r.o. - slovenského výrobcu gumových komponentov.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-black text-white py-16 md:py-24 border-b-4 border-orange-500">
          <div className="container-custom">
            <h1 className="heading-xl mb-4">Obchodné podmienky</h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Podmienky používania webovej stránky RUBBER 24
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
                <h2 className="heading-md mb-4 text-orange-500">1. Prevádzkovateľ webovej stránky</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-700"><strong>RUBBER 24, s.r.o.</strong></p>
                    <p className="text-gray-700">Remenárska 1220</p>
                    <p className="text-gray-700">956 18 Bošany</p>
                    <p className="text-gray-700">Slovenská republika</p>
                  </div>
                  <div>
                    <p className="text-gray-700">IČO: 50157370</p>
                    <p className="text-gray-700">DIČ: 2120211533</p>
                    <p className="text-gray-700">IČ DPH: SK2120211533</p>
                    <p className="text-gray-700">Registrácia DPH: §4, od 1.4.2016</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t-2 border-black">
                  <p className="text-gray-700">
                    <strong>Kontakt:</strong><br />
                    Email: <a href="mailto:info@rubber24.sk" className="text-orange-500 hover:underline">info@rubber24.sk</a><br />
                    Alternatívny email: <a href="mailto:rubber24rubber24@gmail.com" className="text-orange-500 hover:underline">rubber24rubber24@gmail.com</a><br />
                    Telefón: <a href="tel:+421917588737" className="text-orange-500 hover:underline">+421 917 588 737</a>
                  </p>
                </div>
              </div>

              {/* Charakter webu */}
              <div className="brutal-card p-6 md:p-8 mb-8 bg-orange-50">
                <h2 className="heading-md mb-4">2. Charakter webovej stránky</h2>
                <p className="text-gray-700 mb-4">
                  Táto webová stránka má <strong>informačný charakter</strong>. Slúži na prezentáciu 
                  spoločnosti RUBBER 24, s.r.o., jej služieb a výrobných možností v oblasti gumových komponentov.
                </p>
                <p className="text-gray-700">
                  <strong>Prostredníctvom tohto webu neuzatvárame online zmluvy</strong> a nepredávame 
                  tovar ani služby priamo. Pre konkrétne objednávky nás prosím kontaktujte emailom 
                  alebo telefonicky.
                </p>
              </div>

              {/* Obsah a zodpovednosť */}
              <div className="brutal-card p-6 md:p-8 mb-8">
                <h2 className="heading-md mb-4 text-orange-500">3. Obsah webovej stránky</h2>
                <p className="text-gray-700 mb-4">
                  Informácie uvedené na tejto webovej stránke sú poskytované za účelom všeobecnej 
                  informovanosti o našej spoločnosti a jej službách.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>
                    Prevádzkovateľ vynakladá primerané úsilie na zabezpečenie správnosti a aktuálnosti 
                    informácií, avšak <strong>negarantuje ich úplnosť ani presnosť</strong>.
                  </li>
                  <li>
                    Informácie na webe môžu byť kedykoľvek zmenené bez predchádzajúceho upozornenia.
                  </li>
                  <li>
                    Konkrétne špecifikácie produktov, ceny a dostupnosť je potrebné overiť priamym 
                    kontaktom s našou spoločnosťou.
                  </li>
                  <li>
                    Obrázky produktov môžu byť ilustračné a skutočné výrobky sa môžu líšiť.
                  </li>
                </ul>
              </div>

              {/* Dostupnosť */}
              <div className="brutal-card p-6 md:p-8 mb-8">
                <h2 className="heading-md mb-4 text-orange-500">4. Dostupnosť webovej stránky</h2>
                <p className="text-gray-700 mb-4">
                  Vynakladáme primerané úsilie na zabezpečenie nepretržitej dostupnosti webovej stránky, avšak:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>
                    Negarantujeme nepretržitú dostupnosť webu ani bezchybnosť jeho fungovania.
                  </li>
                  <li>
                    Web môže byť dočasne nedostupný z dôvodu údržby, aktualizácií alebo technických problémov.
                  </li>
                  <li>
                    Prevádzkovateľ nezodpovedá za akékoľvek škody vzniknuté z dočasnej nedostupnosti webu.
                  </li>
                </ul>
              </div>

              {/* Duševné vlastníctvo */}
              <div className="brutal-card p-6 md:p-8 mb-8">
                <h2 className="heading-md mb-4 text-orange-500">5. Duševné vlastníctvo</h2>
                <p className="text-gray-700 mb-4">
                  Všetok obsah webovej stránky je chránený autorským právom a inými právami 
                  duševného vlastníctva:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  <li>Texty, grafika, logá, obrázky a dizajn</li>
                  <li>Fotografie produktov a výrobného procesu</li>
                  <li>Štruktúra a usporiadanie stránky</li>
                  <li>Ochranné známky a obchodné mená</li>
                </ul>
                <p className="text-gray-700">
                  <strong>Bez predchádzajúceho písomného súhlasu</strong> prevádzkovateľa je zakázané 
                  kopírovať, reprodukovať, distribuovať, publikovať alebo inak používať akýkoľvek 
                  obsah z tejto webovej stránky na komerčné účely.
                </p>
              </div>

              {/* Odkazy tretích strán */}
              <div className="brutal-card p-6 md:p-8 mb-8">
                <h2 className="heading-md mb-4 text-orange-500">6. Odkazy na tretie strany</h2>
                <p className="text-gray-700 mb-4">
                  Táto webová stránka môže obsahovať odkazy na externé webové stránky tretích strán.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>
                    Prevádzkovateľ nemá kontrolu nad obsahom externých stránok a nezodpovedá za ich obsah.
                  </li>
                  <li>
                    Uvedenie odkazu neznamená schválenie ani odporúčanie externej stránky.
                  </li>
                  <li>
                    Používanie externých stránok je na vlastné riziko používateľa.
                  </li>
                </ul>
              </div>

              {/* Obmedzenie zodpovednosti */}
              <div className="brutal-card p-6 md:p-8 mb-8">
                <h2 className="heading-md mb-4 text-orange-500">7. Obmedzenie zodpovednosti</h2>
                <p className="text-gray-700 mb-4">
                  V rozsahu dovolenom platnými právnymi predpismi:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  <li>
                    Prevádzkovateľ nezodpovedá za akúkoľvek priamu, nepriamu, náhodnú, následnú alebo 
                    osobitnú škodu vyplývajúcu z používania tejto webovej stránky.
                  </li>
                  <li>
                    Prevádzkovateľ nezodpovedá za ušlý zisk, stratu dát alebo prerušenie podnikania.
                  </li>
                  <li>
                    Informácie na webe nenahrádzajú odborné poradenstvo.
                  </li>
                </ul>
                <p className="text-gray-700">
                  Toto obmedzenie zodpovednosti sa uplatňuje v maximálnom rozsahu povolenom 
                  príslušnými právnymi predpismi.
                </p>
              </div>

              {/* Používanie webu */}
              <div className="brutal-card p-6 md:p-8 mb-8">
                <h2 className="heading-md mb-4 text-orange-500">8. Pravidlá používania</h2>
                <p className="text-gray-700 mb-4">
                  Pri používaní tejto webovej stránky sa zaväzujete:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Používať web len na zákonné účely</li>
                  <li>Nepokúšať sa o neoprávnený prístup k systémom alebo dátam</li>
                  <li>Nezasahovať do fungovania webu alebo serverov</li>
                  <li>Nezneužívať kontaktné formuláre na rozosielanie nevyžiadanej pošty</li>
                  <li>Neporušovať práva duševného vlastníctva</li>
                </ul>
              </div>

              {/* Podnety a sťažnosti */}
              <div className="brutal-card p-6 md:p-8 mb-8 bg-orange-50">
                <h2 className="heading-md mb-4">9. Podnety a sťažnosti</h2>
                <p className="text-gray-700 mb-4">
                  Ak máte akékoľvek podnety, pripomienky alebo sťažnosti týkajúce sa tejto webovej 
                  stránky alebo našich služieb, kontaktujte nás:
                </p>
                <div className="bg-white p-4 border-2 border-black">
                  <p className="text-gray-700">
                    <strong>Email:</strong> <a href="mailto:info@rubber24.sk" className="text-orange-500 hover:underline">info@rubber24.sk</a><br />
                    <strong>Alternatívny email:</strong> <a href="mailto:rubber24rubber24@gmail.com" className="text-orange-500 hover:underline">rubber24rubber24@gmail.com</a><br />
                    <strong>Telefón:</strong> <a href="tel:+421917588737" className="text-orange-500 hover:underline">+421 917 588 737</a><br />
                    <strong>Poštová adresa:</strong> RUBBER 24, s.r.o., Remenárska 1220, 956 18 Bošany
                  </p>
                </div>
                <p className="text-gray-700 mt-4">
                  Na vaše podnety odpovieme v primeranej lehote.
                </p>
              </div>

              {/* Zmeny podmienok */}
              <div className="brutal-card p-6 md:p-8 mb-8">
                <h2 className="heading-md mb-4 text-orange-500">10. Zmeny obchodných podmienok</h2>
                <p className="text-gray-700">
                  Prevádzkovateľ si vyhradzuje právo tieto obchodné podmienky kedykoľvek zmeniť. 
                  Aktuálna verzia bude vždy zverejnená na tejto stránke s uvedeným dátumom účinnosti. 
                  Pokračovaním v používaní webovej stránky po zverejnení zmien vyjadrujete súhlas 
                  s aktualizovanými podmienkami.
                </p>
              </div>

              {/* Rozhodné právo */}
              <div className="brutal-card p-6 md:p-8 mb-8">
                <h2 className="heading-md mb-4 text-orange-500">11. Rozhodné právo a riešenie sporov</h2>
                <p className="text-gray-700 mb-4">
                  Tieto obchodné podmienky sa riadia právnym poriadkom Slovenskej republiky.
                </p>
                <p className="text-gray-700 mb-4">
                  Akékoľvek spory vyplývajúce z používania tejto webovej stránky alebo súvisiace 
                  s týmito podmienkami budú riešené príslušnými súdmi Slovenskej republiky.
                </p>
                <p className="text-gray-700">
                  Spotrebitelia majú možnosť obrátiť sa na platformu pre riešenie sporov online 
                  (ODR) na adrese: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline">ec.europa.eu/consumers/odr</a>
                </p>
              </div>

              {/* Záverečné ustanovenia */}
              <div className="brutal-card p-6 md:p-8 mb-8">
                <h2 className="heading-md mb-4 text-orange-500">12. Záverečné ustanovenia</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>
                    Ak bude niektoré ustanovenie týchto podmienok vyhlásené za neplatné, ostatné 
                    ustanovenia zostávajú v platnosti.
                  </li>
                  <li>
                    Neuplatnenie akéhokoľvek práva podľa týchto podmienok neznamená vzdanie sa tohto práva.
                  </li>
                  <li>
                    Tieto podmienky predstavujú úplnú dohodu medzi vami a prevádzkovateľom vo vzťahu 
                    k používaniu webovej stránky.
                  </li>
                </ul>
              </div>

              {/* Súvisiace stránky */}
              <div className="flex flex-wrap gap-4 mt-8">
                <Link href="/ochrana-sukromia" className="brutal-btn-outline text-sm">
                  Ochrana súkromia
                </Link>
                <Link href="/gdpr" className="brutal-btn-outline text-sm">
                  GDPR informácie
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

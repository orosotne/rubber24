import { Metadata } from "next";
import Link from "next/link";
import { Navbar, Footer } from "@/components/layout";

export const metadata: Metadata = {
  title: "GDPR | RUBBER 24",
  description: "Informácie o spracovaní osobných údajov podľa GDPR. Práva dotknutých osôb a povinnosti prevádzkovateľa RUBBER 24, s.r.o.",
};

export default function GDPRPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-black text-white py-16 md:py-24 border-b-4 border-orange-500">
          <div className="container-custom">
            <h1 className="heading-xl mb-4">GDPR</h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Informácie o spracovaní osobných údajov podľa Nariadenia EÚ 2016/679 (GDPR)
            </p>
            <p className="text-gray-400 mt-4">Účinné od: 15. januára 2026</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">

              {/* Úvod */}
              <div className="brutal-card p-6 md:p-8 mb-8 bg-orange-50">
                <h2 className="heading-md mb-4">Čo je GDPR?</h2>
                <p className="text-gray-700">
                  GDPR (General Data Protection Regulation) je nariadenie Európskej únie, ktoré upravuje 
                  ochranu osobných údajov fyzických osôb. Toto nariadenie nám ukladá povinnosti pri 
                  spracovaní vašich údajov a vám garantuje práva na kontrolu nad tým, ako sú vaše 
                  údaje spracúvané.
                </p>
              </div>

              {/* Prevádzkovateľ */}
              <div className="brutal-card p-6 md:p-8 mb-8">
                <h2 className="heading-md mb-4 text-orange-500">Prevádzkovateľ osobných údajov</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold mb-2">Identifikácia</h3>
                    <div className="space-y-1 text-gray-700">
                      <p><strong>RUBBER 24, s.r.o.</strong></p>
                      <p>Remenárska 1220</p>
                      <p>956 18 Bošany</p>
                      <p>Slovenská republika</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Registračné údaje</h3>
                    <div className="space-y-1 text-gray-700">
                      <p>IČO: 50157370</p>
                      <p>DIČ: 2120211533</p>
                      <p>IČ DPH: SK2120211533</p>
                      <p>Registrácia: §4, od 1.4.2016</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t-2 border-black">
                  <h3 className="font-bold mb-2">Kontakt pre GDPR</h3>
                  <p className="text-gray-700">
                    Email: <a href="mailto:info@rubber24.sk" className="text-orange-500 hover:underline">info@rubber24.sk</a><br />
                    Alternatívne: <a href="mailto:rubber24rubber24@gmail.com" className="text-orange-500 hover:underline">rubber24rubber24@gmail.com</a><br />
                    Telefón: <a href="tel:+421917588737" className="text-orange-500 hover:underline">+421 917 588 737</a>
                  </p>
                </div>
              </div>

              {/* Účely spracovania */}
              <div className="brutal-card p-6 md:p-8 mb-8">
                <h2 className="heading-md mb-4 text-orange-500">Účely spracovania osobných údajov</h2>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h3 className="font-bold mb-2">Vytvorenie a správa účtu</h3>
                    <p className="text-gray-700 text-sm"><strong>Právny základ:</strong> Plnenie zmluvy (čl. 6 ods. 1 písm. b) GDPR)</p>
                    <p className="text-gray-700 text-sm"><strong>Údaje:</strong> Meno, email, heslo</p>
                    <p className="text-gray-700 text-sm"><strong>Doba uchovávania:</strong> Po dobu trvania účtu + 3 roky</p>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4">
                    <h3 className="font-bold mb-2">Vybavenie dopytov a podpora</h3>
                    <p className="text-gray-700 text-sm"><strong>Právny základ:</strong> Plnenie zmluvy / oprávnený záujem</p>
                    <p className="text-gray-700 text-sm"><strong>Údaje:</strong> Meno, kontaktné údaje, obsah správy</p>
                    <p className="text-gray-700 text-sm"><strong>Doba uchovávania:</strong> 3 roky od poslednej komunikácie</p>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4">
                    <h3 className="font-bold mb-2">Fakturácia a účtovníctvo</h3>
                    <p className="text-gray-700 text-sm"><strong>Právny základ:</strong> Zákonná povinnosť (čl. 6 ods. 1 písm. c) GDPR)</p>
                    <p className="text-gray-700 text-sm"><strong>Údaje:</strong> Fakturačné údaje, IČO, DIČ</p>
                    <p className="text-gray-700 text-sm"><strong>Doba uchovávania:</strong> 10 rokov (zákon o účtovníctve)</p>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4">
                    <h3 className="font-bold mb-2">Newsletter a marketingová komunikácia</h3>
                    <p className="text-gray-700 text-sm"><strong>Právny základ:</strong> Súhlas (čl. 6 ods. 1 písm. a) GDPR)</p>
                    <p className="text-gray-700 text-sm"><strong>Údaje:</strong> Email, prípadne meno</p>
                    <p className="text-gray-700 text-sm"><strong>Doba uchovávania:</strong> Do odvolania súhlasu</p>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4">
                    <h3 className="font-bold mb-2">Analytika webu (Google Analytics)</h3>
                    <p className="text-gray-700 text-sm"><strong>Právny základ:</strong> Súhlas (čl. 6 ods. 1 písm. a) GDPR)</p>
                    <p className="text-gray-700 text-sm"><strong>Údaje:</strong> Cookies, IP adresa (anonymizovaná), správanie na webe</p>
                    <p className="text-gray-700 text-sm"><strong>Doba uchovávania:</strong> 26 mesiacov</p>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4">
                    <h3 className="font-bold mb-2">Bezpečnosť a prevencia zneužitia</h3>
                    <p className="text-gray-700 text-sm"><strong>Právny základ:</strong> Oprávnený záujem (čl. 6 ods. 1 písm. f) GDPR)</p>
                    <p className="text-gray-700 text-sm"><strong>Údaje:</strong> IP adresa, logy prístupov</p>
                    <p className="text-gray-700 text-sm"><strong>Doba uchovávania:</strong> 1 rok</p>
                  </div>
                </div>
              </div>

              {/* Práva dotknutých osôb */}
              <div className="brutal-card p-6 md:p-8 mb-8">
                <h2 className="heading-md mb-4 text-orange-500">Vaše práva podľa GDPR</h2>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 border-2 border-black">
                    <h3 className="font-bold mb-2">Právo na prístup</h3>
                    <p className="text-gray-700 text-sm">
                      Máte právo získať potvrdenie, či spracúvame vaše údaje, a ak áno, 
                      získať k nim prístup.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 border-2 border-black">
                    <h3 className="font-bold mb-2">Právo na opravu</h3>
                    <p className="text-gray-700 text-sm">
                      Máte právo na opravu nesprávnych údajov a doplnenie neúplných údajov.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 border-2 border-black">
                    <h3 className="font-bold mb-2">Právo na vymazanie</h3>
                    <p className="text-gray-700 text-sm">
                      Máte právo požiadať o vymazanie údajov, ak už nie sú potrebné 
                      alebo ste odvolali súhlas.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 border-2 border-black">
                    <h3 className="font-bold mb-2">Právo na obmedzenie</h3>
                    <p className="text-gray-700 text-sm">
                      Máte právo požiadať o obmedzenie spracovania v určitých situáciách.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 border-2 border-black">
                    <h3 className="font-bold mb-2">Právo na prenosnosť</h3>
                    <p className="text-gray-700 text-sm">
                      Máte právo získať údaje v štruktúrovanom formáte a preniesť ich 
                      inému prevádzkovateľovi.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 border-2 border-black">
                    <h3 className="font-bold mb-2">Právo namietať</h3>
                    <p className="text-gray-700 text-sm">
                      Máte právo namietať proti spracovaniu založenému na oprávnenom záujme.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 border-2 border-black">
                    <h3 className="font-bold mb-2">Právo odvolať súhlas</h3>
                    <p className="text-gray-700 text-sm">
                      Ak je spracovanie založené na súhlase, môžete ho kedykoľvek odvolať.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 border-2 border-black">
                    <h3 className="font-bold mb-2">Právo na sťažnosť</h3>
                    <p className="text-gray-700 text-sm">
                      Máte právo podať sťažnosť na dozorný orgán (ÚOOÚ SR).
                    </p>
                  </div>
                </div>
              </div>

              {/* Ako uplatniť práva */}
              <div className="brutal-card p-6 md:p-8 mb-8 bg-orange-50">
                <h2 className="heading-md mb-4">Ako uplatniť svoje práva</h2>
                <p className="text-gray-700 mb-4">
                  Pre uplatnenie ktoréhokoľvek z vyššie uvedených práv nás kontaktujte:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  <li>Emailom na <a href="mailto:info@rubber24.sk" className="text-orange-500 hover:underline font-bold">info@rubber24.sk</a></li>
                  <li>Poštou na adresu: RUBBER 24, s.r.o., Remenárska 1220, 956 18 Bošany</li>
                </ul>
                <p className="text-gray-700">
                  <strong>Lehota odpovede:</strong> Na vašu žiadosť odpovieme do 30 dní od jej doručenia. 
                  V prípade zložitých žiadostí môžeme túto lehotu predĺžiť o ďalších 60 dní, o čom vás budeme informovať.
                </p>
              </div>

              {/* Príjemcovia */}
              <div className="brutal-card p-6 md:p-8 mb-8">
                <h2 className="heading-md mb-4 text-orange-500">Príjemcovia osobných údajov</h2>
                <p className="text-gray-700 mb-4">
                  Vaše osobné údaje môžeme zdieľať s týmito kategóriami príjemcov:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>IT poskytovatelia:</strong> hosting, správa serverov, zálohovanie</li>
                  <li><strong>Účtovné služby:</strong> spracovanie fakturácie a účtovníctva</li>
                  <li><strong>Analytické služby:</strong> Google Ireland Limited (Google Analytics)</li>
                  <li><strong>Emailové služby:</strong> poskytovatelia newsletter/email marketingu</li>
                </ul>
                <div className="mt-4 p-4 bg-yellow-50 border-2 border-black">
                  <p className="text-gray-700 text-sm">
                    <strong>Poznámka k prenosom mimo EÚ:</strong> Pri využívaní služieb Google Analytics 
                    môže dochádzať k prenosu údajov do krajín mimo EÚ. Google sa zaviazal dodržiavať 
                    štandardné zmluvné doložky EÚ, ktoré zabezpečujú primeranú úroveň ochrany údajov.
                  </p>
                </div>
              </div>

              {/* Dozorný orgán */}
              <div className="brutal-card p-6 md:p-8 mb-8">
                <h2 className="heading-md mb-4 text-orange-500">Dozorný orgán</h2>
                <p className="text-gray-700 mb-4">
                  Ak sa domnievate, že vaše práva boli porušené, máte právo podať sťažnosť na:
                </p>
                <div className="bg-gray-50 p-4 border-2 border-black">
                  <p className="font-bold">Úrad na ochranu osobných údajov Slovenskej republiky</p>
                  <p className="text-gray-700">Hraničná 12</p>
                  <p className="text-gray-700">820 07 Bratislava 27</p>
                  <p className="text-gray-700 mt-2">
                    Web: <a href="https://dataprotection.gov.sk" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline">dataprotection.gov.sk</a><br />
                    Email: <a href="mailto:statny.dozor@pdp.gov.sk" className="text-orange-500 hover:underline">statny.dozor@pdp.gov.sk</a>
                  </p>
                </div>
              </div>

              {/* Súvisiace stránky */}
              <div className="flex flex-wrap gap-4 mt-8">
                <Link href="/ochrana-sukromia" className="brutal-btn-outline text-sm">
                  Ochrana súkromia
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

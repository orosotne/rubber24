import { Navbar, Footer } from "@/components/layout";
import { Hero, Services } from "@/components/sections";
import { CtaBanner } from "@/components/shared";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <section className="section-light py-16 md:py-24">
          <div className="container-custom">
            <CtaBanner
              title="Máte projekt na stole?"
              description="Pošlite nám zadanie a my sa ozveme s návrhom postupu."
              primaryCta={{
                text: "Poslať dopyt",
                href: "/kontakt",
              }}
              secondaryCta={{
                text: "Pozrieť produkty",
                href: "/produkty",
              }}
              variant="orange"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import { Navbar, Footer } from "@/components/layout";
import {
  Hero,
  About,
  Services,
  Industries,
  Process,
  Quality,
  Laboratory,
  Gallery,
  FAQ,
  Contact,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Industries />
        <Process />
        <Quality />
        <Laboratory />
        <Gallery />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

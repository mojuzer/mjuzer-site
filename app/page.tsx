import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Work } from "@/components/Work";
import { About } from "@/components/About";
import { Pricing } from "@/components/Pricing";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Keyboard accessibility: jump straight to content. */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[60] focus:rounded-md focus:border focus:border-accent focus:bg-surface focus:px-4 focus:py-2 focus:text-sm focus:text-ink"
      >
        Skip to content
      </a>

      <Nav />

      {/* IA (brief §5): Hero → Trust → Services → How I work → Work → About →
          Pricing → Contact → Footer. */}
      <main id="main">
        <Hero />
        <TrustStrip />
        <Services />
        <Process />
        <Work />
        <About />
        <Pricing />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Approach from "./components/Approach";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SectionTransition from "./components/SectionTransition";
import ImageBreak from "./components/ImageBreak";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />

        <SectionTransition>
          <Approach />
        </SectionTransition>

        <SectionTransition>
          <ImageBreak />
        </SectionTransition>

        <SectionTransition>
          <Services />
        </SectionTransition>

        <SectionTransition>
          <Contact />
        </SectionTransition>
      </main>
      <Footer />
    </>
  );
}

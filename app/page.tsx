import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Approach from "./components/Approach";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Approach />
        <Stats />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

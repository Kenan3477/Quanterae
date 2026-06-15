import Hero from "@/components/Hero";
import InNutshell from "@/components/InNutshell";
import Services from "@/components/Services";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <InNutshell />
      <Services />
      <Expertise />
      <About />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}

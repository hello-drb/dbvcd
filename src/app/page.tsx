import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TheWork from "@/components/TheWork";
import PressLogos from "@/components/PressLogos";
import Services from "@/components/Services";
import SelectedWork from "@/components/SelectedWork";
import Testimonial from "@/components/Testimonial";
import MidCTA from "@/components/MidCTA";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Nav />
      <Hero />
      <TheWork />
      <PressLogos />
      <Services />
      <SelectedWork />
      <Testimonial />
      <MidCTA />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}

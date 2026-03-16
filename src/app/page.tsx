import Hero from "@/components/Hero";
import TheWork from "@/components/TheWork";
import Services from "@/components/Services";
import SelectedWork from "@/components/SelectedWork";
import Testimonial from "@/components/Testimonial";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full bg-neutral-950 text-neutral-50">
      <Hero />
      <TheWork />
      <Services />
      <SelectedWork />
      <Testimonial />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}

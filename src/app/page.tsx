import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import About from "@/components/sections/About";
import Programs from "@/components/sections/Programs";
import Process from "@/components/sections/Process";
import Modules from "@/components/sections/Modules";
import Destinations from "@/components/sections/Destinations";
import Stats from "@/components/sections/Stats";
import Founders from "@/components/sections/Founders";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <TrustStrip />
      <About />
      <Programs />
      <Process />
      <Modules />
      <Stats />
      <Destinations />
      <Founders />
      <Testimonials />
      <WhyChooseUs />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}

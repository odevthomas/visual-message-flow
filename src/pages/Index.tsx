import Hero from "@/components/Hero";
import ServicesCarousel from "@/components/ServicesCarousel";
import Differentials from "@/components/Differentials";
import BrandsCarousel from "@/components/BrandsCarousel";
import Testimonials from "@/components/Testimonials";
import HowItWorks from "@/components/HowItWorks";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <ServicesCarousel />
      <Differentials />
      <BrandsCarousel />
      <Testimonials />
      <HowItWorks />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;

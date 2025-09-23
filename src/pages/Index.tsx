import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import PartnersSection from "@/components/PartnersSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import HowItWorks from "@/components/HowItWorks";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <ServicesSection />
      <PartnersSection />
      <TestimonialsSection />
      <HowItWorks />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;

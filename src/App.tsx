import React from "react";

// Componentes principais
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { FeaturesSection } from "./components/FeaturesSection"; // <-- CORRIGIDO AQUI
import ProblemsSection from "./components/ProblemsSection";
import { BrandsSection } from "./components/BrandsSection";
import { ClientsSection } from "./components/ClientsSection";
import  FAQSection  from "./components/FAQSection";
import BentoCTA from "./components/BentoCTA";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

// Estilos
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// ===== App Principal =====
function App() {
  return (
    <div className="App min-h-screen">
      <main>
        <section id="hero">
          <HeroSection />
        </section>
        

        <FeaturesSection />
        
        <BrandsSection />
        
        <ProblemsSection />
        
        <BentoCTA />
        
        <ClientsSection />
        
        <section id="faq">
          <FAQSection />
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
import React from "react";
// motion já é importado internamente pelos componentes, se não usado aqui, pode ser removido.
// import { motion } from "framer-motion"; 

// Importações de componentes
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { FeaturesSection } from "./components/FeaturesSection";
import TrustSection from "./components/BentoCTA";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import { FAQSection } from "./components/FAQSection"; // Importando o FAQSection do seu arquivo separado
import ProblemsSection from "./components/ProblemsSection"; // Caminho corrigido para ProblemsSection
import { BrandsSection } from "./components/BrandsSection"; // Importação CORRETA do BrandsSection
import { ClientsSection } from "./components/ClientsSection"; // Importação do ClientsSection
import BentoCTA from "./components/BentoCTA"; // Importação do BentoCTA

// Os logos e o componente Marquee foram movidos para dentro de BrandsSection e ClientsSection,
// então não precisam mais ser importados aqui no App.js.
// Se ainda estiverem no seu App.js, você pode removê-los:
// import panasonicLogo from "./assets/logo/panasonic.svg";
// import britaniaLogo from "./assets/logo/britania.svg";
// import brastempLogo from "./assets/logo/brastemp.svg";
// import miniExtraLogo from "./assets/clients/mini-extra.png";
// ... e os outros logos de clientes.


// ===== App Principal =====
function App() {
  return (
    // Aplica o novo gradiente diretamente no App, garantindo o fundo em todas as seções
    <div 
      className="App min-h-screen" 
      style={{
background: 'radial-gradient(circle at center, rgba(1, 21, 53, 0.92) 0%, rgba(37, 37, 37, 1) 100%)'     
      }}
    >
      <main>
        <section id="hero"><HeroSection /></section>
        
        <ProblemsSection />
        <BrandsSection />

        <FeaturesSection />
        <ClientsSection />

              
        <TrustSection />

        
        <section id="faq"><FAQSection /></section>

      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
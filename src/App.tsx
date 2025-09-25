import React from 'react';
import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { motion } from 'framer-motion';
import TrustSection from './components/TrustSection';

// Importando logos locais
import panasonicLogo from './assets/logo/panasonic.svg';
import britaniaLogo from './assets/logo/britania.svg';
import brastempLogo from './assets/logo/brastemp.svg';

// Importando imagens locais
import miniExtraLogo from './assets/clients/mini-extra.png';
import diaLogo from './assets/clients/dia.png';
import castaneaLogo from './assets/clients/castanea.png';
import abigailLogo from './assets/clients/abigail.png';
import meliaLogo from './assets/clients/melia.png';
import francoLogo from './assets/clients/franco.png';
import paoDeQueijoLogo from './assets/clients/pao-de-queijo.png';
import grilettoLogo from './assets/clients/griletto.png';

// Configuração do carrossel contínuo com sombras intensas
const Marquee = ({ children, duration = 30 }) => (
  <div className="overflow-hidden relative w-full">
    {/* Sombra gradiente esquerda - múltiplas camadas */}
    <div className="absolute left-0 top-0 z-10 h-full w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64 bg-gradient-to-r from-black via-black/90 to-transparent pointer-events-none"></div>
    <div className="absolute left-0 top-0 z-10 h-full w-24 sm:w-32 md:w-40 lg:w-48 bg-gradient-to-r from-black via-black/95 to-black/20 pointer-events-none"></div>
    <div className="absolute left-0 top-0 z-10 h-full w-16 sm:w-24 md:w-32 lg:w-40 bg-gradient-to-r from-black to-black/60 pointer-events-none"></div>
    
    {/* Sombra gradiente direita - múltiplas camadas */}
    <div className="absolute right-0 top-0 z-10 h-full w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64 bg-gradient-to-l from-black via-black/90 to-transparent pointer-events-none"></div>
    <div className="absolute right-0 top-0 z-10 h-full w-24 sm:w-32 md:w-40 lg:w-48 bg-gradient-to-l from-black via-black/95 to-black/20 pointer-events-none"></div>
    <div className="absolute right-0 top-0 z-10 h-full w-16 sm:w-24 md:w-32 lg:w-40 bg-gradient-to-l from-black to-black/60 pointer-events-none"></div>
    
    {/* Sombra adicional no topo e embaixo */}
    <div className="absolute top-0 left-0 right-0 z-10 h-8 bg-gradient-to-b from-black/30 to-transparent pointer-events-none"></div>
    <div className="absolute bottom-0 left-0 right-0 z-10 h-8 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
    
    <motion.div
      className="flex w-max"
      animate={{ x: ['0%', '-50%'] }}
      transition={{ repeat: Infinity, duration, ease: 'linear' }}
    >
      {children}
      {children}
    </motion.div>
  </div>
);

// Brands Section
const BrandsSection: React.FC = () => {
  const brands = [
    { name: 'Brastemp', logo: brastempLogo, white: false },
    { name: 'Electrolux', logo: 'https://cdn.brandfetch.io/ide409nnKf/theme/light/logo.svg', white: false },
    { name: 'LG', logo: 'https://cdn.brandfetch.io/idmebuIsYa/w/400/h/400/theme/dark/icon.jpeg', white: true },
    { name: 'Samsung', logo: 'https://cdn.brandfetch.io/iduaw_nOnR/theme/dark/logo.svg', white: false },
    { name: 'Sony', logo: 'https://cdn.brandfetch.io/ido0LYg_hc/theme/light/logo.svg', white: false },
    { name: 'Panasonic', logo: panasonicLogo, white: false },
    { name: 'Continental', logo: 'https://static.wixstatic.com/media/376d2e_20a87a16f6334719b39fb8da60010b59~mv2.png', white: false },
    { name: 'Consul', logo: 'https://cdn.brandfetch.io/idFBBFlZ9z/theme/dark/logo.svg', white: false },
    { name: 'Mondial', logo: 'https://cdn.brandfetch.io/idQVl9TU44/theme/dark/logo.svg', white: true },
    { name: 'Britania', logo: britaniaLogo, white: false },
    { name: 'Bosch', logo: 'https://cdn.brandfetch.io/idlS72krr0/theme/dark/logo.svg', white: false },
  ];
  return (
    <section className="py-16 sm:py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          Marcas Atendidas
        </h2>
        <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-12">
          Trabalhamos com as principais marcas do mercado, garantindo qualidade e suporte especializado.
        </p>

        <Marquee duration={30}>
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 flex items-center justify-center px-4"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className={`w-full h-full object-contain transition-all duration-300 hover:opacity-100 ${
                  brand.white ? '' : 'filter brightness-0 invert opacity-80 hover:filter-none'
                }`}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

// Clients Section
const ClientsSection = () => {
  const clients = [
    { name: 'Mini Mercado Extra', logo: miniExtraLogo },
    { name: 'Dia%', logo: diaLogo },
    { name: 'Restaurante Castanea', logo: castaneaLogo },
    { name: 'Abigail Coffee Co.', logo: abigailLogo },
    { name: 'Melia Hotels', logo: meliaLogo },
    { name: 'Franco do Amaral', logo: francoLogo },
    { name: 'Pão de Queijo & Cia', logo: paoDeQueijoLogo },
    { name: 'Griletto', logo: grilettoLogo },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          Clientes Parceiros
        </h2>
        <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-12">
          Empresas e marcas que confiam no nosso trabalho para fortalecer sua presença e resultados.
        </p>

        <Marquee duration={35}>
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 flex items-center justify-center px-4"
            >
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-full object-contain transition-all duration-300 filter grayscale invert opacity-80 hover:filter-none hover:opacity-100"
                />
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

// App principal
function App() {
  return (
    <div className="App bg-black min-h-screen">
      <link rel="stylesheet" href="https://cdn.hugeicons.com/font/hgi-stroke-rounded.css" />

      <main>
        <section id="hero">
          <HeroSection />
        </section>

        <ClientsSection />
        <FeaturesSection />
        <BrandsSection />
        <TrustSection />

        <section id="faq">
          <FAQSection />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
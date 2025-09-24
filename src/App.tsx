import React from 'react';
import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { motion } from 'framer-motion';

// Configuração do carrossel contínuo
const Marquee: React.FC<{ children: React.ReactNode; duration?: number }> = ({ children, duration = 30 }) => (
  <div className="overflow-hidden relative w-full">
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

// Brands Section com carrossel infinito
const BrandsSection: React.FC = () => {
  const brands = [
    { name: 'Brastemp', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Brastemp.svg/1280px-Brastemp.svg.png' },
    { name: 'Electrolux', logo: 'https://logos-world.net/wp-content/uploads/2020/12/Electrolux-Logo-2015-present.png' },
    { name: 'LG', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/LG_logo_%282015%29.svg' },
    { name: 'Samsung', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg' },
    { name: 'Philco', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Philco_logo.svg' },
    { name: 'Panasonic', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Panasonic_logo.svg' },
    { name: 'Whirlpool', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Whirlpool_Logo.svg' },
    { name: 'Consul', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Consul_logo.svg' },
  ];

  return (
    <section className="py-16 sm:py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-12">
          Marcas Atendidas
        </h2>

        <Marquee duration={30}>
          {brands.map((brand, index) => (
            <div key={index} className="flex-shrink-0 w-24 sm:w-32 h-16 sm:h-20 flex items-center justify-center px-4">
              <img 
                src={brand.logo} 
                alt={brand.name} 
                className="max-h-full object-contain grayscale opacity-80 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

// GallerySection com carrossel contínuo
const GallerySection: React.FC = () => {
  const galleryImages = [
    { url: 'https://evolutionmechanical.net/wp-content/uploads/2024/01/refrigeration-repair-services.jpg', title: 'Técnico Especializado' },
    { url: 'https://evolutionmechanical.net/wp-content/uploads/2024/01/commercial-refrigeration-maintenance-a-proactive-guide.jpg', title: 'Manutenção Profissional' },
    { url: 'https://hecolimited.com/wp-content/uploads/2021/12/Heco-blog.jpg', title: 'Equipamentos Modernos' },
    { url: 'https://americanrefrigerationinc.com/wp-content/uploads/maintenance-for-commercial-refrigeration.jpg', title: 'Centrais Frigoríficas' },
    { url: 'https://www.strm-mn.com/application/files/4515/5260/2911/South-Town-Refrigeration_Refrigeration-Maintenance.jpg', title: 'Atendimento Comercial' },
    { url: 'https://dandhrefrigeration.com/wp-content/uploads/2022/04/why-choose-dh-banner-background-dark.jpg', title: 'Tecnologia Avançada' },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-12">
          Nosso Trabalho em Ação
        </h2>

        <Marquee duration={40}>
          {galleryImages.map((image, index) => (
            <div key={index} className="flex-shrink-0 w-64 sm:w-72 md:w-80 h-40 sm:h-48 md:h-56 rounded-2xl overflow-hidden relative mx-2">
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover grayscale transition-all duration-700 hover:grayscale-0 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 text-white font-bold text-sm sm:text-base">
                {image.title}
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

function App() {
  return (
    <div className="App bg-black min-h-screen">
      {/* Include HugeIcons CSS */}
      <link rel="stylesheet" href="https://cdn.hugeicons.com/font/hgi-stroke-rounded.css" />

      <main>
        <section id="hero">
          <HeroSection />
        </section>

        <BrandsSection />

        <FeaturesSection />

        <GallerySection />

       

        <section id="faq">
          <FAQSection />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;

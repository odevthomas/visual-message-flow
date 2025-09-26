import React from "react";
import { motion } from "framer-motion";

// Logos e imagens (Certifique-se de que os caminhos estão corretos)
import panasonicLogo from "../assets/logo/panasonic.svg";
import britaniaLogo from "../assets/logo/britania.svg";
import brastempLogo from "../assets/logo/brastemp.svg";

// ===== Marquee Component (Pode ser um componente separado ou mantido aqui) =====
const Marquee = ({ children, duration = 30 }) => (
  <div className="overflow-hidden relative w-full">
    <motion.div
      className="flex w-max"
      animate={{ x: ["0%", "-50%"] }}
      transition={{ repeat: Infinity, duration, ease: "linear" }}
    >
      {children}
      {children}
    </motion.div>
  </div>
);

// ===== Brands Section Component =====
export const BrandsSection: React.FC = () => {
  const brands = [
    { name: "Brastemp", logo: brastempLogo, white: false },
    { name: "Electrolux", logo: "https://cdn.brandfetch.io/ide409nnKf/theme/light/logo.svg", white: false },
    { name: "LG", logo: "https://cdn.brandfetch.io/idmebuIsYa/w/400/h/400/theme/dark/icon.jpeg", white: true },
    { name: "Samsung", logo: "https://cdn.brandfetch.io/iduaw_nOnR/theme/dark/logo.svg", white: false },
    { name: "Sony", logo: "https://cdn.brandfetch.io/ido0LYg_hc/theme/light/logo.svg", white: false },
    { name: "Panasonic", logo: panasonicLogo, white: false },
    { name: "Continental", logo: "https://static.wixstatic.com/media/376d2e_20a87a16f6334719b39fb8da60010b59~mv2.png", white: false },
    { name: "Consul", logo: "https://cdn.brandfetch.io/idFBBFlZ9z/theme/dark/logo.svg", white: false },
    { name: "Mondial", logo: "https://cdn.brandfetch.io/idQVl9TU44/theme/dark/logo.svg", white: true },
    { name: "Britania", logo: britaniaLogo, white: false },
    { name: "Bosch", logo: "https://cdn.brandfetch.io/idlS72krr0/theme/dark/logo.svg", white: false },
  ];

  return (
    <section className="py-16 sm:py-20 text-white relative overflow-hidden">
      {/* Gradiente de Fundo Global */}
      <div className="absolute inset-0 z-10" style={{
background: 'radial-gradient(circle at center, rgba(0, 11, 29, 0.92) 0%, rgba(0, 0, 0, 1) 100%)'     
      }}></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-20 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Marcas Atendidas</h2>
        <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-12">
          Trabalhamos com as principais marcas do mercado, garantindo qualidade e suporte especializado.
        </p>

        <Marquee duration={30}>
          {brands.map((brand, index) => (
            <div key={index} className="flex-shrink-0 w-32 sm:w-40 md:w-48 h-24 sm:h-32 md:h-36 flex items-center justify-center px-4 py-2 relative group">
              {/* Efeito de brilho na borda no hover */}
              <span className="absolute inset-0 rounded-lg border border-transparent group-hover:border-brand-blue/50 transition-all duration-300 pointer-events-none"></span>
              <img
                src={brand.logo}
                alt={brand.name}
                className={`max-w-[80%] max-h-[80%] object-contain transition-all duration-300 group-hover:scale-105 ${
                  brand.white ? "" : "filter brightness-0 invert opacity-70 group-hover:opacity-100 group-hover:filter-none" // Mais sutil e com hover
                }`}
              />
            </div>
          ))}
        </Marquee>
      </div>
      <div className="text-center mt-8 relative z-20">
          <p className="text-white text-lg">
            E muitas outras marcas. <strong>Não encontrou a sua?</strong> Entre em contato conosco!
          </p>
        </div>
    </section>
  );
};
import React from "react";
import { motion } from "framer-motion";

// Logos locais
import panasonicLogo from "../assets/logo/panasonic.svg";
import britaniaLogo from "../assets/logo/britania.svg";
import brastempLogo from "../assets/logo/brastemp.svg";

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

export const BrandsSection: React.FC = () => {
  const brands = [
    { name: "Brastemp", logo: brastempLogo },
    { name: "Electrolux", logo: "https://cdn.brandfetch.io/ide409nnKf/theme/light/logo.svg" },
    { name: "Samsung", logo: "https://cdn.brandfetch.io/iduaw_nOnR/theme/dark/logo.svg" },
    { name: "Sony", logo: "https://cdn.brandfetch.io/ido0LYg_hc/theme/light/logo.svg" },
    { name: "Panasonic", logo: panasonicLogo },
    { name: "Continental", logo: "https://static.wixstatic.com/media/376d2e_20a87a16f6334719b39fb8da60010b59~mv2.png" },
    { name: "Consul", logo: "https://cdn.brandfetch.io/idFBBFlZ9z/theme/dark/logo.svg" },
    { name: "Britania", logo: britaniaLogo },
    { name: "Bosch", logo: "https://cdn.brandfetch.io/idlS72krr0/theme/dark/logo.svg" },
  ];

  return (
    <section className="py-16 sm:py-20 text-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full [background:radial-gradient(145%_125%_at_55%_20%,#fff_40%,#fff_95%)]"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-20 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">Marcas Atendidas</h2>
        <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto mb-12">
          Trabalhamos com as principais marcas do mercado, garantindo qualidade e suporte especializado.
        </p>

        <Marquee duration={30}>
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-48 h-48 flex items-center justify-center px-4 py-2 relative group"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="w-32 h-32 object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </Marquee>

        <div className="text-center mt-8 relative z-20">
          <p className="text-gray-600 text-lg">
            E muitas outras marcas. <strong>Não encontrou a sua?</strong> Entre em contato conosco!
          </p>
        </div>
      </div>
    </section>
  );
};

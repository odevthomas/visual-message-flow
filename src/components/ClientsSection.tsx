import React from "react";
import { motion } from "framer-motion";

// Logos e imagens (Certifique-se de que os caminhos estão corretos)
import miniExtraLogo from "../assets/clients/mini-extra.png";
import diaLogo from "../assets/clients/dia.png";
import castaneaLogo from "../assets/clients/castanea.png";
import abigailLogo from "../assets/clients/abigail.png";
import meliaLogo from "../assets/clients/melia.png";
import francoLogo from "../assets/clients/franco.png";
import paoDeQueijoLogo from "../assets/clients/pao-de-queijo.png";
import grilettoLogo from "../assets/clients/griletto.png";

const Marquee = ({ children, duration = 35 }) => (
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

export const ClientsSection: React.FC = () => {
  const clients = [
    { name: "Mini Mercado Extra", logo: miniExtraLogo },
    { name: "Dia%", logo: diaLogo },
    { name: "Restaurante Castanea", logo: castaneaLogo },
    { name: "Abigail Coffee Co.", logo: abigailLogo },
    { name: "Melia Hotels", logo: meliaLogo },
    { name: "Franco do Amaral", logo: francoLogo },
    { name: "Pão de Queijo & Cia", logo: paoDeQueijoLogo },
    { name: "Griletto", logo: grilettoLogo },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#fff_100%)]"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-20 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">Clientes Parceiros</h2>
        <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto mb-12">
          Empresas que confiam na qualidade do nosso trabalho e contam com nossos contratos de manutenção preventiva e corretiva, garantindo segurança, eficiência e tranquilidade no funcionamento de seus equipamentos.
        </p>

        <Marquee duration={35}>
          {clients.map((client, index) => (
            <div key={index} className="flex-shrink-0 w-40 sm:w-52 md:w-64 h-32 sm:h-40 md:h-48 flex items-center justify-center px-4 py-2 relative group">
              <div className="absolute inset-0 bg-brand-blue/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              <img
                src={client.logo}
                alt={client.name}
                className="max-w-[80%] max-h-[80%] object-contain transition-all duration-300 opacity-80 group-hover:opacity-100 group-hover:scale-105"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};
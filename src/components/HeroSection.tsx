import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

import logo from "../assets/brasservice.png";
import geladeira from "../assets/geladeiras-2.webp"; // verifique se o arquivo existe

export const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.4 });

  const whatsappNumber = "551991195261";
  const whatsappMessage = encodeURIComponent(
    "Olá! Preciso de assistência técnica para minha geladeira. Gostaria de agendar um atendimento agora."
  );

  const handleWhatsAppClick = () => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
      "_blank"
    );
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center px-6 md:px-10 lg:px-16 py-20 md:py-28 overflow-hidden"
    >
      {/* Fundo gradiente azul */}
      <div className="absolute inset-0 -z-20 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#1b3e84_40%,#000_80%)]"></div>

      {/* Imagem de geladeira como fundo suave para mobile */}
      <div className="absolute inset-0 -z-10 w-full h-full lg:hidden">
        <img
          src={geladeira}
          alt="Geladeira técnica"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Container principal */}
      <div className="container mx-auto max-w-7xl flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16 relative z-20">
        {/* Texto */}
        <motion.div
          className="flex-1 text-center lg:text-left lg:max-w-[560px]"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9 }}
        >
          {/* Logo */}
          <img
            src={logo}
            alt="Bras Service"
            className="mx-auto lg:mx-0 mb-8 h-12 sm:h-16 md:h-20 lg:h-24"
          />

          {/* Título e subtítulo */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-snug text-white">
            Conserto de Geladeiras e Refrigeração
          </h1>
          <p className="text-xl sm:text-2xl md:text-2xl lg:text-3xl text-gray-400 font-semibold mt-2 md:mt-4">
            em Campinas e Região
          </p>

          {/* Descrição */}
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mt-6 md:mt-8 mb-12 max-w-md mx-auto lg:mx-0 leading-relaxed">
            Atendimento rápido e especializado em todas as marcas, com garantia de 1 ano para clientes em Campinas e região metropolitana.
          </p>

          {/* Botões CTA */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-5">
            <button
              onClick={handleWhatsAppClick}
              className="flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-3.5 bg-green-600/90 hover:bg-green-700 text-white text-lg font-medium rounded-xl shadow-xl hover:scale-105 transition-transform duration-300 backdrop-blur-sm min-w-[200px]"
            >
              <FaWhatsapp className="w-5 h-5 md:w-6 md:h-6" />
              Agendar Atendimento
            </button>

            <button
              onClick={handleWhatsAppClick}
              className="flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-3.5 bg-blue-600/90 hover:bg-blue-700 text-white text-lg font-medium rounded-xl shadow-xl hover:scale-105 transition-transform duration-300 backdrop-blur-sm min-w-[200px]"
            >
              Solicitar Orçamento
            </button>
          </div>
        </motion.div>

        {/* Imagem da geladeira no desktop */}
        <motion.div
          className="hidden lg:block lg:flex-[1.2] lg:max-w-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9 }}
        >
          <img
            src={geladeira}
            alt="Geladeira técnica"
            className="w-full h-full max-h-[750px] rounded-3xl object-cover "
          />
        </motion.div>
      </div>
    </section>
  );
};

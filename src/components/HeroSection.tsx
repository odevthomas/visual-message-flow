import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

import logo from "../assets/brasservice.png";
import geladeiraVideo from "../assets/geladeira.mp4";

export const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.4 });

  const whatsappNumber = "551991195261";
  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de solicitar atendimento para minha geladeira. Vi o site da Bras Service e quero agendar agora."
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
      className="relative min-h-screen flex items-center justify-center px-6 md:px-10 lg:px-16 py-20 md:py-28 overflow-hidden"
    >
      {/* Fundo de vídeos */}
      <div className="absolute inset-0 -z-20 h-full w-full overflow-hidden">
        {/* Vídeo 1 */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover object-top"
          ref={(video) => {
            if (video) video.playbackRate = 1.5;
          }}
        >
          <source src={geladeiraVideo} type="video/mp4" />
        </video>

        {/* Vídeo 2 sobreposto com leve transparência */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover object-center opacity-60 mix-blend-overlay"
          ref={(video) => {
            if (video) video.playbackRate = 1.2;
          }}
        >
          <source src={geladeiraVideo} type="video/mp4" />
        </video>

        {/* Camada de sombra para suavizar */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Sombras em cima e embaixo */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/90 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/90 to-transparent"></div>
      </div>

      {/* Conteúdo principal */}
      <div className="container mx-auto max-w-7xl flex flex-col items-center justify-center relative z-10">
        <motion.div
          className="w-full text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Logo */}
          <img
            src={logo}
            alt="Bras Service"
            className="mx-auto mb-8 h-12 sm:h-16 md:h-20 lg:h-24"
          />

          {/* Título */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-snug text-white w-full"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 1 }}
          >
            Conserto de Geladeiras e Serviços de Refrigeração
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            className="text-xl sm:text-2xl md:text-2xl lg:text-3xl text-gray-400 font-semibold mt-4"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1, duration: 1 }}
          >
            Atendimento rápido, eficaz e especializado em todas as marcas.
          </motion.p>

          {/* Descrição */}
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-300 mt-4 md:mt-6 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.3, duration: 1 }}
          >
            Serviço com garantia de 90 dias, realizado por técnicos qualificados.
            <br />
            Atendemos Campinas e toda a região metropolitana.
          </motion.p>

          {/* Botão CTA */}
          <motion.button
            onClick={handleWhatsAppClick}
            className="flex flex-row items-center justify-center gap-3 px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-green-600 text-white text-base sm:text-lg md:text-2xl font-bold rounded-xl shadow-xl mx-auto"
            animate={{
              scale: [1, 1.05, 1, 1.05, 1],
              boxShadow: [
                "0 0 12px rgba(0,255,0,0.5)",
                "0 0 18px rgba(0,255,0,0.7)",
                "0 0 12px rgba(0,255,0,0.5)",
              ],
            }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
            <span>Agendar Atendimento</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

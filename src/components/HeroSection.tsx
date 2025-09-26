import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });

  const whatsappNumber = "19991195261";
  const whatsappMessage = encodeURIComponent(
    "Olá! Preciso de assistência técnica para minha geladeira. Gostaria de agendar um atendimento."
  );

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-20 overflow-hidden"
    >
      {/* Vídeo de Fundo */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/src/assets/videohero.mp4" // Certifique-se de que o caminho para o vídeo está correto
        autoPlay
        loop
        muted
        playsInline
      />

      {/* NOVO: Overlay com o Gradiente Azul Escuro */}
      {/* Removido o bg-black opacity-80 e o gradiente azul claro antigo */}
      <div 
        className="absolute inset-0 z-10" 
        style={{
          background: 'radial-gradient(circle at center, rgba(0, 29, 77, 0.92) 0%, rgba(59, 58, 58, 1) 1) 100%)'
        }}
      ></div>

      <div className="container mx-auto max-w-4xl text-center relative z-20"> {/* Aumentado z-index do conteúdo */}
        {/* Logo */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src="/src/assets/brasservice.png" // Certifique-se de que o caminho para o logo está correto
            alt="Bras Service"
            className="h-16 sm:h-20 w-auto filter drop-shadow-2xl"
          />
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4 drop-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Conserto de Geladeiras e Equipamentos de Refrigeração
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg sm:text-xl text-white mb-8 drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Campinas e Região – Atendimento Rápido no Local
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex justify-center gap-4 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {/* Botão do WhatsApp (VERDE) */}
          <button
            onClick={handleWhatsAppClick}
            className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-brand-green text-white text-lg sm:text-xl font-semibold rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.569-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.485 3.085"/>
            </svg>
            Agendar Atendimento
          </button>

          {/* Botão secundário (AZUL) */}
          <button
            onClick={handleWhatsAppClick}
            className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-brand-blue text-white text-lg sm:text-xl font-semibold rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            Solicitar Orçamento
          </button>
        </motion.div>
      </div>
    </section>
  );
};
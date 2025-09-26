import React from "react";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaArrowUp } from "react-icons/fa";

export const Footer: React.FC = () => {
  const whatsappNumber = "19991195261";

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Olá! Gostaria de mais informações sobre os serviços da Bras Service."
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  const handlePhoneClick = () => {
    window.open("tel:+551999911195261", "_self");
  };

  const handleEmailClick = () => {
    window.open("mailto:bras-service@hotmail.com", "_self");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black/50  border-t border-gray-800 py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/src/assets/brasservice.png"
            alt="Bras Service"
            className="h-10 w-auto"
          />
        </div>

        {/* Contato Inline */}
        <div className="flex flex-col md:flex-row items-center gap-6 text-gray-400 text-sm">
          <span className="flex items-center gap-1">
            <FaEnvelope /> 
            <button onClick={handleEmailClick} className="hover:text-white transition">
              bras-service@hotmail.com
            </button>
          </span>
         
          
          <span className="flex items-center  text-white gap-1 cursor-pointer" onClick={scrollToTop}>
            <FaArrowUp /> Voltar ao topo
          </span>
        </div>
      </div>

      {/* Endereço */}
      <div className="text-center text-gray-400 text-sm mt-4">
        Av. Baden Powell, 551 - Jardim Nova Europa, Campinas - SP, 13040-093
      </div>

      {/* Direitos autorais */}
      <div className="text-center text-gray-500 text-xs mt-4">
        © 2025 Bras Service. Todos os direitos reservados.
      </div>
    </footer>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaTools, FaCheckCircle, FaShieldAlt, FaUserCheck } from 'react-icons/fa';

export const Footer: React.FC = () => {
  const whatsappNumber = "5511999999999";

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de mais informações sobre os serviços da Bras Service.");
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  const handlePhoneClick = () => {
    window.open('tel:+5519999999999', '_self');
  };

  const handleEmailClick = () => {
    window.open('mailto:contato@brasservice.com.br', '_self');
  };

  return (
    <footer className="bg-black border-t border-gray-800 py-12 sm:py-16 relative overflow-hidden">
      {/* Subtle animated background */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gray-400 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Company Info */}
          <motion.div
            className="space-y-4 sm:space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img 
                src="/src/assets/brasservice.png" 
                alt="Bras Service"
                className="h-10 sm:h-12 w-auto filter drop-shadow-lg"
              />
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">Bras Service</h3>
                <p className="text-gray-400 text-sm">Assistência Técnica</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              Especialistas em assistência técnica de geladeiras, freezers e centrais frigoríficas. 
              Atendimento 24h com garantia e qualidade em Campinas e região.
            </p>

            {/* Social Links */}
            <div className="flex space-x-3 sm:space-x-4 pt-2">
              <motion.button
                onClick={handleWhatsAppClick}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-green-500/30"
                whileHover={{ scale: 1.05, rotate: 3 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaWhatsapp className="text-white text-base sm:text-lg" />
              </motion.button>
              <motion.button
                onClick={handlePhoneClick}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-gray-500/30"
                whileHover={{ scale: 1.05, rotate: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPhoneAlt className="text-white text-base sm:text-lg" />
              </motion.button>
              <motion.button
                onClick={handleEmailClick}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-gray-500 to-gray-600 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-gray-500/30"
                whileHover={{ scale: 1.05, rotate: 3 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEnvelope className="text-white text-base sm:text-lg" />
              </motion.button>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            className="space-y-4 sm:space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center">
              <FaTools className="text-gray-400 mr-2" />
              Nossos Serviços
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-gray-300">
              {[
                'Conserto de Geladeiras',
                'Reparo de Freezers',
                'Manutenção Preventiva',
                'Higienização Completa',
                'Centrais Frigoríficas',
                'Instalação de Equipamentos'
              ].map((service, index) => (
                <motion.li
                  key={service}
                  className="hover:text-gray-200 transition-colors duration-300 cursor-pointer flex items-center group text-sm sm:text-base"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <FaCheckCircle className="text-gray-400 mr-2 text-sm group-hover:scale-105 transition-transform duration-300" />
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-4 sm:space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center">
              <FaUserCheck className="text-gray-400 mr-2" />
              Contato
            </h4>
            <div className="space-y-3 sm:space-y-4 text-gray-300">
              <motion.div className="flex items-center space-x-3 hover:text-gray-200 cursor-pointer" onClick={handleWhatsAppClick} whileHover={{ x: 3 }}>
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500/20 border border-green-400/30 rounded-lg flex items-center justify-center">
                  <FaWhatsapp className="text-green-400 text-sm sm:text-base" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-400">WhatsApp</p>
                  <p className="font-semibold text-sm sm:text-base">(11) 99999-9999</p>
                </div>
              </motion.div>
              
              <motion.div className="flex items-center space-x-3 hover:text-gray-200 cursor-pointer" onClick={handlePhoneClick} whileHover={{ x: 3 }}>
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-500/20 border border-gray-400/30 rounded-lg flex items-center justify-center">
                  <FaPhoneAlt className="text-gray-400 text-sm sm:text-base" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-400">Telefone</p>
                  <p className="font-semibold text-sm sm:text-base">(19) 9999-9999</p>
                </div>
              </motion.div>

              <motion.div className="flex items-center space-x-3 hover:text-gray-200 cursor-pointer" onClick={handleEmailClick} whileHover={{ x: 3 }}>
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-500/20 border border-gray-400/30 rounded-lg flex items-center justify-center">
                  <FaEnvelope className="text-gray-400 text-sm sm:text-base" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-400">E-mail</p>
                  <p className="font-semibold text-sm sm:text-base">contato@brasservice.com.br</p>
                </div>
              </motion.div>

              <motion.div className="flex items-start space-x-3" whileHover={{ x: 3 }}>
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-500/20 border border-gray-400/30 rounded-lg flex items-center justify-center mt-1">
                  <FaMapMarkerAlt className="text-gray-400 text-sm sm:text-base" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-400">Área de Atendimento</p>
                  <p className="font-semibold text-sm sm:text-base">
                    Campinas - SP<br />
                    <span className="text-xs sm:text-sm text-gray-400">Atendemos toda a região</span>
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Business Hours & Emergency */}
          <motion.div
            className="space-y-4 sm:space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center">
              <FaUserCheck className="text-gray-400 mr-2" />
              Atendimento
            </h4>

            <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-3 sm:p-4">
              <h5 className="text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Horários</h5>
              <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-300">
                <div className="flex justify-between">
                  <span>Segunda - Sexta:</span>
                  <span className="text-gray-200">08:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábado:</span>
                  <span className="text-gray-200">08:00 - 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingo:</span>
                  <span className="text-orange-400">Emergências</span>
                </div>
              </div>
            </div>

            <motion.button
              onClick={handleWhatsAppClick}
              className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-bold rounded-xl transition-all duration-300 relative overflow-hidden shadow-lg hover:shadow-green-500/30"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="relative flex items-center justify-center space-x-2">
                <FaWhatsapp className="text-white text-base sm:text-lg" />
                <span className="text-sm sm:text-base">Emergência 24h</span>
              </div>
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-xs sm:text-sm flex items-center">
              <FaShieldAlt className="mr-2" />
              2024 Bras Service. Todos os direitos reservados.
            </div>

            <div className="flex items-center space-x-4 sm:space-x-8 text-xs sm:text-sm">
              <motion.span className="flex items-center space-x-2 text-gray-300" whileHover={{ scale: 1.02 }}>
                <FaShieldAlt className="text-green-400" />
                <span>Garantia de 1 Ano</span>
              </motion.span>

              <motion.span className="flex items-center space-x-2 text-gray-300" whileHover={{ scale: 1.02 }}>
                <FaUserCheck className="text-gray-400" />
                <span>Técnicos Certificados</span>
              </motion.span>

              <motion.span className="flex items-center space-x-2 text-gray-300" whileHover={{ scale: 1.02 }}>
                <FaWhatsapp className="text-gray-400" />
                <span>Atendimento 24h</span>
              </motion.span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

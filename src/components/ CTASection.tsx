import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const CTASection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });

  const whatsappNumber = "5511999999999";

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Preciso de manutenção imediata para meu equipamento de refrigeração. Um técnico pode vir agora?");
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  const handleEmergencyCall = () => {
    window.open('tel:+5519999999999', '_self');
  };

  return (
    <>
      {/* Main CTA Section */}
      <section 
        ref={containerRef}
        className="py-24 bg-black relative overflow-hidden"
        id="contact"
      >
        {/* Intense animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.2),transparent_70%)]"></div>
          <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,rgba(6,182,212,0.1),transparent_25%,rgba(139,92,246,0.1),transparent_50%,rgba(6,182,212,0.1),transparent_75%,transparent)]"></div>
          
          {/* Floating particles */}
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-cyan-400 rounded-full opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 2, 1],
                opacity: [0.4, 0.8, 0.4],
                x: [0, Math.random() * 100 - 50, 0],
                y: [0, Math.random() * 100 - 50, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            {/* Urgent indicator */}
            <motion.div
              className="inline-flex items-center px-6 py-3 backdrop-blur-lg bg-red-500/20 border border-red-400/30 text-red-300 rounded-full mb-8 shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: isInView ? 1 : 0,
                scale: isInView ? 1 : 0.8,
                boxShadow: [
                  "0 0 0 0 rgba(239, 68, 68, 0.4)",
                  "0 0 0 20px rgba(239, 68, 68, 0)",
                  "0 0 0 0 rgba(239, 68, 68, 0.4)"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <i className="hgi-stroke hgi-customer-service mr-2 text-lg"></i>
              <span className="font-semibold">ATENDIMENTO DE EMERGÊNCIA 24H</span>
            </motion.div>

            <motion.h2
              className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{ 
                textShadow: '0 0 40px rgba(6, 182, 212, 0.6)',
                background: 'linear-gradient(135deg, #ffffff 0%, #06b6d4 50%, #ffffff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Precisa de Manutenção Agora?
            </motion.h2>

            <motion.p
              className="text-2xl md:text-3xl text-gray-200 mb-8 leading-relaxed max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Um técnico pode estar a caminho em minutos. Resolva seu problema{' '}
              <span className="text-cyan-400 font-bold">hoje mesmo!</span>
            </motion.p>

            {/* Emergency Features */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {[
                { icon: 'hgi-customer-service', text: 'Resposta em 5min', color: 'from-red-400 to-red-600' },
                { icon: 'hgi-repair', text: 'Técnico no Local 2h', color: 'from-orange-400 to-orange-600' },
                { icon: 'hgi-shield-01', text: 'Garantia Imediata', color: 'from-green-400 to-green-600' }
              ].map((feature, index) => (
                <motion.div
                  key={feature.text}
                  className="flex flex-col items-center space-y-4 backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center shadow-lg`}>
                    <i className={`hgi-stroke ${feature.icon} text-white text-2xl`}></i>
                  </div>
                  <span className="text-white font-bold text-lg">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Main CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              {/* WhatsApp Button */}
              <motion.button
                onClick={handleWhatsAppClick}
                className="group relative flex items-center px-12 py-6 bg-gradient-to-r from-green-400 to-emerald-500 text-black text-2xl font-bold rounded-3xl shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 overflow-hidden min-w-[300px]"
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(16, 185, 129, 0.6)",
                    "0 0 0 30px rgba(16, 185, 129, 0)",
                    "0 0 0 0 rgba(16, 185, 129, 0.6)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative flex items-center space-x-4">
                  <motion.svg 
                    className="w-10 h-10" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.569-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.485 3.085"/>
                  </motion.svg>
                  <span>Chamar Técnico Agora</span>
                </div>
              </motion.button>

              {/* Emergency Call Button */}
              <motion.button
                onClick={handleEmergencyCall}
                className="group relative flex items-center px-12 py-6 bg-gradient-to-r from-red-500 to-red-600 text-white text-2xl font-bold rounded-3xl shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 overflow-hidden min-w-[300px]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative flex items-center space-x-4">
                  <motion.i 
                    className="hgi-stroke hgi-phone-check text-3xl"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  ></motion.i>
                  <span>Ligar Emergência</span>
                </div>
              </motion.button>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 text-gray-200 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <i className="hgi-stroke hgi-whatsapp text-green-400 text-2xl"></i>
                  <div>
                    <p className="text-sm text-gray-400">WhatsApp</p>
                    <p className="text-white font-bold">(11) 99999-9999</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="hgi-stroke hgi-customer-service text-cyan-400 text-2xl"></i>
                  <div>
                    <p className="text-sm text-gray-400">Plantão 24h</p>
                    <p className="text-white font-bold">Campinas e Região</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
      >
        <motion.button
          onClick={handleWhatsAppClick}
          className="group w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 relative overflow-hidden"
          animate={{
            scale: [1, 1.1, 1],
            boxShadow: [
              "0 4px 20px rgba(16, 185, 129, 0.6)",
              "0 8px 30px rgba(16, 185, 129, 0.8)",
              "0 4px 20px rgba(16, 185, 129, 0.6)"
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
          <motion.svg 
            className="w-10 h-10 text-black relative z-10" 
            fill="currentColor" 
            viewBox="0 0 24 24"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.569-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.485 3.085"/>
          </motion.svg>
        </motion.button>
      </motion.div>
    </>
  );
};
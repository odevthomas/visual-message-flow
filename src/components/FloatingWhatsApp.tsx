import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const FloatingWhatsApp = () => {
  const handleWhatsAppClick = () => {
    const phone = "5519991195261";
    const message = "Olá! Preciso de assistência técnica para meus equipamentos de refrigeração. Gostaria de agendar uma visita.";
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.button
      onClick={handleWhatsAppClick}
      className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-secondary to-secondary/90 text-secondary-foreground rounded-2xl p-4 shadow-lg hover:shadow-green transition-all duration-300 backdrop-blur-sm border border-secondary/20"
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      animate={{ 
        y: [0, -4, 0],
      }}
      transition={{ 
        duration: 3, 
        repeat: Infinity,
        ease: "easeInOut"
      }}
      aria-label="Contatar via WhatsApp"
    >
      <MessageCircle size={20} />
    </motion.button>
  );
};

export default FloatingWhatsApp;
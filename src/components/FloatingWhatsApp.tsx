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
      className="fixed bottom-6 right-6 z-50 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full p-4 shadow-lg hover:shadow-green transition-all duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      animate={{ 
        boxShadow: [
          "0 0 20px hsl(120 100% 50% / 0.3)",
          "0 0 30px hsl(120 100% 50% / 0.6)",
          "0 0 20px hsl(120 100% 50% / 0.3)"
        ]
      }}
      transition={{ 
        duration: 2, 
        repeat: Infinity,
        repeatType: "reverse"
      }}
      aria-label="Contatar via WhatsApp"
    >
      <MessageCircle size={24} />
    </motion.button>
  );
};

export default FloatingWhatsApp;
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo-bras-service.png";

const Hero = () => {
  const handleWhatsAppClick = () => {
    const phone = "5519991195261";
    const message = "Olá! Preciso de assistência técnica urgente. Gostaria de agendar uma visita técnica o mais rápido possível.";
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 parallax-bg"
        style={{ 
          backgroundImage: `url(${heroBg})`,
          transform: 'translateZ(0)' // Hardware acceleration
        }}
      />
      
      {/* Dark overlay gradient */}
      <div 
        className="absolute inset-0"
        style={{ background: 'var(--gradient-hero)' }}
      />

      {/* Logo */}
      <motion.div 
        className="absolute top-8 left-8 z-20"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img 
          src={logo} 
          alt="Bras Service Logo" 
          className="h-16 w-auto"
        />
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Especialistas em{" "}
          <span className="neon-blue">Geladeiras</span>,{" "}
          <span className="neon-green">Freezers</span> e{" "}
          <span className="neon-orange">Equipamentos Industriais</span>
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl lg:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Atendimento rápido em Campinas e região, direto no seu endereço.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button
            onClick={handleWhatsAppClick}
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 text-lg font-semibold rounded-full animate-pulse-neon transition-all duration-300 hover:scale-105"
          >
            <MessageCircle className="mr-3 h-6 w-6" />
            Chamar no WhatsApp Agora
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-1 h-8 bg-gradient-to-b from-primary to-transparent rounded-full" />
      </motion.div>
    </section>
  );
};

export default Hero;
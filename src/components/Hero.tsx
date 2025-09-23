import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-metallic-bg.jpg";
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
      {/* Metallic background with parallax */}
      <div 
        className="absolute inset-0 parallax-bg"
        style={{ 
          backgroundImage: `url(${heroBg})`,
          transform: 'translateZ(0)'
        }}
      />
      
      {/* Sophisticated overlay */}
      <div 
        className="absolute inset-0"
        style={{ background: 'var(--gradient-hero)' }}
      />

      {/* Floating particles effect */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Centered logo */}
      <motion.div 
        className="absolute top-12 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <img 
          src={logo} 
          alt="Bras Service - Especialistas em Refrigeração" 
          className="h-20 w-auto filter drop-shadow-lg"
        />
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 metallic-text leading-[1.1]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Especialistas em{" "}
          <span className="accent-glow">Refrigeração</span>
          <br />
          <span className="text-3xl md:text-4xl lg:text-5xl font-medium text-muted-foreground">
            Campinas e Região
          </span>
        </motion.h1>

        <motion.p 
          className="text-xl md:text-2xl mb-12 text-muted-foreground max-w-3xl mx-auto font-medium"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Atendimento rápido e profissional direto no seu endereço
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button
            onClick={handleWhatsAppClick}
            size="lg"
            className="group relative bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary text-secondary-foreground px-12 py-6 text-xl font-bold rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-green"
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mr-4"
            >
              <MessageCircle className="h-7 w-7" />
            </motion.div>
            Chamar no WhatsApp
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <div className="w-1 h-12 bg-gradient-to-b from-accent to-transparent rounded-full shadow-glow" />
      </motion.div>
    </section>
  );
};

export default Hero;
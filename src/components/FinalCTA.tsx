import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  const handleWhatsAppClick = () => {
    const phone = "5519991195261";
    const message = "Olá! Não posso deixar meus equipamentos parados. Preciso agendar uma visita técnica urgente. Por favor, me ajudem!";
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0"
        style={{ 
          background: 'linear-gradient(135deg, hsl(0 0% 8% / 0.95), hsl(207 100% 15% / 0.4), hsl(25 100% 15% / 0.4), hsl(0 100% 15% / 0.4), hsl(120 100% 15% / 0.4))'
        }}
      />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 text-foreground leading-tight"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Não deixe seus equipamentos{" "}
          <span className="neon-red">parados</span>
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl mb-12 text-muted-foreground max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Chame agora no WhatsApp e garanta atendimento rápido e seguro para sua casa ou empresa.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* Main WhatsApp CTA */}
          <Button
            onClick={handleWhatsAppClick}
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-12 py-6 text-xl font-bold rounded-full animate-pulse-neon hover:scale-110 transition-all duration-300 shadow-[0_0_30px_hsl(120_100%_50%/0.3)]"
          >
            <MessageCircle className="mr-4 h-8 w-8" />
            Agendar minha visita pelo WhatsApp
          </Button>

          {/* Phone CTA */}
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
            onClick={() => window.open('tel:+5519991195261', '_self')}
          >
            <Phone className="mr-3 h-6 w-6" />
            (19) 9 9119-5261
          </Button>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          className="mt-12 flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
            <span>Atendimento 24/7</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span>Garantia em todos os serviços</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span>+2.000 clientes satisfeitos</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
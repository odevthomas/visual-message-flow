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
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Premium background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--accent)/0.15),transparent_70%)]" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 metallic-text leading-[1.1]"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Não deixe seus equipamentos{" "}
          <span className="green-glow">parados</span>
        </motion.h2>

        <motion.p
          className="text-xl md:text-2xl mb-16 text-muted-foreground max-w-3xl mx-auto font-medium"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Atendimento imediato pelo WhatsApp • Técnico no local • Garantia total
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button
            onClick={handleWhatsAppClick}
            size="lg"
            className="group relative bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary text-secondary-foreground px-16 py-8 text-2xl font-bold rounded-3xl transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-green"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mr-6"
            >
              <MessageCircle className="h-8 w-8" />
            </motion.div>
            Solicitar Atendimento Agora
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
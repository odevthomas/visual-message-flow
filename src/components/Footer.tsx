import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-bras-service.png";

const Footer = () => {
  const handleWhatsAppClick = () => {
    const phone = "5519991195261";
    const message = "Olá! Gostaria de mais informações sobre os serviços da Bras Service.";
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="bg-card border-t border-border py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Company info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img 
              src={logo} 
              alt="Bras Service Logo" 
              className="h-12 w-auto mb-4"
            />
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Especialistas em refrigeração com mais de 10 anos de experiência. 
              Atendimento rápido e garantia técnica em todos os serviços.
            </p>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Contato
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">
                    Av. Baden Powell, 551<br />
                    Jardim Nova Europa<br />
                    Campinas - SP
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-secondary flex-shrink-0" />
                <a 
                  href="tel:+5519991195261"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  (19) 9 9119-5261
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <a 
                  href="mailto:bras-service@hotmail.com"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  bras-service@hotmail.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Precisa de ajuda?
            </h3>
            <p className="text-muted-foreground mb-4 text-sm">
              Atendimento via WhatsApp preferencial.<br />
              Resposta rápida garantida!
            </p>
            <Button
              onClick={handleWhatsAppClick}
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground w-full sm:w-auto"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Falar no WhatsApp
            </Button>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div
          className="border-t border-border pt-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Bras Service. Todos os direitos reservados. | 
            Assistência técnica especializada em refrigeração
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
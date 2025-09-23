import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Geladeiras Residenciais",
    description: "Conserto rápido de geladeiras domésticas de todas as marcas com diagnóstico preciso",
    features: ["Todas as marcas", "Peças originais", "Garantia técnica"],
    icon: (
      <svg viewBox="0 0 24 24" className="w-12 h-12" fill="none">
        <path d="M9 2H15C16.1 2 17 2.9 17 4V20C17 21.1 16.1 22 15 22H9C7.9 22 7 21.1 7 20V4C7 2.9 7.9 2 9 2Z" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M7 8H17" stroke="currentColor" strokeWidth="2"/>
        <path d="M10 5H11" stroke="currentColor" strokeWidth="2"/>
        <path d="M10 11H14" stroke="currentColor" strokeWidth="2"/>
        <path d="M10 14H12" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    message: "Olá! Minha geladeira está com problema. Preciso de um técnico para diagnóstico e reparo.",
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "Supermercados e Comércio",
    description: "Manutenção urgente em sistemas industriais para evitar perdas e prejuízos",
    features: ["Atendimento prioritário", "Sistemas industriais", "24/7 disponível"],
    icon: (
      <svg viewBox="0 0 24 24" className="w-12 h-12" fill="none">
        <path d="M3 7V5C3 3.9 3.9 3 5 3H19C20.1 3 21 3.9 21 5V7" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M3 7H21L20 17C20 18.1 19.1 19 18 19H6C4.9 19 4 18.1 4 17L3 7Z" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M9 7V11C9 11.6 8.6 12 8 12C7.4 12 7 11.6 7 11V7" stroke="currentColor" strokeWidth="2"/>
        <path d="M15 7V11C15 11.6 15.4 12 16 12C16.6 12 17 11.6 17 11V7" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    message: "Olá! Sou responsável por um comércio e preciso de manutenção urgente nos equipamentos de refrigeração.",
    gradient: "from-green-500/20 to-emerald-500/20"
  },
  {
    title: "Manutenção Preventiva",
    description: "Planos regulares para empresas evitarem falhas e reduzirem custos operacionais",
    features: ["Contratos mensais", "Economia garantida", "Prioridade total"],
    icon: (
      <svg viewBox="0 0 24 24" className="w-12 h-12" fill="none">
        <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    message: "Quero orçamento para contrato de manutenção preventiva. Tenho interesse em um plano regular.",
    gradient: "from-orange-500/20 to-yellow-500/20"
  },
  {
    title: "Refrigeração Médica",
    description: "Equipamentos farmacêuticos e laboratoriais com procedimentos especializados",
    features: ["Certificado técnico", "Controle de temperatura", "Emergencial"],
    icon: (
      <svg viewBox="0 0 24 24" className="w-12 h-12" fill="none">
        <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M12 8V16" stroke="currentColor" strokeWidth="2"/>
        <path d="M8 12H16" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    message: "Preciso de assistência técnica especializada para equipamento médico/farmacêutico.",
    gradient: "from-red-500/20 to-pink-500/20"
  }
];

const ServicesSection = () => {
  const handleWhatsAppClick = (message: string) => {
    const phone = "5519991195261";
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 metallic-text">
            Nossos <span className="gradient-text">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluções completas em refrigeração para residências e empresas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`group relative card-metallic rounded-3xl p-8 hover:scale-105 transition-all duration-500 bg-gradient-to-br ${service.gradient} backdrop-blur-sm`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              {/* Icon */}
              <motion.div
                className="w-20 h-20 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl flex items-center justify-center mb-6 text-accent group-hover:text-primary transition-colors duration-300"
                whileHover={{ rotate: 10, scale: 1.1 }}
              >
                {service.icon}
              </motion.div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-4 metallic-text group-hover:accent-glow transition-all duration-300">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-2 mb-8">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3 group-hover:bg-accent transition-colors duration-300" />
                    {feature}
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button
                onClick={() => handleWhatsAppClick(service.message)}
                className="w-full group/btn relative bg-gradient-to-r from-secondary/90 to-secondary hover:from-secondary hover:to-secondary/90 text-secondary-foreground rounded-2xl py-6 font-semibold transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <motion.div
                  animate={{ x: [0, 3, -3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="mr-3"
                >
                  <MessageCircle className="h-5 w-5" />
                </motion.div>
                Solicitar Atendimento
                <ArrowRight className="ml-3 h-5 w-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                
                {/* Button shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
              </Button>

              {/* Card glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
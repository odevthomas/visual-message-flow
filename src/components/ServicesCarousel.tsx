import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import residentialImg from "@/assets/service-residential.jpg";
import commercialImg from "@/assets/service-commercial.jpg";
import preventiveImg from "@/assets/service-preventive.jpg";
import medicalImg from "@/assets/service-medical.jpg";

const services = [
  {
    id: 1,
    title: "Manutenção Residencial de Geladeiras",
    description: "Conserto de geladeiras domésticas de todas as marcas — diagnóstico no local, substituição de peças e garantia técnica.",
    image: residentialImg,
    ctaText: "Agendar visita",
    whatsappMessage: "Olá, preciso consertar minha geladeira em Campinas. Marca/Modelo: __. Endereço: __. Breve descrição do problema: __.",
    accentColor: "blue"
  },
  {
    id: 2,
    title: "Manutenção para Supermercados e Comércio", 
    description: "Atendimento para sistemas e vitrines refrigeradas — prioridade para reduzir perdas e tempo de parada.",
    image: commercialImg,
    ctaText: "Solicitar atendimento urgente",
    whatsappMessage: "Olá, sou do (nome do comércio). Precisamos de manutenção urgente em equipamentos industriais. Endereço: __. Horário disponível: __.",
    accentColor: "orange"
  },
  {
    id: 3,
    title: "Contratos Preventivos para Empresas",
    description: "Planos regulares de manutenção para evitar falhas e reduzir custos com paradas não programadas.",
    image: preventiveImg,
    ctaText: "Pedir orçamento preventivo",
    whatsappMessage: "Quero orçamento para contrato preventivo. Tipo de empresa: __. Nº de equipamentos: __. Frequência desejada: __.",
    accentColor: "green"
  },
  {
    id: 4,
    title: "Refrigeração Médica e Laboratorial",
    description: "Atendimento especializado para refrigeradores farmacêuticos e freezers de laboratório, com controle de temperatura.",
    image: medicalImg,
    ctaText: "Assistência para equipamentos médicos",
    whatsappMessage: "Preciso de assistência técnica para equipamento médico. Modelo: __. Local: __. Urgência: __.",
    accentColor: "red"
  }
];

const ServicesCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleWhatsAppClick = (message: string) => {
    const phone = "5519991195261";
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const getAccentClass = (color: string) => {
    switch (color) {
      case 'blue': return 'neon-blue';
      case 'orange': return 'neon-orange';
      case 'green': return 'neon-green';
      case 'red': return 'neon-red';
      default: return 'neon-blue';
    }
  };

  const getShadowClass = (color: string) => {
    switch (color) {
      case 'blue': return 'hover:shadow-[0_0_30px_hsl(207_100%_50%/0.5)]';
      case 'orange': return 'hover:shadow-[0_0_30px_hsl(25_100%_50%/0.5)]';
      case 'green': return 'hover:shadow-[0_0_30px_hsl(120_100%_50%/0.5)]';
      case 'red': return 'hover:shadow-[0_0_30px_hsl(0_100%_50%/0.5)]';
      default: return 'hover:shadow-[0_0_30px_hsl(207_100%_50%/0.5)]';
    }
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Nossos <span className="gradient-text">Serviços</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções completas para todas as suas necessidades de refrigeração
          </p>
        </motion.div>

        {/* Mobile: Stack cards */}
        <div className="md:hidden space-y-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`bg-card border-border p-6 transition-all duration-300 ${getShadowClass(service.accentColor)}`}>
                <div className="flex flex-col space-y-4">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className={`text-xl font-bold mb-2 ${getAccentClass(service.accentColor)}`}>
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {service.description}
                    </p>
                    <Button
                      onClick={() => handleWhatsAppClick(service.whatsappMessage)}
                      className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      {service.ctaText}
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Desktop: Horizontal scroll carousel */}
        <div className="hidden md:block">
          <div className="flex space-x-6 overflow-x-auto pb-6 scrollbar-hide">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="flex-none w-80"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className={`bg-card border-border h-full transition-all duration-300 ${getShadowClass(service.accentColor)} hover:border-opacity-50`}>
                  <div className="p-6 flex flex-col h-full">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h3 className={`text-xl font-bold mb-3 ${getAccentClass(service.accentColor)}`}>
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 flex-grow text-sm leading-relaxed">
                      {service.description}
                    </p>
                    <Button
                      onClick={() => handleWhatsAppClick(service.whatsappMessage)}
                      className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground hover:scale-105 transition-transform duration-200"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      {service.ctaText}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;
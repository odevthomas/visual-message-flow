import { motion } from "framer-motion";
import { MessageCircle, Calendar, User, Shield, ArrowRight } from "lucide-react";
import { useState } from "react";

const steps = [
  {
    icon: MessageCircle,
    title: "Contato Direto",
    description: "Fale conosco pelo WhatsApp de forma rápida e sem burocracia",
    details: "Atendimento humanizado 24/7. Resposta em até 5 minutos.",
    gradient: "from-green-500 to-green-600"
  },
  {
    icon: Calendar,
    title: "Agendamento Confirmado",
    description: "Marcamos horário real e confirmado para sua conveniência",
    details: "Flexibilidade total de horários. Fins de semana e feriados disponíveis.",
    gradient: "from-blue-500 to-blue-600"
  },
  {
    icon: User,
    title: "Técnico Especializado",
    description: "Profissional qualificado vai até você com tudo preparado",
    details: "Diagnóstico gratuito. Peças originais em estoque.",
    gradient: "from-orange-500 to-orange-600"
  },
  {
    icon: Shield,
    title: "Garantia Total",
    description: "Serviço realizado com garantia técnica e pós-venda",
    details: "Garantia de 90 dias. Suporte pós-serviço incluso.",
    gradient: "from-purple-500 to-purple-600"
  }
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background" />
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 metallic-text">
            Como <span className="gradient-text">Funciona</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Processo simples e direto, sem complicações
          </p>
        </motion.div>

        {/* Interactive timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-border via-accent to-border rounded-full" />
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;
              
              return (
                <motion.div
                  key={index}
                  className="relative group cursor-pointer"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  onHoverStart={() => setActiveStep(index)}
                  whileHover={{ scale: 1.05 }}
                >
                  {/* Step number on timeline */}
                  <motion.div
                    className={`hidden lg:flex absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full items-center justify-center text-lg font-bold z-10 transition-all duration-300 ${
                      isActive
                        ? `bg-gradient-to-r ${step.gradient} text-white shadow-lg scale-110`
                        : 'bg-card border-2 border-border text-muted-foreground group-hover:border-accent'
                    }`}
                    whileHover={{ scale: 1.2 }}
                  >
                    {index + 1}
                  </motion.div>

                  {/* Card */}
                  <motion.div
                    className={`card-metallic rounded-3xl p-8 text-center transition-all duration-500 ${
                      isActive ? 'bg-gradient-to-br from-accent/10 to-primary/10 border-accent/30' : 'hover:border-accent/20'
                    }`}
                    layout
                  >
                    {/* Icon */}
                    <motion.div
                      className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 ${
                        isActive
                          ? `bg-gradient-to-r ${step.gradient} text-white shadow-lg`
                          : 'bg-gradient-to-br from-card to-muted text-accent group-hover:from-accent/20 group-hover:to-primary/20'
                      }`}
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className="h-10 w-10" />
                    </motion.div>

                    {/* Content */}
                    <h3 className={`text-xl font-bold mb-4 transition-colors duration-300 ${
                      isActive ? 'accent-glow' : 'metallic-text group-hover:accent-glow'
                    }`}>
                      {step.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Details (shown on active) */}
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: isActive ? 1 : 0,
                        height: isActive ? 'auto' : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-border/30 pt-4 mt-4">
                        <p className="text-sm text-foreground font-medium">
                          {step.details}
                        </p>
                      </div>
                    </motion.div>

                    {/* Arrow connector (desktop) */}
                    {index < steps.length - 1 && (
                      <motion.div
                        className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2"
                        animate={{
                          x: isActive ? [0, 8, 0] : 0,
                          opacity: isActive ? [0.5, 1, 0.5] : 0.3
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <ArrowRight className="w-6 h-6 text-accent" />
                      </motion.div>
                    )}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-muted-foreground mb-6">
            Pronto para começar? É simples e rápido!
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="inline-flex items-center space-x-2 text-accent font-semibold">
              <span>Iniciar atendimento</span>
              <ArrowRight className="w-5 h-5" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
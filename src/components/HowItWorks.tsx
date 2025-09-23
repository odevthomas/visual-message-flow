import { motion } from "framer-motion";
import { MessageCircle, Calendar, User, Shield } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Contato via WhatsApp",
    description: "Fale com a gente pelo WhatsApp de forma rápida e direta",
    color: "blue"
  },
  {
    icon: Calendar,
    title: "Agendamento Real",
    description: "Agendamos a visita com horário confirmado e garantido",
    color: "green"
  },
  {
    icon: User,
    title: "Técnico no Local",
    description: "Técnico especializado vai até você com peças e ferramentas",
    color: "orange"
  },
  {
    icon: Shield,
    title: "Serviço Garantido",
    description: "Trabalho realizado com garantia técnica formal",
    color: "red"
  }
];

const HowItWorks = () => {
  const getIconColor = (color: string) => {
    switch (color) {
      case 'blue': return 'text-primary';
      case 'green': return 'text-secondary';
      case 'orange': return 'text-accent';
      case 'red': return 'text-destructive';
      default: return 'text-primary';
    }
  };

  const getBgColor = (color: string) => {
    switch (color) {
      case 'blue': return 'bg-primary/10';
      case 'green': return 'bg-secondary/10';
      case 'orange': return 'bg-accent/10';
      case 'red': return 'bg-destructive/10';
      default: return 'bg-primary/10';
    }
  };

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Como <span className="gradient-text">Funciona</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sem formulários, sem enrolação — só agendamento direto e serviço de qualidade
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                className="relative text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                {/* Step number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm z-10">
                  {index + 1}
                </div>

                {/* Card */}
                <div className="bg-card border border-border rounded-lg p-6 h-full hover:shadow-[0_0_30px_hsl(207_100%_50%/0.2)] transition-all duration-300">
                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 ${getBgColor(step.color)} rounded-full flex items-center justify-center mx-auto mb-4`}
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className={`h-8 w-8 ${getIconColor(step.color)}`} />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-lg font-bold mb-3 text-foreground">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector line (desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
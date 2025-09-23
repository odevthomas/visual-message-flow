import { motion } from "framer-motion";
import { Zap, Wrench, Shield, CreditCard } from "lucide-react";

const differentials = [
  {
    icon: Zap,
    title: "Atendimento Imediato",
    description: "Resposta rápida via WhatsApp e agendamento no mesmo dia",
    color: "blue"
  },
  {
    icon: Wrench,
    title: "Peças Originais", 
    description: "Trabalhamos apenas com peças originais e de qualidade comprovada",
    color: "orange"
  },
  {
    icon: Shield,
    title: "Garantia Técnica",
    description: "Garantia formal em todos os serviços realizados pela equipe",
    color: "green"
  },
  {
    icon: CreditCard,
    title: "Pagamento Facilitado",
    description: "Diversas formas de pagamento e parcelamento disponível",
    color: "red"
  }
];

const Differentials = () => {
  const getIconColor = (color: string) => {
    switch (color) {
      case 'blue': return 'text-primary';
      case 'orange': return 'text-accent';
      case 'green': return 'text-secondary';
      case 'red': return 'text-destructive';
      default: return 'text-primary';
    }
  };

  const getShadow = (color: string) => {
    switch (color) {
      case 'blue': return 'hover:shadow-[0_0_30px_hsl(207_100%_50%/0.3)]';
      case 'orange': return 'hover:shadow-[0_0_30px_hsl(25_100%_50%/0.3)]';
      case 'green': return 'hover:shadow-[0_0_30px_hsl(120_100%_50%/0.3)]';
      case 'red': return 'hover:shadow-[0_0_30px_hsl(0_100%_50%/0.3)]';
      default: return 'hover:shadow-[0_0_30px_hsl(207_100%_50%/0.3)]';
    }
  };

  return (
    <section className="py-20 px-4 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Por que escolher a <span className="gradient-text">Bras Service</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Compromisso com a excelência e satisfação total do cliente
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                className={`bg-card border border-border rounded-lg p-6 text-center transition-all duration-500 ${getShadow(item.color)} hover:scale-105`}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className="mb-4 flex justify-center"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className={`h-12 w-12 ${getIconColor(item.color)}`} />
                </motion.div>
                
                <h3 className="text-lg font-bold mb-3 text-foreground">
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
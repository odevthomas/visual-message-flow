import { motion } from "framer-motion";

const partners = [
  { name: "Consul", width: "120px" },
  { name: "Brastemp", width: "140px" },
  { name: "Electrolux", width: "130px" },
  { name: "LG", width: "80px" },
  { name: "Samsung", width: "120px" },
  { name: "Whirlpool", width: "130px" },
  { name: "Bosch", width: "100px" },
  { name: "Panasonic", width: "130px" }
];

const PartnersSection = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 metallic-text">
            Marcas <span className="accent-glow">Atendidas</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trabalhamos com as principais marcas do mercado, garantindo qualidade e confiança
          </p>
        </motion.div>

        {/* Partners grid */}
        <div className="relative">
          {/* Infinite scroll container */}
          <div className="flex overflow-hidden">
            <motion.div
              className="flex space-x-16 items-center"
              animate={{
                x: [0, -1920]
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {/* First set */}
              {partners.map((partner, index) => (
                <motion.div
                  key={`first-${index}`}
                  className="flex-shrink-0 flex items-center justify-center h-16"
                  style={{ minWidth: partner.width }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="bg-gradient-to-r from-card to-card/80 backdrop-blur-sm rounded-2xl px-6 py-3 border border-border/50 shadow-lg hover:shadow-primary/20 transition-all duration-300">
                    <span className="text-lg font-semibold text-muted-foreground hover:text-foreground transition-colors duration-300">
                      {partner.name}
                    </span>
                  </div>
                </motion.div>
              ))}
              
              {/* Second set for seamless loop */}
              {partners.map((partner, index) => (
                <motion.div
                  key={`second-${index}`}
                  className="flex-shrink-0 flex items-center justify-center h-16"
                  style={{ minWidth: partner.width }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="bg-gradient-to-r from-card to-card/80 backdrop-blur-sm rounded-2xl px-6 py-3 border border-border/50 shadow-lg hover:shadow-primary/20 transition-all duration-300">
                    <span className="text-lg font-semibold text-muted-foreground hover:text-foreground transition-colors duration-300">
                      {partner.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>

        {/* Trust indicators */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="space-y-2">
            <div className="text-3xl font-bold accent-glow">2000+</div>
            <div className="text-sm text-muted-foreground">Clientes Atendidos</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold accent-glow">98%</div>
            <div className="text-sm text-muted-foreground">Satisfação Garantida</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold accent-glow">24/7</div>
            <div className="text-sm text-muted-foreground">Atendimento Disponível</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
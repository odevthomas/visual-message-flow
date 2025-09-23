import { motion } from "framer-motion";

const brands = [
  "Consul", "Brastemp", "Electrolux", "LG", "Samsung", 
  "Whirlpool", "Continental", "Metalfrio", "Gelopar", "Fricon"
];

const BrandsCarousel = () => {
  return (
    <section className="py-16 px-4 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
            Trabalhamos com as <span className="neon-blue">principais marcas</span>
          </h2>
          <p className="text-muted-foreground">
            Atendimento especializado para equipamentos domésticos e industriais
          </p>
        </motion.div>

        {/* Infinite scrolling carousel */}
        <div className="relative">
          <div className="flex animate-slide space-x-12">
            {[...brands, ...brands].map((brand, index) => (
              <motion.div
                key={`${brand}-${index}`}
                className="flex-none"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <div className="bg-card border border-border rounded-lg px-6 py-4 min-w-[120px] text-center hover:shadow-[0_0_20px_hsl(207_100%_50%/0.2)] transition-all duration-300">
                  <span className="text-lg font-semibold text-foreground">
                    {brand}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Gradient overlays */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10" />
        </div>
      </div>
    </section>
  );
};

export default BrandsCarousel;
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    role: "Dona de casa",
    location: "Campinas",
    content: "Serviço excepcional! Minha geladeira estava fazendo barulho estranho e eles resolveram no mesmo dia. Muito profissionais.",
    rating: 5,
    image: "👩‍💼"
  },
  {
    name: "Carlos Mendes",
    role: "Gerente de Supermercado",
    location: "Valinhos",
    content: "A Bras Service salvou nosso final de semana! Sistema de refrigeração parou na sexta e eles vieram no sábado resolver tudo.",
    rating: 5,
    image: "👨‍💼"
  },
  {
    name: "Dr. Ana Costa",
    role: "Clínica Médica",
    location: "Indaiatuba",
    content: "Refrigerador de vacinas com problema urgente. Atendimento técnico especializado e muito cuidadoso. Recomendo!",
    rating: 5,
    image: "👩‍⚕️"
  },
  {
    name: "João Santos",
    role: "Restaurante",
    location: "Campinas",
    content: "Contrato de manutenção preventiva há 2 anos. Nunca mais tivemos problemas inesperados. Vale cada centavo!",
    rating: 5,
    image: "👨‍🍳"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-card via-background to-card" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--accent)/0.1),transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 metallic-text">
            O que nossos <span className="gradient-text">clientes dizem</span>
          </h2>
          
          {/* Rating display */}
          <div className="flex items-center justify-center mb-4">
            <div className="flex items-center space-x-1 mr-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-2xl font-bold accent-glow">4.9</span>
            <span className="text-muted-foreground ml-2">(+2.000 avaliações)</span>
          </div>
        </motion.div>

        {/* Main testimonial display */}
        <div className="relative min-h-[400px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="card-metallic rounded-3xl p-8 md:p-12 text-center max-w-3xl mx-auto relative"
            >
              {/* Quote icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute -top-6 left-1/2 transform -translate-x-1/2"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center shadow-lg">
                  <Quote className="w-6 h-6 text-background" />
                </div>
              </motion.div>

              {/* Testimonial content */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg md:text-xl leading-relaxed mb-8 text-foreground italic"
              >
                "{testimonials[currentIndex].content}"
              </motion.p>

              {/* User info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex items-center justify-center space-x-4"
              >
                <div className="text-4xl">{testimonials[currentIndex].image}</div>
                <div className="text-left">
                  <div className="font-bold text-lg metallic-text">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].role} • {testimonials[currentIndex].location}
                  </div>
                  <div className="flex items-center mt-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center space-x-3 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-accent shadow-glow scale-125'
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>

        {/* Small testimonials preview */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {testimonials.slice(0, 2).map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-accent/30 transition-all duration-300"
              whileHover={{ scale: 1.02, y: -4 }}
            >
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-3">{testimonial.image}</span>
                <div>
                  <div className="font-semibold text-sm">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.location}</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground italic">
                "{testimonial.content.slice(0, 100)}..."
              </p>
              <div className="flex items-center mt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
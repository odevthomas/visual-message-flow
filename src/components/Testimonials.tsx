import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "José P.",
    business: "Supermercado",
    rating: 5,
    text: "Resolveram nossa emergência no mesmo dia. Profissionais competentes e equipamento voltou a funcionar perfeitamente.",
    location: "Campinas, SP"
  },
  {
    id: 2,
    name: "Maria Silva",
    business: "Residencial",
    rating: 5,
    text: "Agendamento rápido pelo WhatsApp e orçamento honesto. Técnico muito educado e deixou tudo funcionando.",
    location: "Valinhos, SP"
  },
  {
    id: 3,
    name: "Clínica Veterinária ABC",
    business: "Clínica",
    rating: 5,
    text: "O plano preventivo evitou várias paradas na clínica. Excelente custo-benefício e atendimento profissional.",
    location: "Americana, SP"
  },
  {
    id: 4,
    name: "Farmácia Central",
    business: "Farmácia",
    rating: 5,
    text: "Atendimento emergencial para nossos refrigeradores de medicamentos. Chegaram em 2 horas e resolveram tudo.",
    location: "Hortolândia, SP"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        {/* Header with rating */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center items-center mb-4 space-x-2">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className="h-8 w-8 text-accent fill-current" 
              />
            ))}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-foreground">
            <span className="neon-orange">4,9</span> no Google
          </h2>
          <p className="text-lg text-muted-foreground">
            +2.000 clientes atendidos com satisfação
          </p>
        </motion.div>

        {/* Testimonials slider */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center relative"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Quote className="h-12 w-12 text-primary mx-auto mb-6 opacity-50" />
              
              <blockquote className="text-lg md:text-xl text-foreground mb-8 leading-relaxed">
                "{testimonials[currentIndex].text}"
              </blockquote>
              
              <div className="flex justify-center items-center space-x-1 mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-accent fill-current" />
                ))}
              </div>
              
              <cite className="not-italic">
                <div className="font-semibold text-foreground text-lg mb-1">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-muted-foreground">
                  {testimonials[currentIndex].business} • {testimonials[currentIndex].location}
                </div>
              </cite>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-card/80 backdrop-blur-sm hover:bg-card border-border"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-card/80 backdrop-blur-sm hover:bg-card border-border"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Dots indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary shadow-[0_0_10px_hsl(207_100%_50%/0.5)]' 
                    : 'bg-muted hover:bg-muted-foreground'
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA to Google Reviews */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Button 
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={() => window.open('https://g.page/r/YOUR_GOOGLE_BUSINESS_ID/review', '_blank')}
          >
            Ver mais avaliações no Google
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Star } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Testimonial {
  name: string;
  location: string;
  comment: string;
  rating: number;
  service: string;
  company?: string;
}

export const TestimonialsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  const testimonials: Testimonial[] = [
    { name: 'José Paulo Silva', location: 'Campinas - SP', company: 'Restaurante Dom Sabor', comment: 'A Bras Service salvou nosso negócio! Nossa câmara fria parou na véspera do fim de semana e eles vieram em menos de 2 horas. Serviço impecável!', rating: 5, service: 'Reparo de Câmara Fria' },
    { name: 'Maria Santos', location: 'Valinhos - SP', comment: 'Técnico muito competente e educado. Explicou todo o problema, fez o reparo com garantia e ainda deu dicas de manutenção. Recomendo!', rating: 5, service: 'Manutenção Preventiva' },
    { name: 'Carlos Oliveira', location: 'Americana - SP', company: 'Supermercado Central', comment: 'Há 3 anos contratamos a Bras Service para manutenção dos nossos equipamentos. Nunca tivemos problemas sérios desde então.', rating: 5, service: 'Contrato de Manutenção' },
    { name: 'Ana Costa', location: 'Sumaré - SP', comment: 'Minha geladeira estava fazendo muito barulho e gastando energia demais. Após o serviço da Bras Service, ficou como nova.', rating: 5, service: 'Conserto de Geladeira' },
    { name: 'Roberto Lima', location: 'Indaiatuba - SP', company: 'Padaria Três Irmãos', comment: 'Atendimento profissional e preço justo. Resolveram o problema do nosso freezer rapidamente. Muito satisfeito com o resultado.', rating: 5, service: 'Reparo de Freezer' },
    { name: 'Fernanda Torres', location: 'Paulínia - SP', comment: 'Excelente trabalho! A equipe chegou no horário marcado, diagnosticou o problema e executou o reparo com perfeição. Super recomendo!', rating: 5, service: 'Higienização Completa' },
  ];

  return (
    <section ref={containerRef} className="py-16 sm:py-20 md:py-24 relative overflow-hidden" style={{ background: 'hsl(210 45% 8%)' }} id="testimonials">

      {/* Background subtle metallic particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent rounded-full opacity-20"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 4 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Title */}
        <motion.div className="text-center mb-12 sm:mb-16 md:mb-20" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold metallic-text mb-6 sm:mb-8">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto">
            A confiança de centenas de clientes satisfeitos é nossa maior conquista
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div className="relative" initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1, delay: 0.6 }}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            onBeforeInit={(swiper) => {
              if (typeof swiper.params.navigation !== 'boolean') {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }
            }}
            breakpoints={{
              640: { slidesPerView: 1.2, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 28 },
              1024: { slidesPerView: 2.5, spaceBetween: 32 },
              1280: { slidesPerView: 3, spaceBetween: 32 },
            }}
            className="testimonials-swiper pb-16"
          >
            {testimonials.map((t, idx) => (
              <SwiperSlide key={`${t.name}-${idx}`}>
                <motion.div className="group relative card-metallic rounded-3xl p-6 sm:p-8 shadow-glow hover:shadow-glow transition-transform duration-500 transform hover:-translate-y-1 h-full flex flex-col">
                  
                  <div className="relative flex flex-col h-full z-10">
                    <div className="flex items-center mb-4 sm:mb-6">
                      {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 mr-1" style={{ filter: 'drop-shadow(0 0 4px rgba(234,179,8,0.5))' }} />)}
                    </div>

                    <div className="mb-4 sm:mb-6">
                      <span className="inline-block px-3 py-1 border border-foreground/20 text-foreground/70 text-sm font-semibold rounded-full">{t.service}</span>
                    </div>

                    <div className="mb-6 sm:mb-8 flex-1">
                      <div className="text-4xl sm:text-5xl text-foreground/30 mb-3 sm:mb-4 font-serif">"</div>
                      <p className="text-foreground text-base sm:text-lg leading-relaxed italic">{t.comment}</p>
                    </div>

                    <div className="border-t border-foreground/10 pt-4 sm:pt-6">
                      <div className="flex items-center">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-accent to-accent/70 rounded-full flex items-center justify-center mr-3 sm:mr-4 shadow-glow">
                          <span className="text-foreground font-bold text-lg sm:text-xl">{t.name.charAt(0)}</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-foreground text-base sm:text-lg">{t.name}</h4>
                          {t.company && <p className="text-foreground/70 text-sm font-medium">{t.company}</p>}
                          <p className="text-foreground/50 text-sm">{t.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Setas customizadas azul neon */}
          <div ref={prevRef} className="absolute top-1/2 left-4 z-20 transform -translate-y-1/2 cursor-pointer bg-accent/20 rounded-full w-12 h-12 flex items-center justify-center shadow-glow hover:bg-accent transition-transform duration-300">
            <svg className="w-6 h-6 stroke-foreground" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </div>
          <div ref={nextRef} className="absolute top-1/2 right-4 z-20 transform -translate-y-1/2 cursor-pointer bg-accent/20 rounded-full w-12 h-12 flex items-center justify-center shadow-glow hover:bg-accent transition-transform duration-300">
            <svg className="w-6 h-6 stroke-foreground" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

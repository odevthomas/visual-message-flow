import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { FaCheckCircle, FaWhatsapp, FaTools, FaCog, FaRecycle, FaSnowflake } from 'react-icons/fa';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Service {
  title: string;
  description: string;
  image: string;
  icon: React.ElementType;
  features: string[];
}

export const FeaturesSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });
  const [activeSlide, setActiveSlide] = useState(0);

  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  const whatsappNumber = "5511999999999";

  const handleWhatsAppClick = (service: string) => {
    const message = encodeURIComponent(`Olá! Preciso de ${service}. Gostaria de agendar um atendimento.`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  const services: Service[] = [
    {
      title: 'Conserto de Geladeiras',
      description: 'Reparo completo em geladeiras domésticas e comerciais de todas as marcas. Diagnóstico preciso e solução rápida com peças originais.',
      image: 'https://evolutionmechanical.net/wp-content/uploads/2024/01/refrigeration-repair-services.jpg',
      icon: FaCog,
      features: ['Diagnóstico gratuito', 'Peças originais', 'Garantia 1 ano']
    },
    {
      title: 'Manutenção Preventiva',
      description: 'Serviço preventivo especializado para evitar problemas futuros e prolongar significativamente a vida útil do seu equipamento.',
      image: 'https://evolutionmechanical.net/wp-content/uploads/2024/01/commercial-refrigeration-maintenance-a-proactive-guide.jpg',
      icon: FaTools,
      features: ['Inspeção completa', 'Limpeza profunda', 'Relatório técnico']
    },
    {
      title: 'Higienização Completa',
      description: 'Limpeza profunda e desinfecção completa do sistema de refrigeração para máxima segurança alimentar e eficiência.',
      image: 'https://hecolimited.com/wp-content/uploads/2021/12/Heco-blog.jpg',
      icon: FaRecycle,
      features: ['Desinfecção total', 'Produtos certificados', 'Certificado sanitário']
    },
    {
      title: 'Centrais Frigoríficas',
      description: 'Atendimento especializado para estabelecimentos comerciais, supermercados e sistemas de refrigeração de grande porte.',
      image: 'https://americanrefrigerationinc.com/wp-content/uploads/maintenance-for-commercial-refrigeration.jpg',
      icon: FaSnowflake,
      features: ['Atendimento 24h', 'Equipe especializada', 'Contratos de manutenção']
    },
    {
      title: 'Instalação de Equipamentos',
      description: 'Instalação profissional de novos equipamentos de refrigeração com configuração otimizada para máxima eficiência.',
      image: 'https://www.strm-mn.com/application/files/4515/5260/2911/South-Town-Refrigeration_Refrigeration-Maintenance.jpg',
      icon: FaCog,
      features: ['Instalação certificada', 'Teste de eficiência', 'Treinamento operacional']
    },
    {
      title: 'Reparo de Freezers',
      description: 'Especialistas em reparos de freezers horizontais, verticais e câmaras frias com tecnologia avançada de diagnóstico.',
      image: 'https://dandhrefrigeration.com/wp-content/uploads/2022/04/why-choose-dh-banner-background-dark.jpg',
      icon: FaTools,
      features: ['Tecnologia avançada', 'Reparo rápido', 'Teste de temperatura']
    }
  ];

  return (
    <section 
      ref={containerRef}
      className="py-16 sm:py-20 md:py-24 bg-black relative overflow-hidden"
      id="services"
    >
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          className="text-center mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 sm:mb-8"
            style={{ textShadow: '0 0 20px rgba(156, 163, 175, 0.3)' }}
          >
            Nossos Serviços
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Soluções completas em refrigeração com tecnologia avançada e atendimento especializado
          </motion.p>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Swiper
            modules={[Navigation, Pagination, EffectCoverflow]}
            spaceBetween={24}
            slidesPerView={1}
            centeredSlides={true}
            initialSlide={1}
            loop={true}
            effect="coverflow"
            coverflowEffect={{ rotate: 10, stretch: 0, depth: 150, modifier: 1, slideShadows: true }}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            onBeforeInit={(swiper) => {
              if (typeof swiper.params.navigation !== 'boolean') {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }
            }}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 16 },
              640: { slidesPerView: 1.2, spaceBetween: 20 },
              768: { slidesPerView: 1.5, spaceBetween: 24 },
              1024: { slidesPerView: 2, spaceBetween: 32 },
              1280: { slidesPerView: 2.5, spaceBetween: 36 },
            }}
            onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
            className="services-swiper pb-16 relative"
          >
            {services.map((service, index) => (
              <SwiperSlide key={service.title}>
                <motion.div
                  className="group relative backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-500"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)',
                    backdropFilter: 'blur(20px)',
                  }}
                >
                  {/* Image */}
                  <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden rounded-3xl">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-75 group-hover:brightness-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  </div>

                  <div className="p-6 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>

                    <div className="mb-6 space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <FaCheckCircle className="text-gray-400 text-sm" />
                          <span className="text-gray-400 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <motion.button
                      onClick={() => handleWhatsAppClick(service.title)}
                      className="w-full flex items-center justify-center px-6 py-4 bg-gradient-to-r from-green-600 to-emerald-700 text-white font-bold rounded-xl shadow-lg"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FaWhatsapp className="mr-2 text-xl" />
                      Solicitar Orçamento
                    </motion.button>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Arrows */}
          <motion.button
            ref={prevRef}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 bg-white/10 border border-white/20 backdrop-blur-md p-3 sm:p-4 rounded-full shadow-lg hover:bg-white/20 transition"
            whileHover={{ scale: 1.1, x: -4 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="text-white w-6 h-6 sm:w-8 sm:h-8" />
          </motion.button>

          <motion.button
            ref={nextRef}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 bg-white/10 border border-white/20 backdrop-blur-md p-3 sm:p-4 rounded-full shadow-lg hover:bg-white/20 transition"
            whileHover={{ scale: 1.1, x: 4 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="text-white w-6 h-6 sm:w-8 sm:h-8" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

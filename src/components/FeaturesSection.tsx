import React from 'react';
import { FaCheckCircle, FaWhatsapp } from 'react-icons/fa';

interface Service {
  title: string;
  description: string;
  image: string;
  features: string[];
}

const services: Service[] = [
  {
    title: 'Conserto de Geladeiras',
    description: 'Reparo rápido e confiável em geladeiras domésticas e comerciais.',
    image: '/src/assets/services/fridge-repair.jpg',
    features: ['Diagnóstico gratuito', 'Peças originais', 'Garantia 1 ano'],
  },
  {
    title: 'Manutenção Preventiva',
    description: 'Evite falhas futuras e prolongue a vida útil do seu equipamento.',
    image: '/src/assets/services/maintenance.jpg',
    features: ['Inspeção completa', 'Limpeza profunda', 'Relatório técnico'],
  },
  {
    title: 'Higienização Completa',
    description: 'Desinfecção completa garantindo segurança e eficiência.',
    image: '/src/assets/services/cleaning.jpg',
    features: ['Desinfecção total', 'Produtos certificados', 'Certificado sanitário'],
  },
  {
    title: 'Centrais Frigoríficas',
    description: 'Atendimento especializado para grandes sistemas comerciais.',
    image: '/src/assets/services/central.jpg',
    features: ['Atendimento 24h', 'Equipe especializada', 'Contratos de manutenção'],
  }
];

export const FeaturesSection: React.FC = () => {
  const whatsappNumber = "5511999999999";

  const handleWhatsAppClick = (service: string) => {
    const message = encodeURIComponent(`Olá! Preciso de ${service}. Gostaria de agendar um atendimento.`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-black text-white" id="services">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-12 text-center">
          Nossos Serviços
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-12 text-center">
          Soluções completas em refrigeração com tecnologia avançada e atendimento especializado
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-lg flex flex-col">
              <img src={service.image} alt={service.title} className="h-40 w-full object-cover transition-transform duration-500 hover:scale-105" />
              <div className="p-4 sm:p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                <div className="mb-4 space-y-1 flex-1">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-gray-400 text-sm">
                      <FaCheckCircle /> {feature}
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => handleWhatsAppClick(service.title)}
                  className="mt-auto flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-green-600 to-emerald-700 text-white font-bold rounded-xl shadow-lg hover:scale-105 transition"
                >
                  <FaWhatsapp className="text-lg" /> Solicitar Orçamento
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

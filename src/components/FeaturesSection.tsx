import React from 'react';
import { FaCheckCircle, FaWhatsapp } from 'react-icons/fa';

// Importe a imagem de fundo para o parallax
// CORREÇÃO: Altere o caminho para o local correto do seu arquivo de imagem
import refrigerationBackground from '../assets/hero-metallic-bg.jpg'; 

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
    image: '/src/assets/servicos/geladeira.jpg',
    features: ['Diagnóstico gratuito', 'Peças originais', 'Garantia 1 ano'],
  },
  {
    title: 'Manutenção Preventiva',
    description: 'Evite falhas futuras e prolongue a vida útil do seu equipamento.',
    image: '/src/assets/servicos/manutencao.jpg',
    features: ['Inspeção completa', 'Limpeza profunda', 'Relatório técnico'],
  },
  {
    title: 'Higienização Completa',
    description: 'Desinfecção completa garantindo segurança e eficiência.',
    image: '/src/assets/servicos/higienizacao.png',
    features: ['Desinfecção total', 'Produtos certificados', 'Certificado sanitário'],
  },
  {
    title: 'Centrais Frigoríficas',
    description: 'Atendimento especializado para grandes sistemas comerciais.',
    image: '/src/assets/servicos/central.jpg',
    features: ['Atendimento 24h', 'Equipe especializada', 'Contratos de manutenção'],
  }
];

export const FeaturesSection: React.FC = () => {
  const whatsappNumber = "19991195261";

  const handleWhatsAppClick = (service: string) => {
    const message = encodeURIComponent(`Olá! Preciso de ${service}. Gostaria de agendar um atendimento.`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section 
      className="relative py-16 sm:py-20 md:py-24 text-white overflow-hidden" 
      id="services"
    >
      {/* Imagem de Fundo com Parallax e sobreposição escura */}
      <div 
        className="absolute inset-0 bg-cover bg-fixed bg-center" 
        style={{ backgroundImage: `url(${refrigerationBackground})` }}
      >
      </div>
      <div className="absolute inset-0 bg-black opacity-80 z-10"></div>

      {/* Gradiente de Sombra Azul */}
      <div className="absolute inset-0 z-20" style={{
background: 'radial-gradient(circle at center, rgba(0, 11, 29, 0.92) 0%, rgba(0, 0, 0, 1) 100%)'         }}></div>

      {/* Conteúdo Principal */}
      <div className="container mx-auto px-4 sm:px-6 relative z-30">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-12 text-center text-white">
          Soluções Completas para o seu Equipamento
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-12 text-center">
          Soluções completas em refrigeração com tecnologia avançada e atendimento especializado
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-gray-800/50 border border-white/10 rounded-2xl overflow-hidden shadow-lg flex flex-col">
              <img src={service.image} alt={service.title} className="h-80 w-full object-cover transition-transform duration-500 hover:scale-105" />
              <div className="p-4 sm:p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{service.description}</p>
                <div className="mb-4 space-y-1 flex-1">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-gray-300 text-sm"
                    >
                      <FaCheckCircle className="text-brand-blue" />
                      {feature}
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => handleWhatsAppClick(service.title)}
                  className="mt-auto flex items-center justify-center gap-2 px-4 py-3 bg-brand-blue text-white font-bold rounded-xl shadow-lg hover:scale-105 transition"
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
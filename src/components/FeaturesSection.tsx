import React from 'react';
import {
  FaCheckCircle,
  FaWhatsapp,
  FaSnowflake,
  FaTools,
  FaSprayCan,
  FaWarehouse
} from 'react-icons/fa';

// Definindo tipo de serviço
interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

// Lista de serviços
const services: Service[] = [
  {
    title: 'Conserto de Geladeiras',
    description: 'Reparo rápido e confiável em geladeiras domésticas e comerciais.',
    icon: <FaSnowflake className="text-5xl text-blue-400 mb-4" />,
    features: ['Diagnóstico gratuito', 'Peças originais', 'Garantia 1 ano'],
  },
  {
    title: 'Manutenção Preventiva',
    description: 'Evite falhas futuras e prolongue a vida útil do seu equipamento.',
    icon: <FaTools className="text-5xl text-blue-400 mb-4" />,
    features: ['Inspeção completa', 'Limpeza profunda', 'Relatório técnico'],
  },
  {
    title: 'Higienização Completa',
    description: 'Desinfecção completa garantindo segurança e eficiência.',
    icon: <FaSprayCan className="text-5xl text-blue-400 mb-4" />,
    features: ['Desinfecção total', 'Produtos certificados', 'Certificado sanitário'],
  },
  {
    title: 'Centrais Frigoríficas',
    description: 'Atendimento especializado para grandes sistemas comerciais.',
    icon: <FaWarehouse className="text-5xl text-blue-400 mb-4" />,
    features: ['Atendimento 24h', 'Equipe especializada', 'Contratos de manutenção'],
  }
];

export const FeaturesSection: React.FC = () => {
  const whatsappNumber = "551991195261";

  const handleWhatsAppClick = (service: string) => {
    const message = encodeURIComponent(`Olá! Preciso de ${service}. Gostaria de agendar um atendimento.`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section
      id="services"
      className="relative py-16 sm:py-20 md:py-24 bg-white overflow-hidden"
    >
      {/* Conteúdo principal */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-12 text-center text-gray-900">
          Soluções Completas para o seu Equipamento
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-12 text-center">
          Soluções completas em refrigeração com tecnologia avançada e atendimento especializado
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-md flex flex-col items-center text-center hover:shadow-lg transition-all duration-300"
            >
              {/* Ícone */}
              <div className="mb-4">{service.icon}</div>

              {/* Título e descrição */}
              <h3 className="text-xl font-bold mb-2 text-gray-900">{service.title}</h3>
              <p className="text-gray-700 mb-4 text-sm">{service.description}</p>

              {/* Lista de benefícios */}
              <div className="mb-4 space-y-2 w-full text-left">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-gray-700 text-sm">
                    <FaCheckCircle className="text-blue-500" />
                    {feature}
                  </div>
                ))}
              </div>

              {/* Botão de ação */}
              <button
                onClick={() => handleWhatsAppClick(service.title)}
                className="mt-auto w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-md hover:scale-105 transition"
              >
                <FaWhatsapp className="text-lg" /> Solicitar Orçamento
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

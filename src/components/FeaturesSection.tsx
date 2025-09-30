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

// Lista de serviços completa com o item de Manutenção Preventiva
const services: Service[] = [
  {
    title: 'Conserto de Geladeiras',
    description: 'Orçamento justo e confiável, serviço de qualidade. Serviço prestado em domicílio.',
    icon: <FaSnowflake className="text-5xl text-blue-400 mb-4" />,
    features: ['Diagnóstico rápido', 'Peças originais', 'Serviço com garantia', 'Pagamento facilitado.'],
  },
  {
    title: 'Manutenção Preventiva',
    description: 'Evite prejuízos e imprevistos. Aumente a vida útil e a eficiência do seu equipamento.',
    icon: <FaTools className="text-5xl text-blue-400 mb-4" />,
    features: ['Inspeção completa e detalhada', 'Limpeza técnica profunda', 'Relatório de condições do equipamento'],
  },
  {
    title: 'Higienização Completa',
    description: 'Descontaminação completa, garantindo a qualidade dos alimentos.',
    icon: <FaSprayCan className="text-5xl text-blue-400 mb-4" />,
    features: ['Descontaminação total', 'Troca do filtro antiodor', 'Higienização completa', 'Borracha da porta higienizada'],
  },
  {
    title: 'Centrais Frigoríficas',
    description: 'Técnico especializado em central frigorífico de mercado.',
    icon: <FaWarehouse className="text-5xl text-blue-400 mb-4" />,
    features: ['Atendimento personalizado', 'Equipe especializada', 'Contratos de manutenção preventiva e corretiva'],
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
   <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 text-center">
    Soluções completas para o seu equipamento.
</h2>
<p className="mt-4 text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto text-center">
    Problemas com sua geladeira ou freezer? Nós resolvemos para você. Conte com a nossa equipe!
</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
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
'use client'

import React from 'react'
import {
  FaCheckCircle,
  FaWhatsapp,
  FaSnowflake,
  FaTools,
  FaSprayCan,
  FaWarehouse
} from 'react-icons/fa'

// Tipo de serviço
interface Service {
  title: string
  description: string
  icon: React.ReactNode
  features: string[]
  buttonText: string
  message: string
}

// Lista de serviços
const services: Service[] = [
  {
    title: 'Conserto de Geladeiras',
    description:
      'Sua geladeira parou? Nossa equipe resolve no conforto da sua casa, com rapidez e sem o risco de perder alimentos.',
    icon: <FaSnowflake className='text-5xl text-blue-400 mb-4' />,
    features: [
      'Diagnóstico rápido e eficiente',
      'Peças originais com garantia',
      'Pagamento facilitado'
    ],
    buttonText: 'Falar Agora no WhatsApp',
    message: 'Olá! Preciso de conserto para minha geladeira, pode me ajudar?'
  },
  {
    title: 'Higienização Completa',
    description:
      'Elimine bactérias e odores que contaminam seus alimentos. Deixe seu equipamento 100% seguro para a saúde da sua família.',
    icon: <FaSprayCan className='text-5xl text-blue-400 mb-4' />,
    features: [
      'Descontaminação total do aparelho',
      'Troca do filtro antiodor',
      'Higienização de borrachas'
    ],
    buttonText: 'Quero Minha Geladeira Higienizada',
    message: 'Olá! Quero agendar a higienização completa da minha geladeira.'
  },
  {
    title: 'Manutenção Preventiva',
    description:
      'Com a manutenção preventiva, você evita surpresas e prejuízos. Garanta a eficiência e a vida útil prolongada do seu equipamento.',
    icon: <FaTools className='text-5xl text-blue-400 mb-4' />,
    features: [
      'Inspeção completa do equipamento',
      'Limpeza técnica profunda',
      'Relatório detalhado de condições'
    ],
    buttonText: 'Agendar Preventiva no WhatsApp',
    message:
      'Olá! Gostaria de agendar uma manutenção preventiva para meu equipamento.'
  },
  {
    title: 'Centrais Frigoríficas',
    description:
      'Falhas na central podem gerar perdas enormes. Nossa equipe especializada garante operação contínua e suporte imediato para seu negócio.',
    icon: <FaWarehouse className='text-5xl text-blue-400 mb-4' />,
    features: [
      'Atendimento personalizado',
      'Equipe especializada em refrigeração industrial',
      'Contratos de manutenção sob medida'
    ],
    buttonText: 'Falar com Especialista Agora',
    message:
      'Olá! Preciso de suporte para minha central frigorífica. Pode me ajudar?'
  }
]

export const FeaturesSection: React.FC = () => {
  const whatsappNumber = '5519991195261' // número com DDI e DDD

  // ✅ Função com o link completo da API do WhatsApp
  const handleWhatsAppClick = (message: string) => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappApiLink = `https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=${encodedMessage}&type=phone_number&app_absent=0`
    window.open(whatsappApiLink, '_blank')
  }

  return (
    <section
      id='services'
      className='relative py-16 sm:py-20 md:py-24 bg-white overflow-hidden'
    >
      <div className='container mx-auto px-4 sm:px-6 relative z-10'>
        <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 text-center'>
          Soluções completas para o seu equipamento.
        </h2>
        <p className='mt-4 text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto text-center'>
          Problemas com sua geladeira ou freezer? Nós resolvemos para você.
          Conte com a nossa equipe!
        </p>

        {/* Grade de serviços */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 mt-12'>
          {services.map(service => (
            <div
              key={service.title}
              className='bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-md flex flex-col items-center text-center hover:shadow-lg transition-all duration-300'
            >
              <div className='mb-4'>{service.icon}</div>

              <h3 className='text-xl font-bold mb-2 text-gray-900'>
                {service.title}
              </h3>
              <p className='text-gray-700 mb-4 text-sm font-medium leading-relaxed min-h-[4rem] flex items-center justify-center'>
                {service.description}
              </p>

              <div className='mb-4 space-y-2 w-full text-left'>
                {service.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className='flex items-start gap-2 text-gray-700 text-sm'
                  >
                    <FaCheckCircle className='text-blue-500 mt-1 flex-shrink-0' />
                    {feature}
                  </div>
                ))}
              </div>

              {/* Botão WhatsApp */}
              <button
                onClick={() => handleWhatsAppClick(service.message)}
                className='mt-auto w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-md hover:scale-105 transition'
              >
                <FaWhatsapp className='text-lg' /> {service.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

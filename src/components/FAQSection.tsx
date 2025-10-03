import React, { useState } from 'react'
import {
  CreditCard,
  DollarSign,
  Building,
  Calendar,
  CheckCircle,
  XCircle,
  MessageCircle,
  Snowflake,
  Wrench,
  Clock,
  Shield,
  Plus,
  Minus,
  AlertCircle,
  Star,
  MapPin,
  Zap,
  TrendingUp,
  Award,
  Phone
} from 'lucide-react'

import geladeira from '../assets/geladeiras-2.webp'

interface FaqItem {
  question: string
  answer: string | JSX.Element
}

const faqs: FaqItem[] = [
  {
    question: 'Como funciona o agendamento da visita?',
    answer: (
      <div className='space-y-3'>
        <p>O processo é simples e rápido:</p>
        <div className='bg-blue-50 p-4 rounded-lg space-y-2'>
          <div className='flex items-start gap-3'>
            <div className='bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold'>
              1
            </div>
            <p>
              <strong>Entre em contato:</strong> Ligue ou mande WhatsApp
              informando o problema do equipamento
            </p>
          </div>
          <div className='flex items-start gap-3'>
            <div className='bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold'>
              2
            </div>
            <p>
              <strong>Triagem inicial:</strong> Nossa equipe identifica a
              situação e agenda a melhor data
            </p>
          </div>
          <div className='flex items-start gap-3'>
            <div className='bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold'>
              3
            </div>
            <p>
              <strong>Visita técnica:</strong> Técnico especializado vai até seu
              local com rapidez e praticidade
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    question: 'Garantia dos nossos serviços',
    answer: (
      <div className='space-y-4'>
        <div className='bg-green-50 border-l-4 border-green-500 p-4 rounded'>
          <div className='flex items-start gap-2 mb-2'>
            <Shield className='text-green-600 mt-0.5 flex-shrink-0' size={24} />
            <div>
              <p className='font-bold text-green-800 text-lg'>
                Serviços em geral
              </p>
              <p className='text-green-700'>
                90 dias de garantia legal em todos os reparos realizados
              </p>
            </div>
          </div>
        </div>
        <div className='bg-blue-50 border-l-4 border-blue-500 p-4 rounded'>
          <div className='flex items-start gap-2'>
            <Award className='text-blue-600 mt-0.5 flex-shrink-0' size={24} />
            <div>
              <p className='font-bold text-blue-800 text-lg'>
                Troca de compressor
              </p>
              <p className='text-blue-700'>
                Garantia do serviço + 1 ano de garantia do fabricante no
                compressor
              </p>
            </div>
          </div>
        </div>
        <p className='text-sm text-gray-600 italic'>
          Você está 100% protegido com nossa garantia!
        </p>
      </div>
    )
  },
  {
    question: 'Formas de Pagamento',
    answer: (
      <div className='space-y-4'>
        <p className='font-semibold text-gray-800'>
          Aceitamos diversas formas de pagamento para sua comodidade:
        </p>
        <div className='grid grid-cols-2 gap-3'>
          <div className='bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200'>
            <CreditCard className='text-blue-600 mb-2' size={28} />
            <p className='font-semibold text-gray-800'>Cartão de débito</p>
          </div>
          <div className='bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg border border-green-200'>
            <DollarSign className='text-green-600 mb-2' size={28} />
            <p className='font-semibold text-gray-800'>Dinheiro</p>
          </div>
          <div className='bg-gradient-to-br from-yellow-50 to-yellow-100 p-4 rounded-lg border border-yellow-200'>
            <Zap className='text-yellow-600 mb-2' size={28} />
            <p className='font-semibold text-gray-800'>PIX (Instantâneo)</p>
          </div>
          <div className='bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg border border-purple-200'>
            <TrendingUp className='text-purple-600 mb-2' size={28} />
            <p className='font-semibold text-gray-800'>Parcelamento</p>
          </div>
        </div>
        <div className='bg-gradient-to-r from-blue-600 to-blue-700 text-white p-5 rounded-xl mt-4'>
          <div className='flex items-start gap-3'>
            <Building className='flex-shrink-0 mt-1' size={24} />
            <div>
              <p className='font-bold text-lg mb-1'>Soluções para Empresas</p>
              <p className='text-blue-100'>
                Clientes corporativos com cadastro têm acesso a pagamento via
                boleto bancário e condições especiais
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    question: 'Horário de Atendimento',
    answer: (
      <div className='space-y-3'>
        <div className='bg-gradient-to-r from-blue-500 to-blue-600 text-white p-5 rounded-xl'>
          <Clock className='mb-3' size={32} />
          <div className='space-y-2'>
            <div className='flex items-center justify-between border-b border-blue-400 pb-2'>
              <span className='font-semibold'>Segunda a Sexta-feira</span>
              <span className='bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-bold'>
                08h - 17h
              </span>
            </div>
            <div className='flex items-center justify-between border-b border-blue-400 pb-2'>
              <span className='font-semibold'>Sábado</span>
              <span className='bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-bold'>
                08h - 12h
              </span>
            </div>
            <div className='flex items-center justify-between'>
              <span className='font-semibold'>Domingos e Feriados</span>
              <span className='bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold'>
                Fechado
              </span>
            </div>
          </div>
        </div>
        <p className='text-center text-sm text-gray-600'>
          ⚡ Atendimento emergencial disponível em casos urgentes
        </p>
      </div>
    )
  },
  {
    question: 'Orçamento sem compromisso',
    answer: (
      <div className='space-y-4'>
        <div className='bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-300 p-5 rounded-xl'>
          <div className='flex items-start gap-3 mb-3'>
            <CheckCircle className='text-green-600 flex-shrink-0' size={28} />
            <div>
              <p className='font-bold text-green-800 text-lg mb-2'>
                Como funciona:
              </p>
              <p className='text-gray-700'>
                Um técnico especializado vai até você, avalia o equipamento com
                cuidado e apresenta um orçamento completo e transparente - sem
                nenhum compromisso!
              </p>
            </div>
          </div>
        </div>

        <div className='bg-yellow-50 border-2 border-yellow-300 p-5 rounded-xl'>
          <p className='font-bold text-yellow-800 mb-3 flex items-center gap-2'>
            <AlertCircle size={20} />
            Sobre a Taxa de Visita:
          </p>
          <div className='space-y-2 text-gray-700'>
            <div className='flex items-start gap-2'>
              <XCircle
                className='text-red-500 flex-shrink-0 mt-0.5'
                size={18}
              />
              <p>
                <strong>Orçamento não aprovado:</strong> Cobra-se apenas a taxa
                de visita
              </p>
            </div>
            <div className='flex items-start gap-2'>
              <CheckCircle
                className='text-green-500 flex-shrink-0 mt-0.5'
                size={18}
              />
              <p>
                <strong>Orçamento aprovado:</strong> Taxa de visita GRÁTIS -
                você não paga nada!
              </p>
            </div>
          </div>
        </div>

        <p className='text-center text-sm text-gray-500 italic bg-gray-100 p-3 rounded-lg'>
          💡 Consulte o valor da taxa de visita para o seu endereço com nossa
          equipe
        </p>
      </div>
    )
  }
]

export default function FAQSection () {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const whatsappNumber = '5519991195261'
  const phoneCallNumber = '5519991195261'

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      'Olá! Gostaria de agendar uma visita para um serviço de refrigeração.'
    )
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
  }

  return (
    <section className='py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white via-gray-50 to-white'>
      <div className='container mx-auto px-4 sm:px-6'>
        {/* Título e Subtítulo */}
        <div className='text-center mb-8 md:mb-12'>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4 px-4'>
            Perguntas Frequentes
          </h2>
          <p className='text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4'>
            Tudo o que você precisa saber sobre nossos serviços
          </p>
        </div>

        {/* Accordion de Perguntas */}
        <div className='max-w-4xl mx-auto space-y-4 md:space-y-5 mb-16 md:mb-20'>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl md:rounded-2xl overflow-hidden border-2 transition-all duration-300 ${
                openIndex === index
                  ? 'border-blue-500 shadow-xl'
                  : 'border-gray-200 shadow-md hover:shadow-lg'
              }`}
            >
              <h3 className='w-full'>
                <button
                  className='flex justify-between items-center w-full px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-left font-bold text-base sm:text-lg md:text-xl text-gray-900 focus:outline-none hover:bg-gray-50 transition-colors'
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index ? 'true' : 'false'}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className='pr-3 sm:pr-4'>{faq.question}</span>
                  <div
                    className={`flex-shrink-0 p-1.5 md:p-2 rounded-full transition-all ${
                      openIndex === index
                        ? 'bg-blue-500 rotate-180'
                        : 'bg-gray-200'
                    }`}
                  >
                    {openIndex === index ? (
                      <Minus className='w-4 h-4 md:w-5 md:h-5 text-white' />
                    ) : (
                      <Plus className='w-4 h-4 md:w-5 md:h-5 text-gray-700' />
                    )}
                  </div>
                </button>
              </h3>
              <div
                id={`faq-answer-${index}`}
                role='region'
                aria-hidden={openIndex !== index}
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  openIndex === index
                    ? 'max-h-[800px] opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className='px-4 sm:px-6 md:px-8 pb-4 sm:pb-5 md:pb-6 text-gray-700 text-sm sm:text-base leading-relaxed border-t-2 border-gray-100 pt-4 sm:pt-5 md:pt-6'>
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Otimizada */}
        <div className='max-w-6xl mx-auto px-4 sm:px-0'>
          <div className='bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl relative'>
            {/* Padrão decorativo de fundo */}
            <div className='absolute inset-0 opacity-10'>
              <div className='absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2'></div>
              <div className='absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2'></div>
            </div>

            <div className='grid md:grid-cols-5 gap-0 relative z-10'>
              {/* Lado Esquerdo - Conteúdo (3/5) */}
              <div className='md:col-span-3 p-6 sm:p-8 md:p-10 lg:p-14 flex flex-col justify-center'>
                <div className='inline-flex items-center gap-2 bg-yellow-400 text-blue-900 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-5 md:mb-6'>
                  <Zap size={16} className='sm:w-[18px] sm:h-[18px]' />
                  <span className='whitespace-nowrap'>
                    ATENDIMENTO EMERGENCIAL 24H
                  </span>
                </div>
                <h3 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-5 leading-tight'>
                  Não deixe seu problema virar uma emergência!
                </h3>
                <p className='text-base sm:text-lg md:text-xl mb-6 sm:mb-7 md:mb-8 text-blue-100 leading-relaxed'>
                  Técnicos especializados em Campinas e região. Atendimento
                  rápido, orçamento transparente e garantia de qualidade que
                  você merece.
                </p>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-7 md:mb-8'>
                  <div className='flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-lg sm:rounded-xl'>
                    <div className='bg-white/20 p-2 sm:p-3 rounded-lg flex-shrink-0'>
                      <Clock className='text-white' size={20} />
                    </div>
                    <div>
                      <p className='font-bold text-xs sm:text-sm'>Rapidez</p>
                      <p className='text-blue-100 text-xs sm:text-sm'>
                        Até 24h
                      </p>
                    </div>
                  </div>
                  <div className='flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-lg sm:rounded-xl'>
                    <div className='bg-white/20 p-2 sm:p-3 rounded-lg flex-shrink-0'>
                      <Wrench className='text-white' size={20} />
                    </div>
                    <div>
                      <p className='font-bold text-xs sm:text-sm'>Técnicos</p>
                      <p className='text-blue-100 text-xs sm:text-sm'>
                        Certificados
                      </p>
                    </div>
                  </div>
                  <div className='flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-lg sm:rounded-xl'>
                    <div className='bg-white/20 p-2 sm:p-3 rounded-lg flex-shrink-0'>
                      <Shield className='text-white' size={20} />
                    </div>
                    <div>
                      <p className='font-bold text-xs sm:text-sm'>Garantia</p>
                      <p className='text-blue-100 text-xs sm:text-sm'>
                        90 dias
                      </p>
                    </div>
                  </div>
                  <div className='flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-lg sm:rounded-xl'>
                    <div className='bg-white/20 p-2 sm:p-3 rounded-lg flex-shrink-0'>
                      <Snowflake className='text-white' size={20} />
                    </div>
                    <div>
                      <p className='font-bold text-xs sm:text-sm'>
                        Especialistas
                      </p>
                      <p className='text-blue-100 text-xs sm:text-sm'>
                        Em refrigeração
                      </p>
                    </div>
                  </div>
                </div>

                <div className='flex flex-col sm:flex-row gap-4 sm:gap-3'>
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                      'Olá! Gostaria de agendar uma visita para um serviço de refrigeração.'
                    )}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex-1 w-full bg-green-500 hover:bg-green-600 text-white font-bold px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 rounded-xl md:rounded-2xl shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 text-base sm:text-lg md:text-xl group transform hover:scale-105 whitespace-nowrap'
                  >
                    <svg
                      className='w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 group-hover:scale-110 transition-transform flex-shrink-0'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                    >
                      <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z' />
                    </svg>
                    <span className='text-center'>Agendar Visita</span>
                  </a>
                  <a
                    href={`tel:${phoneCallNumber}`}
                    className='flex-1 w-full bg-white/20 hover:bg-white/30 text-white font-bold px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 rounded-xl md:rounded-2xl shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 text-base sm:text-lg md:text-xl transform hover:scale-105 whitespace-nowrap'
                  >
                    <Phone className='w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 flex-shrink-0' />
                    <span className='text-center'>Ligar Agora</span>
                  </a>
                </div>
              </div>

              {/* Lado Direito - Imagem/Visual (2/5) */}
              <div className='relative md:col-span-2 hidden md:flex items-center justify-center min-h-[400px] lg:min-h-[500px] xl:min-h-[600px]'>
                <img
                  src={geladeira}
                  alt='Técnico especializado em manutenção de geladeiras'
                  className='w-full h-full object-cover rounded-tl-full rounded-bl-full'
                />
              </div>
            </div>
          </div>
        </div>

        {/* Badges de Confiança */}
        <div className='text-center mt-12 sm:mt-14 md:mt-16 space-y-3 sm:space-y-4 px-4'>
          <div className='inline-flex items-center gap-2 sm:gap-3 bg-green-50 text-green-800 px-4 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-xl md:rounded-2xl border-2 border-green-200 shadow-md'>
            <CheckCircle className='text-green-600 flex-shrink-0' size={24} />
            <span className='font-bold text-sm sm:text-base md:text-lg'>
              Empresa verificada com mais de 15 anos de experiência
            </span>
          </div>
          <p className='text-gray-500 text-xs sm:text-sm'>
            Confiança e qualidade garantidas em cada atendimento
          </p>
        </div>
      </div>
    </section>
  )
}

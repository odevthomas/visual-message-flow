import React from 'react'
import { Card } from '@/components/ui/card'
import { Star, StarHalf, StarOff } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import financeIcon from '@/assets/icons/finace.png'

const BentoCTA: React.FC = () => {
  const rating = 4.7 // nota dinâmica
  const fullStars = Math.floor(rating)
  const hasHalf = rating % 1 >= 0.5
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0)
  const whatsappNumber = '5519991195261'

  return (
    <section className='relative py-24 text-white overflow-hidden'>
      {/* Fundo com gradiente branco */}
      <div className='absolute inset-0 -z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#fff_100%)]'></div>

      {/* Conteúdo Principal */}
      <div className='max-w-7xl mx-auto px-6 relative z-30'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-6xl font-bold text-black leading-tight'>
            Atendimento que transforma
          </h2>
          <p className='mt-6 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
            Mais de 2.000 clientes já transformaram seus negócios conosco.
            <br />
            Peça seu orçamento e descubra por que somos referência no mercado.
          </p>
        </div>

        {/* Bento Grid com cards reordenados */}
        <div className='grid lg:grid-cols-3 gap-6'>
          {/* Card Orçamento (Primeiro) */}
          <div className='group relative'>
            <div className='relative h-full bg-gray-100/60 border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300 group-hover:scale-[1.02] flex flex-col justify-between'>
              <div>
                <div className='flex items-center justify-center mb-6'>
                  <div className='w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-2xl p-2'>
                    <img
                      src={financeIcon}
                      alt='Ícone financeiro'
                      className='w-full h-full object-contain'
                    />
                  </div>
                </div>
                <div className='text-center mb-6'>
                  <h3 className='text-xl font-bold text-black mb-2'>
                    Orçamento sem compromisso
                  </h3>
                  <p className='text-gray-600'>
                    O técnico vai até o seu equipamento, e faz o orçamento sem
                    compromisso.
                  </p>
                </div>
              </div>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  'Olá, gostaria de um orçamento sem compromisso.'
                )}`}
                target='_blank'
                rel='noopener noreferrer'
                className='w-full bg-blue-600 text-white font-bold px-6 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2'
              >
                <FaWhatsapp className='w-4 h-4' />
                Falar Agora no WhatsApp
              </a>
            </div>
          </div>

          {/* Card Avaliação Google (Segundo - No meio) */}
          <div className='lg:col-span-1 group relative'>
            <div className='relative bg-gray-100/60 border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300 group-hover:scale-[1.02] flex flex-col justify-between h-full'>
              <div>
                {/* Ícone Google */}
                <div className='flex items-center justify-center mb-6'>
                  <div className='w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-2xl p-2 relative'>
                    <svg viewBox='0 0 24 24' className='w-full h-full'>
                      <path
                        fill='#4285F4'
                        d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
                      />
                      <path
                        fill='#34A853'
                        d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
                      />
                      <path
                        fill='#FBBC05'
                        d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'
                      />
                      <path
                        fill='#EA4335'
                        d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
                      />
                    </svg>
                  </div>
                </div>
                <div className='text-center mb-6'>
                  <div className='flex justify-center items-center gap-1 mb-3'>
                    {Array.from({ length: fullStars }).map((_, i) => (
                      <Star
                        key={`full-${i}`}
                        className='w-5 h-5 text-yellow-500 fill-yellow-500'
                      />
                    ))}
                    {hasHalf && (
                      <StarHalf className='w-5 h-5 text-yellow-500 fill-yellow-500' />
                    )}
                    {Array.from({ length: emptyStars }).map((_, i) => (
                      <StarOff
                        key={`empty-${i}`}
                        className='w-5 h-5 text-gray-400'
                      />
                    ))}
                  </div>
                  <h3 className='text-2xl font-bold text-black mb-2'>
                    {rating.toFixed(1)} no Google
                  </h3>
                  <p className='text-gray-600'>
                    Baseado em +2.000 avaliações reais
                  </p>
                </div>
              </div>

              {/* Botão de WhatsApp no card do Google */}
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  'Olá, vi a excelente avaliação de vocês no Google e gostaria de um orçamento.'
                )}`}
                target='_blank'
                rel='noopener noreferrer'
                className='w-full bg-blue-600 text-white font-bold px-6 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2'
              >
                <FaWhatsapp className='w-4 h-4' />
                Pedir Orçamento agora
              </a>
            </div>
          </div>

          {/* Card Atendimento (Terceiro) */}
          <div className='group relative'>
            <div className='relative h-full bg-gray-100/60 border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300 group-hover:scale-[1.02] flex flex-col justify-between'>
              <div>
                <div className='flex items-center justify-center mb-6'>
                  <div className='w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-2xl p-2'>
                    {/* WhatsApp */}
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 256 258'
                      className='w-full h-full'
                    >
                      <defs>
                        <linearGradient
                          id='g1'
                          x1='50%'
                          x2='50%'
                          y1='100%'
                          y2='0%'
                        >
                          <stop offset='0%' stopColor='#1faf38' />
                          <stop offset='100%' stopColor='#60d669' />
                        </linearGradient>
                      </defs>
                      <path
                        fill='url(#g1)'
                        d='M5.463 127.456c-.006 21.677 5.658 42.843 16.428 61.499L4.433 252.697l65.232-17.104a123 123 0 0 0 58.8 14.97h.054c67.815 0 123.018-55.183 123.047-123.01c.013-32.867-12.775-63.773-36.009-87.025c-23.23-23.25-54.125-36.061-87.043-36.076c-67.823 0-123.022 55.18-123.05 123.004'
                      />
                      <path
                        fill='#fff'
                        d='M96.678 74.148c-2.386-5.303-4.897-5.41-7.166-5.503c-1.858-.08-3.982-.074-6.104-.074c-2.124 0-5.575.799-8.492 3.984c-2.92 3.188-11.148 10.892-11.148 26.561s11.413 30.813 13.004 32.94c1.593 2.123 22.033 35.307 54.405 48.073c26.904 10.609 32.379 8.499 38.218 7.967c5.84-.53 18.844-7.702 21.497-15.139c2.655-7.436 2.655-13.81 1.859-15.142c-.796-1.327-2.92-2.124-6.105-3.716s-18.844-9.298-21.763-10.361c-2.92-1.062-5.043-1.592-7.167 1.597c-2.124 3.184-8.223 10.356-10.082 12.48c-1.857 2.129-3.716 2.394-6.9.801c-3.187-1.598-13.444-4.957-25.613-15.806c-9.468-8.442-15.86-18.867-17.718-22.056c-1.858-3.184-.199-4.91 1.398-6.497c1.431-1.427 3.186-3.719 4.78-5.578c1.588-1.86 2.118-3.187 3.18-5.311c1.063-2.126.531-3.986-.264-5.579c-.798-1.593-6.987-17.343-9.819-23.64'
                      />
                    </svg>
                  </div>
                </div>
                <div className='text-center mb-6'>
                  <h3 className='text-xl font-bold text-black mb-2'>
                    Online Agora
                  </h3>
                  <p className='text-gray-600'>
                    Equipe disponível para atendimento imediato
                  </p>
                </div>
              </div>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  'Olá, gostaria de falar com um especialista agora.'
                )}`}
                target='_blank'
                rel='noopener noreferrer'
                className='w-full bg-blue-600 text-white font-bold px-6 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2'
              >
                <FaWhatsapp className='w-4 h-4' />
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BentoCTA

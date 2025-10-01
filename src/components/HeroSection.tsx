'use client'

import React, { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'

// Logo
import logo from '../assets/brasservice.png'
// Importando vídeo
import geladeiraVideo from '../assets/geladeira.mp4'

export const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.4 })

  const whatsappNumber = '551991195261'
  const whatsappMessage = encodeURIComponent(
    'Olá! Gostaria de solicitar atendimento para minha geladeira. Vi o site da Bras Service e quero agendar agora.'
  )

  const handleWhatsAppClick = () => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
      '_blank'
    )
  }

  useEffect(() => {
    const videoEl = videoRef.current
    if (videoEl) {
      videoEl.playbackRate = 1.2
      videoEl
        .play()
        .catch(() =>
          console.warn('Autoplay do vídeo bloqueado pelo navegador.')
        )
    }
  }, [])

  return (
    <section
      ref={containerRef}
      className='relative w-full min-h-screen flex items-center justify-center overflow-hidden'
    >
      {/* Fundo de vídeo */}
      <div className='absolute inset-0 w-full h-full'>
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload='auto'
          className='absolute top-0 left-0 w-full h-full object-cover'
          style={{ objectPosition: 'center center' }}
        >
          <source src={geladeiraVideo} type='video/mp4' />
          Seu navegador não suporta vídeo.
        </video>

        {/* Overlay escuro */}
        <div className='absolute inset-0 bg-black bg-opacity-50'></div>
      </div>

      {/* Conteúdo principal */}
      <div className='relative z-10 w-full px-4 sm:px-6 md:px-10 lg:px-16 py-16 md:py-20'>
        <div className='container mx-auto max-w-6xl'>
          <motion.div
            className='flex flex-col items-center text-center space-y-4 sm:space-y-6 md:space-y-8'
            initial={{ opacity: 0, y: -50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {/* Logo */}
            <motion.img
              src={logo}
              alt='Bras Service'
              className='h-16 sm:h-20 md:h-24 lg:h-28 w-auto object-contain'
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
            />

            {/* Título */}
            <motion.h1
              className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight text-white max-w-4xl px-2'
              initial={{ opacity: 0, y: -30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.9 }}
            >
              Conserto de Geladeiras e Serviços de Refrigeração
            </motion.h1>

            {/* Subtítulo com localização */}
            <motion.div
              className='flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3'
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <div className='flex items-center gap-2 text-white/90'>
            <svg
  xmlns='http://www.w3.org/2000/svg'
  width='24'
  height='24'
  viewBox='0 0 24 24'
>
  <circle cx='12' cy='9' r='2.5' fill='currentColor' fill-opacity='0'>
    <animate
      fill='freeze'
      attributeName='fill-opacity'
      begin='0.7s'
      dur='0.15s'
      values='0;1'
    />
  </circle>
  <path
    fill='none'
    stroke='currentColor'
    stroke-dasharray='48'
    stroke-dashoffset='48'
    stroke-linecap='round'
    stroke-linejoin='round'
    stroke-width='2'
    d='M12 20.5c0 0 -6 -7 -6 -11.5c0 -3.31 2.69 -6 6 -6c3.31 0 6 2.69 6 6c0 4.5 -6 11.5 -6 11.5Z'
  >
    <animate
      fill='freeze'
      attributeName='stroke-dashoffset'
      dur='0.6s'
      values='48;0'
    />
    <animateTransform
      attributeName='transform'
      dur='3s'
      keyTimes='0;0.3;0.4;0.54;0.6;0.68;0.7;1'
      repeatCount='indefinite'
      type='rotate'
      values='0 12 20.5;0 12 20.5;-8 12 20.5;0 12 20.5;5 12 20.5;-2 12 20.5;0 12 20.5;0 12 20.5'
    />
  </path>
</svg>

                <span className='text-lg sm:text-xl md:text-2xl font-semibold'>
                  Campinas e Região
                </span>
              </div>
            </motion.div>

            {/* Botão CTA */}
            <motion.button
              onClick={handleWhatsAppClick}
              className='mt-4 sm:mt-6 md:mt-8 flex flex-row items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-green-600 hover:bg-green-700 text-white text-base sm:text-lg md:text-xl lg:text-2xl font-bold rounded-2xl shadow-2xl transition-all duration-300 w-full sm:w-auto max-w-md'
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      scale: [1, 1.05, 1],
                      boxShadow: [
                        '0 0 20px rgba(0,255,0,0.5)',
                        '0 0 30px rgba(0,255,0,0.7)',
                        '0 0 20px rgba(0,255,0,0.5)'
                      ]
                    }
                  : {}
              }
              transition={{
                opacity: { delay: 1.3, duration: 0.9 },
                scale: { repeat: Infinity, duration: 2 },
                boxShadow: { repeat: Infinity, duration: 2 }
              }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className='w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 flex-shrink-0'
                fill='currentColor'
                viewBox='0 0 24 24'
              >
                <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z' />
              </svg>
              <span>Agendar Atendimento</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

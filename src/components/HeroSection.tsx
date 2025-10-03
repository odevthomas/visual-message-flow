'use client'

import React, { useRef, useEffect, useState, useCallback } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa' // Ícone do WhatsApp

// Logo
import logo from '../assets/brasservice.png'
// Importando vídeo
import geladeiraVideo from '../assets/geladeira.mp4'

// Constantes
const WHATSAPP_CONFIG = {
  number: '5519991195261', // Número corrigido para o seu
  message:
    'Olá! Gostaria de agendar um conserto. Vi no site que vocês resolvem rápido.'
}

const ANIMATION_CONFIG = {
  duration: {
    fast: 0.6,
    normal: 0.9,
    slow: 1.2
  },
  delay: {
    logo: 0.5,
    title: 0.7,
    subtitle: 0.9,
    cta: 1.3
  }
}

export const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.4 })
  const prefersReducedMotion = useReducedMotion()

  const [videoLoaded, setVideoLoaded] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  const handleWhatsAppClick = useCallback(() => {
    const url = `https://wa.me/${
      WHATSAPP_CONFIG.number
    }?text=${encodeURIComponent(WHATSAPP_CONFIG.message)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }, [])

  useEffect(() => {
    const videoEl = videoRef.current
    if (!videoEl) return

    const handleLoadedData = () => {
      setVideoLoaded(true)
      videoEl.playbackRate = 1.2
    }

    const handleCanPlay = () => {
      videoEl.play().catch(() => {
        console.warn('Autoplay bloqueado pelo navegador.')
      })
    }

    videoEl.addEventListener('loadeddata', handleLoadedData)
    videoEl.addEventListener('canplay', handleCanPlay)

    return () => {
      videoEl.removeEventListener('loadeddata', handleLoadedData)
      videoEl.removeEventListener('canplay', handleCanPlay)
    }
  }, [])

  const getAnimationProps = (baseAnimation: any) => {
    if (prefersReducedMotion) {
      return { opacity: isInView ? 1 : 0 }
    }
    return baseAnimation
  }

  return (
    <section
      ref={containerRef}
      className='relative w-full min-h-screen flex items-center justify-center overflow-hidden'
      aria-label='Seção principal - Conserto de geladeiras'
    >
      {/* Fundo de vídeo com loading state */}
      <div className='absolute inset-0 w-full h-full'>
        {!videoLoaded && (
          <div className='absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-700 animate-pulse' />
        )}

        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload='metadata'
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${
            videoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ objectPosition: 'center center' }}
          aria-hidden='true'
        >
          <source src={geladeiraVideo} type='video/mp4' />
          Seu navegador não suporta vídeo.
        </video>

        <div className='absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60' />
        <div
          className='absolute inset-0 bg-radial-gradient opacity-40'
          style={{
            background:
              'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.7) 100%)'
          }}
        />
      </div>

      {/* Conteúdo principal */}
      <div className='relative z-10 w-full px-4 sm:px-6 md:px-10 lg:px-16 py-16 md:py-20'>
        <div className='container mx-auto max-w-6xl'>
          <motion.div
            className='flex flex-col items-center text-center space-y-4 sm:space-y-6 md:space-y-8'
            initial={{ opacity: 0, y: -50 }}
            animate={getAnimationProps(isInView ? { opacity: 1, y: 0 } : {})}
            transition={{
              duration: ANIMATION_CONFIG.duration.normal,
              delay: 0.3
            }}
          >
            {/* Logo */}
            <motion.div
              className='relative'
              initial={{ opacity: 0, scale: 0.8 }}
              animate={getAnimationProps(
                isInView ? { opacity: 1, scale: 1 } : {}
              )}
              transition={{ delay: ANIMATION_CONFIG.delay.logo, duration: 0.8 }}
            >
              <img
                src={logo}
                alt='Bras Service'
                className='h-16 sm:h-20 md:h-24 lg:h-28 w-auto object-contain'
              />
            </motion.div>

            {/* Título */}
            <motion.h1
              className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight text-white max-w-4xl px-2'
              initial={{ opacity: 0, y: -30 }}
              animate={getAnimationProps(isInView ? { opacity: 1, y: 0 } : {})}
              transition={{
                delay: ANIMATION_CONFIG.delay.title,
                duration: 0.9
              }}
            >
              Sua Geladeira Quebrou?{' '}
              <span className='text-green-400'>A Gente Resolve</span> em Até
              24h!
            </motion.h1>

            {/* Subtítulo com localização */}
            <motion.div
              className='flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3'
              initial={{ opacity: 0, y: -20 }}
              animate={getAnimationProps(isInView ? { opacity: 1, y: 0 } : {})}
              transition={{
                delay: ANIMATION_CONFIG.delay.subtitle,
                duration: 0.8
              }}
              role='region'
              aria-label='Localização do serviço'
            >
              <div className='flex items-center gap-2 text-white/90 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                >
                  <circle
                    cx='12'
                    cy='9'
                    r='2.5'
                    fill='currentColor'
                    fillOpacity='0'
                  >
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
                    strokeDasharray='48'
                    strokeDashoffset='48'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M12 20.5c0 0 -6 -7 -6 -11.5c0 -3.31 2.69 -6 6 -6c3.31 0 6 2.69 6 6c0 4.5 -6 11.5 -6 11.5Z'
                  >
                    <animate
                      fill='freeze'
                      attributeName='stroke-dashoffset'
                      dur='0.6s'
                      values='48;0'
                    />
                    {!prefersReducedMotion && (
                      <animateTransform
                        attributeName='transform'
                        dur='3s'
                        keyTimes='0;0.3;0.4;0.54;0.6;0.68;0.7;1'
                        repeatCount='indefinite'
                        type='rotate'
                        values='0 12 20.5;0 12 20.5;-8 12 20.5;0 12 20.5;5 12 20.5;-2 12 20.5;0 12 20.5;0 12 20.5'
                      />
                    )}
                  </path>
                </svg>
                <span className='text-lg sm:text-xl md:text-2xl font-semibold'>
                  Campinas e Região
                </span>
              </div>
            </motion.div>

            {/* Badges de garantia */}
            <motion.div
              className='flex flex-wrap justify-center gap-4'
              initial={{ opacity: 0 }}
              animate={getAnimationProps(isInView ? { opacity: 1 } : {})}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              <div className='bg-green-500/20 backdrop-blur-sm border border-green-500/50 px-4 py-2 rounded-full flex items-center gap-2'>
                <svg
                  className='w-4 h-4 text-green-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M5 13l4 4L19 7'
                  />
                </svg>
                <span className='text-white text-sm font-semibold whitespace-nowrap'>
                  Atendimento em 24h
                </span>
              </div>
              <div className='bg-blue-500/20 backdrop-blur-sm border border-blue-500/50 px-4 py-2 rounded-full flex items-center gap-2'>
                <svg
                  className='w-4 h-4 text-blue-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                  />
                </svg>
                <span className='text-white text-sm font-semibold whitespace-nowrap'>
                  Garantia de Serviço
                </span>
              </div>
            </motion.div>

            {/* Botão CTA */}
            <motion.a
              href={`https://wa.me/${
                WHATSAPP_CONFIG.number
              }?text=${encodeURIComponent(WHATSAPP_CONFIG.message)}`}
              target='_blank'
              rel='noopener noreferrer'
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className='group relative mt-4 sm:mt-6 md:mt-8 flex items-center justify-center gap-2 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-green-600 hover:bg-green-700 text-white text-base sm:text-lg md:text-xl lg:text-2xl font-bold rounded-2xl shadow-2xl transition-all duration-300 w-full max-w-sm sm:max-w-lg overflow-hidden'
              initial={{ opacity: 0, scale: 0.9 }}
              animate={getAnimationProps(
                isInView
                  ? {
                      opacity: 1,
                      scale: prefersReducedMotion ? 1 : [1, 1.05, 1],
                      boxShadow: prefersReducedMotion
                        ? '0 0 20px rgba(0,255,0,0.5)'
                        : [
                            '0 0 20px rgba(0,255,0,0.5)',
                            '0 0 30px rgba(0,255,0,0.7)',
                            '0 0 20px rgba(0,255,0,0.5)'
                          ]
                    }
                  : {}
              )}
              transition={{
                opacity: { delay: ANIMATION_CONFIG.delay.cta, duration: 0.9 },
                scale: prefersReducedMotion
                  ? {}
                  : { repeat: Infinity, duration: 2 },
                boxShadow: prefersReducedMotion
                  ? {}
                  : { repeat: Infinity, duration: 2 }
              }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              aria-label='Falar com especialista pelo WhatsApp'
            >
              {/* Efeito de brilho no hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 transition-transform duration-700 ${
                  isHovering ? 'translate-x-full' : '-translate-x-full'
                }`}
              />
              <FaWhatsapp className='w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 flex-shrink-0 relative z-10' />
              <span className='relative z-10 whitespace-nowrap'>
                Fale com um Especialista Agora
              </span>
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className='absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 w-full'>
        <motion.div
          className='flex flex-col items-center gap-2 text-white/60'
          initial={{ opacity: 0, y: -20 }}
          animate={getAnimationProps(isInView ? { opacity: 1, y: 0 } : {})}
          transition={{ delay: 2, duration: 0.6 }}
        >
          <span className='text-xs uppercase tracking-wider text-center'>
            Role para baixo
          </span>
          <motion.svg
            className='w-6 h-6'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            viewBox='0 0 24 24'
            stroke='currentColor'
            animate={prefersReducedMotion ? {} : { y: [0, 8, 0] }}
            transition={
              prefersReducedMotion ? {} : { repeat: Infinity, duration: 1.5 }
            }
          >
            <path d='M19 14l-7 7m0 0l-7-7m7 7V3' />
          </motion.svg>
        </motion.div>
      </div>
    </section>
  )
}

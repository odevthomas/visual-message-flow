'use client'

import React, { useRef, useEffect, useState } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

// Assets
import logo from '../assets/brasservice.png'
import geladeiraVideo from '../assets/geladeira.mp4'

const WHATSAPP_CONFIG = {
  number: '5519991195261',
  message:
    'Olá! Gostaria de agendar um conserto. Vi no site que vocês resolvem rápido.'
}

const ANIMATION_CONFIG = {
  duration: 0.9,
  delay: {
    logo: 0.5,
    title: 0.7,
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

  // Autoplay seguro do vídeo (com fallback silencioso)
  useEffect(() => {
    const videoEl = videoRef.current
    if (!videoEl) return

    const tryPlay = () => {
      videoEl.play().catch(err => console.warn('Autoplay bloqueado:', err))
    }

    tryPlay()
    videoEl.addEventListener('canplaythrough', tryPlay)
    return () => videoEl.removeEventListener('canplaythrough', tryPlay)
  }, [])

  const getAnimationProps = (animation: any) =>
    prefersReducedMotion ? { opacity: isInView ? 1 : 0 } : animation

  return (
    <section
      ref={containerRef}
      className='relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black'
      aria-label='Seção principal — Conserto de Geladeiras'
    >
      {/* Fundo de vídeo com gradient e fallback */}
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
          preload='auto'
          onLoadedData={() => setVideoLoaded(true)}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${
            videoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ objectPosition: 'center center' }}
          aria-hidden='true'
        >
          <source src={geladeiraVideo} type='video/mp4' />
          Seu navegador não suporta vídeo.
        </video>

        {/* Overlays para contraste e foco */}
        <div className='absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80' />
        <div
          className='absolute inset-0 opacity-40'
          style={{
            background:
              'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.7) 100%)'
          }}
        />
      </div>

      {/* Conteúdo */}
      <div className='relative z-10 w-full px-4 sm:px-6 md:px-10 lg:px-16 py-16 md:py-20'>
        <div className='container mx-auto max-w-4xl'>
          <motion.div
            className='flex flex-col items-center text-center space-y-4 sm:space-y-6 md:space-y-8'
            initial={{ opacity: 0, y: -50 }}
            animate={getAnimationProps(isInView ? { opacity: 1, y: 0 } : {})}
            transition={{ duration: ANIMATION_CONFIG.duration, delay: 0.3 }}
          >
            {/* Logo */}
            <motion.img
              src={logo}
              alt='Bras Service — Assistência Técnica'
              className='h-16 sm:h-20 md:h-24 lg:h-28 w-auto object-contain drop-shadow-xl'
              initial={{ opacity: 0, scale: 0.8 }}
              animate={getAnimationProps(
                isInView ? { opacity: 1, scale: 1 } : {}
              )}
              transition={{ delay: ANIMATION_CONFIG.delay.logo, duration: 0.8 }}
            />

            {/* Título */}
            <motion.h1
              className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white max-w-3xl px-2 drop-shadow-2xl'
              initial={{ opacity: 0, y: -30 }}
              animate={getAnimationProps(isInView ? { opacity: 1, y: 0 } : {})}
              transition={{
                delay: ANIMATION_CONFIG.delay.title,
                duration: 0.9
              }}
            >
              Conserto de Geladeiras em Campinase e Região em até 24h
            </motion.h1>

            {/* Subtítulo */}
            <motion.p
              className='text-lg sm:text-xl md:text-2xl text-gray-200 mt-4 max-w-2xl px-2'
              initial={{ opacity: 0, y: -20 }}
              animate={getAnimationProps(isInView ? { opacity: 1, y: 0 } : {})}
              transition={{
                delay: ANIMATION_CONFIG.delay.title + 0.2,
                duration: 0.8
              }}
            >
              Atendimento rápido, com garantia e confiança.
            </motion.p>

            {/* Botão CTA */}
            <motion.a
              href={`https://wa.me/${
                WHATSAPP_CONFIG.number
              }?text=${encodeURIComponent(WHATSAPP_CONFIG.message)}`}
              target='_blank'
              rel='noopener noreferrer'
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className='group relative mt-8 flex items-center justify-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-700 text-white text-lg sm:text-xl font-bold rounded-2xl shadow-2xl transition-all duration-300 w-full max-w-sm sm:max-w-md overflow-hidden'
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
              <FaWhatsapp className='w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 relative z-10' />
              <span className='relative z-10 whitespace-nowrap'>
                Fale com um Especialista Agora
              </span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

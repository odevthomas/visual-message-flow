import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

import logo from '../assets/brasservice.png'
import geladeiraVideo from '../assets/geladeira.mp4'

export const Hero: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section
      ref={ref}
      className='w-full bg-white flex flex-col items-center justify-center px-4 py-12'
    >
      {/* Logo */}
      <img
        src={logo}
        alt='Bras Service'
        className='w-32 sm:w-40 md:w-48 mb-8'
      />

      {/* Container do vídeo */}
      <div className='relative w-full max-w-3xl overflow-hidden rounded-xl'>
        <video
          src={geladeiraVideo}
          autoPlay
          loop
          muted
          playsInline
          className='w-full h-auto object-cover rounded-xl'
        />
      </div>

      {/* Botão centralizado */}
      <motion.a
        href='https://wa.me/551991195261?text=Olá! Gostaria de mais informações sobre os serviços da Bras Service.'
        target='_blank'
        rel='noopener noreferrer'
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className='mt-8 px-8 py-3 bg-green-600 text-white font-semibold text-lg rounded-full flex items-center justify-center gap-2 hover:bg-green-700 transition-all'
      >
        <FaWhatsapp size={22} />
        Fale Conosco
      </motion.a>
    </section>
  )
}

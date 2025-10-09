import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

const FloatingWhatsApp: React.FC = () => {
  const whatsappNumber = '5519991195261' // número com DDI + DDD (sem espaços)
  const [isVisible, setIsVisible] = useState(false)

  // Controle de visibilidade com base no scroll
  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 200)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Mensagem padrão da campanha (pode ser alterada dinamicamente)
  const defaultMessage =
    'Olá! Gostaria de mais informações sobre os serviços da Bras Service.'

  // Função para abrir o WhatsApp com mensagem personalizada
  const handleClick = (message: string = defaultMessage) => {
    const encodedMessage = encodeURIComponent(message)
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      '_blank'
    )
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={() => handleClick()}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1, 1.05, 1],
            opacity: 1,
            transition: {
              duration: 0.6,
              ease: 'easeOut',
              scale: {
                type: 'spring',
                damping: 10,
                stiffness: 200,
                repeat: Infinity,
                repeatDelay: 3,
                duration: 1.5
              }
            }
          }}
          exit={{ scale: 0, opacity: 0, transition: { duration: 0.3 } }}
          whileHover={{ scale: 1.15, rotate: 5 }}
          aria-label='Falar no WhatsApp'
          title='Falar com a equipe no WhatsApp'
          className='fixed bottom-8 right-8 z-50 
                     w-14 h-14 md:w-16 md:h-16 
                     rounded-full 
                     bg-gradient-to-br from-green-500 to-green-700 
                     flex items-center justify-center cursor-pointer 
                     shadow-lg hover:shadow-xl 
                     focus:outline-none focus:ring-4 focus:ring-green-400/50'
          style={{
            boxShadow:
              '0 4px 15px rgba(34, 197, 94, 0.4), 0 0 0 8px rgba(34, 197, 94, 0.1)'
          }}
        >
          <FaWhatsapp className='w-8 h-8 md:w-9 md:h-9 text-white' />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default FloatingWhatsApp

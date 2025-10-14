// src/components/FloatingInstagram.jsx
import React, { useState, useEffect } from 'react'
import { FaInstagram } from 'react-icons/fa'

const FloatingInstagram = ({ link }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // 8000 milissegundos = 8 segundos
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 8000)

    return () => clearTimeout(timer)
  }, [])

  // Se não estiver visível, não renderiza nada
  if (!isVisible) {
    return null
  }

  return (
    <a
      href={link}
      target='_blank'
      rel='noopener noreferrer'
      // Alterações no CSS:
      // - 'left-4': Move para o lado esquerdo
      // - 'right-auto': Garante que o 'right' está desativado
      // - 'bg-pink-600': Retornando a cor do Instagram para maior clareza
      // - 'rounded-full': Retornando o formato de pílula para ser mais chamativo com o texto
      // - 'flex items-center space-x-2': Para alinhar o ícone e o texto
      className='fixed bottom-4 left-4 right-auto z-50 p-2 
                 bg-pink-600 text-white rounded-full 
                 shadow-lg hover:bg-pink-700 transition-colors 
                 flex items-center space-x-2 
                 transition-opacity duration-500 opacity-100'
      style={{
        // Move o componente para que não colida com o footer ou o WhatsApp, caso ele esteja lá
        bottom: '24px'
      }}
    >
      <FaInstagram size={20} />

      {/* Texto solicitado: "Siga nosso Instagram" */}
      <span className='text-sm font-semibold pr-1'>Siga nosso Instagram</span>
    </a>
  )
}

export default FloatingInstagram

// src/components/FloatingInstagram.jsx
import React from 'react'
import { FaInstagram } from 'react-icons/fa' // Importa o ícone do Instagram

const FloatingInstagram = ({ username, link }) => {
  return (
    <a
      href={link}
      target='_blank'
      rel='noopener noreferrer'
      // Classe CSS para posicionamento fixo
      className='fixed bottom-24 right-4 z-50 p-3 bg-pink-600 text-white rounded-full shadow-lg hover:bg-pink-700 transition-colors flex items-center space-x-2'
    >
      <FaInstagram size={24} />
      {/* Exibe o nome de usuário ao lado do ícone */}
      <span className='hidden sm:inline font-semibold text-sm'>{username}</span>
    </a>
  )
}

export default FloatingInstagram

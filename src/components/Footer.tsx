import React from 'react'
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaArrowUp
} from 'react-icons/fa'
import brasserviceLogo from '../assets/brasservice.png'

export const Footer: React.FC = () => {
  const whatsappNumber = '5519991195261' // Ajustei o número aqui para consistência
  const instagramUrl = 'https://www.instagram.com/brasservice_oficial' // Exemplo
  const emailAddress = 'bras-service@hotmail.com'

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      'Olá! Gostaria de mais informações sobre os serviços da Bras Service.'
    )
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
  }

  const handleInstagramClick = () => {
    window.open(instagramUrl, '_blank', 'noopener,noreferrer')
  }

  const handleEmailClick = () => {
    window.open(`mailto:${emailAddress}`, '_self')
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className='bg-black/50 border-t border-gray-800 py-12'>
      <div className='container mx-auto px-4 flex flex-col md:flex-row justify-between items-center md:items-start gap-12'>
        {/* Coluna 1: Logo e Descrição */}
        <div className='flex flex-col items-center md:items-start gap-4 text-center md:text-left'>
          <img
            src={brasserviceLogo}
            alt='Bras Service'
            className='h-14 w-auto'
          />
          <p className='text-gray-400 text-sm max-w-sm'>
            Especialistas em conserto de geladeiras, atendendo Campinas e região
            com rapidez e garantia.
          </p>
        </div>

        {/* Coluna 2: Contatos */}
        <div className='flex flex-col items-center md:items-start gap-4'>
          <h4 className='text-white text-lg font-bold'>Contato</h4>
          <ul className='text-gray-400 text-sm space-y-2'>
            <li>
              <button
                onClick={handleWhatsAppClick}
                className='flex items-center gap-2 hover:text-green-500 transition'
              >
                <FaWhatsapp /> {whatsappNumber}
              </button>
            </li>
            <li>
              <button
                onClick={handleEmailClick}
                className='flex items-center gap-2 hover:text-white transition'
              >
                <FaEnvelope /> {emailAddress}
              </button>
            </li>
            <li>
              <a
                href={instagramUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 hover:text-purple-400 transition'
              >
                <FaInstagram /> @bras_service
              </a>
            </li>
          </ul>
        </div>

        {/* Coluna 3: Navegação e Endereço */}
        <div className='flex flex-col items-center md:items-start gap-4'>
          <h4 className='text-white text-lg font-bold'>Endereço</h4>
          <p className='text-gray-400 text-sm text-center md:text-left'>
            Av. Baden Powell, 551 - Jardim Nova Europa,{' '}
            <br className='hidden md:block' />
            Campinas - SP, 13040-093
          </p>
          <div className='mt-4'>
            <button
              onClick={scrollToTop}
              className='flex items-center gap-2 text-white/80 hover:text-white transition'
            >
              <FaArrowUp /> Voltar ao topo
            </button>
          </div>
        </div>
      </div>

      {/* Direitos Autorais */}
      <div className='border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-xs'>
        © 2025 Bras Service. Todos os direitos reservados.
      </div>
    </footer>
  )
}

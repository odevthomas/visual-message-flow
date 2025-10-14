import React from 'react'

// Componentes principais
import { Footer } from './components/Footer'
import { HeroSection } from './components/HeroSection'
import { FeaturesSection } from './components/FeaturesSection'
import ProblemsSection from './components/ProblemsSection'
import { BrandsSection } from './components/BrandsSection'
import { ClientsSection } from './components/ClientsSection'
import FAQSection from './components/FAQSection'
import BentoCTA from './components/BentoCTA'
import FloatingWhatsApp from './components/FloatingWhatsApp'
// NOVO: Componente para o Instagram
import FloatingInstagram from './components/FloatingInstagram'

// Estilos
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// Dados do Instagram
const INSTAGRAM_USER = '@bras_service'
const INSTAGRAM_LINK = 'https://www.instagram.com/bras_service' // Certifique-se de que o link está correto

// ===== App Principal =====
function App () {
  return (
    <div className='App min-h-screen'>
      <main>
        {/* ... seu código principal de sections ... */}
        <section id='hero'>
          <HeroSection />
        </section>
        <ClientsSection />

        <FeaturesSection />

        <BrandsSection />

        <ProblemsSection />

        <BentoCTA />

        <section id='faq'>
          <FAQSection />
        </section>
      </main>

      <Footer />
      {/* Componentes Flutuantes */}
      <FloatingWhatsApp />
      <FloatingInstagram username={INSTAGRAM_USER} link={INSTAGRAM_LINK} />
    </div>
  )
}

export default App

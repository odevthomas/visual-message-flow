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


import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


function App () {
  return (
    <div className='App min-h-screen'>
      <main>
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
      <FloatingWhatsApp />
    </div>
  )
}

export default App

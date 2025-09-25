import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Star, Clock, ArrowRight, Sparkles, ThumbsUp, Banknote, MessageSquare } from "lucide-react"; // Adicionado ThumbsUp, Banknote, MessageSquare
import { ChevronDown, ChevronUp } from "lucide-react"; // Mantenha estes para o FAQ
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { FeaturesSection } from "./components/FeaturesSection";
import TrustSection from "./components/TrustSection";
import FloatingWhatsApp from "./components/FloatingWhatsApp"; // Importação do componente FloatingWhatsApp

// Logos e imagens - Ajuste os caminhos se necessário
import panasonicLogo from "./assets/logo/panasonic.svg";
import britaniaLogo from "./assets/logo/britania.svg";
import brastempLogo from "./assets/logo/brastemp.svg";

import miniExtraLogo from "./assets/clients/mini-extra.png";
import diaLogo from "./assets/clients/dia.png";
import castaneaLogo from "./assets/clients/castanea.png";
import abigailLogo from "./assets/clients/abigail.png";
import meliaLogo from "./assets/clients/melia.png";
import francoLogo from "./assets/clients/franco.png";
import paoDeQueijoLogo from "./assets/clients/pao-de-queijo.png";
import grilettoLogo from "./assets/clients/griletto.png";

// ===== Marquee Component (inalterado, mas você pode usar o CSS aprimorado) =====
const Marquee = ({ children, duration = 30 }) => (
  <div className="overflow-hidden relative w-full">
    <motion.div
      className="flex w-max"
      animate={{ x: ["0%", "-50%"] }}
      transition={{ repeat: Infinity, duration, ease: "linear" }}
    >
      {children}
      {children}
    </motion.div>
  </div>
);

// ===== Brands Section (inalterado, mas o CSS externo aplicará as animações) =====
const BrandsSection: React.FC = () => {
  const brands = [
    { name: "Brastemp", logo: brastempLogo, white: false },
    { name: "Electrolux", logo: "https://cdn.brandfetch.io/ide409nnKf/theme/light/logo.svg", white: false },
    { name: "LG", logo: "https://cdn.brandfetch.io/idmebuIsYa/w/400/h/400/theme/dark/icon.jpeg", white: true },
    { name: "Samsung", logo: "https://cdn.brandfetch.io/iduaw_nOnR/theme/dark/logo.svg", white: false },
    { name: "Sony", logo: "https://cdn.brandfetch.io/ido0LYg_hc/theme/light/logo.svg", white: false },
    { name: "Panasonic", logo: panasonicLogo, white: false },
    { name: "Continental", logo: "https://static.wixstatic.com/media/376d2e_20a87a16f6334719b39fb8da60010b59~mv2.png", white: false },
    { name: "Consul", logo: "https://cdn.brandfetch.io/idFBBFlZ9z/theme/dark/logo.svg", white: false },
    { name: "Mondial", logo: "https://cdn.brandfetch.io/idQVl9TU44/theme/dark/logo.svg", white: true },
    { name: "Britania", logo: britaniaLogo, white: false },
    { name: "Bosch", logo: "https://cdn.brandfetch.io/idlS72krr0/theme/dark/logo.svg", white: false },
  ];

  return (
    <section className="py-16 sm:py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Marcas Atendidas</h2>
        <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-12">
          Trabalhamos com as principais marcas do mercado, garantindo qualidade e suporte especializado.
        </p>

        <Marquee duration={30}>
          {brands.map((brand, index) => (
            <div key={index} className="flex-shrink-0 w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 flex items-center justify-center px-4 marquee-item"> {/* Adicionada classe para o CSS externo */}
              <img
                src={brand.logo}
                alt={brand.name}
                className={`w-full h-full object-contain transition-all duration-300 ${
                  brand.white ? "" : "filter brightness-0 invert opacity-80 hover:filter-none"
                }`}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

// ===== Clients Section (inalterado, mas o CSS externo aplicará as animações) =====
const ClientsSection = () => {
  const clients = [
    { name: "Mini Mercado Extra", logo: miniExtraLogo },
    { name: "Dia%", logo: diaLogo },
    { name: "Restaurante Castanea", logo: castaneaLogo },
    { name: "Abigail Coffee Co.", logo: abigailLogo },
    { name: "Melia Hotels", logo: meliaLogo },
    { name: "Franco do Amaral", logo: francoLogo },
    { name: "Pão de Queijo & Cia", logo: paoDeQueijoLogo },
    { name: "Griletto", logo: grilettoLogo },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Clientes Parceiros</h2>
        <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-12">
          Empresas e marcas que confiam no nosso trabalho para fortalecer sua presença e resultados.
        </p>

        <Marquee duration={35}>
          {clients.map((client, index) => (
            <div key={index} className="flex-shrink-0 w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 flex items-center justify-center px-4 marquee-item"> {/* Adicionada classe para o CSS externo */}
              <img
                src={client.logo}
                alt={client.name}
                className="max-w-full max-h-full object-contain transition-all duration-300 filter grayscale invert opacity-80 hover:filter-none hover:opacity-100"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

// ===== FAQ Section (inalterado, mas o CSS externo aplicará as animações) =====
interface FAQ { question: string; answer: string; }

export const FAQSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      question: "Qual é o prazo de atendimento?",
      answer: "Trabalhamos com atendimento prioritário 24 horas por dia. Para casos urgentes, nossa equipe pode chegar ao local em até 2 horas. Para atendimentos programados, agendamos conforme sua disponibilidade, sempre priorizando a rapidez na solução do problema."
    },
    {
      question: "Vocês trabalham com todas as marcas?",
      answer: "Sim! Nossos técnicos são especializados em todas as principais marcas do mercado: Brastemp, Electrolux, LG, Samsung, Philco, Panasonic, Whirlpool, Consul e muitas outras. Mantemos um estoque completo de peças originais para atendimento imediato."
    },
    {
      question: "O serviço tem garantia?",
      answer: "Absolutamente! Oferecemos garantia de 1 ano para todos os nossos serviços e peças utilizadas. Esta garantia cobre tanto mão de obra quanto peças, demonstrando nossa total confiança na qualidade do trabalho realizado por nossa equipe técnica."
    },
    {
      question: "Quais formas de pagamento vocês aceitam?",
      answer: "Aceitamos todas as formas de pagamento para sua comodidade: dinheiro, cartão de débito, cartão de crédito (parcelamos em até 12x sem juros), PIX, transferência bancária e boleto. Nosso objetivo é facilitar ao máximo o processo de pagamento."
    },
    {
      question: "Atendem em finais de semana e feriados?",
      answer: "Sim! Funcionamos 7 dias por semana, incluindo finais de semana e feriados. Sabemos que problemas com refrigeração não escolhem hora para acontecer, especialmente em estabelecimentos comerciais. Por isso, mantemos plantão 24h para emergências."
    },
    {
      question: "O orçamento é gratuito?",
      answer: "Sim, completamente gratuito! Nossos técnicos fazem o diagnóstico completo e apresentam o orçamento detalhado sem nenhum custo. Você só paga se aprovar o serviço. Não cobramos taxa de deslocamento na região de Campinas e cidades próximas."
    }
  ];

  const toggleFAQ = (index: number) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section ref={containerRef} className="py-12 sm:py-16 md:py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-3xl relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">Perguntas Frequentes</h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-xl mx-auto">
            Esclarecemos as principais dúvidas sobre nossos serviços especializados
          </p>
        </motion.div>

        <div className="space-y-4 sm:space-y-6 mt-10">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-black border border-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-gray-500/10 transition-all duration-500 faq-item" // Adicionado faq-item para o CSS
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <button onClick={() => toggleFAQ(index)} className={`w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex items-center justify-between focus:outline-none ${openIndex === index ? 'open' : ''}`}> {/* Adicionada classe 'open' para o CSS */}
                <h3 className="text-white font-semibold text-sm sm:text-base md:text-lg">{faq.question}</h3>
                <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }} transition={{ duration: 0.3 }} className="arrow-icon"> {/* Adicionada classe arrow-icon para o CSS */}
                  {openIndex === index ? <ChevronUp className="w-5 h-5 text-gray-300" /> : <ChevronDown className="w-5 h-5 text-gray-300" />}
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease: "easeInOut" }}>
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-2 faq-answer"> {/* Adicionada classe faq-answer para o CSS */}
                      <p className="text-gray-300 text-sm sm:text-base">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


// ===== App Principal =====
function App() {
  return (
    <div className="App bg-black min-h-screen">
      {/* <link rel="stylesheet" href="https://cdn.hugeicons.com/font/hgi-stroke-rounded.css" /> */}
      {/* Removido o Hugeicons, pois estamos migrando para Lucide para consistência */}

      <main>
        <section id="hero"><HeroSection /></section>
        <ClientsSection />
        <FeaturesSection />
        <BrandsSection />
        <TrustSection />
        <section id="faq"><FAQSection /></section>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
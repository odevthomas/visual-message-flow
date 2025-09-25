import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

export const FAQSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      question: 'Qual é o prazo de atendimento?',
      answer: 'Trabalhamos com atendimento prioritário 24 horas por dia. Para casos urgentes, nossa equipe pode chegar ao local em até 2 horas. Para atendimentos programados, agendamos conforme sua disponibilidade, sempre priorizando a rapidez na solução do problema.'
    },
    {
      question: 'Vocês trabalham com todas as marcas?',
      answer: 'Sim! Nossos técnicos são especializados em todas as principais marcas do mercado: Brastemp, Electrolux, LG, Samsung, Philco, Panasonic, Whirlpool, Consul e muitas outras. Mantemos um estoque completo de peças originais para atendimento imediato.'
    },
    {
      question: 'O serviço tem garantia?',
      answer: 'Absolutamente! Oferecemos garantia de 1 ano para todos os nossos serviços e peças utilizadas. Esta garantia cobre tanto mão de obra quanto peças, demonstrando nossa total confiança na qualidade do trabalho realizado por nossa equipe técnica.'
    },
    {
      question: 'Quais formas de pagamento vocês aceitam?',
      answer: 'Aceitamos todas as formas de pagamento para sua comodidade: dinheiro, cartão de débito, cartão de crédito (parcelamos em até 12x sem juros), PIX, transferência bancária e boleto. Nosso objetivo é facilitar ao máximo o processo de pagamento.'
    },
    {
      question: 'Atendem em finais de semana e feriados?',
      answer: 'Sim! Funcionamos 7 dias por semana, incluindo finais de semana e feriados. Sabemos que problemas com refrigeração não escolhem hora para acontecer, especialmente em estabelecimentos comerciais. Por isso, mantemos plantão 24h para emergências.'
    },
    {
      question: 'O orçamento é gratuito?',
      answer: 'Sim, completamente gratuito! Nossos técnicos fazem o diagnóstico completo e apresentam o orçamento detalhado sem nenhum custo. Você só paga se aprovar o serviço. Não cobramos taxa de deslocamento na região de Campinas e cidades próximas.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      ref={containerRef}
      className="py-12 sm:py-16 md:py-20 bg-black relative overflow-hidden"
      id="faq"
    >
      {/* Title */}
      <motion.div
        className="text-center mb-8 sm:mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6"
            style={{ textShadow: '0 0 15px rgba(156, 163, 175, 0.3)' }}>
          Perguntas Frequentes
        </h2>
        <p className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto">
          Esclarecemos as principais dúvidas sobre nossos serviços especializados
        </p>
      </motion.div>

      {/* FAQ Items */}
      <div className="space-y-4 sm:space-y-6 max-w-3xl mx-auto px-4 sm:px-6">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="group backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-gray-500/10 transition-all duration-500"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-300 focus:outline-none relative z-10"
            >
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white pr-4 group-hover:text-gray-200 transition-colors duration-300">
                {faq.question}
              </h3>
              <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 backdrop-blur-md bg-white/10 border border-white/20 rounded-full flex items-center justify-center group-hover:bg-gray-400/20 group-hover:border-gray-400/40 transition-all duration-300">
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {openIndex === index ? <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300" /> :
                                            <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300" />}
                </motion.div>
              </div>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-2 relative z-10">
                    <motion.div
                      initial={{ y: -8, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -8, opacity: 0 }}
                      transition={{ duration: 0.3, delay: 0.05 }}
                      className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-3 sm:p-4"
                    >
                      <p className="text-gray-200 leading-relaxed text-sm sm:text-base">
                        {faq.answer}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        className="text-center mt-12 sm:mt-14 md:mt-20"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-10 md:p-14 shadow-xl max-w-xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ainda tem dúvidas?
          </h3>
          <p className="text-gray-300 mb-6 sm:mb-8 text-base sm:text-lg">
            Nossa equipe está pronta para esclarecer qualquer questão e fornecer o melhor atendimento personalizado
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={() => {
                const whatsappNumber = "5511999999999";
                const message = encodeURIComponent("Olá! Tenho algumas dúvidas sobre os serviços da Bras Service. Podem me ajudar?");
                window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
              }}
              className="inline-flex items-center justify-center px-6 sm:px-7 md:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-600 to-emerald-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden text-base sm:text-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Tirar Dúvidas no WhatsApp
            </motion.button>
            
            <motion.button
              onClick={() => window.open("tel:+5511999999999", "_self")}
              className="inline-flex items-center justify-center px-6 sm:px-7 md:px-8 py-3 sm:py-4 bg-gradient-to-r from-gray-600 to-gray-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden text-base sm:text-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Ligar Agora
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

import React from "react";
import { Star, MessageCircle, Clock, ArrowRight, Sparkles } from "lucide-react";

const BentoCTA: React.FC = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 relative">
        
        {/* Header */}
        <div className="text-center mb-16">
         
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Atendimento que               transforma

           
          </h2>
          
          <p className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Mais de 2.000 clientes já transformaram seus negócios conosco. 
            <br />
            Peça seu orçamento e descubra por que somos referência no mercado.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          
          {/* Card Avaliação Google - Destaque */}
          <div className="lg:col-span-1 group relative">
            <div className="relative bg-gray-900 border border-gray-800 rounded-3xl p-8 hover:border-gray-700 transition-all duration-300 group-hover:scale-[1.02]">
              
              <div className="flex items-center justify-center mb-6">
                <div className="relative">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-2xl">
                    <svg viewBox="0 0 24 24" className="w-10 h-10">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="text-center mb-6">
                <div className="flex justify-center items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">4,7 no Google</h3>
                <p className="text-gray-400">Baseado em +2.000 avaliações reais</p>
              </div>
              
              <button className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold px-6 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:scale-105 flex items-center justify-center gap-2">
                Ver depoimentos
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Card Orçamento */}
          <div className="group relative">
            <div className="relative h-full bg-gray-900 border border-gray-800 rounded-3xl p-8 hover:border-gray-700 transition-all duration-300 group-hover:scale-[1.02]">
              
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center shadow-2xl">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-white mb-2">Orçamento Gratuito</h3>
                <p className="text-gray-400">Resposta em até 30 minutos, sem burocracia</p>
              </div>
              
              <button className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold px-6 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:scale-105 flex items-center justify-center gap-2">
                Solicitar agora
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Card Atendimento */}
          <div className="group relative">
            <div className="relative h-full bg-gray-900 border border-gray-800 rounded-3xl p-8 hover:border-gray-700 transition-all duration-300 group-hover:scale-[1.02]">
              
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center shadow-2xl relative">
                  <Clock className="w-8 h-8 text-white" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                </div>
              </div>
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-white mb-2">Online Agora</h3>
                <p className="text-gray-400">Equipe disponível para atendimento imediato</p>
              </div>
              
              <button className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold px-6 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:scale-105 flex items-center justify-center gap-2">
                Falar no WhatsApp
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 text-gray-400 text-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>2.147 clientes ativos este mês</span>
            <div className="w-1 h-4 bg-gray-600 rounded-full"></div>
            <span>Resposta em média: 2 minutos</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BentoCTA;
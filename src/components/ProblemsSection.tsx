import React from 'react'
import { Card } from '@/components/ui/card'
import {
  Thermometer,
  Zap,
  Droplets,
  AlertCircle,
  Settings,
  Clock,
  CheckCircle
} from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'

const problems = [
  {
    icon: Thermometer,
    title: 'Não Gela',
    description: 'Minha geladeira não gela na parte de baixo.',
    solution:
      'Agende já uma visita para garantir a eficiência da sua geladeira.',
    urgency: 'Alta',
    whatsappMessage:
      'Olá, minha geladeira não gela na parte de baixo. Poderiam agendar uma visita técnica?'
  },
  {
    icon: Zap,
    title: 'Ruído Excessivo',
    description: 'Minha geladeira está fazendo um barulho estranho.',
    solution:
      'Agende já uma visita para garantir a eficiência da sua geladeira.',
    urgency: 'Média',
    whatsappMessage:
      'Minha geladeira está fazendo um barulho estranho. Gostaria de agendar uma visita técnica.'
  },
  {
    icon: Droplets,
    title: 'Vazamento de Água',
    description: 'Minha geladeira está vazando água.',
    solution:
      'Agende já uma visita para garantir a eficiência da sua geladeira.',
    urgency: 'Alta',
    whatsappMessage:
      'Minha geladeira está vazando água. Poderiam agendar um técnico?'
  },
  {
    icon: Settings,
    title: 'Não Liga',
    description: 'Minha geladeira não liga nada.',
    solution:
      'Agende já uma visita para garantir a eficiência da sua geladeira.',
    urgency: 'Alta',
    whatsappMessage:
      'Minha geladeira não liga mais. Preciso de um técnico para verificar o sistema elétrico.'
  },
  {
    icon: AlertCircle,
    title: 'Compressor com Ruído',
    description:
      'O compressor da minha geladeira não gela e faz um barulho estranho.',
    solution:
      'Solicite já uma visita técnica para garantir a eficiência da sua geladeira.',
    urgency: 'Alta',
    whatsappMessage:
      'O compressor da minha geladeira está fazendo barulho e ela não gela. Podem me ajudar?'
  },
  {
    icon: Clock,
    title: 'Higienização Completa',
    description:
      'Geladeira parou de funcionar e estragou alimentos interno. Fazemos higienização e descontaminação completa da sua geladeira.',
    solution:
      'Agende já uma visita para garantir a eficiência da sua geladeira.',
    urgency: 'Baixa',
    whatsappMessage:
      'Gostaria de agendar uma higienização completa para minha geladeira. Como podemos prosseguir?'
  }
] as const

export default function ProblemsSection () {
  const whatsappNumber = '5519991195261'

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'Alta':
        return 'bg-red-600 text-white border-red-700'
      case 'Média':
        return 'bg-yellow-500 text-white border-yellow-600'
      case 'Baixa':
        return 'bg-green-600 text-white border-green-700'
      default:
        return 'bg-gray-600 text-white border-gray-700'
    }
  }

  return (
    <section className='relative py-16 sm:py-20 md:py-24 text-white overflow-hidden'>
      {/* Fundo com o mesmo gradiente do HeroSection */}
      <div className='absolute inset-0 -z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#1b3e84_40%,#000_80%)]'></div>

      <div className='max-w-7xl mx-auto px-4 relative z-20'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
            Sua geladeira tem algum desses problemas?
          </h2>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
            Nossa equipe identifica rapidamente o problema e oferece uma solução
            eficiente.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
          {problems.map((problem, index) => {
            const Icon = problem.icon

            return (
              <Card
                key={index}
                className='group p-6 border-0 bg-black/50 border border-white/10 hover:border-white/20 transition-all duration-300 rounded-xl'
                data-testid={`problem-${index}`}
              >
                <div className='flex flex-col h-full'>
                  <div className='flex items-start justify-between mb-4'>
                    <div className='w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-600/40 transition-colors duration-300'>
                      <Icon className='h-7 w-7 text-white fill-blue-600/20 group-hover:fill-blue-600/40 transition-colors duration-300' />
                    </div>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium border ${getUrgencyColor(
                        problem.urgency
                      )}`}
                    >
                      {problem.urgency}
                    </span>
                  </div>

                  <h3 className='font-bold text-xl text-white mb-3 group-hover:text-blue-500 transition-colors'>
                    {problem.title}
                  </h3>

                  <p className='text-gray-300 mb-4 leading-relaxed flex-1'>
                    {problem.description}
                  </p>

                  <div className='space-y-3 mt-auto'>
                    <div className='flex items-start space-x-2'>
                      <CheckCircle className='w-4 h-4 text-green-500 mt-0.5 flex-shrink-0' />
                      <span className='text-sm text-gray-400'>
                        {problem.solution}
                      </span>
                    </div>

                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                        problem.whatsappMessage
                      )}`}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='w-full bg-blue-600 text-white font-bold px-6 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 mt-4'
                    >
                      <FaWhatsapp className='w-5 h-5' />
                      Falar no WhatsApp
                    </a>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Nova seção de CTA */}
        <div className='text-center mt-12'>
          <h3 className='text-2xl md:text-3xl font-bold text-white mb-4'>
            Não espere o problema piorar!
          </h3>
          <p className='text-lg text-gray-300 max-w-2xl mx-auto mb-6'>
            Clique abaixo e agende a visita de um técnico agora.
          </p>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              'Olá! Gostaria de agendar uma visita técnica para resolver um problema na minha geladeira.'
            )}`}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center justify-center gap-3 px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-2xl shadow-lg transition-all duration-300'
          >
            <FaWhatsapp className='w-6 h-6' />
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

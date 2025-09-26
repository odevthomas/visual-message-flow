import React from "react";
import { Card } from "@/components/ui/card";
import {
  Thermometer,
  Zap,
  Droplets,
  AlertCircle,
  Settings,
  Clock,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const problems = [
  {
    icon: Thermometer,
    title: "Não Gela",
    description: "Geladeira não resfria adequadamente ou parou completamente",
    solution: "Diagnóstico do compressor e sistema de refrigeração",
    urgency: "Alta",
  },
  {
    icon: Zap,
    title: "Ruído Excessivo",
    description: "Barulhos estranhos, vibração ou funcionamento irregular",
    solution: "Verificação do motor e componentes mecânicos",
    urgency: "Média",
  },
  {
    icon: Droplets,
    title: "Vazamento de Água",
    description: "Acúmulo de água dentro ou embaixo da geladeira",
    solution: "Reparo do sistema de drenagem e vedações",
    urgency: "Alta",
  },
  {
    icon: AlertCircle,
    title: "Porta não Veda",
    description: "Borrachas ressecadas ou danificadas perdendo a vedação",
    solution: "Substituição de borrachas e ajuste de portas",
    urgency: "Média",
  },
  {
    icon: Settings,
    title: "Problemas Elétricos",
    description: "Não liga, desarma disjuntor ou oscilação de energia",
    solution: "Revisão completa do sistema elétrico",
    urgency: "Alta",
  },
  {
    icon: Clock,
    title: "Manutenção Preventiva",
    description: "Limpeza e verificação para evitar problemas futuros",
    solution: "Programa completo de manutenção preventiva",
    urgency: "Baixa",
  },
] as const;

export default function ProblemsSection() {
  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case "Alta":
        return "bg-red-600 text-white border-red-700";
      case "Média":
        return "bg-yellow-500 text-white border-yellow-600";
      case "Baixa":
        return "bg-green-600 text-white border-green-700";
      default:
        return "bg-gray-600 text-white border-gray-700";
    }
  };

  return (
    <section className="relative py-16 sm:py-20 md:py-24 text-white overflow-hidden">
      {/* Fundo escuro com gradiente */}
      <div
        className="absolute inset-0 z-10"
        style={{
          
background: 'radial-gradient(circle at center, rgba(0, 11, 29, 0.92) 0%, rgba(0, 0, 0, 1) 100%)' ,    
        }}
      />

      <div className="max-w-7xl mx-auto px-4 relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Problemas Comuns que Resolvemos
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Nossa equipe especializada identifica rapidamente o problema e
            oferece a solução mais eficiente
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            const whatsappMessage = `Olá, tenho um problema com minha geladeira: "${problem.title}". Podem me ajudar?`;

            return (
              <Card
                key={index}
                className="group p-6 border-0 bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 rounded-xl"
                data-testid={`problem-${index}`}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 bg-brand-blue/20 rounded-xl flex items-center justify-center group-hover:bg-brand-blue/40 transition-colors duration-300">
                      <Icon className="h-7 w-7 text-brand-blue fill-brand-blue/20 group-hover:fill-brand-blue/40 transition-colors duration-300" />
                    </div>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium border ${getUrgencyColor(
                        problem.urgency
                      )}`}
                    >
                      {problem.urgency}
                    </span>
                  </div>

                  <h3 className="font-bold text-xl text-white mb-3 group-hover:text-brand-blue transition-colors">
                    {problem.title}
                  </h3>

                  <p className="text-gray-300 mb-4 leading-relaxed flex-1">
                    {problem.description}
                  </p>

                  <div className="space-y-3 mt-auto">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-400">
                        {problem.solution}
                      </span>
                    </div>

                    <a
                      href={`https://wa.me/5519991195261?text=${encodeURIComponent(
                        whatsappMessage
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-brand-blue text-white font-bold px-6 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 mt-4"
                    >
                      Falar no WhatsApp
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Emergency CTA */}
       
      </div>
    </section>
  );
}

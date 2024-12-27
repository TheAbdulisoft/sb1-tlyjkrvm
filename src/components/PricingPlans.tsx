import React from 'react';
import { Check, Star, Zap, Clock } from 'lucide-react';

interface PricingPlan {
  duration: string;
  price: number;
  features: string[];
  recommended?: boolean;
}

export function PricingPlans() {
  const plans: PricingPlan[] = [
    {
      duration: "1 Muaj",
      price: 10,
      features: [
        "Qasje në të gjitha kanalet",
        "Cilësi HD",
        "Mbështetje 24/7",
        "EPG (TV Guide)"
      ]
    },
    {
      duration: "3 Muaj",
      price: 24,
      features: [
        "Kurseni 20%",
        "Qasje në të gjitha kanalet",
        "Cilësi HD",
        "Mbështetje 24/7",
        "EPG (TV Guide)"
      ]
    },
    {
      duration: "6 Muaj",
      price: 35,
      features: [
        "Kurseni 40%",
        "Qasje në të gjitha kanalet",
        "Cilësi HD/4K",
        "Mbështetje Prioritare 24/7",
        "EPG (TV Guide)",
        "Multi-device Support"
      ],
      recommended: true
    },
    {
      duration: "12 Muaj",
      price: 45,
      features: [
        "Kurseni 60%",
        "Qasje në të gjitha kanalet",
        "Cilësi HD/4K",
        "Mbështetje VIP 24/7",
        "EPG (TV Guide)",
        "Multi-device Support",
        "VOD i pakufizuar"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-12 md:py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-green-400 font-mono">
          Paketat Tona
        </h2>
        <p className="text-green-300 text-center mb-8 md:mb-12 font-mono max-w-2xl mx-auto text-sm md:text-base px-4">
          Zgjidhni planin që përshtatet më mirë me nevojat tuaja. Të gjitha paketat përfshijnë qasje të plotë në platformën tonë.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 overflow-x-auto pb-4">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`glass-card rounded-xl p-4 md:p-6 min-w-[280px] ${
                plan.recommended 
                  ? 'border-2 border-green-400 relative transform hover:scale-105' 
                  : 'transform hover:scale-102'
              } transition-all duration-300`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-400 text-black px-4 py-1 rounded-full text-sm font-bold whitespace-nowrap">
                    Më i Popullarizuar
                  </span>
                </div>
              )}

              <div className="text-center mb-4 md:mb-6">
                <h3 className="text-lg md:text-xl font-bold text-green-400 mb-2">{plan.duration}</h3>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {plan.price}€
                </div>
                <p className="text-green-300 text-xs md:text-sm">Paguaj një herë</p>
              </div>

              <ul className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-green-400 flex-shrink-0" />
                    <span className="text-green-300 text-xs md:text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/38162823822"
                target="_blank"
                rel="noopener noreferrer"
                className="modern-button w-full flex items-center justify-center space-x-2 text-white font-mono text-sm md:text-base"
              >
                <span>Porosit Tani</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
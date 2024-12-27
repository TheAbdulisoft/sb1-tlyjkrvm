import React from 'react';
import { Download, Phone, Tv2, Shield, Zap } from 'lucide-react';

export function Hero() {
  const phoneNumber = "38162823822";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=Përshëndetje! Dua të marr më shumë informacion për shërbimet tuaja.`;

  return (
    <section id="home" className="min-h-screen pt-16 md:pt-20 matrix-background">
      <div className="container mx-auto px-4 matrix-content py-12 md:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 font-mono leading-tight">
              Eksperienca Juaj e Re e Argëtimit Dixhital
            </h1>
            <p className="text-lg md:text-xl mb-6 md:mb-8 text-green-300 font-mono leading-relaxed">
              Zbuloni një botë të re argëtimi me Illyrian IPTV. Cilësi superiore, përmbajtje e pasur, 
              dhe eksperiencë e përsosur shikimi.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8 md:mb-12 justify-center lg:justify-start">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="modern-button flex items-center justify-center gap-2 text-white font-mono text-base md:text-lg w-full sm:w-auto"
              >
                <Phone className="w-5 h-5" />
                <span>Na Kontaktoni</span>
              </a>
              
              <button className="modern-button flex items-center justify-center gap-2 text-white font-mono text-base md:text-lg bg-opacity-50 w-full sm:w-auto">
                <Download className="w-5 h-5" />
                <span>Shkarko Aplikacionin</span>
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 md:gap-6">
              <div className="text-center">
                <Tv2 className="w-6 h-6 md:w-8 md:h-8 text-green-400 mx-auto mb-2" />
                <p className="text-green-300 font-mono text-sm md:text-base">10,000+ Kanale</p>
              </div>
              <div className="text-center">
                <Shield className="w-6 h-6 md:w-8 md:h-8 text-green-400 mx-auto mb-2" />
                <p className="text-green-300 font-mono text-sm md:text-base">100% E Sigurt</p>
              </div>
              <div className="text-center">
                <Zap className="w-6 h-6 md:w-8 md:h-8 text-green-400 mx-auto mb-2" />
                <p className="text-green-300 font-mono text-sm md:text-base">Cilësi HD/4K</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 float-animation w-full px-4 md:px-0">
            <div className="glass-card p-4 md:p-8 rounded-2xl">
              <img 
                src="https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80&w=1000" 
                alt="Illyrian IPTV Preview" 
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
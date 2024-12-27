import React from 'react';
import { Tv, Smartphone, Laptop, TabletSmartphone, Shield, Zap, Clock, HeartHandshake } from 'lucide-react';

export function Benefits() {
  const benefits = [
    {
      icon: <Tv className="w-12 h-12 text-green-400" />,
      title: "10,000+ Kanale Live",
      description: "Qasje në mijëra kanale nga e gjithë bota, përfshirë sportet, filmat dhe serialet më të fundit."
    },
    {
      icon: <Shield className="w-12 h-12 text-green-400" />,
      title: "Stabilitet 99.9%",
      description: "Shërbim i qëndrueshëm dhe i besueshëm me kohë minimale jofunksionale."
    },
    {
      icon: <TabletSmartphone className="w-12 h-12 text-green-400" />,
      title: "Në Çdo Pajisje",
      description: "Shikoni në telefon, tablet, Android TV, kompjuter dhe shumë pajisje të tjera."
    },
    {
      icon: <Zap className="w-12 h-12 text-green-400" />,
      title: "Cilësi Superiore",
      description: "Transmetim në cilësi HD dhe 4K për një eksperiencë shikimi të përsosur."
    }
  ];

  const devices = [
    {
      icon: <Smartphone className="w-16 h-16 text-green-400" />,
      name: "Telefon"
    },
    {
      icon: <TabletSmartphone className="w-16 h-16 text-green-400" />,
      name: "Tablet"
    },
    {
      icon: <Tv className="w-16 h-16 text-green-400" />,
      name: "Smart TV"
    },
    {
      icon: <Laptop className="w-16 h-16 text-green-400" />,
      name: "Kompjuter"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-green-400 font-mono">
            Pse të Zgjidhni Illyrian IPTV?
          </h2>
          <p className="text-green-300 max-w-2xl mx-auto font-mono">
            Ofrojmë shërbimin më të mirë të IPTV me çmime konkurruese dhe cilësi të lartë
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div key={index} className="glass-card p-6 rounded-xl text-center">
              <div className="mb-4 flex justify-center">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-green-400">{benefit.title}</h3>
              <p className="text-green-300 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-6 text-green-400 font-mono">
            Përdoreni në Çdo Pajisje
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            {devices.map((device, index) => (
              <div key={index} className="text-center">
                {device.icon}
                <p className="text-green-300 mt-2 font-mono">{device.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
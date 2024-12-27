import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { PricingPlans } from './components/PricingPlans';
import { AppCard } from './components/AppCard';
import { Tutorials } from './components/Tutorials';
import { MatrixRain } from './components/MatrixRain';
import { ChannelList } from './components/ChannelList';
import './styles/matrix.css';

const apps = [
  {
    title: 'Illyrian IPTV Basic',
    description: 'Filloni udhëtimin tuaj të transmetimit me paketën tonë themelore',
    version: '1.0.0',
    downloadUrl: '/apps/illyrian-basic.apk',
    features: [
      'Qasje në 5000+ kanale',
      'Cilësi HD e transmetimit',
      'EPG 7-ditore',
      'Librari bazë VOD'
    ]
  },
  {
    title: 'Illyrian IPTV Premium',
    description: 'Veçori të përmirësuara për përvojën përfundimtare të shikimit',
    version: '2.0.0',
    downloadUrl: '/apps/illyrian-premium.apk',
    features: [
      'Qasje në 8000+ kanale',
      'Transmetim Full HD',
      'EPG 14-ditore',
      'Librari e zgjeruar VOD',
      'Mbështetje për shumë pajisje'
    ]
  },
  {
    title: 'Illyrian IPTV Ultimate',
    description: 'Paketa e plotë për dashamirët e vërtetë të argëtimit',
    version: '3.0.0',
    downloadUrl: '/apps/illyrian-ultimate.apk',
    features: [
      'Qasje në 10000+ kanale',
      'Cilësi 4K e transmetimit',
      'EPG 30-ditore',
      'Librari Premium VOD',
      'Mbështetje prioritare',
      'Garanci pa ndërprerje'
    ]
  }
];

function App() {
  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      <MatrixRain />
      <Header />
      <Hero />
      <Benefits />
      <PricingPlans />
      
      <section id="apps" className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Zgjidhni Aplikacionin</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apps.map((app, index) => (
              <AppCard key={index} {...app} />
            ))}
          </div>
        </div>
      </section>

      <Tutorials />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-8">Lista e Kanaleve</h2>
          <ChannelList />
        </div>
      </div>
    </div>
  );
}

export default App;
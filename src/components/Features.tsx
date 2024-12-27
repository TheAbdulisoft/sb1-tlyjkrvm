import React from 'react';
import { Tv, Smartphone, Globe2, Clock } from 'lucide-react';

const features = [
  {
    icon: <Tv className="w-12 h-12 text-purple-600" />,
    title: 'Live TV Channels',
    description: 'Access thousands of live TV channels from around the world in HD quality.'
  },
  {
    icon: <Smartphone className="w-12 h-12 text-purple-600" />,
    title: 'Multi-device Support',
    description: 'Watch on your Android smartphone, tablet, or TV box with our optimized apps.'
  },
  {
    icon: <Globe2 className="w-12 h-12 text-purple-600" />,
    title: 'Global Content',
    description: 'Enjoy international content with multi-language support and subtitles.'
  },
  {
    icon: <Clock className="w-12 h-12 text-purple-600" />,
    title: '24/7 Availability',
    description: 'Stream your favorite content anytime with our reliable service.'
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose StreamFlex</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6">
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
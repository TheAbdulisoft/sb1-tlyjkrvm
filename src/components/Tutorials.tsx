import React from 'react';
import { VideoTutorial } from './VideoTutorial';

const tutorials = [
  {
    title: 'Si të Instaloni APK në Android',
    description: 'Udhëzues i thjeshtë për instalimin e aplikacionit Illyrian IPTV në telefonin tuaj Android',
    videoUrl: 'https://www.youtube.com/watch?v=your-video-id-1',
    thumbnailUrl: 'https://images.unsplash.com/photo-1533228100845-08145b01de14?auto=format&fit=crop&q=80&w=1000'
  },
  {
    title: 'Aktivizimi i Burimeve të Panjohura',
    description: 'Si të aktivizoni opsionin "Instalo nga Burime të Panjohura" në cilësimet e Android',
    videoUrl: 'https://www.youtube.com/watch?v=your-video-id-2',
    thumbnailUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000'
  },
  {
    title: 'Përdorimi i Aplikacionit',
    description: 'Mësoni si të përdorni të gjitha funksionet e aplikacionit Illyrian IPTV',
    videoUrl: 'https://www.youtube.com/watch?v=your-video-id-3',
    thumbnailUrl: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&q=80&w=1000'
  }
];

export function Tutorials() {
  return (
    <section id="tutorials" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-green-400 font-mono">
          Video Udhëzuese për Instalim
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutorials.map((tutorial, index) => (
            <VideoTutorial key={index} {...tutorial} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-green-300 max-w-2xl mx-auto font-mono">
            Nëse keni vështirësi me instalimin, mos hezitoni të na kontaktoni në numrin tonë të mbështetjes: +381 62 82 31 822
          </p>
        </div>
      </div>
    </section>
  );
}
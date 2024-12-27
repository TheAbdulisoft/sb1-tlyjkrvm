import React from 'react';
import { PlayCircle } from 'lucide-react';

interface VideoTutorialProps {
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
}

export function VideoTutorial({ title, description, videoUrl, thumbnailUrl }: VideoTutorialProps) {
  return (
    <div className="bg-black/80 border border-green-500/30 rounded-lg overflow-hidden hover:border-green-500/50 transition-all duration-300">
      <div className="relative group">
        <img 
          src={thumbnailUrl} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a 
            href={videoUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-green-400 hover:text-green-300"
          >
            <PlayCircle className="w-16 h-16" />
          </a>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-green-400 mb-2 font-mono">{title}</h3>
        <p className="text-green-300 font-mono">{description}</p>
      </div>
    </div>
  );
}
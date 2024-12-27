import React from 'react';
import { Download, CheckCircle } from 'lucide-react';

interface AppCardProps {
  title: string;
  description: string;
  version: string;
  downloadUrl: string;
  features: string[];
}

export function AppCard({ title, description, version, downloadUrl, features }: AppCardProps) {
  return (
    <div className="glass-card rounded-xl p-8 transform hover:scale-105 transition-all duration-300">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-green-400 font-mono mb-3">{title}</h3>
        <span className="inline-block px-3 py-1 rounded-full text-sm bg-green-500/20 text-green-400 font-mono">
          Versioni {version}
        </span>
      </div>
      
      <p className="text-green-300 mb-6 font-mono leading-relaxed">{description}</p>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start space-x-3">
            <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
            <span className="text-green-300 font-mono">{feature}</span>
          </li>
        ))}
      </ul>
      
      <a
        href={downloadUrl}
        className="modern-button w-full flex items-center justify-center space-x-2 text-white font-mono"
        download
      >
        <Download className="w-5 h-5" />
        <span>Shkarko APK</span>
      </a>
    </div>
  );
}
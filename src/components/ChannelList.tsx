import React, { useState } from 'react';
import { Tv, X, Search } from 'lucide-react';

interface Channel {
  name: string;
  category: string;
}

const channels: Channel[] = [
  // Shqip
  { name: "Top Channel HD", category: "Shqip" },
  { name: "Klan HD", category: "Shqip" },
  { name: "Vizion Plus HD", category: "Shqip" },
  { name: "RTV21 HD", category: "Shqip" },
  { name: "KTV HD", category: "Shqip" },
  { name: "T7 HD", category: "Shqip" },
  { name: "Alsat M HD", category: "Shqip" },
  
  // Sport
  { name: "SuperSport 1 HD", category: "Sport" },
  { name: "SuperSport 2 HD", category: "Sport" },
  { name: "SuperSport 3 HD", category: "Sport" },
  { name: "SuperSport 4 HD", category: "Sport" },
  { name: "SuperSport 5 HD", category: "Sport" },
  { name: "Tring Sport 1 HD", category: "Sport" },
  { name: "Tring Sport 2 HD", category: "Sport" },
  
  // Film
  { name: "Film Nje HD", category: "Film" },
  { name: "Film Dy HD", category: "Film" },
  { name: "Film Aksion HD", category: "Film" },
  { name: "Film Thriller HD", category: "Film" },
  { name: "Film Drama HD", category: "Film" },
  { name: "Film Komedi HD", category: "Film" },
  
  // Femije
  { name: "Bang Bang", category: "Femije" },
  { name: "Cufo", category: "Femije" },
  { name: "Junior TV", category: "Femije" },
  { name: "Baby TV", category: "Femije" },
  { name: "Tring Kids", category: "Femije" }
];

export function ChannelList() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', ...new Set(channels.map(channel => channel.category))];

  const filteredChannels = channels.filter(channel => {
    const matchesSearch = channel.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || channel.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-8 py-3 bg-green-500/20 border border-green-500 text-green-400 rounded hover:bg-green-500/30 transition-all duration-300 flex items-center space-x-2 font-mono group"
      >
        <Tv className="w-5 h-5" />
        <span>Shiko Listën e Kanaleve</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <div className="bg-black/90 border border-green-500/30 rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-green-400 font-mono">Lista e Kanaleve</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-green-400 hover:text-green-300"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Kërko kanale..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-black/50 border border-green-500/30 rounded px-10 py-2 text-green-400 placeholder-green-600 focus:outline-none focus:border-green-500/50"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-black/50 border border-green-500/30 rounded px-4 py-2 text-green-400 focus:outline-none focus:border-green-500/50"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            <div className="overflow-y-auto flex-1 pr-4 custom-scrollbar">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {filteredChannels.map((channel, index) => (
                  <div
                    key={index}
                    className="bg-black/50 border border-green-500/30 rounded p-3 hover:border-green-500/50 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-3">
                      <Tv className="w-5 h-5 text-green-500" />
                      <div>
                        <p className="text-green-400 font-mono">{channel.name}</p>
                        <p className="text-green-600 text-sm font-mono">{channel.category}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
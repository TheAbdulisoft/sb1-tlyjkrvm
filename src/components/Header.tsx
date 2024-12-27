import React, { useState, useEffect } from 'react';
import { Tv2, Phone, Menu, X } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const phoneNumber = "38162823822";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=Përshëndetje! Dua të marr më shumë informacion për shërbimet tuaja.`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/95 backdrop-blur-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-2">
            <Tv2 className="w-8 h-8 text-green-400" />
            <span className="text-2xl font-bold font-mono text-green-400">Illyrian IPTV</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-green-400 hover:text-green-300 transition-colors font-mono">Ballina</a>
            <a href="#apps" className="text-green-400 hover:text-green-300 transition-colors font-mono">APKs</a>
            <a href="#tutorials" className="text-green-400 hover:text-green-300 transition-colors font-mono">Tutoriale</a>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="modern-button flex items-center space-x-2 text-white"
            >
              <Phone className="w-5 h-5" />
              <span className="font-mono">+381 62 82 31 822</span>
            </a>
          </nav>

          <button 
            className="md:hidden text-green-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-lg py-4">
            <nav className="flex flex-col space-y-4 px-4">
              <a href="#home" className="text-green-400 hover:text-green-300 transition-colors font-mono">Ballina</a>
              <a href="#apps" className="text-green-400 hover:text-green-300 transition-colors font-mono">APKs</a>
              <a href="#tutorials" className="text-green-400 hover:text-green-300 transition-colors font-mono">Tutoriale</a>
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="modern-button flex items-center justify-center space-x-2 text-white"
              >
                <Phone className="w-5 h-5" />
                <span className="font-mono">+381 62 82 31 822</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
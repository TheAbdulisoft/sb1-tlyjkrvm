import React from 'react';
import { Tv2 } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-6 md:mb-0">
            <Tv2 size={24} />
            <span className="text-xl font-bold">StreamFlex IPTV</span>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-400">© 2024 StreamFlex IPTV. All rights reserved.</p>
            <div className="mt-2">
              <a href="#" className="text-gray-400 hover:text-white mx-2">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white mx-2">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
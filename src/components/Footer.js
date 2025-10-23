import React from 'react';
import { Info } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-sinoptik-border mt-8">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-sinoptik-yellow to-sinoptik-orange rounded-full flex items-center justify-center">
              <span className="text-white text-sm">🌡️</span>
            </div>
            <div>
              <div className="font-bold text-sinoptik-blue">Погодний інформер</div>
              <div className="text-xs text-sinoptik-light-text">Бажаєте, щоб на вашому сайті показувалася погода?</div>
            </div>
          </div>
          
          <button className="btn-primary text-sm">
            Налаштувати інформер
          </button>
        </div>
        
        <div className="border-t border-sinoptik-border pt-4">
          <div className="text-xs text-sinoptik-light-text space-y-1">
            <div>Усі права належать © 2010-2025 sinoptik.ua. Партнер проекту: FORECA</div>
            <div className="flex space-x-4">
              <a href="#" className="city-link">Угода користувача</a>
              <a href="#" className="city-link">Угода про конфіденційність</a>
              <a href="#" className="city-link">Написати нам</a>
              <a href="#" className="city-link">Реклама</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
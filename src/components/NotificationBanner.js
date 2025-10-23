import React from 'react';
import { X, AlertCircle } from 'lucide-react';

const NotificationBanner = ({ onClose }) => {
  return (
    <div className="fixed bottom-4 left-4 right-4 bg-sinoptik-yellow border border-sinoptik-orange rounded-lg p-4 shadow-lg z-40">
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-3">
          <AlertCircle className="w-5 h-5 text-sinoptik-orange mt-0.5 flex-shrink-0" />
          <div>
            <div className="font-semibold text-sm mb-1">
              Дозволить sinoptik.ua доступ до геолокації?
            </div>
            <div className="text-xs text-sinoptik-text">
              Ми будемо показувати прогноз погоди саме для вашої місцевості, щоб ви завжди знали, де ви знаходитесь.
            </div>
          </div>
        </div>
        
        <button onClick={onClose} className="text-sinoptik-text hover:text-sinoptik-dark-blue">
          <X className="w-4 h-4" />
        </button>
      </div>
      
      <div className="flex space-x-2 mt-3">
        <button className="btn-primary text-sm px-4 py-1">Дозволити</button>
        <button className="btn-secondary text-sm px-4 py-1" onClick={onClose}>Не зараз</button>
      </div>
    </div>
  );
};

export default NotificationBanner;
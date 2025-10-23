import React from 'react';
import { MapPin, Calendar, Clock } from 'lucide-react';

const WeatherMain = () => {
  const weekDays = [
    { day: 'Четвер', date: '23', month: 'жовтня', temp: '+10°+12°', icon: '🌧️' },
    { day: "П'ятниця", date: '24', month: 'жовтня', temp: '+10°+11°', icon: '🌧️' },
    { day: 'Субота', date: '25', month: 'жовтня', temp: '+9°+11°', icon: '🌧️' },
    { day: 'Неділя', date: '26', month: 'жовтня', temp: '+6°+10°', icon: '🌤️' },
    { day: 'Понеділок', date: '27', month: 'жовтня', temp: '+5°+10°', icon: '🌤️' },
    { day: 'Вівторок', date: '28', month: 'жовтня', temp: '+5°+8°', icon: '🌧️' },
    { day: 'Середа', date: '29', month: 'жовтня', temp: '+4°+7°', icon: '🌧️' }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-sinoptik-border mb-6">
      <div className="p-4">
        <div className="flex items-center space-x-2 mb-4">
          <MapPin className="w-4 h-4 text-sinoptik-blue" />
          <h1 className="text-xl font-bold text-sinoptik-text">Погода у Стокгольмі</h1>
          <span className="text-sm text-sinoptik-light-text">Стокгольм Швеція</span>
        </div>
        
        <div className="grid grid-cols-7 gap-1 mb-4">
          {weekDays.map((day, index) => (
            <div key={index} className={`forecast-day ${index === 0 ? 'bg-sinoptik-light-blue' : ''}`}>
              <div className="text-xs text-sinoptik-light-text mb-1">{day.day}</div>
              <div className="text-2xl font-bold mb-1">{day.date}</div>
              <div className="text-xs text-sinoptik-light-text mb-2">{day.month}</div>
              <div className="text-2xl mb-2">{day.icon}</div>
              <div className="text-xs font-semibold">{day.temp}</div>
            </div>
          ))}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="text-sm text-sinoptik-light-text">
            Стокгольм: 18:00
          </div>
          <div className="flex space-x-8 text-xs text-sinoptik-light-text">
            <span>НІЧ</span>
            <span>ранок</span>
            <span>день</span>
            <span>вечір</span>
          </div>
        </div>
        
        <div className="mt-4 flex items-center space-x-8">
          <div className="current-weather p-4 rounded-lg">
            <div className="text-4xl font-bold text-sinoptik-text mb-2">+11°C</div>
            <div className="text-sm text-sinoptik-light-text">
              <div>Сьог: 07:45</div>
              <div>Заход: 17:30</div>
            </div>
          </div>
          
          <div className="flex-1">
            <div className="grid grid-cols-4 gap-4 text-xs">
              <div>
                <div className="text-sinoptik-light-text">Температура</div>
                <div className="font-semibold">Відчувається</div>
              </div>
              <div>
                <div className="text-sinoptik-light-text">Тиск, мм</div>
                <div className="font-semibold">Вологість</div>
              </div>
              <div>
                <div className="text-sinoptik-light-text">Вітер, м/с</div>
                <div className="font-semibold">Видимість</div>
              </div>
              <div>
                <div className="text-sinoptik-light-text">УФ-індекс</div>
                <div className="font-semibold">Опади</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-4 flex items-center space-x-2">
          <Calendar className="w-4 h-4 text-sinoptik-light-text" />
          <span className="text-sm text-sinoptik-light-text">Подільська погода</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherMain;
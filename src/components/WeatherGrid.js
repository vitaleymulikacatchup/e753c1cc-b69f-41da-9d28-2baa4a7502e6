import React from 'react';
import { Star } from 'lucide-react';

const WeatherGrid = () => {
  const cities = [
    { name: 'Погода Київ', region: 'Столична область', temp: '+12°', night: '+7°', day: '+14°', icon: '🌧️' },
    { name: 'Погода Харків', region: 'Ясно', temp: '+8°', night: '0°', day: '+14°', icon: '☀️' },
    { name: 'Погода Дніпро', region: 'Ясно', temp: '+13°', night: '+5°', day: '+16°', icon: '☀️' },
    { name: 'Погода Одеса', region: 'Ясно', temp: '+14°', night: '+11°', day: '+17°', icon: '☀️' },
    { name: 'Погода Донецьк', region: 'Ясно', temp: '+10°', night: '+2°', day: '+16°', icon: '☀️' },
    { name: 'Погода Запоріжжя', region: 'Хмарність', temp: '+13°', night: '+5°', day: '+17°', icon: '☁️' },
    { name: 'Погода Львів', region: 'Невелика хмарність', temp: '+17°', night: '+6°', day: '+20°', icon: '⛅' },
    { name: 'Погода Кривий Ріг', region: 'Ясно', temp: '+13°', night: '+3°', day: '+17°', icon: '☀️' },
    { name: 'Погода Миколаїв', region: 'Ясно', temp: '+14°', night: '+5°', day: '+18°', icon: '☀️' },
    { name: 'Погода Маріуполь', region: 'Хмарність', temp: '+11°', night: '+5°', day: '+17°', icon: '☁️' },
    { name: 'Погода Луганськ', region: 'Ясно', temp: '+8°', night: '-1°', day: '+14°', icon: '☀️' },
    { name: 'Погода Макіївка', region: 'Ясно', temp: '+10°', night: '+2°', day: '+16°', icon: '☀️' },
    { name: 'Погода Севастополь', region: 'Ясно', temp: '+15°', night: '+8°', day: '+20°', icon: '☀️' },
    { name: 'Погода Вінниця', region: 'Хмарно з прояснениями', temp: '+14°', night: '+6°', day: '+18°', icon: '⛅' },
    { name: 'Погода Сімферополь', region: 'Ясно', temp: '+14°', night: '+8°', day: '+22°', icon: '☀️' },
    { name: 'Погода Херсон', region: 'Ясно', temp: '+15°', night: '+5°', day: '+19°', icon: '☀️' },
    { name: 'Погода Полтава', region: 'Ясно', temp: '+11°', night: '+4°', day: '+14°', icon: '☀️' },
    { name: 'Погода Чернігів', region: 'Хмарно з прояснениями', temp: '+11°', night: '+6°', day: '+15°', icon: '⛅' },
    { name: 'Погода Черкаси', region: 'Ясно', temp: '+12°', night: '+7°', day: '+14°', icon: '☀️' },
    { name: 'Погода Суми', region: 'Мінлива хмарність', temp: '+8°', night: '+1°', day: '+13°', icon: '⛅' },
    { name: 'Погода Горлівка', region: 'Ясно', temp: '+9°', night: '+2°', day: '+15°', icon: '☀️' },
    { name: 'Погода Житомир', region: 'Ясно', temp: '+13°', night: '+6°', day: '+15°', icon: '☀️' },
    { name: 'Погода Кам\'янське', region: 'Ясно', temp: '+12°', night: '+5°', day: '+16°', icon: '☀️' },
    { name: 'Погода Хмельницький', region: 'Ясно', temp: '+13°', night: '+6°', day: '+16°', icon: '☀️' },
    { name: 'Погода Кропивницький', region: 'Ясно', temp: '+13°', night: '+5°', day: '+15°', icon: '☀️' },
    { name: 'Погода Рівне', region: 'Суцільна хмарність', temp: '+14°', night: '+4°', day: '+17°', icon: '☁️' },
    { name: 'Погода Чернівці', region: 'Ясно', temp: '+15°', night: '+4°', day: '+18°', icon: '☀️' },
    { name: 'Погода Кременчук', region: 'Ясно', temp: '+12°', night: '+6°', day: '+16°', icon: '☀️' },
    { name: 'Погода Тернопіль', region: 'Суцільна хмарність', temp: '+14°', night: '+7°', day: '+17°', icon: '☁️' },
    { name: 'Погода Івано-Франківськ', region: 'Мінлива хмарність', temp: '+17°', night: '+3°', day: '+22°', icon: '⛅' },
    { name: 'Погода Луцьк', region: 'Невелика хмарність', temp: '+15°', night: '+4°', day: '+16°', icon: '⛅' },
    { name: 'Погода Біла Церква', region: 'Суцільна хмарність', temp: '+14°', night: '+7°', day: '+15°', icon: '☁️' },
    { name: 'Погода Краматорськ', region: 'Ясно', temp: '+10°', night: '+3°', day: '+16°', icon: '☀️' },
    { name: 'Погода Мелітополь', region: 'Хмарно з прояснениями', temp: '+12°', night: '+5°', day: '+17°', icon: '⛅' },
    { name: 'Погода Керч', region: 'Ясно', temp: '+14°', night: '+10°', day: '+19°', icon: '☀️' },
    { name: 'Погода Нікополь', region: 'Суцільна хмарність', temp: '+15°', night: '+3°', day: '+17°', icon: '☁️' }
  ];

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-sinoptik-text mb-4">Погода в інших населених пунктах України</h2>
      
      <div className="weather-grid">
        {cities.map((city, index) => (
          <div key={index} className="weather-card">
            <div className="flex items-center justify-between mb-2">
              <h3 className="city-link font-semibold">{city.name}</h3>
              <div className="text-2xl">{city.icon}</div>
            </div>
            
            <div className="text-sm text-sinoptik-light-text mb-2">{city.region}</div>
            
            <div className="flex items-center justify-between">
              <div className="temperature text-sinoptik-text">{city.temp}</div>
              <div className="text-xs text-sinoptik-light-text">
                <div>Ніч: {city.night}</div>
                <div>День: {city.day}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherGrid;
import React from 'react';
import { X, Info, Lock } from 'lucide-react';

const Modal = ({ onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="text-center mb-6">
          <div className="text-2xl font-bold text-sinoptik-blue mb-4">
            s<span className="text-red-500">|</span>noptik
          </div>
          
          <h2 className="text-lg font-bold mb-4">
            "Sinoptik" просить вас надати згоду на використання ваших персональних даних, щоб надавати вам персоналізовані послуги.
          </h2>
        </div>
        
        <div className="space-y-4 mb-6">
          <div className="flex items-start space-x-3">
            <Info className="w-5 h-5 text-sinoptik-blue mt-0.5 flex-shrink-0" />
            <div className="text-sm">
              <div className="font-semibold mb-1">Персоналізовані оголошення й контент, вимірювання оголошень й контенту, дослідження аудиторії та розвиток послуг</div>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <Lock className="w-5 h-5 text-sinoptik-blue mt-0.5 flex-shrink-0" />
            <div className="text-sm">
              <div className="font-semibold mb-1">Зберігати та/або отримувати доступ до інформації на пристрої</div>
            </div>
          </div>
          
          <div className="mt-4">
            <button className="text-sm text-sinoptik-blue underline">Докладніше</button>
          </div>
          
          <div className="text-xs text-sinoptik-light-text leading-relaxed">
            Постачальники зі специфікацією TCF (160) і рекламні партнери (72) можуть обробляти ваші персональні дані, а також отримувати доступ до інформації з пристрою, зокрема файлів cookie, унікальних ідентифікаторів пристрою і збереженого вмісту. Крім того, цей сайт може використовувати всі згадані ваші дані.
            <br /><br />
            Деякі постачальники можуть обробляти ваші персональні дані на основі законного інтересу. Ви можете заборонити це, змінивши параметри за посиланням нижче або скориставшись цією сторінкою або в меню сайту в розділі "Налаштування конфіденційності" у файлах cookie.
          </div>
        </div>
        
        <div className="flex space-x-4">
          <button className="btn-primary flex-1">Налаштування</button>
          <button className="btn-primary flex-1" onClick={onClose}>Погоджуюся</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
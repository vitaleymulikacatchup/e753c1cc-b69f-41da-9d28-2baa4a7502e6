import React, { useState } from 'react';
import Header from './components/Header';
import WeatherMain from './components/WeatherMain';
import WeatherGrid from './components/WeatherGrid';
import Footer from './components/Footer';
import Modal from './components/Modal';
import NotificationBanner from './components/NotificationBanner';

function App() {
  const [showModal, setShowModal] = useState(true);
  const [showBanner, setShowBanner] = useState(true);

  return (
    <div className="min-h-screen bg-sinoptik-gray">
      <Header />
      <main className="container mx-auto px-4 py-6">
        <WeatherMain />
        <WeatherGrid />
      </main>
      <Footer />
      
      {showModal && (
        <Modal onClose={() => setShowModal(false)} />
      )}
      
      {showBanner && (
        <NotificationBanner onClose={() => setShowBanner(false)} />
      )}
    </div>
  );
}

export default App;
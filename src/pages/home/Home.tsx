import React from 'react';
import Header from '../../shared/components/header/Header';
import Footer from '../../shared/components/footer/Footer';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center p-4">
        <h1 className="text-center text-2xl md:text-4xl">Bem-vindo ao LP_Creator</h1>
      </main>
      <Footer title="Entre em contato" buttonText="Contato" />
    </div>
  );
};

export default Home;
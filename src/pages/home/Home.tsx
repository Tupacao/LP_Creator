import React from 'react';
import Header from '../../shared/components/header/Header';
import Footer from '../../shared/components/footer/Footer';

const Home: React.FC = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-grow flex items-center justify-center p-4'>
        <h1 className='text-center text-2xl md:text-4xl'>
          Bem-vindo ao LP_Creator
        </h1>
      </main>
      <Footer
        title='Footer'
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        buttonText='Botão'
      />
    </div>
  );
};

export default Home;

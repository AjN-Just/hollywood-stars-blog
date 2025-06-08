import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gris-fonce py-16 text-center">
      <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-rose-neon mb-4 animate__animated animate__fadeIn">
        Bienvenue chez Hollywood Stars
      </h2>
      <p className="text-blanc-casse font-roboto max-w-lg mx-auto mb-6 animate__animated animate__fadeIn animate__delay-1s">
        Connectez les passionnés d'art avec les artistes qui façonnent notre monde !
      </p>
      <button className="bg-transparent border-2 border-bleu-neon text-bleu-neon px-6 py-2 rounded hover:bg-rose-neon hover:border-rose-neon hover:text-blanc-casse transition duration-300 animate__animated animate__fadeIn animate__delay-2s">
        Découvrir les artistes
      </button>
    </section>
  );
};

export default HeroSection;
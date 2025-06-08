import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-bleu-nuit text-blanc-casse p-4 text-center mt-4">
      <p className="font-roboto text-sm">
        © 2025 Hollywood Stars |{' '}
        <a href="https://facebook.com/HollywoodStarsFR" target="_blank" rel="noopener noreferrer" className="text-bleu-neon hover:text-dore">
          Suivez-nous
        </a>
      </p>
    </footer>
  );
};

export default Footer;
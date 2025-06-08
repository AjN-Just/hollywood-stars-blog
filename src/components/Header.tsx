import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-bleu-nuit text-blanc-casse p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-montserrat font-bold flex items-center">
          Hollywood Stars <span className="ml-2 text-dore">★</span>
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="text-bleu-neon hover:text-dore">Accueil</Link></li>
            <li><Link to="/actualites" className="text-bleu-neon hover:text-dore">Actualités</Link></li>
            <li><Link to="/a-propos" className="text-bleu-neon hover:text-dore">À propos</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
import React from 'react';

const ArtistHighlight: React.FC = () => {
  return (
    <section className="bg-gris-fonce p-4 mt-4">
      <h2 className="text-2xl font-montserrat font-bold text-rose-neon mb-2">Artiste en vedette</h2>
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-32 h-32 bg-bleu-nuit rounded-full mr-4"></div> {/* Placeholder pour une image */}
        <div>
          <h3 className="font-montserrat font-bold text-blanc-casse">Addison Rae</h3>
          <p className="text-blanc-casse font-roboto">Découvrez son album "Addison" : <a href="https://open.spotify.com/album/2ffVa2UhHUDwMHnr685zJ4" target="_blank" rel="noopener noreferrer" className="text-bleu-neon hover:text-dore">Spotify</a></p>
        </div>
      </div>
    </section>
  );
};

export default ArtistHighlight;
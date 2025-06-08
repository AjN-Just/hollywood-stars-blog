import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import BlogSection from './components/BlogSection';
import ArtistHighlight from './components/ArtistHighlight';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-bleu-nuit text-blanc-casse">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <ArtistHighlight />
              <BlogSection />
            </>
          } />
          <Route path="/actualites" element={<BlogSection />} />
          <Route path="/a-propos" element={
            <section className="p-4">
              <h2 className="text-2xl font-montserrat font-bold text-rose-neon">À propos</h2>
              <p className="text-blanc-casse font-roboto">Notre mission est de connecter les passionnés d'art avec les artistes...</p>
            </section>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
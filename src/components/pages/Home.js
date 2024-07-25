import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import { button } from './Button';

function Home() {
  return (
    <>
      <button>Sample</button>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;

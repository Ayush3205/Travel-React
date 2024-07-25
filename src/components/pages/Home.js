import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import { Button } from './Button';

function Home() {
  return (
    <>
      <Button>Sample</Button>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;

import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import FooterCTA from './components/FooterCTA';

const App = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Testimonials />
      <FooterCTA />
    </div>
  );
};

export default App;

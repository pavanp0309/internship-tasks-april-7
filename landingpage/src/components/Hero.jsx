import React from 'react';
import '../styles/style.css';

const Hero = () => {
  return (
    <section className="text-center fade-in" style={{ backgroundColor: '#f0f4f8' }}>
      <h1 style={{ fontSize: '36px', fontWeight: 'bold' }}>Scale Your Business with SaaSly</h1>
      <p style={{ margin: '20px 0', color: '#555' }}>Streamline your workflow, increase productivity, and grow faster.</p>
      <button className="btn">Get Started</button>
    </section>
  );
};

export default Hero;

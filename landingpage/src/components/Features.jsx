import React from 'react';
import '../styles/style.css';

const Features = () => {
  return (
    <section className="fade-in">
      <div className="text-center">
        <h2 style={{ fontSize: '28px', fontWeight: 'bold' }}>Features That Make You Fly</h2>
        <p style={{ color: '#777' }}>Designed to scale with your team</p>
      </div>
      <div className="features-grid">
        <div className="feature-card">
          <h3>⚡ Fast Performance</h3>
          <p>Experience lightning-fast load times and optimized workflows.</p>
        </div>
        <div className="feature-card">
          <h3>🔒 Secure Data</h3>
          <p>Top-tier security measures to protect your business data.</p>
        </div>
        <div className="feature-card">
          <h3>📈 Analytics Dashboard</h3>
          <p>Visualize your growth with smart analytics and reporting.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;

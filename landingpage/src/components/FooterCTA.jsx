import React from 'react';
import '../styles/style.css';

const FooterCTA = () => {
  return (
    <footer className="text-center fade-in" style={{ backgroundColor: '#007bff', color: 'white', padding: '40px 20px' }}>
      <h2>Stay Updated</h2>
      <input type="email" placeholder="Enter your email" style={{ padding: '10px', borderRadius: '4px', marginRight: '10px' }} />
      <button className="btn" style={{ backgroundColor: 'black' }}>Subscribe</button>
      <div style={{ marginTop: '20px', fontSize: '20px' }}>
        <span>📘</span> <span>🐦</span> <span>📸</span>
      </div>
    </footer>
  );
};

export default FooterCTA;

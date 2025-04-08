import React from 'react';
import './FeatureSection.css';

const FeatureSection = () => {
  return (
    <div className="feature-section">
      {/* Hero Section */}
      <div className="hero">
        <h1>Welcome to Our Platform</h1>
        <p>Discover amazing features that will transform your business</p>
        <button className="cta-button">Get Started</button>
      </div>

      {/* Features Grid */}
      <div className="features-grid">
        <div className="feature-card">
          <div className="icon">🚀</div>
          <h3>Fast Performance</h3>
          <p>Lightning fast loading times and smooth operations</p>
        </div>

        <div className="feature-card">
          <div className="icon">🛡️</div>
          <h3>Secure</h3>
          <p>Your data is protected with advanced security</p>
        </div>

        <div className="feature-card">
          <div className="icon">💡</div>
          <h3>Smart Solutions</h3>
          <p>Intelligent features that adapt to your needs</p>
        </div>

        <div className="feature-card">
          <div className="icon">📊</div>
          <h3>Analytics</h3>
          <p>Detailed insights and reports for your business</p>
        </div>

        <div className="feature-card">
          <div className="icon">🤝</div>
          <h3>Support</h3>
          <p>24/7 customer support for your peace of mind</p>
        </div>

        <div className="feature-card">
          <div className="icon">🔄</div>
          <h3>Integration</h3>
          <p>Easy integration with your existing tools</p>
        </div>
      </div>

      {/* Testimonials */}
      <div className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p>"Amazing platform! It has transformed our business operations."</p>
            <div className="author">
              <img src="https://via.placeholder.com/50" alt="Sarah" />
              <span>Sarah Johnson</span>
            </div>
          </div>

          <div className="testimonial-card">
            <p>"The best decision we made for our company. Highly recommended!"</p>
            <div className="author">
              <img src="https://via.placeholder.com/50" alt="Mike" />
              <span>Mike Chen</span>
            </div>
          </div>

          <div className="testimonial-card">
            <p>"Incredible support team and powerful features. Love it!"</p>
            <div className="author">
              <img src="https://via.placeholder.com/50" alt="Emily" />
              <span>Emily Davis</span>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <h2>Ready to Get Started?</h2>
        <p>Join thousands of satisfied customers today</p>
        <div className="signup-form">
          <input type="email" placeholder="Enter your email" />
          <button>Sign Up Now</button>
        </div>
        <div className="social-links">
          <a href="#">📱</a>
          <a href="#">💼</a>
          <a href="#">📧</a>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection; 
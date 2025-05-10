import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FeaturesLayout.css';

const FeatureCard = ({ icon, title, description }) => (
  <div className="col-md-4 mb-4">
    <div className="feature-card">
      <div className="feature-icon">{icon}</div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </div>
  </div>
);

const TestimonialCard = ({ quote, name, avatar }) => (
  <div className="col-md-4 mb-4">
    <div className="testimonial-card">
      <p className="testimonial-quote">"{quote}"</p>
      <div className="testimonial-author">
        <img src={avatar} alt={name} className="testimonial-avatar" />
        <span className="testimonial-name">{name}</span>
      </div>
    </div>
  </div>
);

const FeaturesLayout = () => {
  const features = [
    {
      icon: "🚀",
      title: "Lightning Fast",
      description: "Experience blazing fast performance with our optimized platform."
    },
    {
      icon: "🛡️",
      title: "Secure & Reliable",
      description: "Your data is protected with enterprise-grade security."
    },
    {
      icon: "💡",
      title: "Smart Solutions",
      description: "Intelligent features that adapt to your needs."
    },
    {
      icon: "📊",
      title: "Analytics",
      description: "Detailed insights and reports at your fingertips."
    },
    {
      icon: "🤝",
      title: "24/7 Support",
      description: "Round-the-clock customer support for your peace of mind."
    },
    {
      icon: "🔄",
      title: "Easy Integration",
      description: "Seamlessly integrate with your existing tools and workflows."
    }
  ];

  const testimonials = [
    {
      quote: "This platform has transformed how we handle our business operations. Simply amazing!",
      name: "Sundar Pichai",
      avatar: "./src/assets/ceo1.jpg"
    },
    {
      quote: "The best decision we made for our company. The features are exactly what we needed.",
      name: "Mukesh Ambani",
      avatar: "./src/assets/ceo2.jpg"
    },
    {
      quote: "Incredible support from team and it's powerful features. And He Couldn't ask for more!",
      name: "Steve Jobs",
      avatar: "./src/assets/ceo3.jpg"
    }
  ];

  return (
    <div className="features-layout">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="hero-title">Transform Your Business with Our SaaS Solution</h1>
              <p className="hero-subtitle">Powerful features to streamline your workflow and boost productivity</p>
              <button className="btn btn-warning btn-lg">Get Started Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title text-center mb-5">Powerful Features</h2>
          <div className="row">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title text-center mb-5">What Our Customers Say</h2>
          <div className="row">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="cta-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="section-title">Ready to Get Started?</h2>
              <p className="mb-4">Join thousands of satisfied customers today</p>
              <div className="cta-form">
                <input type="email" className="form-control mb-3" placeholder="Enter your email" />
                <button className="btn btn-warning">Sign Up Now</button>
              </div>
              <div className="social-icons mt-4">
                <a href="#" className="social-icon">📱</a>
                <a href="#" className="social-icon">💼</a>
                <a href="#" className="social-icon">📧</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesLayout;
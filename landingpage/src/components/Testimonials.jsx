import React from 'react';
import avatar1 from '../assets/avatar1.jpg';
import avatar2 from '../assets/avatar2.jpg';
import avatar3 from '../assets/avatar3.jpg';
import '../styles/style.css';

const Testimonials = () => {
  return (
    <section className="fade-in">
      <div className="text-center">
        <h2 style={{ fontSize: '28px', fontWeight: 'bold' }}>What Our Users Say</h2>
      </div>
      <div className="testimonials-grid">
        <div className="testimonial-card text-center">
          <img src={avatar1} alt="User 1" className="avatar" />
          <p>"SaaSly transformed the way we work—effortless and efficient!"</p>
          <h4>Aarav Mehra</h4>
        </div>
        <div className="testimonial-card text-center">
          <img src={avatar2} alt="User 2" className="avatar" />
          <p>"The features are intuitive and support is top-notch."</p>
          <h4>Rahul Singh</h4>
        </div>
        <div className="testimonial-card text-center">
          <img src={avatar3} alt="User 3" className="avatar" />
          <p>"Highly recommended for startups and growing teams!"</p>
          <h4>Sneha Vermah</h4>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 mt-6">
      <div className="container text-center">
        
        {/* Brand Overview */}
        <div className="mb-4">
          <h3 className="h4 fw-bold text-white">Mock API</h3>
          <p className="small mx-auto" style={{ maxWidth: '500px' }}>
            Empowering developers and businesses with reliable tools, APIs, and seamless integrations for a connected world.
          </p>
        </div>

        {/* Navigation */}
        <div className="mb-4">
          <ul className="list-inline mb-0">
            <li className="list-inline-item mx-2">
              <Link to="/" className="text-white text-decoration-none link-hover">Home</Link>
            </li>
            <li className="list-inline-item mx-2">
              <Link to="/about" className="text-white text-decoration-none link-hover">About</Link>
            </li>
            <li className="list-inline-item mx-2">
              <Link to="/jobs" className="text-white text-decoration-none link-hover">FindJob</Link>
            </li>
            <li className="list-inline-item mx-2">
              <Link to="/contact" className="text-white text-decoration-none link-hover">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Newsletter + Social Links */}
        <div className="mb-4">
          <form className="d-flex justify-content-center gap-2 flex-wrap">
            <input
              type="email"
              className="form-control form-control-sm w-auto"
              placeholder="Your email address"
            />
            <button type="submit" className="btn btn-outline-primary btn-sm">Subscribe</button>
          </form>
          <div className="d-flex justify-content-center gap-3 mt-3 fs-5">
            <a href="#" aria-label="LinkedIn" className="text-white"><i className="bi bi-linkedin"></i></a>
            <a href="#" aria-label="YouTube" className="text-white"><i className="bi bi-youtube"></i></a>
            <a href="#" aria-label="Facebook" className="text-white"><i className="bi bi-facebook"></i></a>
            <a href="#" aria-label="X" className="text-white"><i className="bi bi-twitter-x"></i></a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-top border-secondary pt-3 small text-light-50">
          © {new Date().getFullYear()} TechFlow Inc. Built with ❤️ by developers, for developers.
        </div>

      </div>
    </footer>
  );
};

export default Footer;

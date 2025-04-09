import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#4B0082' }}>
      <div className="container">
        {/* Brand on the left */}
        <NavLink className="navbar-brand text-white" to="#">CourseApp</NavLink>

        {/* Toggle button for mobile responsiveness */}
        <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Centered nav items */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav text-center">
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="#">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="#">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="#">Courses</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

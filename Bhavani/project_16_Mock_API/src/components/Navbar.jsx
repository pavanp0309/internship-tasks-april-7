import React from "react";
import logo from "../assets/logo.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";

// ✅ Accept the prop from App.jsx
const Navbar = ({ onEmployerClick }) => {
  const navigate = useNavigate();

  // Check if user is logged in
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const handleFindJobClick = () => {
    if (!isLoggedIn) {
      localStorage.setItem('redirectAfterLogin', '/jobs');
      navigate("/login");
    } else {
      navigate("/jobs");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm py-3">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center gap-2 fw-bold fs-4" to="/">
          <img src={logo} alt="TechFlow Logo" width="40" height="40" />
          TechFlow
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-uppercase gap-4">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" end>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <button
                className="nav-link btn btn-link"
                onClick={handleFindJobClick}
              >
                FIND JOB 
              </button>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Right Side Buttons */}
          <div className="d-flex ms-3">
            <Link to="/employer-login">
              <button className="btn btn-primary" type="button" onClick={onEmployerClick}>
                Employer
              </button>
            </Link>
          </div>
          <div className="d-flex ms-3">
            {!isLoggedIn ? (
              <Link to="/login">
                <button className="btn btn-primary" type="button">
                  Login
                </button>
              </Link>
            ) : (
              <button className="btn btn-danger" type="button" onClick={handleLogout}>
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

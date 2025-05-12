import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const isEmLoggedIn = localStorage.getItem('isEmLoggedIn') === 'true';
  const employerEmail = localStorage.getItem('employerEmail');

  const handleAuthAction = () => {
    if (isLoggedIn) {
      localStorage.removeItem('isLoggedIn');
      setIsLoggedIn(false);
      navigate('/');
    } else {
      navigate('/login');
    }
  };

  const handleEmployerLogout = () => {
    localStorage.removeItem('isEmLoggedIn');
    localStorage.removeItem('employerEmail');
    localStorage.removeItem('employerPassword');
    window.location.reload(); // Refresh to update Navbar
  };

  const handleEmployerLogin = () => {
    navigate('/employerlogin');
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">Job Seeker</NavLink>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className={({ isActive }) => isActive ? "nav-link active text-warning" : "nav-link"} to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => isActive ? "nav-link active text-warning" : "nav-link"} to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => isActive ? "nav-link active text-warning" : "nav-link"} to="/joblisting">Find A Job</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => isActive ? "nav-link active text-warning" : "nav-link"} to="/contact">ContactUs</NavLink>
            </li>
          </ul>

          <ul className="navbar-nav mx-end mb-2 mb-lg-0">
            {isEmLoggedIn ? (
              <div className="d-flex align-items-center">
                <span className="me-2 fw-bold text-primary">{employerEmail}</span>
                <button className="btn btn-sm btn-outline-danger mx-2" onClick={handleEmployerLogout}>
                  Logout
                </button>
              </div>
            ) : (
              <button className="btn btn-outline-success mx-2" onClick={handleEmployerLogin}>
                Employer
              </button>
            )}

            <button className="btn btn-outline-primary" onClick={handleAuthAction}>
              {isLoggedIn ? 'Logout' : 'Login'}
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

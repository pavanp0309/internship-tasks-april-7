import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const [projectMenuOpen, setProjectMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };

  return (
    <div
      className="bg-dark text-white position-fixed d-flex flex-column justify-content-between"
      style={{ width: '250px', height: '100vh' }}
    >
      <div>
        <h4 className="text-center py-3 border-bottom">🚀 Admin Console</h4>
        <nav className="nav flex-column p-3">
          <NavLink to="/" className="nav-link text-white">🏠 Home</NavLink>

          <div>
            <div
              className="nav-link text-white d-flex justify-content-between align-items-center"
              onClick={() => setProjectMenuOpen(!projectMenuOpen)}
              style={{ cursor: 'pointer' }}
            >
              📁 Projects
              <span>{projectMenuOpen ? '▲' : '▼'}</span>
            </div>
            {projectMenuOpen && (
              <div className="ms-3">
                <NavLink to="/console/projects" className="nav-link text-white">All Projects</NavLink>
              </div>
            )}
          </div>

          <NavLink to="/billing" className="nav-link text-white">💳 Billing</NavLink>
          <NavLink to="/activity" className="nav-link text-white">📊 Activity</NavLink>
        </nav>
      </div>

      <div className="text-center p-3 border-top">
        <button onClick={handleLogout} className="btn btn-outline-light w-100">Logout</button>
      </div>
    </div>
  );
};

export default NavBar;

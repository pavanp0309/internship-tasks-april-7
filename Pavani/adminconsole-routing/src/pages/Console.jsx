// src/pages/Console.jsx
import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import './Console.css'; // Optional: Create a separate CSS file for styling the Console page

function Console() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };

  return (
    <div className="console-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <nav>
          <ul>
            <li><NavLink to="/console/projects" className="nav-link">Projects</NavLink></li>
            <li><NavLink to="/billing" className="nav-link">Billing</NavLink></li>
            <li><NavLink to="/activity" className="nav-link">Activity</NavLink></li>
          </ul>
        </nav>
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header>
          <h2>Admin Console</h2>
        </header>
        {/* Render the nested route content here */}
        <Outlet />
      </main>
    </div>
  );
}

export default Console;

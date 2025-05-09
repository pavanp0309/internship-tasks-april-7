import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { logout } from '../auth';

const Setting = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="navbar-inner">
          <span className="navbar-brand mb-0 h1">ADMIN DASHBOARD</span>
          <button className="button" type="submit" onClick={handleLogout}>LOGOUT</button>
        </div>
      </nav>
      <div className="dashboard-container">
        {/* Sidebar */}
        <div className="sidebar">
          <h5 className="mb-4">SIDEBAR</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <NavLink className="nav-link" to="/console/project">Project</NavLink>
            </li>
            <li className="nav-item mb-2">
              <NavLink className="nav-link" to="/console/activity">Activity</NavLink>
            </li>
            <li className="nav-item mb-2">
              <NavLink className="nav-link" to="/console/billing">Billing</NavLink>
            </li>
          </ul>
        </div>

        {/* Main content */}
        <div className="dashboard-main">
          <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Settings</h1>
            <p>Manage your preferences and configurations</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Setting;

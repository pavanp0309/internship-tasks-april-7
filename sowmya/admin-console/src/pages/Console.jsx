import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

const Console = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };

  return (
    <div className="d-flex">
      <div className="bg-secondary text-white p-4" style={{ width: '220px', minHeight: '100vh' }}>
        <h5>Dashboard</h5>
        <ul className="nav flex-column">
          <li className="nav-item"><NavLink to="/console/projects" className="nav-link text-white">Projects</NavLink></li>
          <li className="nav-item"><NavLink to="/console/billing" className="nav-link text-white">Billing</NavLink></li>
          <li className="nav-item"><NavLink to="/console/activity" className="nav-link text-white">Activity</NavLink></li>
        </ul>
        <button onClick={handleLogout} className="btn btn-outline-light mt-4">Logout</button>
      </div>

      <div className="p-4 w-100">
        <h3>Admin Console</h3>
        <hr />
        <Outlet />
      </div>
    </div>
  );
};

export default Console;

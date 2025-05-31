import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

function Layout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };

  return (
    <div className="d-flex">
      <aside className="bg-dark text-white p-3 vh-100" style={{ width: '220px' }}>
        <h5>Loan Admin</h5>
        <nav className="nav flex-column">
          <NavLink to="/dashboard/applications" className="nav-link text-white">Applications</NavLink>
          <NavLink to="/dashboard/settings" className="nav-link text-white">Settings</NavLink>
          <button onClick={handleLogout} className="btn btn-danger mt-3">Logout</button>
        </nav>
      </aside>
      <main className="p-4 flex-grow-1">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;

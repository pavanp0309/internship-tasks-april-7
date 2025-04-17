import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.setItem('isLoggedIn', 'false');  // Log out user
    navigate('/login');  // Redirect to login page
  };

  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Admin Workspace</span>
          <button className="btn btn-outline-danger ms-auto" onClick={handleLogout}>LOGOUT</button>
        </div>
      </nav>

      <div className="d-flex" >
        {/* Sidebar */}
        <div className="bg-light p-4 shadow" style={{ width: '250px' }}>
          <h5 className="mb-4"></h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link className="nav-link active" to="projects">
                Projects
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link className="nav-link" to="activity">
                Activity
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link className="nav-link" to="billing">
                Billing
              </Link>
            </li>
          </ul>
        </div>

        {/* Main Content Area */}
        <div className="flex-grow-1 p-4">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;

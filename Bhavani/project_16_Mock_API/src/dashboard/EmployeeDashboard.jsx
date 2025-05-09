import React from 'react';
import { useNavigate, Link, Outlet, useLocation } from 'react-router-dom';

const EmployeeDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const employee = JSON.parse(localStorage.getItem('employeeDetails'));

  const handleLogout = () => {
    localStorage.removeItem('employeeDetails');
    navigate('/employer-login');
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div className="d-flex" style={{ height: '100vh', backgroundColor: '#f4f6f8' }}>
      {/* Sidebar */}
      <div
        className="d-flex flex-column justify-content-between p-4"
        style={{
          width: '260px',
          backgroundColor: 'black',
          borderRight: '1px solid #dee2e6',
          boxShadow: '2px 0 5px rgba(0,0,0,0.05)',
        }}
      >
        {/* Profile Info */}
        <div>
          <div className="text-center mb-4 text-white text-uppercase">
            <Link to="/employee/profile">
              <img
                src="https://www.w3schools.com/w3images/avatar2.png"
                alt="Avatar"
                className="rounded-circle mb-2"
                width={80}
                height={80}
                style={{ objectFit: 'cover' }}
              />
            </Link>
            <h6 className="fw-semibold">{employee?.name}</h6>
          </div>

          {/* Navigation */}
          <ul className="list-unstyled">
            <li className="mb-3">
              <Link
                to="/employee/posted-jobs"
                className={`d-block px-3 py-2 rounded text-decoration-none ${isActive('/employee/posted-jobs') ? 'bg-primary text-white' : 'text-white'}`}
              >
                Posted Jobs
              </Link>
            </li>
            <li className="mb-3">
              <Link
                to="/employee/create-job"
                className={`d-block px-3 py-2 rounded text-decoration-none ${isActive('/employee/create-job') ? 'bg-primary text-white' : 'text-white'}`}
              >
                Create a Job
              </Link>
            </li>
            <li className="mb-3">
              <a href="#" className="d-block px-3 py-2 rounded text-white text-decoration-none">
                Settings
              </a>
            </li>
          </ul>
        </div>

        {/* Logout */}
        <div>
          <button className="btn btn-outline-danger w-100" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-grow-1 p-4 overflow-auto">
        {/* Welcome Card */}
        {location.pathname === '/employee' && (
          <div className="card shadow-sm border-0 p-4 mb-4 text-center">
            <h3 className="mb-3 fw-semibold">Welcome to <span className="text-primary">TechFlow</span></h3>
            <p className="mb-4">Start posting jobs to find the right talent.</p>
            <Link to="/employee/create-job">
              <button className="btn btn-primary px-4">Start Posting</button>
            </Link>
          </div>
        )}

        <Outlet />
      </div>
    </div>
  );
};

export default EmployeeDashboard;

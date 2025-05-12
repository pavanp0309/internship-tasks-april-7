import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const EmployerSidebar = () => {
  const navigate = useNavigate();
  const [employerEmail, setEmployerEmail] = useState(localStorage.getItem('employerEmail') || '');
  const [employerName, setEmployerName] = useState(localStorage.getItem('employerName') || '');

  useEffect(() => {
    const handleStorageChange = () => {
      setEmployerEmail(localStorage.getItem('employerEmail') || '');
      setEmployerName(localStorage.getItem('employerName') || '');
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <div className="d-flex flex-column p-3 bg-light position-sticky" style={{
      height: '100vh',
      width: '250px',
      borderRight: '1px solid #ccc',
      top: 0,
      zIndex: 1000
    }}>
      {/* Profile Card */}
      <div className="card p-3 text-center mb-4">
        <NavLink to="/employerprofile" className="nav-link">
          <img
            src="/src/assets/empropic.jpg"
            alt="Avatar"
            className="rounded-circle mx-auto mb-2"
            width="80"
            height="80"
          />
          <strong className="d-block text-truncate">
            {employerName || 'Employer'}
          </strong>
          <small className="text-muted">{employerEmail}</small>
        </NavLink>
      </div>

      {/* Navigation Buttons */}
      <button className="btn btn-outline-primary mb-2" onClick={() => navigate('/employer/postedjobs')}>
        Posted Jobs
      </button>
      <button className="btn btn-outline-primary mb-2" onClick={() => navigate('/employer/createjob')}>
        Create a Job
      </button>
      <button className="btn btn-outline-primary mb-2" onClick={() => navigate('/employer/settings')}>
        Settings
      </button>
      <button className="btn btn-outline-danger mt-auto" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default EmployerSidebar;

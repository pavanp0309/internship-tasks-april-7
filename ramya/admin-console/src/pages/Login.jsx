// Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem('isLoggedIn', 'true'); // Simulate login
    setIsLoggedIn(true);
    console.log("User is logged in:", true);
    navigate('/dashboard'); // Redirect to dashboard after login
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <form onSubmit={handleLogin} className="p-4 border rounded shadow bg-white" style={{ minWidth: '500px' }}>
        <h3 className="mb-4 text-center">Login</h3>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input type="email" className="form-control" id="username" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;

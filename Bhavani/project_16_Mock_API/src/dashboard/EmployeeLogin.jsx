import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const EmployeeLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // ✅ Redirect to /register if already logged in
  useEffect(() => {
    const storedEmployee = localStorage.getItem('employeeDetails');
    if (storedEmployee) {
      navigate('/register');
    }
  }, [navigate]);

  const handleLogin = (e) => {
    e.preventDefault();

    // ✅ Store employee details and redirect
    const employeeDetails = {
      name: 'John Doe',
      companyId: 'C12345',
      role: 'Hiring Manager',
      email: email,
    };
    localStorage.setItem('employeeDetails', JSON.stringify(employeeDetails));
    navigate('/employee');
  };

  return (
    <div className="container d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="card shadow p-4" style={{ maxWidth: '400px', width: '100%' }}>
        <h3 className="text-center mb-3">Employee Login</h3>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-envelope-fill"></i>
              </span>
              <input 
                type="email" 
                className="form-control" 
                id="email" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-lock-fill"></i>
              </span>
              <input 
                type="password" 
                className="form-control" 
                id="password" 
                required 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary">Login</button>
          </div>
        </form>
        <div className="text-center mt-3">
          <small>New user? <a href="/register">Register here</a></small>
        </div>
      </div>
    </div>
  );
};

export default EmployeeLogin;

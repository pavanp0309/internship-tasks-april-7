import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn =localStorage.getItem('isLoggedIn') === 'true';
    if (isLoggedIn) navigate('/');
  }, [navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (email && password) {
      localStorage.setItem('isLoggedIn', 'true');
      setIsLoggedIn(true); // Set logged-in state to true
      navigate('/'); // Navigate to Home page
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Login</h2>
      <form onSubmit={handleLogin} className="mx-auto" style={{ maxWidth: '400px' }}>
        <div className="mb-3">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Password:</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
};

export default Login;

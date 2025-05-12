import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const EmployerLogin = ({ setIsEmLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isEmLoggedIn') === 'true';
    if (isLoggedIn) {
      navigate('/employer');
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Please fill in all fields');
      return;
    }

    try {
      const res = await fetch('http://localhost:3000/employers');
      const employers = await res.json();

      const matchedEmployer = employers.find(
        (emp) => emp.email === email && emp.password === password
      );

      if (matchedEmployer) {
        // Store the employer's id, email, and name in localStorage
        localStorage.setItem('isEmLoggedIn', 'true');
        localStorage.setItem('employer', JSON.stringify({
          id: matchedEmployer.id,
          email: matchedEmployer.email,
          name: matchedEmployer.name, // Store the name here!
        }));
        setIsEmLoggedIn(true);
        navigate('/employer');
      } else {
        alert("No account found with these credentials. Please register first.");
      }
    } catch (err) {
      console.error('Login error:', err);
      alert('Server error. Please try again.');
    }
    setEmail('');
    setPassword('');
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Employer Login</h2>
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
      <p className="text-center my-2">
        Create your account? <Link to="/employerregister">Register</Link>
      </p>
    </div>
  );
};

export default EmployerLogin;

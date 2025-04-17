import React from 'react'
import { Navigate } from 'react-router-dom';
import Dashboard from './Dashboard';

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    if (username === "admin" && password === "admin123") {
      alert("Login successful!");
    } else {
      alert("Invalid username or password.");
    }
  };

  const navigateToDashboard = () => {
    return <Navigate to="/dashboard" replace />;
  };

  return (
    <div>
      <div className="login-page">
        <h2>Login Page</h2>
        <form
          onSubmit={(e) => {
            handleLogin(e);
            const username = e.target.username.value;
            const password = e.target.password.value;
            if (username === "admin" && password === "admin123") {
              navigateToDashboard(Dashboard );
            }
          }}
        >
          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login

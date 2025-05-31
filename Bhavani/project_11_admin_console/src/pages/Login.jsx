import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {login} from '../auth';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    login(); // set isLoggedIn = true
    console.log("User is logged in:", true);
    navigate('/console');
  };

  return (
    <div className="Card d-flex justify-content-center align-items-center  vh-100">
      <form onSubmit={handleLogin} className="login-card p-4" style={{ minWidth: '500px' }}>
        <h3 className="mb-4 text-center">WELCOME USER...!</h3>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input type="email" className="form-control" id="username" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" />
        </div>

        <button type="submit" className="btn w-100">
         LOGIN
        </button>
      </form>
    </div>
  );
};

export default Login;
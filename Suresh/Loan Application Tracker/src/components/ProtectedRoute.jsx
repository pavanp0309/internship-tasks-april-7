import React from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ dashboard }) => {
  const isAuthenticated = () => {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    return (username === 'admin' && password === 'admin123') || localStorage.getItem('authToken') !== null;
  };

  return isAuthenticated() ? (
    <div>{dashboard}</div>
  ) : (
    <Navigate to="/login" replace />
  );
}

export default ProtectedRoute

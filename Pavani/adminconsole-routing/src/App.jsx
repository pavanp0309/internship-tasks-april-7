// src/App.jsx
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, NavLink, useNavigate } from 'react-router-dom';
import Login from './pages/Login';
import PageNotFound from './pages/pageNotFound';
import PrivateRoute from './routes/PrivateRoute';
import './pages/Console.css'; // Optional styling

const Projects = lazy(() => import('./pages/Projects'));
const ProjectId = lazy(() => import('./pages/ProjectId'));
const Settings = lazy(() => import('./pages/Settings'));
const Billing = lazy(() => import('./pages/Billing'));
const Activity = lazy(() => import('./pages/Activity'));
const Intro = lazy(() => import('./pages/Home')); // Add this new component

// Fixed Sidebar Layout
const SidebarLayout = ({ children }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };

  return (
    <div className="console-container" style={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar */}
      <aside className="sidebar" style={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: '150px',
        height: '100%',
        background: '#2c3e50',
        color: '#fff',
        padding: '1rem',
        zIndex: 10
      }}>
        <nav>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {/* Added Home link */}
            <li><NavLink to="/console" className="nav-link">Home</NavLink></li> {/* This is the link for the Home/Intro page */}
            <li><NavLink to="/console/projects" className="nav-link">Projects</NavLink></li>
            <li><NavLink to="/billing" className="nav-link">Billing</NavLink></li>
            <li><NavLink to="/activity" className="nav-link">Activity</NavLink></li>
          </ul>
        </nav>
      </aside>

      {/* Main Content Area */}
      <div style={{
        marginLeft: '180px',
        flex: 1,
        display: 'flex',
        flexDirection: 'column'
      }}>
        <h1 style={{ textAlign: 'center', color: 'darkblue', marginTop: '20px' }}>
          Admin Console Access System
        </h1>

        <main style={{
          padding: '1rem',
          marginTop: '20px',
          flex: 1,
          overflowY: 'auto',
          background: '#ecf0f1',
          maxWidth: 'calc(100% - 240px)',
        }}>
          {children}
        </main>
      </div>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        style={{
          position: 'fixed',
          top: '10px',
          right: '10px',
          background: '#e74c3c',
          color: 'white',
          padding: '10px 20px',
          fontWeight: 'bold',
          borderRadius: '5px',
          border: 'none',
          cursor: 'pointer',
          zIndex: 1000,
        }}
      >
        Logout
      </button>
    </div>
  );
};

// All Routes
const AppRoutes = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />

      {/* Intro page after login */}
      <Route path="/console" element={<PrivateRoute><SidebarLayout><Intro /></SidebarLayout></PrivateRoute>} />

      {/* Protected routes */}
      <Route path="/console/projects" element={<PrivateRoute><SidebarLayout><Projects /></SidebarLayout></PrivateRoute>} />
      <Route path="/console/projects/:projectId" element={<PrivateRoute><SidebarLayout><ProjectId /></SidebarLayout></PrivateRoute>} />
      <Route path="/console/projects/:projectId/settings" element={<PrivateRoute><SidebarLayout><Settings /></SidebarLayout></PrivateRoute>} />

      {/* Outside console */}
      <Route path="/billing" element={<PrivateRoute><SidebarLayout><Billing /></SidebarLayout></PrivateRoute>} />
      <Route path="/activity" element={<PrivateRoute><SidebarLayout><Activity /></SidebarLayout></PrivateRoute>} />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </Suspense>
);

// Main App
const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;

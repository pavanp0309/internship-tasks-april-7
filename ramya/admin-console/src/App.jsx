import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './components/Dashboard';
import Projects from './components/Projects';
import Activity from './components/Activity';
import Billing from './components/Billing';
import ProjectDetails from './components/ProjectDetails';
import Settings from './pages/Settings';
import PrivateRoute from './pages/PrivateRoute';

const App = () => {
  useEffect(() => {
    // Check authentication on app load
    if (localStorage.getItem('isLoggedIn') === 'true') {
      // Simulate user logged in
    }
  }, []);

  return (
    <>
      <Routes>
        {/* Login Route */}
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="projects" element={<Projects />} />
            <Route path="activity" element={<Activity />} />
            <Route path="billing" element={<Billing />} />
            <Route path="projects/:projectId" element={<ProjectDetails />} />
            <Route path="projects/:projectId/settings" element={<Settings />} />
          </Route>
        </Route>

        {/* 404 Route */}
        <Route path="*" element={<h2>404 Not Found</h2>} />
      </Routes>
    </>
  );
};

export default App;

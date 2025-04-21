import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Console from './pages/Console';
import Project from './pages/Project';
import ProjectDetails from './pages/ProjectDetails';
import Settings from './pages/Settings';
import Billing from './pages/Billing';
import Activity from './pages/Activity';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/console" element={<Console />}>
          <Route path="projects" element={<Project />} />
          <Route path="project/:id" element={<ProjectDetails />} /> 
          <Route path="/console/projects/:id/settings" element={<Settings />} />
          <Route path="billing" element={<Billing />} />
          <Route path="activity" element={<Activity />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

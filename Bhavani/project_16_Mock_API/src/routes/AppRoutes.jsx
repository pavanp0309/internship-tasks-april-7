// src/routes/AppRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import JobListing from '../pages/JobListing';
import JobDetails from '../components/JobDetails';
import Login from '../components/Login';
import ProtectedRoute from './ProtectedRoute';
import EmployeeDashboard from '../dashboard/EmployeeDashboard';
import EmployeeLogin from '../dashboard/EmployeeLogin';
import Employee from '../dashboard/Employee';
import EmployeeProfile from '../dashboard/EmployeeProfile';
import CreateJob from '../dashboard/CreateJob';
import PostedJobs from '../dashboard/PostedJobs';

const AppRoutes = ({ jobs, setJobs }) => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path='/employer-login' element={<EmployeeLogin/>}/>
      <Route path='/register' element={<Employee/>}/>
      <Route path="/employee" element={<EmployeeDashboard />}>
          <Route path="profile" element={<EmployeeProfile />} />
          <Route path="create-job" element={<CreateJob />} />
          <Route path="posted-jobs" element={<PostedJobs />} />
        </Route>

      {/* Protected Routes */}
      <Route
        path="/jobs"
        element={
          <ProtectedRoute>
            <JobListing jobs={jobs} setJobs={setJobs} />
          </ProtectedRoute>
        }
      />

      <Route
        path="/jobs/:jobId"
        element={
          <ProtectedRoute>
            <JobDetails jobs={jobs} />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;

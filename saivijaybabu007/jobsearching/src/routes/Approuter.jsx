import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Login from '../components/Login';
import ProtectedRoute from './ProtectedRouter';
import PagenotFound from '../pages/PagenotFound';
import Joblisting from '../pages/Joblisting';
import Jobcard from '../components/Jobcard';
import Layout from '../pages/Layout';
import EmployerLogin from '../components/EmployerLogin';
import EmployerRigister from '../pages/EmployerRigister';
import Employer from '../pages/Employer';
import EmployerProfile from '../pages/EmployerProfile';
import CreateJob from '../pages/CreateJob';
import Postedjobs from '../pages/Postedjobs';
import EmployerLayout from '../pages/EmployerLayout';

const Approuter = ({ isLoggedIn, setIsLoggedIn, isEmLoggedIn, setIsEmLoggedIn }) => {
  const location = useLocation();

  // Determine if Navbar and Footer should be displayed
  const showNavbarFooter = (
    location.pathname !== '/login' &&
    (location.pathname === '/' ||
      location.pathname === '/about' ||
      location.pathname === '/contact' ||
      location.pathname.startsWith('/joblisting'))
  );

  return (
    <>
      {showNavbarFooter && <Navbar setIsLoggedIn={setIsLoggedIn} />}

      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
        <Route path="/about" element={<About isLoggedIn={isLoggedIn} />} />
        <Route path="/contact" element={<Contact isLoggedIn={isLoggedIn} />} />

        {/* Job Listing Routes (Protected) */}
        <Route path="/joblisting" element={<ProtectedRoute isLoggedIn={isLoggedIn}><Layout /></ProtectedRoute>}>
          <Route index element={<Joblisting />} />
          <Route path=":id" element={<Jobcard />} />
        </Route>

        {/* Employer Routes */}
        <Route path="/employerlogin" element={<EmployerLogin setIsEmLoggedIn={setIsEmLoggedIn} />} />
        <Route path='/employer' element={<Employer />} />
        <Route path="/employer/createjob" element={<EmployerLayout><CreateJob /></EmployerLayout>} />
        <Route path="/employer/postedjobs" element={<EmployerLayout><Postedjobs /></EmployerLayout>} />
        <Route path='/employerprofile' element={<EmployerLayout><EmployerProfile /></EmployerLayout>} />
        <Route path='/employerregister' element={<EmployerRigister />} />

        {/* Catch-all for 404 */}
        <Route path="*" element={<PagenotFound />} />
      </Routes>

      {showNavbarFooter && <Footer />}
    </>
  );
};

export default Approuter;

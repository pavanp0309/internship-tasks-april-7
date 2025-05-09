import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRoutes from './routes/AppRoutes';
import { fetchJobs } from './api/rapidapi';

const App = () => {
  const location = useLocation();
  const [jobs, setJobs] = useState([]);
  const [hideLayout, setHideLayout] = useState(false);

  const handleEmployerClick = () => {
    setHideLayout(true);
  };

  useEffect(() => {
    async function loadJobs() {
      const jobData = await fetchJobs();
      setJobs(jobData);
    }
    loadJobs();
  }, []);

  // Define paths where Navbar/Footer should be hidden
  const pathsToHideLayout = ['/login', '/employer-login', '/register'];
  const shouldHideLayout =
    hideLayout ||
    pathsToHideLayout.includes(location.pathname) ||
    location.pathname.startsWith('/employee');

  return (
    <>
      {!shouldHideLayout && <Navbar onEmployerClick={handleEmployerClick} />}
      <AppRoutes jobs={jobs} setJobs={setJobs} onEmployerClick={handleEmployerClick} />
      {!shouldHideLayout && <Footer />}
    </>
  );
};

export default App;

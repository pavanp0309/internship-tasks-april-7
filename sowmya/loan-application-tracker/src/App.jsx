import React, { useState, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import DashBoard from './pages/DashBoard';
import Applications from './pages/Applications';
import ApplicationDetail from './pages/ApplicationDetail';
import NotFound from './pages/NotFound';
import PrivateRoute from './components/PrivateRoute';

const Settings = lazy(() => import('./pages/Settings'));

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
      <Routes>
        <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route
          path="/dashboard/*"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <DashBoard setIsLoggedIn={setIsLoggedIn} />
            </PrivateRoute>
          }
        >
          <Route path="applications" element={<Applications />} />
          <Route path="applications/:id" element={<ApplicationDetail />} />
          <Route
            path="settings"
            element={
              <Suspense fallback={<div className="text-center mt-5">Loading Settings...</div>}>
                <Settings />
              </Suspense>
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
};

export default App;

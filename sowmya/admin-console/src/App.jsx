import React from 'react';
import { AuthProvider } from './context/AuthContext';
import AppRoutes from './routes/AppRoutes';
import NavBar from './components/NavBar';
import { useLocation } from 'react-router-dom';

const App = () => {
  const location = useLocation();
  const showNavBar = location.pathname !== '/login';

  return (
    <AuthProvider>
      <div className="d-flex">
        {showNavBar && <NavBar />}
        <div className="flex-grow-1" style={{ marginLeft: showNavBar ? '250px' : '0' }}>
          <AppRoutes />
        </div>
      </div>
    </AuthProvider>
  );
};

export default App;

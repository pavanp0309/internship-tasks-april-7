// App.jsx
import React from 'react';
import ProfileTracker from './components/ProfileTracker';

const App = () => {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-gradient-custom">
      <div className="w-100 px-3" style={{ maxWidth: '650px' }}>
        <ProfileTracker />
      </div>
    </div>
  );
};

export default App;

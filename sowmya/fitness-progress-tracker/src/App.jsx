import React from 'react';
import Dashboard from './components/DashBoard';

const App = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(to right, #1f4037, #99f2c8)', // Unique green gradient
        padding: '2rem'
      }}
    >
      <Dashboard />
    </div>
  );
};

export default App;

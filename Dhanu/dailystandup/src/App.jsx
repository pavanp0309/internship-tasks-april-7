import React from 'react';
import StandupBoard from './components/StandupBoard';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div
      className="min-vh-100"
      style={{
        backgroundImage: 'linear-gradient(to right, #e0f7fa, #ffffff)', 
        backgroundAttachment: 'fixed',
        paddingBottom: '50px'
      }}
    >
      <StandupBoard />
    </div>
  );
}

export default App;

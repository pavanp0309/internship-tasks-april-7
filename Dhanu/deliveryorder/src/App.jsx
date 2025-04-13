import React from 'react';
import ListOrders from './components/ListOrders';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f5f7fa, #c3cfe2)', 
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="container py-5">
        <ListOrders />
      </div>
    </div>
  );
}

export default App;

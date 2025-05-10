import React from 'react'
import Card from './components/Card'
import {tickets} from './components/Data'



const App = () => {
  return (
    <div className="container mt-4">
      <h1 className="text-center text-uppercase p-4 text-success">🎫support ticket viewer</h1>
      <div className="row">
        {tickets.map((ticket) => (
          <div key={ticket.ticketId} className="col-md-4 mb-4">
            <Card ticket={ticket} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App
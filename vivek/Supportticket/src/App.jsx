import React from 'react';
import { tickets, stats } from './data/tickets';
import StatsCard from './components/StatsCard';
import Ticket from './components/Ticket';

const App = () => {
  return (
    <div className="container py-4">
      <h1>Support Ticket Dashboard</h1>
      
      <StatsCard stats={stats} />
      
      <div className="row mt-4">
        <div className="col-lg-4 status-column">
          <h3>Open Tickets</h3>
          {tickets
            .filter(ticket => ticket.status === 'Open')
            .map(ticket => <Ticket key={ticket.id} ticket={ticket} />)}
        </div>
        
        <div className="col-lg-4 status-column">
          <h3>In Progress</h3>
          {tickets
            .filter(ticket => ticket.status === 'In Progress')
            .map(ticket => <Ticket key={ticket.id} ticket={ticket} />)}
        </div>
        
        <div className="col-lg-4 status-column">
          <h3>Closed Tickets</h3>
          {tickets
            .filter(ticket => ticket.status === 'Closed')
            .map(ticket => <Ticket key={ticket.id} ticket={ticket} />)}
        </div>
      </div>
    </div>
  );
};

export default App;
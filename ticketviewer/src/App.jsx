import React from 'react';
import tickets from './data/data';
import TicketCard from './components/TicketCard';
import TicketStatus from './components/TicketStatus';
import './App.css';

const App = () => {
  const groupedTickets = {
    Open: [],
    'In Progress': [],
    Closed: []
  };

  tickets.forEach(ticket => {
    groupedTickets[ticket.status].push(ticket);
  });

  return (
    <>
      <div className="app-container">
        <h2>Support Ticket Viewer</h2>
        <TicketStatus tickets={tickets} />

        {Object.keys(groupedTickets).map(status => (
          <div key={status}>
            <h3>{status}</h3>
            <div className="ticket-group">
              {groupedTickets[status].map(ticket => (
                <TicketCard key={ticket.id} ticket={ticket} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;

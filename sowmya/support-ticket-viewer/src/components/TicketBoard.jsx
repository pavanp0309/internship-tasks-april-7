import React from 'react';
import TicketCard from './TicketCard';
import tickets from '../data/data';

const groupTicketsByStatus = (tickets) => {
  return tickets.reduce((groups, ticket) => {
    if (!groups[ticket.status]) groups[ticket.status] = [];
    groups[ticket.status].push(ticket);
    return groups;
  }, {});
};

const TicketBoard = () => {
  const grouped = groupTicketsByStatus(tickets);
  const total = tickets.length;
  const open = tickets.filter(t => t.status === 'Open').length;
  const closed = tickets.filter(t => t.status === 'Closed').length;

  return (
    <div className="container py-4" style={{ fontFamily: 'Arial' }}>
      <h1 className="text-center mb-4">🎫 Support Ticket Viewer</h1>
      
      <div className="mb-4">
        <strong>Quick Stats:</strong> Total: {total} | Open: {open} | Closed: {closed}
      </div>

      {Object.entries(grouped).map(([status, group]) => (
        <div key={status} className="mb-5">
          <h3 className="mb-3">{status}</h3>
          <div className="row">
            {group.map(ticket => (
              <div className="col-sm-12 col-md-6 col-lg-4" key={ticket.id}>
                <TicketCard {...ticket} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TicketBoard;

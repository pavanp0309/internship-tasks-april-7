import React from 'react';
import TicketCard from './TicketCard';

const TicketGroup = ({ status, tickets }) => {
  return (
    <div className="mb-5">
      <h3 className="text-center text-uppercase my-4">{status} Tickets</h3>
      <div className="list-group">
        {tickets.map((ticket) => (
          <TicketCard key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default TicketGroup;

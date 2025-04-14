import React from 'react';

const TicketStatus = ({ tickets }) => {
  const total = tickets.length;
  const open = tickets.filter(t => t.status === 'Open').length;
  const closed = tickets.filter(t => t.status === 'Closed').length;

  return (
    <div className="stats-container">
      <div>Total Tickets: {total}</div>
      <div>Open: {open}</div>
      <div>Closed: {closed}</div>
    </div>
  );
};

export default TicketStatus;

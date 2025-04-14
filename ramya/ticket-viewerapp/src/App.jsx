import React from 'react';
import TicketCard from './components/TicketCard';
import TicketGroup from './components/TicketGroup';
import QuickStats from './components/QuickStats';
import tickets from './data/tickets';

const App = () => {
  // Group tickets by status
  const groupedTickets = tickets.reduce((groups, ticket) => {
    const { status } = ticket;
    if (!groups[status]) {
      groups[status] = [];
    }
    groups[status].push(ticket);
    return groups;
  }, {});

  // Stats calculations
  const totalTickets = tickets.length;
  const openTickets = tickets.filter((ticket) => ticket.status === 'Open').length;
  const closedTickets = tickets.filter((ticket) => ticket.status === 'Closed').length;

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">🎟️ Support Ticket Viewer</h1>

      {/* Quick Stats */}
      <QuickStats total={totalTickets} open={openTickets} closed={closedTickets} />

      {/* Group tickets by status */}
      {Object.keys(groupedTickets).map((status) => (
        <TicketGroup key={status} status={status} tickets={groupedTickets[status]} />
      ))}
    </div>
  );
};

export default App;

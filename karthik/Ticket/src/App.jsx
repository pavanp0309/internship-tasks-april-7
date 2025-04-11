import React from "react";
import "./App.css";
import TicketCard from "./components/TicketCard";
import { ticketsData } from "./data/tickets";

const getStatusCounts = (tickets) => {
  const total = tickets.length;
  const open = tickets.filter(t => t.status === "Open").length;
  const closed = tickets.filter(t => t.status === "Closed").length;
  return { total, open, closed };
};

const App = () => {
  const { total, open, closed } = getStatusCounts(ticketsData);

  const grouped = ticketsData.reduce((acc, ticket) => {
    if (!acc[ticket.status]) acc[ticket.status] = [];
    acc[ticket.status].push(ticket);
    return acc;
  }, {});

  return (
    <div className="container">
      <h1>🎫 Support Ticket Viewer</h1>
      <div className="stats">
        <span>Total: {total}</span>
        <span>Open: {open}</span>
        <span>Closed: {closed}</span>
      </div>
      {Object.entries(grouped).map(([status, tickets]) => (
        <div key={status} className="status-group">
          <h2>{status}</h2>
          {tickets.map((ticket) => (
            <TicketCard key={ticket.id} {...ticket} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default App;

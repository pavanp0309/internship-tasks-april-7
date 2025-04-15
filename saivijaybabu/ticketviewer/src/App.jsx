// App.jsx
import React from "react";
import tickets from "./data/data";
import Card from "./components/Card";


const App = () => {
  const groupedTickets = tickets.reduce((acc, ticket) => {
    const { status } = ticket;
    acc[status] = acc[status] || [];
    acc[status].push(ticket);
    return acc;
  }, {});

  const total = tickets.length;
  const open = tickets.filter((t) => t.status === "Open").length;
  const closed = tickets.filter((t) => t.status === "Closed").length;

  return (
    <div className="container py-4">
      <h2 className="mb-4">Support Ticket Dashboard</h2>

      {/* Quick Stats */}
      <div className="row mb-4">
        <div className="col-sm-4">
          <div className="card text-center">
            <div className="card-body">
              <h6>Total Tickets</h6>
              <h5>{total}</h5>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card text-center text-primary">
            <div className="card-body">
              <h6>Open</h6>
              <h5>{open}</h5>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card text-center text-success">
            <div className="card-body">
              <h6>Closed</h6>
              <h5>{closed}</h5>
            </div>
          </div>
        </div>
      </div>

      {/* Grouped Ticket Cards */}
      {Object.entries(groupedTickets).map(([status, group]) => (
        <div key={status} className="mb-5">
          <h4 className="mb-3">{status} Tickets</h4>
          <div className="row">
            {group.map((ticket) => (
              <div className="col-md-6" key={ticket.id}>
                <Card ticket={ticket} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;

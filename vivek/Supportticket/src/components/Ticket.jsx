import React from 'react';

const Ticket = ({ ticket }) => {
  const getPriorityColor = () => {
    switch(ticket.priority) {
      case 'High': return 'danger';
      case 'Medium': return 'warning';
      default: return 'secondary';
    }
  };

  const getStatusColor = () => {
    switch(ticket.status) {
      case 'Open': return 'primary';
      case 'In Progress': return 'info';
      default: return 'success';
    }
  };

  return (
    <div className={`card ticket-card ${ticket.status.replace(' ', '')}`}>
      <div className="card-body">
        <div className="ticket-header">
          <h5 className="ticket-title">{ticket.subject}</h5>
          <span className={`badge badge-priority bg-${getPriorityColor()} ms-2`}>
            {ticket.priority}
            {ticket.priority === 'High' && ' ⚠️'}
          </span>
        </div>
        
        <div className="customer-info">
          <div className="avatar">
            {ticket.customer.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <span className="customer-name">{ticket.customer.name}</span>
            {ticket.customer.type === 'Premium' && (
              <span className="badge badge-premium">Premium</span>
            )}
          </div>
        </div>
        
        <p className="ticket-description">{ticket.description}</p>
        
        <div className="ticket-footer">
          <span className="ticket-date">Created: {ticket.date}</span>
          <div>
            <span className={`badge badge-status bg-${getStatusColor()} me-2`}>
              {ticket.status}
            </span>
            {ticket.status === 'Open' && (
              <button className="btn btn-followup">Follow Up</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
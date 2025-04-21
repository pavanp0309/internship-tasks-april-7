import React from 'react';

const TicketCard = ({ ticket }) => {
  const { id, customer, summary, description, createdAt, priority, status, escalated } = ticket;

  const getStatusClass = () => {
    if (status === 'Open') return 'status-open';
    if (status === 'In Progress') return 'status-progress';
    return 'status-closed';
  };

  const getInitials = (name) => {
    return name.split(' ').map(word => word[0]).join('');
  };

  return (
    <>
      <div className={`ticket-card ${getStatusClass()}`}>
        <div className="ticket-header">
          <div className="avatar">
            {customer.avatar ? (
              <img src={customer.avatar} alt="avatar" />
            ) : (
              <span className="initials">{getInitials(customer.name)}</span>
            )}
          </div>
          <div>
            <h4>{customer.name}</h4>
            {customer.type === 'Premium' && <span className="tag premium">Premium</span>}
          </div>
        </div>

        <div className="ticket-body">
          <p><strong>ID:</strong> {id}</p>
          <p><strong>Issue:</strong> {summary}</p>
          <p><strong>Description:</strong> {description}</p>
          <p><strong>Created At:</strong> {createdAt}</p>
          <p><strong>Priority:</strong> {priority}</p>
          <p><strong>Status:</strong> <span className="badge">{status}</span></p>

          {escalated && priority === 'High' && (
            <span className="tag escalated">Escalated</span>
          )}

          {status === 'Open' && (
            <button className="follow-up-btn">Follow Up</button>
          )}
        </div>
      </div>
    </>
  );
};

export default TicketCard;

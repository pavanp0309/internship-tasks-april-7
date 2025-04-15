import React from 'react';
import PriorityBadge from './PriorityBadge';
import StatusBadge from './StatusBadge';

const TicketCard = ({ ticket }) => {
  const {
    id,
    customerName,
    customerType,
    issue,
    description,
    createdDate,
    priority,
    status,
  } = ticket;

  // Avatar logic: Use initials if profile pic is missing
  const avatarInitials = customerName.split(' ').map(name => name[0]).join('');

  return (
    <div className="card shadow-lg mb-4 rounded">
      <div className="card-body">
        <h5 className="card-title">Ticket #{id}</h5>

        {/* User avatar with initials */}
        <div className="d-flex align-items-center mb-3">
          <div className="avatar me-3">
            {avatarInitials}
          </div>
          <div>
            <p className="mb-0"><strong>Customer:</strong> {customerName} <span className={`badge ${customerType === 'Premium' ? 'bg-danger' : 'bg-secondary'}`}>{customerType}</span></p>
          </div>
        </div>

        <p><strong>Issue:</strong> {issue}</p>
        <p><strong>Description:</strong> {description}</p>
        <p><strong>Created:</strong> {createdDate}</p>

        <div className="d-flex justify-content-between">
          <PriorityBadge priority={priority} />
          <StatusBadge status={status} />
        </div>

        {/* Show "Escalated" tag for high-priority tickets */}
        {priority === 'High' && <span className="badge bg-danger mt-2">Escalated</span>}

        {status === 'Open' && <button className="btn btn-primary mt-3 w-100">Follow Up</button>}
      </div>
    </div>
  );
};

export default TicketCard;

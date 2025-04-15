import React from 'react';

const SupportCard = ({
  ticketId,
  customerName,
  customerType,
  issueSummary,
  issueDescription,
  createdDate,
  priority,
  status,
}) => {
  const statusColor = {
    Open: 'warning',
    'In Progress': 'info',
    Closed: 'success',
    'In Review': 'secondary',
  };

  const priorityBadge = {
    High: 'danger',
    Medium: 'warning',
    Low: 'secondary',
    Critical: 'dark',
  };

  return (
    <div className="card h-100 shadow-sm border-0">
      <div className="card-body">
        <div className="d-flex justify-content-between mb-2">
          <h6 className="fw-bold mb-0">{ticketId}</h6>
          <span className={`badge bg-${statusColor[status] || 'secondary'}`}>{status}</span>
        </div>

        <p className="mb-1">
          <strong>Customer:</strong> {customerName}
          {customerType === 'Premium' && (
            <span className="badge bg-warning text-dark ms-2">Premium</span>
          )}
        </p>

        <p className="mb-1">
          <strong>Summary:</strong> {issueSummary}
        </p>
        <p className="small text-muted">{issueDescription}</p>

        <p className="mb-1">
          <strong>Created:</strong> {createdDate}
        </p>
        <p className="mb-3">
          <strong>Priority:</strong>{' '}
          <span className={`badge bg-${priorityBadge[priority] || 'light'} text-uppercase`}>
            {priority}
          </span>
        </p>

        {status === 'Open' && (
          <button className="btn btn-outline-danger btn-sm w-100">🔁 Follow Up</button>
        )}
      </div>
    </div>
  );
};

export default SupportCard;

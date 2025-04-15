import React from 'react';

const StatusBadge = ({ status }) => {
  const statusClasses = {
    Open: 'badge bg-primary',
    'In Progress': 'badge bg-warning',
    Closed: 'badge bg-success',
  };

  return <span className={statusClasses[status]}>{status}</span>;
};

export default StatusBadge;

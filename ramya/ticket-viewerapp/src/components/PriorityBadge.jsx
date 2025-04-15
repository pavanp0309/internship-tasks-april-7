import React from 'react';

const PriorityBadge = ({ priority }) => {
  const priorityClasses = {
    High: 'badge bg-danger',
    Medium: 'badge bg-warning',
    Low: 'badge bg-success',
  };

  return <span className={priorityClasses[priority]}>{priority}</span>;
};

export default PriorityBadge;

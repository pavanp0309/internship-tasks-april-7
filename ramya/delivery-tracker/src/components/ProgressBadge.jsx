import React from 'react';

const PaymentBadge = ({ status }) => {
  const badgeClass = {
    Paid: 'badge bg-success',
    COD: 'badge bg-warning text-dark',
    Failed: 'badge bg-danger',
  };

  const icon = {
    Paid: '✅',
    COD: '💰',
    Failed: '❌',
  };

  return <span className={badgeClass[status]}>{icon[status]} {status}</span>;
};

export default PaymentBadge;

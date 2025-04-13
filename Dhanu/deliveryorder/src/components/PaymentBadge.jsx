import React from 'react';

const PaymentBadge = ({ status }) => {
  let badgeClass = '';
  let label = '';
  let emoji = '';

  switch (status) {
    case 'Paid':
      badgeClass = 'bg-success';
      label = 'Paid';
      emoji = '✅';
      break;
    case 'COD':
      badgeClass = 'bg-warning text-dark';
      label = 'Cash on Delivery';
      emoji = '💰';
      break;
    case 'Failed':
      badgeClass = 'bg-danger';
      label = 'Payment Failed';
      emoji = '❌';
      break;
    default:
      badgeClass = 'bg-secondary';
      label = 'Unknown';
      emoji = '❓';
  }

  return (
    <span className={`badge ${badgeClass} py-2 px-3 rounded-pill fs-6`}>
      {emoji} {label}
    </span>
  );
};

export default PaymentBadge;

import React from 'react';


const TransactionCard = ({ title, amount, transactionType, date, status, category }) => {
  const isCredit = transactionType === 'credit';
  const amountClass = isCredit ? 'amount credit' : 'amount debit';

  const statusClass = {
    completed: 'status-badge completed',
    pending: 'status-badge pending',
    failed: 'status-badge failed',
  }[status.toLowerCase()] || 'status-badge';

  const formattedDate = new Date(date).toLocaleDateString();

  return (
    <div className="transaction-card">
      <div className="transaction-header">
        <div className="transaction-title">{title}</div>
        <div className={amountClass}>
          {isCredit ? '+' : '-'}${amount.toFixed(2)}
        </div>
      </div>

      <div className="transaction-details">
        <span className="transaction-date">{formattedDate}</span>
        <span className={statusClass}>{status}</span>
        <span className="transaction-category">{category}</span>
      </div>
    </div>
  );
};

export default TransactionCard;

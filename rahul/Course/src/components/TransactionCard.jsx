import React from 'react';
import './TransactionCard.css'; // Assuming you have a CSS file for styling

const TransactionCard = ({
  id,
  title,
  amount,
  transactionType,
  date,
  category,
  status,
  children,
}) => {
  const amountClass = transactionType === 'credit' ? 'credit' : 'debit';
  const statusClass = `status-${status.toLowerCase()}`;

  return (
    <div className="transaction-card">
      <div className="transaction-header">
        <h3>📃{title}</h3>
        <span className={`amount ${amountClass}`}>Transaction Cost : ... 
          {transactionType === 'credit' ? '+' : '-'}${amount.toFixed(2)}
        </span>
      </div>
      <div className="transaction-details">
        <span className="date">Date of Transaction : {new Date(date).toLocaleDateString()}</span>
        <span className="category">Category : {category}</span>
        <span className={`status-badge ${statusClass}`}>{status}</span>
      </div>
      {children && <div className="transaction-notes">{children}</div>}
    </div>
  );
};

export default TransactionCard;

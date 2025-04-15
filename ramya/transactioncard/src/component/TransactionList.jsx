import React from 'react';
import TransactionCard from './TransactionCard';

const TransactionList = ({ transactions }) => {
  return (
    <div className="transaction-list">
      {transactions.map((txn) => (
        <TransactionCard
          key={txn.id}
          title={txn.title}
          amount={txn.amount}
          transactionType={txn.transactionType}
          date={txn.date}
          status={txn.status}
          category={txn.category}
        />
      ))}
    </div>
  );
};

export default TransactionList;

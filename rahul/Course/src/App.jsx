import React from 'react';
import TransactionCard from './components/TransactionCard';

const App = () => {
  // Sample transaction data
  const transactions = [
    {
      id: 1,
      title: 'Grocery Shopping',
      amount: 150.75,
      transactionType: 'debit',
      date: '2025-10-01',
      category: 'Groceries',
      status: 'Completed',
    },
    {
      id: 2,
      title: 'Salary',
      amount: 2500.00,
      transactionType: 'credit',
      date: '2025-10-05',
      category: 'Income',
      status: 'Completed',
    },
    {
      id: 3,
      title: 'Electricity Bill',
      amount: 75.50,
      transactionType: 'debit',
      date: '2025-10-10',
      category: 'Utilities',
      status: 'Pending',
    },
  ];

  return (
    <div className="app">
      <h1 className='TransactionHistory'>Bank Transaction details... <span className='BankingApp'>Transaction History</span></h1>
      {transactions.map(transaction => (
        <TransactionCard
          key={transaction.id}
          id={transaction.id}
          title={transaction.title}
          amount={transaction.amount}
          transactionType={transaction.transactionType}
          date={transaction.date}
          category={transaction.category}
          status={transaction.status}
        >
          {/* Optional children for additional notes */}
          {transaction.transactionType === 'debit' && <p>Note: This is a debit transaction.</p>}
        </TransactionCard>
      ))}
    </div>
  );
};

export default App;

import React from 'react';
import TransactionList from './component/TransactionList';
import './App.css';

const transactions = [
  {
    id: '1',
    title: 'Salary',
    amount: 5000,
    transactionType: 'credit',
    date: '2025-04-01',
    status: 'completed',
    category: 'Income',
  },
  {
    id: '2',
    title: 'Grocery Shopping',
    amount: 150.75,
    transactionType: 'debit',
    date: '2025-04-04',
    status: 'pending',
    category: 'Groceries',
  },
  {
    id: '3',
    title: 'Rent Payment',
    amount: 1200,
    transactionType: 'debit',
    date: '2025-04-03',
    status: 'completed',
    category: 'EMI',
  },
  {
    id: '4',
    title: 'Online Course Refund',
    amount: 200,
    transactionType: 'credit',
    date: '2025-04-05',
    status: 'failed',
    category: 'Education',
  },
];

function App() {
  return (
    <div className="app">
      <h2>Transaction History</h2>
      <TransactionList transactions={transactions} />
    </div>
  );
}

export default App;

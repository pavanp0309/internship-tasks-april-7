// src/App.jsx
import './index.css';
import TransactionCard from './components/TransactionCard';

const App = () => {
  const transactions = [
    {
      id: 1,
      title: 'Salary Credit',
      amount: 3000,
      type: 'credit',
      date: '2025-04-05',
      status: 'Success',
      category: 'Income',
      icon: 'bi bi-cash-stack',
      note: 'Monthly salary from employer',
    },
    {
      id: 2,
      title: 'Grocery Shopping',
      amount: 120.75,
      type: 'debit',
      date: '2025-04-06',
      status: 'Success',
      category: 'Groceries',
      icon: 'bi bi-basket',
      note: 'Walmart weekend run',
    },
    {
      id: 3,
      title: 'Gym Membership',
      amount: 50,
      type: 'debit',
      date: '2025-04-07',
      status: 'Pending',
      category: 'Fitness',
      icon: 'bi bi-heart-pulse',
      note: 'Monthly subscription',
    },
    {
      id: 4,
      title: 'Freelance Payment',
      amount: 500,
      type: 'credit',
      date: '2025-04-08',
      status: 'Failed',
      category: 'Freelance',
      icon: 'bi bi-briefcase',
      note: 'Client payment not processed',
    },
  ];

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Transaction History</h2>
      {transactions.map(txn => (
        <TransactionCard
          key={txn.id}
          title={txn.title}
          amount={txn.amount}
          type={txn.type}
          date={txn.date}
          status={txn.status}
          category={txn.category}
          icon={txn.icon}
        >
          {txn.note}
        </TransactionCard>
      ))}
    </div>
  );
};

export default App;

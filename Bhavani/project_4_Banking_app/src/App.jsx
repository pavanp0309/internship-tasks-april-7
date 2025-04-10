import React from 'react'
import Card from './components/Card'

const trans=[
  {
    "id": "txn_001",
    "title": "Freelance Payment",
    "amount": "$1,200.00",
    "transactionType": "credit",
    "date": "2025-04-08",
    "category": "Income",
    "status": "Completed"
  },
  {
    "id": "txn_002",
    "title": "Grocery Shopping",
    "amount": "$85.30",
    "transactionType": "debit",
    "date": "2025-04-07",
    "category": "Groceries",
    "status": "Completed"
  },
  {
    "id": "txn_003",
    "title": "Monthly Subscription",
    "amount": "$14.99",
    "transactionType": "debit",
    "date": "2025-04-06",
    "category": "Entertainment",
    "status": "Pending"
  },
  {
    "id": "txn_004",
    "title": "Stock Dividend",
    "amount": "$75.00",
    "transactionType": "credit",
    "date": "2025-04-04",
    "category": "Investments",
    "status": "Completed"
  },
  {
    "id": "txn_005",
    "title": "Electricity Bill",
    "amount": "$120.45",
    "transactionType": "debit",
    "date": "2025-04-03",
    "category": "Utilities",
    "status": "Failed"
  },
  {
    "id": "txn_006",
    "title": "Sold Old Furniture",
    "amount": "$200.00",
    "transactionType": "credit",
    "date": "2025-04-01",
    "category": "Personal Sales",
    "status": "Completed"
  }
]


const App = () => {
  
  return (
  <>
  
   <div className="container mt-4">
      <div className="row">
        <h1 className='text-center fw-bold text-uppercase fs-1'>Banking App</h1>
        <h6 className='text-center fst-italic'>Transaction History Cards</h6>
        {trans.map(trans => (
          <div className="col-md-4 mb-4" key={trans.id}>
            <Card trans={trans} />
          </div>
        ))}
      </div>
    </div>
  </>
   
  );
};


export default App

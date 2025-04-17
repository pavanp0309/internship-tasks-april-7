import React from 'react'
import { useNavigate } from 'react-router-dom';

const Applications = () => {
  const applicationsData = [
    { id: 1, name: 'John Doe', loan: 'Home Loan', amount: '$200,000', status: 'Approved', submittedDate: '2023-04-01' },
    { id: 2, name: 'Jane Smith', loan: 'Car Loan', amount: '$25,000', status: 'Pending', submittedDate: '2023-04-03' },
    { id: 3, name: 'Alice Johnson', loan: 'Personal Loan', amount: '$10,000', status: 'Rejected', submittedDate: '2023-04-05' },
  ];

  const navigate = useNavigate();

  return (
    <div>
      <h1>Applications</h1>

  
        <table border="1" style={{ width: '100%', textAlign: 'left', marginTop: '20px' }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Loan</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Submitted Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {applicationsData.map((application) => (
              <tr key={application.id}>
                <td>{application.name}</td>
                <td>{application.loan}</td>
                <td>{application.amount}</td>
                <td>{application.status}</td>
                <td>{application.submittedDate}</td>
                <td>
                  <button onClick={() => navigate(`/applicationDetail/${application.id}`)}>View Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    </div>
  )
}

export default Applications

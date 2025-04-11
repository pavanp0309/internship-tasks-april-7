import React from 'react'
import Card from './components/Card'

const tickets = [
  {
    ticketId: 'TCK-1001',
    customerName: 'Alice Johnson',
    customerType: true,
    issueSummary: 'Login issue',
    issueDescription: 'Customer is unable to log in using her registered email address.',
    createdDate: '2025-04-08',
    priority: 'High',
    status: 'Open',
  },
  {
    ticketId: 'TCK-1002',
    customerName: 'Bob Smith',
    customerType: false,
    issueSummary: 'Payment failed',
    issueDescription: 'Attempted to upgrade to Premium, but payment was declined.',
    createdDate: '2025-04-07',
    priority: 'Medium',
    status: 'In Progress',
  },
  {
    ticketId: 'TCK-1003',
    customerName: 'Carla Mendes',
    customerType: true,
    issueSummary: 'App crashing on startup',
    issueDescription: 'The mobile app crashes immediately after launching on iOS.',
    createdDate: '2025-04-06',
    priority: 'Critical',
    status: 'Open',
  },
  {
    ticketId: 'TCK-1004',
    customerName: 'Daniel Lee',
    customerType: false,
    issueSummary: 'Unable to reset password',
    issueDescription: 'User does not receive reset password email.',
    createdDate: '2025-04-05',
    priority: 'Low',
    status: 'Closed',
  },
  {
    ticketId: 'TCK-1005',
    customerName: 'Ella Tran',
    customerType: true,
    issueSummary: 'Bug in dashboard charts',
    issueDescription: 'Bar chart data does not update in real time.',
    createdDate: '2025-04-04',
    priority: 'Medium',
    status: 'progress',
  },
  {
    ticketId: 'TCK-1006',
    customerName: 'Liam Brooks',
    customerType: false,
    issueSummary: 'Login failure on mobile app',
    issueDescription: 'Users are unable to log in using the mobile app on iOS 17.',
    createdDate: '2025-04-07',
    priority: 'High',
    status: 'Open',
  }  
];


const App = () => {
  return (
    <div className="container mt-4">
      <div className="row">
      <h1 className='text-center text-uppercase p-4 text-primary'>🎟️support ticket viewer</h1>
        {tickets.map((ticket) => (
          <div className="col-md-4 mb-4" key={ticket.ticketId}>
            <Card ticket={ticket} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
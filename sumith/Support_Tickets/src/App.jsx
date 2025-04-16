import React from 'react';
import SupportCard from './components/SupportCard';
import Navbar from './components/Navbar';

const App = () => {
  const tickets = [
    {
      ticketId: "TCKT-1001",
      customerName: "Abhiram",
      customerType: "Premium",
      issueSummary: "Login not working",
      issueDescription: "User is unable to log into the account despite entering correct credentials.",
      createdDate: "2025-04-12",
      priority: "High",
      status: "Open"
    },
    {
      ticketId: "TCKT-1002",
      customerName: "Sneha Reddy",
      customerType: "Free",
      issueSummary: "Payment not processing",
      issueDescription: "Payment page gets stuck on loading and never completes the transaction.",
      createdDate: "2025-04-13",
      priority: "Medium",
      status: "In Progress"
    },
    {
      ticketId: "TCKT-1003",
      customerName: "Vijay Kanakala",
      customerType: "Premium",
      issueSummary: "App crashes on launch",
      issueDescription: "Mobile app crashes immediately after opening on Android devices.",
      createdDate: "2025-04-14",
      priority: "Critical",
      status: "Open"
    },
    {
      ticketId: "TCKT-1004",
      customerName: "Srikanth",
      customerType: "Free",
      issueSummary: "Resolved: App notifications delayed",
      issueDescription: "Account was wrongly suspended despite active subscription",
      createdDate: "2025-04-11",
      priority: "Low",
      status: "Closed"
    },
    {
      ticketId: "TCKT-1005",
      customerName: "Anil Kumar",
      customerType: "Premium",
      issueSummary: "Account suspension",
      issueDescription: "Account was wrongly suspended despite active subscription.",
      createdDate: "2025-04-10",
      priority: "High",
      status: "In Review"
    },
    {
      ticketId: "TCKT-1006",
      customerName: "Divya Sharma",
      customerType: "Free",
      issueSummary: "Email notifications not received",
      issueDescription: "User is not receiving any email alerts for updates or password reset requests.",
      createdDate: "2025-04-15",
      priority: "Medium",
      status: "Open"
    },
    {
      ticketId: "TCKT-1007",
      customerName: "Neha Patil",
      customerType: "Premium",
      issueSummary: "Slow loading dashboard",
      issueDescription: "Dashboard takes over 15 seconds to load, impacting productivity.",
      createdDate: "2025-04-13",
      priority: "High",
      status: "In Progress"
    },
    {
      ticketId: "TCKT-1008",
      customerName: "Rinku Singh",
      customerType: "Premium",
      issueSummary: "App crashes on launch",
      issueDescription: "Mobile app crashes immediately after opening on Android devices.",
      createdDate: "2025-05-12",
      priority: "Critical",
      status: "In Progress"
    },
    
    {
      ticketId: "TCKT-1009",
      customerName: "Rahul Prathi",
      customerType: "Premium",
      issueSummary: "Account suspension",
      issueDescription: "Account was wrongly suspended despite active subscription.",
      createdDate: "2025-04-10",
      priority: "High",
      status: "In Review"
    },
    {
      ticketId: "TCKT-1008",
      customerName: "Vikram Joshi",
      customerType: "Free",
      issueSummary: "Incorrect billing amount",
      issueDescription: "Billing shows extra charges not part of the subscription plan.",
      createdDate: "2025-04-14",
      priority: "Medium",
      status: "In Review"
    },
    {
      ticketId: "TCKT-1009",
      customerName: "Ritika Malhotra",
      customerType: "Premium",
      issueSummary: "Resolved: App notifications delayed",
      issueDescription: "Account was wrongly suspended despite active subscription.",
      createdDate: "2025-04-10",
      priority: "High",
      status: "Closed"
    } ,
    {
      ticketId: "TCKT-1000",
      customerName: "Raghu Patil",
      customerType: "Premium",
      issueSummary: "Resolved: App notifications delayed",
      issueDescription: "Push notifications were delayed by several hours; now resolved.",
      createdDate: "2025-04-16",
      priority: "Low",
      status: "Closed"
    } 
  ];

  
  const groupedTickets = tickets.reduce((acc, ticket) => {
    acc[ticket.status] = acc[ticket.status] || [];
    acc[ticket.status].push(ticket);
    return acc;
  }, {});

  return (
    <div>
      <Navbar/>
    <div className="container py-5 bg-dark">
      <div className="text-center mb-5">
        <h1 className="display-6 fw-bold text-primary"> Support Ticket Dashboard</h1>
        <p className="text-muted">Easily track and manage customer support tickets</p>
      </div>

      {Object.entries(groupedTickets).map(([status, tickets]) => (
        <div key={status} className="mb-5">
          <h4 className="text-capitalize border-bottom pb-2 mb-4 text-secondary">{status}</h4>
          <div className="row g-4">
            {tickets.map(ticket => (
              <div className="col-md-6 col-lg-4" key={ticket.ticketId}>
                <SupportCard {...ticket} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default App;

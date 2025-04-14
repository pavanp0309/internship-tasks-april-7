const tickets = [
    {
      id: 'TICKET001',
      customerName: 'Ramya',
      customerType: 'Premium',
      issue: 'Login issue',
      description: 'Customer unable to log in using her credentials.',
      createdDate: '2025-04-10',
      priority: 'High',
      status: 'Open',
    },
    {
      id: 'TICKET002',
      customerName: 'JOE',
      customerType: 'Standard',
      issue: 'Payment failed',
      description: 'Payment transaction failed during checkout.',
      createdDate: '2025-04-12',
      priority: 'Low',
      status: 'In Progress',
    },
    {
      id: 'TICKET003',
      customerName: 'Bhavi',
      customerType: 'Premium',
      issue: 'Account suspended',
      description: 'Customer’s account was suspended due to a policy violation.',
      createdDate: '2025-04-13',
      priority: 'Medium',
      status: 'Closed',
    },
    {
      id: 'TICKET004',
      customerName: 'Supraja',
      customerType: 'Free',
      issue: 'Password reset request',
      description: 'User requested password reset.',
      createdDate: '2025-04-14',
      priority: 'High',
      status: 'Open',
    },
  ];
  
  export default tickets;
  
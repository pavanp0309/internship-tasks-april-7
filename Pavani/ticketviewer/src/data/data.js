const tickets = [
    {
      id: 'TCKT1001',
      customer: { name: 'Alice Johnson', type: 'Premium', avatar: '' },
      summary: 'Login not working',
      description: 'User is unable to log in using registered credentials.',
      createdAt: '2025-04-12',
      priority: 'High',
      status: 'Open',
      escalated: true
    },
    {
      id: 'TCKT1002',
      customer: { name: 'Bob Smith', type: 'Free', avatar: '' },
      summary: 'Billing issue',
      description: 'Incorrect billing on the monthly invoice.',
      createdAt: '2025-04-10',
      priority: 'Medium',
      status: 'In Progress'
    },
    {
      id: 'TCKT1003',
      customer: { name: 'Clara Jones', type: 'Premium', avatar: '' },
      summary: 'Account suspended',
      description: 'User reports account is suspended without reason.',
      createdAt: '2025-04-09',
      priority: 'Low',
      status: 'Closed'
    }
  ];
  
  export default tickets;
  
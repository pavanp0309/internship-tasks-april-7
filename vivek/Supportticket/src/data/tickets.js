export const tickets = [
    {
      id: 'TKT-1001',
      customer: {
        name: 'John Smith',
        type: 'Premium',
        email: 'john@example.com'
      },
      subject: 'Login issues',
      description: 'Unable to login to my account despite correct credentials',
      date: '2023-05-15',
      priority: 'High',
      status: 'Open'
    },
    {
      id: 'TKT-1002',
      customer: {
        name: 'Sarah Johnson',
        type: 'Free',
        email: 'sarah@example.com'
      },
      subject: 'Payment failed',
      description: 'Payment keeps getting declined',
      date: '2023-05-14',
      priority: 'Medium',
      status: 'In Progress'
    },
    {
      id: 'TKT-1003',
      customer: {
        name: 'Mike Brown',
        type: 'Premium',
        email: 'mike@example.com'
      },
      subject: 'Feature request',
      description: 'Would like to request dark mode',
      date: '2023-05-10',
      priority: 'Low',
      status: 'Closed'
    }
  ];
  
  export const stats = {
    total: 3,
    open: 1,
    inProgress: 1,
    closed: 1
  };
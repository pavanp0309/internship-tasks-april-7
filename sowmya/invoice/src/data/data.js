const invoices = [
    {
      id: 1,
      invoiceNumber: "001",
      clientName: "Kavya",
      amount: 450.75,
      dueDate: "2025-04-08",
      status: "Overdue",
      currencySymbol: "₹",
      items: [
        { name: "Website Design", quantity: 1, price: 200 },
        { name: "Hosting", quantity: 2, price: 50 },
      ],
    },
    {
      id: 2,
      invoiceNumber: "002",
      clientName: "Vamsi",
      amount: 750,
      dueDate: "2025-04-12",
      status: "Pending",
      currencySymbol: "₹",
      items: [
        { name: "UI/UX Design", quantity: 1, price: 500 },
        { name: "React Frontend Development", quantity: 2, price: 350 },
      ],
    },
    {
      id: 3,
      invoiceNumber: "003",
      clientName: "Pragna",
      amount: 980,
      dueDate: "2025-03-28",
      status: "Overdue",
      currencySymbol: "₹",
      items: [
        { name: "Marketing", quantity: 2, price: 400 },
        { name: "Support", quantity: 1, price: 180 },
      ],
    },
    {
      id: 4,
      invoiceNumber: "004",
      clientName: "Yswanth",
      amount: 600,
      dueDate: "2025-03-30",
      status: "Paid",
      currencySymbol: "₹",
      items: [
        { name: "Development", quantity: 3, price: 200 },
        { name: "Domain", quantity: 1, price: 150.75 },
    ],
    },
    {
        id: 5,
        invoiceNumber: "005",
        clientName: "Ganesh",
        amount: 1200,
        dueDate: "2025-04-15",
        status: "Pending",
        currencySymbol: "₹",
        items: [
            { name: "Consulting", quantity: 5, price: 150 },
            { name: "API Integration", quantity: 1, price: 250 }
        ],
    },
    {
        id: 6,
        invoiceNumber: "006",
        clientName: "Rohit",
        amount: 1350,
        dueDate: "2025-04-20",
        status: "Paid",
        currencySymbol: "₹",
        items: [
          { name: "Mobile App Development", quantity: 1, price: 1000 },
          { name: "Deployment", quantity: 1, price: 100 },
        ],
    },


  ];
  
  export default invoices;
  
const invoices = [
    {
      id: 1,
      invoiceNumber: "001",
      clientName: "Chandra",
      amount: 850,
      dueDate: "2025-05-09",
      status: "Pending",
      currencySymbol: "₹",
      items: [
        { name: "UPSC CDS", quantity: 1, price: 200 },
        { name: "NDA/NA", quantity: 2, price: 50 },
      ],
    },
    {
      id: 2,
      invoiceNumber: "002",
      clientName: "SaiSiva",
      amount: 1750,
      dueDate: "2025-06-15",
      status: "Overdue",
      currencySymbol: "₹",
      items: [
        { name: "VLSI Designing", quantity: 2, price: 400 },
        { name: "MATLAB", quantity: 2, price: 550 },
      ],
    },
    {
      id: 3,
      invoiceNumber: "003",
      clientName: "Nishanth",
      amount: 2980,
      dueDate: "2025-06-28",
      status: "Overdue",
      currencySymbol: "₹",
      items: [
        { name: "Sales&Marketing", quantity: 5, price: 500 },
        { name: "AUTOCADD", quantity: 2, price: 280 },
      ],
    },
    {
      id: 4,
      invoiceNumber: "004",
      clientName: "Manideep",
      amount: 950,
      dueDate:"2025-03-30",
      status: "Paid",
      currencySymbol: "₹",
      items: [
        { name: "Full Stack Java Developer", quantity: 4, price: 400 },
        { name: "Domain", quantity: 1, price: 250.75 },
    ],
    },
    {
        id: 5,
        invoiceNumber: "005",
        clientName: "Nithin",
        amount: 1500,
        dueDate: "2025-05-17",
        status: "Pending",
        currencySymbol: "₹",
        items: [
            { name: "Full Stack Java Developer", quantity: 5, price: 150 },
            { name: "API Integration", quantity: 1, price: 250 }
        ],
    },
    {
        id: 6,
        invoiceNumber: "006",
        clientName: "Vijaybabu",
        amount: 1550,
        dueDate: "2025-04-05",
        status: "Paid",
        currencySymbol: "₹",
        items: [
          { name: "Web Development", quantity: 1, price: 1000 },
          { name: "Deployment", quantity: 1, price: 100 },
        ],
    },


  ];
  
  export default invoices;
  
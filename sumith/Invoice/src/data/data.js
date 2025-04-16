const data = [
    {
      id: 1,
      invoiceNumber: "527",
      clientName: "Sneha",
      amount: 1500,
      dueDate: "2025-05-17",
      status: "Pending",
      currencySymbol: "₹",
      items: [
        { name: "webserver design", quantity: 1, price: 1000 },
        { name: "devops development", quantity: 2, price: 500 },
      ],
    },
    {
      id: 2,
      invoiceNumber: "453",
      clientName: "Kesava",
      amount: 3800,
      dueDate: "2025-04-17",
      status: "Overdue",
      currencySymbol: "₹",
      items: [
        { name: "UI design", quantity: 1, price: 2500 },
        { name: "Django backend Development", quantity: 2, price: 1350 },
      ],
    },
    {
      id: 3,
      invoiceNumber: "554",
      clientName: "Narendra",
      amount: 4830,
      dueDate: "2025-04-23",
      status: "Pending",
      currencySymbol: "₹",
      items: [
        { name: "social advertisng", quantity: 2, price: 400 },
        { name: "customer data entry", quantity: 1, price: 180 },
      ],
    },
    {
      id: 4,
      invoiceNumber: "650",
      clientName: "Raghu",
      amount: 2650,
      dueDate: "2023-01-16",
      status: "Overdue",
      currencySymbol: "₹",
      items: [
        { name: "hacking", quantity: 3, price: 2550 },
        { name: "Data science", quantity: 1, price: 280 },
    ],
    },
    {
        id: 5,
        invoiceNumber: "473",
        clientName: "Vishnu",
        amount: 1400,
        dueDate: "2025-11-10",
        status: "Pending",
        currencySymbol: "₹",
        items: [
            { name: "VLSI", quantity: 5, price: 1150 },
            { name: "AutoCAD", quantity: 1, price: 250 }
        ],
    },
    {
        id: 6,
        invoiceNumber: "705",
        clientName: "Anil kumar",
        amount: 1480,
        dueDate: "2025-03-04",
        status: "Paid",
        currencySymbol: "₹",
        items: [
          { name: "hospital frontend development", quantity: 1, price: 1000 },
          { name: "Integrated Engineering", quantity: 1, price: 480 },
        ],
    },
  ];

  export default data;
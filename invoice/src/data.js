const invoiceData = [
    {
      id: 1,
      invoiceNumber: "INV-101",
      clientName: "Nova Tech",
      amount: 1249,
      dueDate: "2025-04-01",
      status: "Overdue",
      items: [
        { name: "Web Hosting", quantity: 1, price: 99 },
        { name: "Development", quantity: 2, price: 575 },
      ],
      currencySymbol: "Rs",
    },
    {
      id: 2,
      invoiceNumber: "INV-102",
      clientName: "Future Labs",
      amount: 300,
      dueDate: "2025-04-10",
      status: "Paid",
      items: [
        { name: "UI Audit", quantity: 1, price: 200 },
        { name: "Email Setup", quantity: 2, price: 50 },
      ],
      currencySymbol: "Rs",
    },
    {
      id: 3,
      invoiceNumber: "INV-103",
      clientName: "Bright Agency",
      amount: 650,
      dueDate: "2025-04-25",
      status: "Pending",
      items: [
        { name: "SEO Audit", quantity: 1, price: 300 },
        { name: "Ad Campaign", quantity: 2, price: 175 },
      ],
      currencySymbol: "Rs",
    },
    {
        id: 4,
        invoiceNumber: "INV-105",
        clientName: "Tech Solutions",
        amount: 899,
        dueDate: "2025-04-15",
        status: "Paid",
        items: [
          { name: "Web Design", quantity: 3, price: 100 },
          { name: "SEO Services", quantity: 1, price: 399 },
        ],
        currencySymbol: "Rs",
      },
    {
        id: 5,
        invoiceNumber: "INV-106",
        clientName: "Global Corp",
        amount: 1550,
        dueDate: "2025-04-20",
        status: "Pending",
        items: [
          { name: "Cloud Hosting", quantity: 1, price: 500 },
          { name: "App Development", quantity: 2, price: 525 },
        ],
        currencySymbol: "Rs",
      },
    
    {
        id: 6,
        invoiceNumber: "INV-104",
        clientName: "CodeSmiths",
        amount: 990,
        dueDate: "2025-04-05",
        status: "Overdue",
        items: [
          { name: "Consultation", quantity: 2, price: 450 },
          { name: "Domain", quantity: 1, price: 90 },
        ],
        currencySymbol: "Rs",
      },
    
  ];
  
  export default invoiceData;
  
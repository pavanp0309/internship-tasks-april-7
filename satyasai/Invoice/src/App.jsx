import React from 'react'
import Card from './Components/Card.jsx'

const App = () => {
  const invoices = [
    {
      id: 1,
      invoiceNumber: "467",
      clientName: "Chaitanya",
      amount: 1500,
      dueDate: "2025-06-15",
      status: "Pending",
      currencySymbol: "₹",
      items: [
        { name: "webserver design", quantity: 1, price: 1000 },
        { name: "devops development", quantity: 2, price: 500 },
      ],
    },
    {
      id: 2,
      invoiceNumber: "239",
      clientName: "Vishnu",
      amount: 3800,
      dueDate: "2025-05-10",
      status: "Overdue",
      currencySymbol: "₹",
      items: [
        { name: "UI design", quantity: 1, price: 2500 },
        { name: "Django backend Development", quantity: 2, price: 1350 },
      ],
    },
    {
      id: 3,
      invoiceNumber: "873",
      clientName: "Srikanth",
      amount: 4830,
      dueDate: "2025-04-25",
      status: "Pending",
      currencySymbol: "₹",
      items: [
        { name: "social advertisng", quantity: 2, price: 400 },
        { name: "customer data entry", quantity: 1, price: 180 },
      ],
    },
    {
      id: 4,
      invoiceNumber: "730",
      clientName: "Sekhar",
      amount: 2650,
      dueDate: "2023-01-30",
      status: "Overdue",
      currencySymbol: "₹",
      items: [
        { name: "hacking", quantity: 3, price: 2550 },
        { name: "Data science", quantity: 1, price: 280 },
    ],
    },
    {
        id: 5,
        invoiceNumber: "542",
        clientName: "dinesh",
        amount: 1400,
        dueDate: "2025-12-15",
        status: "Pending",
        currencySymbol: "₹",
        items: [
            { name: "VLSI", quantity: 5, price: 1150 },
            { name: "AutoCAD", quantity: 1, price: 250 }
        ],
    },
    {
        id: 6,
        invoiceNumber: "603",
        clientName: "harsha",
        amount: 1480,
        dueDate: "2025-03-20",
        status: "Paid",
        currencySymbol: "₹",
        items: [
          { name: "hospital frontend development", quantity: 1, price: 1000 },
          { name: "Integrated Engineering", quantity: 1, price: 480 },
        ],
    },
  ];
  
  
  return (
    <div>
      <div className="container py-4">
      <h1 className="text-center mb-4">Invoice Dashboard</h1>

      <div className="row">
        {invoices.map((invoice) => (
          <div key={invoice.id} className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4 d-flex">
            <div className="w-100 h-100">
              <Card {...invoice}>
                <button className="btn btn-primary w-100 mt-auto">Download PDF</button>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default App

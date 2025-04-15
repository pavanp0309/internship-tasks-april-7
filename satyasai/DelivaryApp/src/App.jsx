import React from "react";
import Card from "./Components/Card.jsx";

const App = () => {
  const deliveryOrders = [
    {
      orderId: "ORD123456",
      customerName: "Alice Johnson",
      itemsOrdered: ["Wireless Mouse", "USB-C Charger", "Laptop Stand"],
      deliveryAddress: "123 Maple Street, Springfield, IL 62704",
      paymentStatus: "Paid",
      deliveryStatus: "Out for Delivery"
    },
    {
      orderId: "ORD123457",
      customerName: "Brian Smith",
      itemsOrdered: ["Bluetooth Headphones"],
      deliveryAddress: "456 Oak Avenue, Chicago, IL 60616",
      paymentStatus: "COD",
      deliveryStatus: "Shipped"
    },
    {
      orderId: "ORD123458",
      customerName: "Catherine Lee",
      itemsOrdered: ["Notebook", "Gel Pen Set", "Sticky Notes"],
      deliveryAddress: "789 Pine Drive, Naperville, IL 60540",
      paymentStatus: "Paid",
      deliveryStatus: "Delivered"
    },
    {
      orderId: "ORD123459",
      customerName: "Daniel Martinez",
      itemsOrdered: ["Fitness Tracker", "Water Bottle"],
      deliveryAddress: "321 Cedar Blvd, Aurora, IL 60502",
      paymentStatus: "Failed",
      deliveryStatus: "Placed"
    },
    {
      orderId: "ORD123460",
      customerName: "Emily Davis",
      itemsOrdered: ["Desk Lamp", "Wall Calendar"],
      deliveryAddress: "654 Birch Road, Evanston, IL 60201",
      paymentStatus: "COD",
      deliveryStatus: "Out for Delivery"
    },
    {
      orderId: "ORD123461",
      customerName: "Frank Nguyen",
      itemsOrdered: ["Smartwatch", "Phone Case"],
      deliveryAddress: "987 Willow Street, Peoria, IL 61614",
      paymentStatus: "Paid",
      deliveryStatus: "Delivered"
    }
  ];

  return (
    <div
      className="min-vh-100 py-5"
      style={{
        background: "linear-gradient(135deg,rgb(144, 93, 112), #bbdefb)",
        backgroundImage: "url('https://www.transparenttextures.com/patterns/paper-fibers.png')",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="container" style={{ backgroundColor: "lavender", padding: "30px", borderRadius: "10px" }}>
        <h1 className="mb-5 text-center fw-bold text-dark">📦 Delivery Orders</h1>
        <div className="row g-4 justify-content-center">
          {deliveryOrders.map((order, index) => (
            <div className="col-md-4 col-sm-6 d-flex" key={index}>
              <Card order={order} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;

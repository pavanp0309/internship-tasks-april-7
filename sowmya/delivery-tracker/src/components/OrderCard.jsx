import React from "react";
import PaymentBadge from "./PaymentBadge.jsx";
import StatusTracker from "./StatusTracker.jsx";

const getCardColor = (name) => {
  const colorMap = {
    Sowmya: "primary",
    Swetha: "secondary",
    Yswant: "success",
    Kavya: "danger",
    Vamsi: "warning",
    Ganesh: "info",
    Anupriya: "dark",
    Pragna: "primary",
    Suneel: "secondary",
    Suvarna: "success",
    Arjun: "danger",
    Keerthi: "warning"
  };
  return colorMap[name] || "light";
};

const OrderCard = ({ order }) => {
  const {
    id,
    customerName,
    items,
    address,
    paymentStatus,
    deliveryStatus,
    deliveryInstructions,
    deliveryPartner,
    eta
  } = order;

  const cardColor = getCardColor(customerName);
  const totalAmount = items.reduce((sum, item) => sum + item.quantity * item.cost, 0);

  return (
    <div className={`card border-${cardColor} shadow-sm h-100`}>
      <div className={`card-body bg-${cardColor} bg-opacity-10`}>
        <h5 className="card-title">Order ID: {id}</h5>
        <p className="card-text"><strong>Customer:</strong> {customerName}</p>
        
        <p><strong>Items:</strong></p>
        <div className="table-responsive">
          <table className="table table-sm bg-transparent">
            <thead className="table-light">
              <tr>
                <th>Item</th>
                <th>Qty</th>
                <th>Price (₹)</th>
                <th>Total (₹)</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, i) => (
                <tr key={i} className="text-muted">
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.cost}</td>
                  <td>{item.quantity * item.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p><strong>Address:</strong> {address}</p>
        {deliveryInstructions && <p><strong>Instructions:</strong> {deliveryInstructions}</p>}
        {deliveryPartner && <p><strong>Partner:</strong> {deliveryPartner}</p>}
        
        <PaymentBadge status={paymentStatus} />
        <StatusTracker status={deliveryStatus} />
        
        {deliveryStatus !== "Delivered" && eta && (
          <p><strong>ETA:</strong> {eta}</p>
        )}
        
        <p className="fw-bold text-end">Grand Total: ₹{totalAmount}</p>
      </div>
    </div>
  );
};

export default OrderCard;

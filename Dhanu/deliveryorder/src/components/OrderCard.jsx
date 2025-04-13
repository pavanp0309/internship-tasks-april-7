import React from 'react';
import PaymentBadge from './PaymentBadge';
import StatusTracker from './StatusTracker';

const OrderCard = ({ orderdetails = {} }) => {
  const {
    orderId,
    customerName,
    items = [],
    deliveryAddress,
    paymentStatus,
    deliveryStatus,
    deliveryPartner,
    eta,
    deliveryInstructions
  } = orderdetails;

  const totalAmount = items.reduce((sum, item) => sum + item.quantity * item.cost, 0);

  return (
    
    <div
      className="card shadow-sm p-4 mb-4 h-100"
      style={{
        minWidth: '320px',
        borderRadius: '16px',
        background: 'linear-gradient(to right, #f7f9fc, #e4ecf5)', 
        border: '1px solid #dce3ea',
      }}
    >
      <h5 className="fw-bold text-primary">Order ID: {orderId}</h5>
      <p className="mb-1"><strong>Customer:</strong> {customerName}</p>
      <p className="mb-1"><strong>Address:</strong> {deliveryAddress}</p>

      {/* Payment Badge */}
      <PaymentBadge status={paymentStatus} />

      {/* Items Ordered */}
      <div className="mt-3">
        <strong>🛒 Items Ordered:</strong>
        <div className="table-responsive mt-2">
          <table className="table table-sm table-borderless">
            <thead className="table-light">
              <tr>
                <th>Item</th>
                <th>Icon</th>
                <th>Qty</th>
                <th>Price (₹)</th>
                <th>Total (₹)</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, i) => (
                <tr key={i} className="text-muted">
                  <td>{item.name}</td>
                  <td>{item.icon}</td>
                  <td>{item.quantity}</td>
                  <td>{item.cost}</td>
                  <td>{item.quantity * item.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Optional Instructions */}
      {deliveryInstructions && (
        <p className="text-muted"><em>📝 {deliveryInstructions}</em></p>
      )}

      {/* Delivery Partner */}
      {deliveryPartner && (
        <p><strong>👤 Delivery Partner:</strong> {deliveryPartner}</p>
      )}

      {/* ETA */}
      {deliveryStatus !== "Delivered" && eta && (
        <p><strong>⏰ ETA:</strong> {eta}</p>
      )}

      {/* Progress Tracker */}
      <div className="my-3">
        <StatusTracker status={deliveryStatus} />
      </div>

      <p className="fw-bold text-end text-success mb-0">Grand Total: ₹{totalAmount}</p>
    </div>
  );
};

export default OrderCard;

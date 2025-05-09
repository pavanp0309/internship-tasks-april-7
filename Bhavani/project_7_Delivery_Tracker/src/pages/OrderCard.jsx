import React from 'react';

const statusSteps = ["Placed", "Shipped", "Out for Delivery", "Delivered"];

const getPaymentBadge = (status) => {
  switch (status) {
    case "Paid":
      return <span className="badge bg-success">✅ Paid</span>;
    case "COD":
      return <span className="badge bg-warning text-dark">💵 COD</span>;
    case "Failed":
      return <span className="badge bg-danger">❌ Failed</span>;
    default:
      return null;
  }
};

const OrderCard = ({ order }) => {
  const currentStep = statusSteps.indexOf(order.deliveryStatus);

  return (
    <div className="card order-card shadow-sm m-3 p-3">
      <div className="card-body d-flex flex-column justify-content-between h-100">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h5 className="card-title mb-0">Order #{order.id}</h5>
          <small className="text-muted">{order.customerName}</small>
        </div>

        {/* Items */}
        <div className="mb-2">
          <p className="mb-1 fw-medium text-muted">Items Ordered:</p>
          <ul className="mb-0 ps-3 small">
            {order.items.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>

        {/* Address */}
        <p className="small"><strong>Address:</strong> {order.address}</p>

        {/* Payment */}
        <div className="d-flex align-items-center gap-2 mb-2">
          <span className="fw-semibold small">Payment:</span>
          {getPaymentBadge(order.paymentStatus)}
        </div>

        {/* Progress Tracker */}
        <div className="progress-tracker d-flex justify-content-between text-center mb-3">
          {statusSteps.map((step, idx) => (
            <div className="position-relative mx-1 flex-fill" key={step}>
              <div className={`step-circle mx-auto ${idx <= currentStep ? 'bg-primary' : 'bg-secondary'}`}></div>
              <small className="d-block mt-1">{step}</small>
              {idx < statusSteps.length - 1 && (
                <div className={`step-line ${idx < currentStep ? 'bg-primary' : 'bg-light'}`}></div>
              )}
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="d-flex justify-content-end gap-2 flex-wrap">
          {order.deliveryStatus === "Out for Delivery" && (
            <button className="btn btn-sm btn-primary">Track</button>
          )}
          {order.deliveryStatus === "Delivered" && (
            <button className="btn btn-sm btn-success">Rate Order</button>
          )}
          {order.paymentStatus === "Failed" && (
            <button className="btn btn-sm btn-danger">Retry Payment</button>
          )}
          <button className="btn btn-sm btn-outline-secondary">Support</button>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;

import React from "react";

const Card = ({ order }) => {
  const {
    orderId,
    customerName,
    itemsOrdered,
    deliveryAddress,
    paymentStatus,
    deliveryStatus,
    deliveryInstructions,
  } = order;

  
  const getPaymentBadge = () => {
    switch (paymentStatus) {
      case "Paid":
        return <span className="badge rounded-pill bg-success text-white">✅ Paid</span>;
      case "COD":
        return <span className="badge rounded-pill bg-primary text-white">💰 COD</span>;
      case "Failed":
        return <span className="badge rounded-pill bg-danger text-white">❌ Failed</span>;
      default:
        return null;
    }
  };

  
  const getStatusSteps = () => {
    const steps = ["Placed", "Shipped", "Out for Delivery", "Delivered"];
    const currentStep = steps.indexOf(deliveryStatus);
    return (
      <div className="d-flex justify-content-between">
        {steps.map((step, index) => (
          <div key={index} className={`step ${index <= currentStep ? "completed" : ""}`}>
            <span>{step}</span>
          </div>
        ))}
      </div>
    );
  };

 
  const renderActionButton = () => {
    if (deliveryStatus === "Placed") {
      return <button className="btn btn-warning mt-2">Prepare for Shipment</button>;
    } else if (deliveryStatus === "Shipped") {
      return <button className="btn btn-info mt-2">Track Shipment</button>;
    } else if (deliveryStatus === "Out for Delivery") {
      return <button className="btn btn-success mt-2">Confirm Delivery</button>;
    } else if (deliveryStatus === "Delivered") {
      return <button className="btn btn-secondary mt-2" disabled>Delivered</button>;
    } else if (deliveryStatus === "Failed") {
      return <button className="btn btn-danger mt-2">Retry Payment</button>;
    }
  };

  return (
    <div className="card shadow-sm w-100 border-0 rounded-4 text-center h-100 d-flex flex-column">
      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title fw-bold text-primary">Order ID: {orderId}</h5>
        <p className="text-muted mb-1">Customer: <span className="text-dark fw-semibold">{customerName}</span></p>
        <p className="text-muted">Items Ordered: 
          <span className="text-dark fw-semibold">
            {itemsOrdered.join(", ")}
          </span>
        </p>
        <p className="text-muted">Delivery Address: 
          <span className="text-dark fw-semibold">{deliveryAddress}</span>
        </p>
        <p className="text-muted">Payment Status: 
          <span className="text-dark fw-semibold">{getPaymentBadge()}</span>
        </p>
        <p className="text-muted">Delivery Status: 
          <span className="text-dark fw-semibold">{deliveryStatus}</span>
        </p>

       
        <div className="mt-3">
          {getStatusSteps()}
        </div>

       
        <div className="mt-3">
          {renderActionButton()}
        </div>

        
        {deliveryInstructions?.length > 0 && (
          <p className="mt-2 text-muted"><strong>Delivery Instructions:</strong> {deliveryInstructions}</p>
        )}
      </div>
    </div>
  );
};

export default Card;

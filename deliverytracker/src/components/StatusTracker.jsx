import React from "react";

const StatusTracker = ({ status }) => {
  const steps = ["Placed", "Shipped", "Out for Delivery", "Delivered"];

  return (
    <div className="status-tracker">
      {steps.map((step, index) => (
        <span
          key={index}
          className={step === status ? "active-step" : "inactive-step"}
        >
          {step}
        </span>
      ))}
    </div>
  );
};

export default StatusTracker;

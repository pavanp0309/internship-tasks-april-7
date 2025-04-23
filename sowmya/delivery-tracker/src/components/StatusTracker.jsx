import React from "react";

const steps = ["Placed", "Shipped", "Out for Delivery", "Delivered"];

const StatusTracker = ({ status }) => {
  const currentStepIndex = steps.indexOf(status);

  return (
    <div className="progress mb-2" style={{ height: "25px", fontSize: "12px" }}>
      {steps.map((step, idx) => (
        <div
          key={step}
          className={`progress-bar ${idx <= currentStepIndex ? 'bg-success' : 'bg-light text-dark'}`}
          style={{ width: `${100 / steps.length}%` }}
        >
          {step}
        </div>
      ))}
    </div>
  );
};

export default StatusTracker;

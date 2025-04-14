import React from 'react';

const steps = ['Placed', 'Shipped', 'Out for Delivery', 'Delivered'];

const ProgressTracker = ({ currentStatus }) => {
  const currentIndex = steps.indexOf(currentStatus);

  return (
    <div className="progress" style={{ height: '8px' }}>
      {steps.map((step, index) => (
        <div
          key={step}
          className={`progress-bar ${index <= currentIndex ? 'bg-success' : 'bg-light'}`}
          role="progressbar"
          style={{ width: `${100 / steps.length}%` }}
          aria-valuenow={index <= currentIndex ? 25 : 0}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      ))}
    </div>
  );
};

export default ProgressTracker;

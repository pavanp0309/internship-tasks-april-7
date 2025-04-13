import React from 'react';

const StatusTracker = ({ status }) => {
  const statuses = ['Placed', 'Shipped', 'Out for Delivery', 'Delivered'];
  const currentIndex = statuses.indexOf(status);

  return (
    <div className="d-flex justify-content-between mt-4">
      {statuses.map((step, idx) => {
        const isCompleted = idx <= currentIndex;
        return (
          <div
            key={step}
            className={`text-center flex-fill px-1`}
          >
            <div
              className={`rounded-circle mx-auto mb-1 d-flex align-items-center justify-content-center`}
              style={{
                width: 30,
                height: 30,
                backgroundColor: isCompleted ? '#4caf50' : '#e0e0e0',
                color: isCompleted ? 'white' : '#6c757d',
                fontWeight: 'bold'
              }}
            >
              {idx + 1}
            </div>
            <small style={{ fontSize: '0.8rem' }}>{step}</small>
          </div>
        );
      })}
    </div>
  );
};

export default StatusTracker;

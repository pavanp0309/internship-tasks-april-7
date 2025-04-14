import React from 'react';

const SummaryView = ({ metrics }) => {
  let total = 0, goalMet = 0;

  metrics.forEach(group =>
    group.items.forEach(item => {
      total++;
      if (item.achieved >= item.goal) goalMet++;
    })
  );

  const message = goalMet === total ? "🚀 You crushed it!" : "";

  return (
    <div className="alert alert-info d-flex justify-content-between align-items-center">
      <div>
        <strong>Total Metrics:</strong> {total} | <strong>Goals Met:</strong> {goalMet}
      </div>
      {message && <span className="text-success fw-bold">{message}</span>}
    </div>
  );
};

export default SummaryView;

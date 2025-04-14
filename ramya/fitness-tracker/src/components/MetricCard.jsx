import React from 'react';

const MetricCard = ({ type, icon, goal, achieved }) => {
  const percentage = Math.round((achieved / goal) * 100);
  const goalMet = achieved >= goal;
  const isLow = percentage < 50;

  return (
    <div className={`card h-100 shadow-sm ${isLow ? 'border-danger' : 'border-success'}`}>
      <div className="card-body">
        <h5 className="card-title">{icon} {type}</h5>
        <p className="card-text">Goal: {goal} | Achieved: {achieved}</p>

        <div className="progress mb-2">
          <div
            className={`progress-bar ${goalMet ? 'bg-success' : isLow ? 'bg-danger' : 'bg-warning'}`}
            role="progressbar"
            style={{ width: `${percentage}%` }}
            aria-valuenow={percentage}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {percentage}%
          </div>
        </div>

        {goalMet && <span className="badge bg-success">🎯 Goal Met</span>}
        {!goalMet && isLow && <p className="text-danger mt-2">🔥 Keep going!</p>}
      </div>
    </div>
  );
};

export default MetricCard;

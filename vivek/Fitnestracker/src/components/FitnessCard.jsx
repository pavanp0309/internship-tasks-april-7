import React from 'react';
import  '/node_modules/bootstrap/dist/css/bootstrap.css'

const FitnessCard = ({ metric }) => {
  const percentage = Math.min(Math.round((metric.current / metric.goal) * 100), 100);
  const isGoalMet = percentage >= 100;
  const isLowPerformance = percentage < metric.lowThreshold;

  return (
    <div className="col-md-6 mb-4">
      <div className="card h-100 p-3">
        <div className="metric-header">
          <div className="metric-title">
            {metric.icon} {metric.title}
          </div>
          <span className={`metric-percentage ${isGoalMet ? 'bg-success text-white' : 'bg-light text-dark'}`}>
            {percentage}%
          </span>
        </div>

        <div className="progress mb-3">
          <div
            className="progress-bar"
            role="progressbar"
            style={{
              width: `${percentage}%`,
              backgroundColor: isGoalMet 
                ? metric.successColor 
                : isLowPerformance 
                  ? metric.warningColor 
                  : '#adb5bd'
            }}
          />
        </div>

        <div className="metric-values d-flex justify-content-between mb-2">
          <span className="current-value me-3">Current: {metric.current} {metric.unit}</span>
          <span className="goal-value">Goal: {metric.goal} {metric.unit}</span>
        </div>

        {isGoalMet ? (
          <div className="alert alert-success">
            🎯 Goal Met! Excellent work!
          </div>
        ) : isLowPerformance ? (
          <div className="alert alert-warning">
            ⚠️ Keep going! You can do it!
          </div>
        ) : (
          <div className="alert alert-info">
            🔥 Good progress! Almost there!
          </div>
        )}
      </div>
    </div>
  );
};

export default FitnessCard;
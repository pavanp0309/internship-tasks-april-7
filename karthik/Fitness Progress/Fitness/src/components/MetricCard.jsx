import React from "react";

const MetricCard = ({ type, emoji, goal, achieved }) => {
  const progress = Math.min((achieved / goal) * 100, 100);
  const isLow = progress < 50;
  const goalMet = achieved >= goal;

  return (
    <div className={`metric-card ${isLow ? "low" : ""}`}>
      <div className="card-header">
        <span className="emoji">{emoji}</span>
        <strong>{type}</strong>
        {goalMet && <span className="goal-tag">🎯 Goal Met</span>}
      </div>

      <div className="details">
        <p>
          {achieved} / {goal}
        </p>
        <div className="progress-bar-wrapper">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
        {goalMet ? null : (
          <p className="message">{isLow ? "🔥 Keep going!" : "Almost there!"}</p>
        )}
      </div>
    </div>
  );
};

export default MetricCard;

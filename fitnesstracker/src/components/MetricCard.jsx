import React from "react";
import "../styles/tracker.css";

const MetricCard = ({ type, goal, achieved, icon }) => {
  const percent = Math.min((achieved / goal) * 100, 100);
  const goalMet = achieved >= goal;
  const lowPerformance = percent < 50;

  return (
    <>
      <div className="card shadow-sm mb-3 p-3 tracker-card">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h5>{icon} {type}</h5>
          {goalMet && <span className="badge bg-success">🎯 Goal Met</span>}
        </div>

        <p className="mb-1"><strong>Goal:</strong> {goal}</p>
        <p className="mb-1"><strong>Achieved:</strong> {achieved}</p>

        <div className="progress mb-2">
          <div
            className={`progress-bar ${lowPerformance ? "bg-danger" : "bg-info"}`}
            role="progressbar"
            style={{ width: `${percent}%` }}
          >
            {Math.round(percent)}%
          </div>
        </div>

        <div>
          {goalMet ? (
            <span className="text-success">🚀 You crushed it!</span>
          ) : lowPerformance ? (
            <span className="text-danger">🔥 Keep going!</span>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default MetricCard;

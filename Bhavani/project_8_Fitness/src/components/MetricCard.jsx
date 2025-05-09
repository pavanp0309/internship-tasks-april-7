import React from "react";

const MetricCard = ({
  type,
  icon,
  achieved,
  goal,
  description,
  progressHistory,
  dateRange,
  backgroundImage, // new prop
  category,
  lastUpdated,
  owner,
}) => {
  const percentage = Math.round((achieved / goal) * 100);
  const goalMet = percentage >= 100;
  const lowProgress = percentage < 50;

  const cardStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    color: "#fff", // Ensure contrast
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.5)", // dark overlay for text readability
    zIndex: 1,
    borderRadius: "0.5rem",
  };

  const contentStyle = {
    position: "relative",
    zIndex: 2,
  };

  return (
    <div className="card shadow-sm border-0 metric-card h-100" style={cardStyle}>
      <div style={overlayStyle}></div>
      <div className="card-body d-flex flex-column" style={contentStyle}>
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-2">
          <div className="d-flex align-items-center">
            <i className={`bi ${icon} fs-3 text-white me-2`}></i>
            <h5 className="card-title mb-0">{type}</h5>
          </div>
          {goalMet && (
            <span className="badge bg-success">
              <i className="bi bi-check-circle me-1"></i>Goal Met
            </span>
          )}
        </div>

        {/* Extra data */}
        <p className="mb-1">
          <strong>Category:</strong> {category || "N/A"}
        </p>
        <p className="mb-1">
          <strong>Owner:</strong> {owner || "N/A"}
        </p>
        <p className="mb-2 text-light">
          <small>Last updated: {lastUpdated || "Unknown"}</small>
        </p>

        {/* Description */}
        {description && <p className="mb-2">{description}</p>}

        {/* Date range */}
        {dateRange && <p className="text-light mb-2">{dateRange}</p>}

        {/* Achieved / Goal */}
        <p className="mb-2">
          <strong>{achieved} / {goal}</strong>
        </p>

        {/* Progress bar */}
        <div className="progress mb-2" style={{ height: "10px" }}>
          <div
            className={`progress-bar ${
              goalMet ? "bg-success" : lowProgress ? "bg-danger" : "bg-info"
            }`}
            role="progressbar"
            style={{ width: `${Math.min(percentage, 100)}%` }}
            title={`Progress: ${percentage}%`}
          ></div>
        </div>

        {/* Feedback */}
        <p className="fst-italic mb-0">
          {goalMet && "🚀 You crushed it!"}
          {!goalMet && lowProgress && "⚠️ Keep going!"}
          {!goalMet && !lowProgress && "🔄 Keep it up!"}
        </p>

        {/* Progress History */}
        {progressHistory?.length > 0 && (
          <div className="mt-3">
            <h6 className="text-light">Progress History</h6>
            <ul className="list-unstyled">
              {progressHistory.map((entry, index) => (
                <li key={index}>
                  <small>{entry.date}: {entry.value} {entry.unit}</small>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Help text */}
        <div className="mt-3">
          <p className="text-light">
            Need help achieving your goal? Check out our guides or contact support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MetricCard;

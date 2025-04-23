import React from "react";

const MetricCard = ({ type, emoji, goal, achieved }) => {
  const percentage = Math.min((achieved / goal) * 100, 100);
  const goalMet = achieved >= goal;
  const lowPerformance = percentage < 50;

  const getMessage = () => {
    if (goalMet) {
      return (
        <span className="text-white fw-semibold">
          🎉 Amazing! You nailed your goal. Keep up the momentum!
        </span>
      );
    }
    if (lowPerformance) {
      return (
        <span className="fw-semibold">
          😓 You're just getting started. Push a bit harder tomorrow!
        </span>
      );
    }
    if (percentage >= 75) {
      return (
        <span className="text-light fw-semibold">
          💪 You're almost there. A little more effort will smash that goal!
        </span>
      );
    }
    return (
      <span className="fw-semibold">
        📈 You're making progress. Stay consistent!
      </span>
    );
  };

  const progressBarClass = goalMet ? "bg-success" : "bg-danger";
  const cardBorder = lowPerformance ? "border-danger" : "border-secondary";

  // Gradient background based on type
  const getGradientBackground = (type) => {
    switch (type) {
      case "Steps":
        return "linear-gradient(135deg, #00c9ff 0%, #92fe9d 100%)";
      case "Water":
        return "linear-gradient(135deg, #2193b0 0%, #6dd5ed 100%)";
      case "Sleep":
        return "linear-gradient(135deg, #434343 0%, black 100%)";
      case "Heart Rate":
        return "linear-gradient(135deg, #ff416c 0%, #ff4b2b 100%)";
      case "Calories Burned":
        return "linear-gradient(135deg, #f12711 0%, #f5af19 100%)";
      case "Workout Time":
        return "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
      case "Distance Run":
        return "linear-gradient(135deg, #56ab2f 0%, #a8e063 100%)";
      case "Cycling Time":
        return "linear-gradient(135deg, #ff9966 0%, #ff5e62 100%)";
      default:
        return "linear-gradient(135deg, #bdc3c7 0%, #2c3e50 100%)";
    }
  };

  return (
    <div
      className={`card mb-4 shadow-lg text-white ${cardBorder}`}
      style={{
        width: "18rem",
        background: getGradientBackground(type),
        border: "none"
      }}
    >
      <div className="card-body" style={{ color: "white" }}>
        <h5 className="card-title">
          {emoji} {type}
        </h5>
        <p className="card-text">
          Goal: <strong>{goal}</strong>
        </p>
        <p className="card-text">
          Achieved: <strong>{achieved}</strong>
        </p>

        <div className="progress mb-2" style={{ backgroundColor: "rgba(255,255,255,0.3)" }}>
          <div
            className={`progress-bar ${progressBarClass}`}
            role="progressbar"
            style={{ width: `${percentage}%` }}
            aria-valuenow={percentage}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>

        <p className={`fw-semibold ${goalMet ? "text-light" : "text-warning"}`}>
          {goalMet ? "✅ Goal Met" : "❌ Goal Not Met"}
        </p>

        <p className="card-text">{getMessage()}</p>
      </div>
    </div>
  );
};

export default MetricCard;

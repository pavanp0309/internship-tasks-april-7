import React from "react";
import MetricCard from "./MetricCard";
import { fitnessData } from "../data/data";

const Dashboard = () => {
  const allGoalsMet = fitnessData.every(metric => metric.achieved >= metric.goal);

  const renderCards = (category) =>
    fitnessData
      .filter(metric => metric.category === category)
      .map((metric, idx) => <MetricCard key={idx} {...metric} />);

  return (
    <div className="container py-4" >
      <h1 className="mb-4 text-center text-dark">🏋️ Fitness Progress Tracker</h1>

      <h3 className="text-primary p-2">🩺 Health Metrics</h3>
      <div className="d-flex flex-wrap gap-3 mb-4">
        {renderCards("Health")}
      </div>

      <h3 className="text-danger p-2">💪 Exercise Metrics</h3>
      <div className="d-flex flex-wrap gap-3 mb-4">
        {renderCards("Exercise")}
      </div>

      {allGoalsMet && (
        <div className="alert alert-success text-center mt-4 fw-bold">
          🚀 All goals achieved! Incredible work!
        </div>
      )}
    </div>
  );
};

export default Dashboard;

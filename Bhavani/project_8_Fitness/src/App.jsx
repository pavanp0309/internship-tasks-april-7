import React from "react";
import MetricCard from "./components/MetricCard";

const metrics = [
  {
    type: "Steps",
    icon: "bi-shoe-prints",
    achieved: 8000,
    goal: 10000,
    description: "Track your daily steps and stay active.",
    dateRange: "April 1 - April 7",
    backgroundImage: "/steps.jpg", 
    category: "Fitness",
    owner: "John Doe",
    lastUpdated: "2025-04-10",
    progressHistory: [
      { date: "Apr 1", value: 5000, unit: "steps" },
      { date: "Apr 2", value: 7500, unit: "steps" },
    ],
  },
  {
    type: "Water",
    icon: "bi-droplet",
    achieved: 6,
    goal: 8,
    description: "Stay hydrated by tracking your daily water intake.",
    dateRange: "April 1 - April 7",
    backgroundImage: "/water.jpg",
    category: "Hydration",
    owner: "Jane Smith",
    lastUpdated: "2025-04-09",
    progressHistory: [
      { date: "Apr 1", value: 5, unit: "glasses" },
      { date: "Apr 2", value: 6, unit: "glasses" },
    ],
  },
  {
    type: "Calories",
    icon: "bi-fire",
    achieved: 1800,
    goal: 2000,
    description: "Keep an eye on your daily caloric intake.",
    dateRange: "April 1 - April 7",
    backgroundImage: "/calories.jpg",
    category: "Nutrition",
    owner: "Alex Lee",
    lastUpdated: "2025-04-11",
    progressHistory: [
      { date: "Apr 1", value: 1600, unit: "kcal" },
      { date: "Apr 2", value: 1800, unit: "kcal" },
    ],
  },
  {
    type: "Workout",
    icon: "bi-heart-pulse",
    achieved: 40,
    goal: 60,
    description: "Track total minutes of workout this week.",
    dateRange: "April 1 - April 7",
    backgroundImage: "/workout.jpg",
    category: "Exercise",
    owner: "Sam Jordan",
    lastUpdated: "2025-04-08",
    progressHistory: [
      { date: "Apr 1", value: 20, unit: "mins" },
      { date: "Apr 2", value: 20, unit: "mins" },
    ],
  },
];

function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar shadow navbar-expand-lg navbar-dark bg-dark px-3">
        <span className="navbar-brand">🏋️‍♂️ Hello Bhavani!</span>

        <div className="ms-auto d-flex align-items-center gap-3 text-white">
          <i className="bi bi-bell fs-5" role="button" title="Notifications"></i>
          <i className="bi bi-gear fs-5" role="button" title="Settings"></i>

          {/* Profile section */}
          <div className="d-flex align-items-center">
            <i className="bi bi-person-circle fs-4 me-2" role="button" title="Profile"></i>
            <div className="text-end">
              <div className="fw-semibold">Gopu Bhavani</div>
              <small className="text-white">bhavanigopu007@gmail.com</small>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container py-4">
        <h2 className="mb-4 text-white text-center">💪 Fitness Progress Tracker</h2>
        <div className="row g-3">
          {metrics.map((metric, i) => (
            <div className="col-md-4 col-lg-3" key={i}>
              <MetricCard {...metric} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

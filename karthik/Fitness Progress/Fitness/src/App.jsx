import React from "react";
import { metrics } from "./data/metrics";
import CategorySection from "./components/CategorySection";
import "./components/styles.css";

const App = () => {
  const allGoalsMet = metrics.every(m => m.achieved >= m.goal);

  return (
    <div className="app-container">
      <h1>🏋️ Fitness Progress Tracker</h1>
      {allGoalsMet && <p className="celebrate">🚀 You crushed it!</p>}
      <CategorySection title="Health" items={metrics.filter(m => m.category === "Health")} />
      <CategorySection title="Exercise" items={metrics.filter(m => m.category === "Exercise")} />
    </div>
  );
};

export default App;

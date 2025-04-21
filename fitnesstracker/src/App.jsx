import React from "react";
import { fitnessMetrics, weeklySummary} from "./data/fitness";
import MetricGroup from "./components/MetricGroup";
import SummaryView from "./components/SummaryView";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/tracker.css";

const App = () => {
  return (
    <>
      <div className="container my-4">
        <h2 className="text-center mb-4 metric-heading fw-bold">🏃 Fitness Progress Tracker</h2>

        {fitnessMetrics.map((group, idx) => (
          <MetricGroup key={idx} title={group.category} metrics={group.metrics} />
        ))}

        <SummaryView summary={weeklySummary} />
      </div>
    </>
  );
};

export default App;

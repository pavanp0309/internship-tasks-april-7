import React from 'react';
import MetricGroup from './components/MetricGroup';
import SummaryView from './components/SummaryView';

const App = () => {
  const metrics = [
    {
      category: "Health",
      items: [
        { type: "Steps", icon: "👣", goal: 10000, achieved: 8500 },
        { type: "Water", icon: "💧", goal: 8, achieved: 5 },
        { type: "Calories", icon: "🍔", goal: 2200, achieved: 2200 },
      ],
    },
    {
      category: "Exercise",
      items: [
        { type: "Workout Time", icon: "🏋️", goal: 60, achieved: 75 },
      ],
    },
  ];

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">🏃 Fitness Progress Tracker</h1>
      <SummaryView metrics={metrics} />
      {metrics.map((group, index) => (
        <MetricGroup key={index} title={group.category}>
          {group.items.map((item, idx) => (
            <MetricGroup.MetricCard key={idx} {...item} />
          ))}
        </MetricGroup>
      ))}
    </div>
  );
};

export default App;

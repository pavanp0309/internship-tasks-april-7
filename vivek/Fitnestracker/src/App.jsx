import React from 'react';
import FitnessCard from './components/FitnessCard';
import { fitnessData } from './data/Data';
import './App.css';

const App = () => {
  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">🏋️‍♀️ Fitness Progress Tracker</h1>
      
      {fitnessData.map((category) => (
        <div key={category.category} className="mb-5">
          <h2 className="mb-3">{category.category}</h2>
          <div className="row">
            {category.metrics.map((metric) => (
              <FitnessCard key={metric.id} metric={metric} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
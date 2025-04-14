import React from 'react';
import { sessionsData } from './data';
import CategorySection from './components/CategorySection';

const App = () => {
  return (
    <div className="app-container">
      <header className="bg-primary text-white text-center py-4 mb-4">
        <h1>🧘‍♀️ Mindful Moments</h1>
        <p className="lead mb-0">Explore your meditation journey</p>
      </header>

      <div className="container">
        {sessionsData.map((section, idx) => (
          <CategorySection key={idx} title={section.category} sessions={section.sessions} />
        ))}
      </div>

      
    </div>
  );
};

export default App;

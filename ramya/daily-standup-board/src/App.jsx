import React from 'react';
import { teamData } from './data';
import TeamSection from './components/TeamSection';

const App = () => {
  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">📝 Daily Standup Board</h1>
      {teamData.map((team, index) => (
        <TeamSection key={index} title={team.team} members={team.members} />
      ))}
    </div>
  );
};

export default App;

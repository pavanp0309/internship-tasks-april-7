import React from 'react';
import Card from './components/Card';
import TeamBoard from './components/TeamBoard';
import standupData from './data/data';

import './index.css';

const App = () => {
  const teams = [...new Set(standupData.map(user => user.team))];

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">🚀 Daily Standup Board</h1>
      {teams.map(team => {
        const members = standupData.filter(user => user.team === team);
        const avgTasks = (members.length * 2).toFixed(1); // yesterday + today per user

        return (
          <div key={team} className="mb-5">
            <TeamBoard teamName={team}>
              <p><em>Average Tasks per User: {avgTasks}</em></p>
              <div className="row ">
                {members.map((member, index) => (
                  <div key={index} className="col-12 col-sm-6 col-md-4">
                    <Card member={member} />
                  </div>
                ))}
              </div>
            </TeamBoard>
          </div>
        );
      })}
    </div>
  );
};

export default App;
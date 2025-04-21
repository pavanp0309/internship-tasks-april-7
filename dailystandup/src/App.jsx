// src/App.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/standup.css';
import { teams } from './data/team';
import TeamSection from './components/TeamSelection';

const App = () => {
  return (
<div className="d-flex justify-content-center align-items-center flex-column min-vh-100 text-center">
  <h1 className="mb-4">Daily Standup Board</h1>
      {Object.entries(teams).map(([team, members], index) => (
        <TeamSection key={index} teamName={team} members={members} />
      ))}
    </div>
  );
};

export default App;

import React from 'react';
import './App.css';
import Team from './components/Team';

const App = () => {
  const teams = [
    {
      name: "Rahul's Frontend",
      members: [
        { name: 'Deepak', yesterday: 'Worked on UI', today: 'Fix bugs', blockers: 'None' },
        { name: 'Swaroop', yesterday: 'Reviewed PRs', today: 'Implement feature', blockers: 'API issues' },
        { name: 'Karthik', yesterday: 'Database optimization', today: 'API development', blockers: 'None' },
        { name: 'Divya', yesterday: 'Server setup', today: 'Deploy updates', blockers: 'Server downtime' },
      ],
    },
    {
      name: "David's Backend ",
      members: [
        { name: 'Kavya', yesterday: 'Reviewed PRs', today: 'Implement feature', blockers: 'API issues' },
        { name: 'Ramya', yesterday: 'Worked on UI', today: 'Fix bugs', blockers: 'None' },
        { name: 'Charulatha', yesterday: 'Database optimization', today: 'API development', blockers: 'None' },
        { name: 'Dhanush', yesterday: 'Server setup', today: 'Deploy updates', blockers: 'Server downtime' },
      ],
    },
    {
      name: "Sanjay's SQL DataBase ",
      members: [
        { name: 'Bheem', yesterday: 'Optimized queries', today: 'Design new schema', blockers: 'None' },
        { name: 'Vijay', yesterday: 'Reviewed DB design', today: 'Implement indexing', blockers: 'Approval stoped' },
        { name: 'Sravani', yesterday: 'Backed up databases', today: 'Restore test environment', blockers: 'Server downtime' },
        { name: 'Sravan', yesterday: 'Monitor performance', today: 'Analyze slow queries', blockers: 'API issues' },
      ],
    },
  ];

  return (
    <div className="container">
      <h1 className='Board'>Daily Team's Standup Board </h1>
    {/* <div className="container d-flex justify-content-between"> */}
      {teams.map((team, index) => (
        <div key={index} className="team-container d-flex justify-content-between ">
          <Team name={team.name} members={team.members} />
        </div>
      ))}
      <h1 className='Board1'>Please Update Me EveryDay... </h1>
    </div>
  );
};

export default App;


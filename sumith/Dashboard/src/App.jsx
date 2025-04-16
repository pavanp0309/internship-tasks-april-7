import React from 'react';
import Card from './components/Card';
import data from './data/data';

const App = () => {
  // Group by teams
  const groupedTeams = {
    Datascience: data.filter(task => task.team === "Datascience"),
    DataAnalyst: data.filter(task => task.team === "DataAnalyst"),
    
  };

  // Gradient backgrounds
  const gradients = {
    Datascience: "linear-gradient(to right,rgb(160, 78, 121),rgb(62, 148, 141) ",
    DataAnalyst: "linear-gradient(to right,rgb(140, 173, 188),rgb(73, 95, 133))",
   
  };

  return (
    <div className='header text-center'>
      <h1 className='text-primary'><b>DAILY STANDUP BOARD</b></h1>
    <div className="container mt-4">
      {Object.entries(groupedTeams).map(([team, members]) => (
        <div key={team} className="p-4 mb-4 rounded" style={{ background: gradients[team], border: '2px solid #333' }}>
          <h3 className="text-center mb-4 ">{team} Team</h3>
          <div className="row justify-content-center">
            {members.map(member => (
              <div className="col-md-4 mb-4" key={member.id}>
                <Card data={member} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default App;


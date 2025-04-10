import React from 'react';
import './Team.css';
import Card from './Card';

const Team = ({ name, members }) => {
  return (
      <div className="team-container">
      <div className="flexbox-container">
        <h2 className="team-title">{name} Team</h2>
        <div className="first-column col">
          <div className="row">
            {members.slice(0, 4).map((member, index) => (
                <div className="card" key={index}>
                <Card {...member} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;

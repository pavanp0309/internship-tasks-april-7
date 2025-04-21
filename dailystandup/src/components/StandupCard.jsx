import React from 'react';
import '../styles/standup.css';

const StandupCard = ({ member }) => {
  const hasBlockers = !!member.blockers;

  return (
    <div className="card standup-card">
      <div className="card-body">
        <h5 className="card-title">{member.name}</h5>
        <p><strong>Yesterday:</strong> {member.yesterday}</p>
        <p><strong>Today:</strong> {member.today}</p>
        {
          hasBlockers ? (
            <div className="blockers border border-danger p-2 text-danger">
              ❗ <strong>Blockers:</strong> {member.blockers}
            </div>
          ) : (
            <div className="text-success">
              ✅ <strong>All clear</strong>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default StandupCard;

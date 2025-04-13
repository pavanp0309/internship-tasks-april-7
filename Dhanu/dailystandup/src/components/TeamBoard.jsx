import React from 'react';

const TeamBoard = ({ team, children, memberCount }) => {
  return (
    <div className="p-4 bg-white rounded shadow-sm mb-4 border">
      <h4 className="mb-3">{team} Team</h4>
      <p className="text-muted">🧮 Avg. tasks per member: {memberCount * 2}</p>
      <div className="row">
        {children}
      </div>
    </div>
  );
};

export default TeamBoard;

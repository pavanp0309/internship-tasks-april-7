import React from 'react';

const TeamBoard = ({ teamName, children }) => {
  return (
    <div>
      <h2 className="mb-3">{teamName} Team</h2>
      {children}
    </div>
  );
};

export default TeamBoard;
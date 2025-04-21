import React from 'react';
import LayoutBox from './LayoutBox';
import StandupCard from './StandupCard';

const TeamSection = ({ teamName, members }) => {
  const avgTasks = members.length > 0 ? (members.length * 2).toFixed(0) : 0;

  return (
    <LayoutBox title={`${teamName} Team - Avg Tasks: ${avgTasks}`}>
      <div className="row justify-content-center">
        {members.map((member, index) => (
          <div className="col-md-6 col-lg-4 mb-3" key={index}>
            <StandupCard member={member} />
          </div>
        ))}
      </div>
    </LayoutBox>
  );
};

export default TeamSection;

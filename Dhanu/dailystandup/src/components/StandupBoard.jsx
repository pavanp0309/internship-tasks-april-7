import React from 'react';
import standupData from '../data/data';
import TeamBoard from './TeamBoard';
import MemberCard from './MemberCard';

const StandupBoard = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-5">🪖 Defence Personnel Daily Standup</h2>

      {standupData.map((team, idx) => (
        <TeamBoard
          key={idx}
          team={team.team}
          memberCount={team.members.length}
        >
          {team.members.map((member, i) => (
            <div className="col-12 col-md-6 col-lg-4" key={i}>
              <MemberCard {...member} />
            </div>
          ))}
        </TeamBoard>
      ))}
    </div>
  );
};

export default StandupBoard;

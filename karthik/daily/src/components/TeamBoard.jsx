import React from 'react'
import TeamBoard from ".TeamBoard";

const TeamBoard = () => {
  return (
    <div className="mb-5">
      <h2>{teamName}</h2>
      <p className="text-muted">📊 Avg. Tasks per Chef: {avgTasks}</p>
      <div className="row">
        {members.map((member, index) => (
          <MemberCard
            key={index}
            member={member}
            bgColor={cardColors[index % cardColors.length]}
          />
        ))}
      </div>
    </div>
  )
}

export default TeamBoard

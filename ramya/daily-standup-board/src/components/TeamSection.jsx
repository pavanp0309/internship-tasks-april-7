import React from 'react';
import MemberCard from './MemberCard';

const TeamSection = ({ title, members }) => {
  const totalTasks = members.reduce(
    (acc, m) => acc + m.yesterday.length + m.today.length,
    0
  );
  const avgTasks = (totalTasks / members.length).toFixed(1);

  return (
    <>
      <h3 className="mt-4">{title} Team <span className="text-muted">• Avg Tasks: {avgTasks}</span></h3>
      <div className="row">
        {members.map((member, idx) => (
          <div className="col-md-6 mb-3" key={idx}>
            <MemberCard {...member}>
              <div className="task-list">
                <strong>✅ Yesterday:</strong>
                <ul>
                  {member.yesterday.map((task, i) => <li key={i}>{task}</li>)}
                </ul>
                <strong>📌 Today:</strong>
                <ul>
                  {member.today.map((task, i) => <li key={i}>{task}</li>)}
                </ul>
              </div>
            </MemberCard>
          </div>
        ))}
      </div>
    </>
  );
};

export default TeamSection;

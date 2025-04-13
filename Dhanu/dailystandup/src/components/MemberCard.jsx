import React from 'react';

const MemberCard = ({ name, yesterdayTask, todayTask, blockers }) => {
  return (
    <div className="card p-3 mb-3 shadow-sm border border-secondary-subtle rounded">
      <h5 className="fw-bold">{name}</h5>
      <p><strong>🗓️ Yesterday:</strong> {yesterdayTask}</p>
      <p><strong>📌 Today:</strong> {todayTask}</p>

      {blockers ? (
        <div className="p-2 border border-danger text-danger rounded bg-light">
          <strong>❗ Blockers:</strong> {blockers}
        </div>
      ) : (
        <div className="text-success fw-bold mt-2">✅ All clear</div>
      )}
    </div>
  );
};

export default MemberCard;

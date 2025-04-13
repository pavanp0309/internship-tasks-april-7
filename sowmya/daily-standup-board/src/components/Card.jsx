import React from 'react';

const Card = ({ member }) => {
  const hasBlockers = !!member.blockers;

  const cardClass = `card mb-3 shadow-sm ${hasBlockers ? 'border-danger bg-light' : 'border-success bg-white'}`;

  return (
    <div className={cardClass}>
      <div className="card-body">
        <h5 className="card-title">{member.name}</h5>
        <p className="card-text"><strong>Yesterday:</strong> {member.yesterday}</p>
        <p className="card-text"><strong>Today:</strong> {member.today}</p>
        {hasBlockers ? (
          <p className="card-text text-danger"><strong>Blockers ❗</strong>: {member.blockers}</p>
        ) : (
          <p className="card-text text-success"><strong>All Clear ✅</strong></p>
        )}
      </div>
    </div>
  );
};

export default Card;
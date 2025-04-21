import React from 'react';
import SessionCard from './SessionCard';

const SessionCategory = ({ category, sessions }) => {
  return (
    <div className="category-section">
      <h3>{category}</h3>
      <div className="row">
        {sessions.map((session, index) => (
          <SessionCard
            key={index}
            name={session.name}
            category={session.category}
            duration={session.duration}
            isLocked={session.isLocked}
            isPremium={session.isPremium}
            description={session.description}
            isNew={session.isNew}
          />
        ))}
      </div>
    </div>
  );
};

export default SessionCategory;

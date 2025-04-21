import React from 'react';
import SessionCategory from './SessionCategory';

const SessionList = ({ sessionsData }) => {
  const categories = ['Focus', 'Sleep', 'Anxiety'];
  const categorizedSessions = categories.map((category) => {
    return {
      category: category,
      sessions: sessionsData.filter(session => session.category === category)
    };
  });

  return (
    <div>
      {categorizedSessions.map((data, index) => (
        <SessionCategory key={index} category={data.category} sessions={data.sessions} />
      ))}
    </div>
  );
};

export default SessionList;

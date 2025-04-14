import React from 'react';
import SessionCard from './SessionCard';

const CategorySection = ({ title, sessions }) => {
  return (
    <>
      <h3 className="mt-5">{title} 🧘</h3>
      <div className="row">
        {sessions.map((session, idx) => (
          <div className="col-md-6 col-lg-4 mb-4" key={idx}>
            <SessionCard {...session} />
          </div>
        ))}
      </div>
    </>
  );
};

export default CategorySection;

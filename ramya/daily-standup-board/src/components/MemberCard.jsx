import React from 'react';

const MemberCard = ({ name, blockers, children }) => {
  const hasBlockers = blockers?.trim().length > 0;

  return (
    <div className={`card h-100 shadow-sm ${hasBlockers ? 'border-danger' : 'border-success'}`}>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        {children}

        <div className="mt-3">
          {hasBlockers ? (
            <div className="alert alert-danger p-2 mb-0">
              ❗ <strong>Blockers:</strong> {blockers}
            </div>
          ) : (
            <span className="badge bg-success">✅ All clear</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default MemberCard;

import React from 'react';

const SessionCard = ({ title, duration, available, badge, children }) => {
  return (
    <div className={`card session-card h-100 shadow-sm ${!available ? 'locked' : ''}`}>
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title d-flex justify-content-between align-items-center">
            {title}
            {badge && <span className="badge bg-info text-dark">{badge}</span>}
          </h5>
          <p className="card-text">🕒 {duration}</p>
          {children}
        </div>

        <div className="mt-3">
          {!available ? (
            <span className="badge bg-secondary px-3 py-2">🔒 Locked</span>
          ) : (
            <button className="btn btn-success w-100">Start Session</button>
          )}
        </div>
      </div>
    </div>
  );
};

SessionCard.defaultProps = {
  badge: null,
  children: <></>,
};

export default SessionCard;

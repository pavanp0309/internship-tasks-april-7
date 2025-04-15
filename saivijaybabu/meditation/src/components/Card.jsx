// Card.jsx
import React from "react";

const Card = ({
  name,
  duration,
  isLocked,
  isPremium,
  description,
  children,
  showTimer,
  isNew
}) => {
  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="card-title mb-0">
            {name}
            {isNew && <span className="badge bg-success ms-2">New 🌟</span>}
          </h5>
          {isLocked && <i className="bi bi-lock-fill text-danger" title="Locked"></i>}
        </div>

        {isPremium && <span className="badge bg-warning text-dark mb-2">Premium</span>}

        <p className="card-text mb-1"><strong>Duration:</strong> {duration}</p>
        {description && <p className="card-text text-muted">{description}</p>}

        {showTimer && !isLocked && (
          <div className="mb-2">
            <small className="text-secondary">🕒 Timer Preview</small>
          </div>
        )}

        <div className="d-flex gap-2">
          {isLocked ? (
            <button className="btn btn-outline-danger btn-sm">Unlock Now</button>
          ) : (
            <button className="btn btn-primary btn-sm">Start Session</button>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};

Card.defaultProps = {
  showTimer: false,
  isNew: false
};

export default Card;

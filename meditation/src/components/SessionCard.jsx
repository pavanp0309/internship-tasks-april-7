import React from 'react';

const SessionCard = ({ name, category, duration, isLocked, isPremium, description, isNew }) => {
  return (
    <div className="col-md-4 col-sm-6 px-2 mb-4 d-flex">
      <div className="card w-100">
        <div className="card-body d-flex flex-column">
          {isNew && <span className="badge bg-success mb-2">New</span>}

          <h5 className="card-title">{name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{category}</h6>
          <p className="card-text">Duration: {duration}</p>

          {isPremium && <span className="badge bg-warning text-dark mb-3 d-inline-block">Premium</span>}

          <div className="mt-auto">
            {isLocked ? (
              <button className="btn btn-secondary w-100">Unlock Now</button>
            ) : (
              <button className="btn btn-primary w-100">Start Session</button>
            )}
          </div>

          {description && !isLocked && <p className="mt-3">{description}</p>}
        </div>
      </div>
    </div>
  );
};

SessionCard.defaultProps = {
  description: 'No description available',
};

export default SessionCard;

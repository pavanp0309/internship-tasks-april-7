import React from 'react';

const Card = ({ sessions: { name, category, duration, locked, isPremium, image, description } }) => {
  const handleError = (e) => {
    e.target.src = 'https://via.placeholder.com/300?text=Image+Not+Available';  // Fallback image
  };

  return (
    <div className="card shadow-sm w-100 border-0 rounded-4 text-center h-100 d-flex flex-column">
      <img
        src={image}
        className="card-img-top rounded-top-4"
        alt={name || "Meditation session"}
        onError={handleError}
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title fw-bold text-primary">{name}</h5>
          <p className="text-muted mb-1">Category: <span className="text-dark fw-semibold">{category}</span></p>
          <p className="text-muted">Duration: <span className="text-dark fw-semibold">{duration}</span></p>
        </div>
        
        {/* Conditionally Render Description */}
        {description && (
          <p className="text-muted mt-2">{description}</p>
        )}
        
        <div className="mt-3">
          {locked ? (
            <>
              <span className="badge rounded-pill bg-danger me-2">🔒 Locked</span>
              <button className="btn btn-warning mt-2">Unlock Now</button>
            </>
          ) : (
            <button className="btn btn-success mt-2">Start Session</button>
          )}

          {isPremium && (
            <span className="badge rounded-pill bg-warning text-dark ms-2">💎 Premium</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;

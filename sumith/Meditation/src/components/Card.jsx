import React from 'react';

const Card = ({ sessions: { name, category, duration, locked, isPremium, image, description } }) => {
  const handleError = (e) => {
    e.target.src = 'https://via.placeholder.com/300?text=Image+Not+Available';  // Fallback image
  };

  return (
    <div className="card border-0 rounded-4  ">
      <img
        src={image}
        className="card-img-top rounded-top-4"
        alt={name || "Meditation session"}
        onError={handleError}
        style={{ height: '150px', objectFit: 'cover' }}
      />
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title fw-bold text-danger">{name}</h5>
          <p className="text-muted mb-1">Category: <span className="text-dark fw-semibold">{category}</span></p>
          <p className="text-muted">Duration: <span className="text-dark fw-semibold">{duration}</span></p>
        </div>
        
        {/* Conditionally Render Description */}
        {description && (
          <p className="desc">{description}</p>
        )}
        
        <div className="mt-3 d-flex justify-content-center">
          {locked ? (
            <>
              <button className="btn btn-danger me-2  ">🔒 Locked</button>
              <button className="btn btn-primary ">Unlock Now</button>
            </>
          ) : (
            <button className="btn btn-primary me-2 " id='start'>Start Session</button>
          )}

          {isPremium && (
            <button className="btn btn-warning  "id='start'>💎 Premium</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;

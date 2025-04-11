import React from "react";


const SessionCard = ({ session }) => {
  const {
    name,
    duration,
    isLocked,
    isPremium,
    isNew,
    description = "",
  } = session;

  const backgroundImage = session.image || "/images/default.jpg";


  return (
    <div
      className="session-card shadow-sm"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="overlay">
        <div className="card-body">
          <h5 className="card-title d-flex text-white justify-content-between align-items-center">
            <span>
              {name}
              {isPremium && (
                <span className="badge bg-warning text-dark ms-2">
                  <i className="bi bi-star-fill me-1"></i>Premium
                </span>
              )}
              {isNew && (
                <span className="badge bg-danger text-white ms-2">
                  <i className="bi bi-fire me-1"></i>New
                </span>
              )}
            </span>
            <i
              className={`bi ${
                isLocked ? "bi-lock-fill text-secondary" : "bi-unlock text-success"
              } fs-5`}
            ></i>
          </h5>

          <h6 className="card-subtitle mb-2 text-light">
            <i className="bi bi-stopwatch me-1"></i>
            {duration}
          </h6>

          {description && <p className="card-text text-white">{description}</p>}

          <button
            className={isLocked ? "btn btn-outline-light" : "btn btn-success"}
          >
            <i
              className={`bi me-1 ${
                isLocked ? "bi-unlock-fill" : "bi-play-fill"
              }`}
            ></i>
            {isLocked ? "Unlock Now" : "Start Session"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SessionCard;

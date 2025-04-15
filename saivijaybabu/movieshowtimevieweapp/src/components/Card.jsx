// Card.jsx
import React, { Fragment } from "react";

const getShowtimeColor = (time) => {
  const hour = parseInt(time.split(":")[0], 10);
  if (hour < 12) return "warning"; // Morning
  if (hour < 17) return "primary"; // Afternoon
  return "danger"; // Evening
};

const getStars = (count) => {
  return "★".repeat(count) + "☆".repeat(5 - count);
};

const isNowPlaying = (time) => {
  // Dummy logic: if time is "1:00 PM" or "10:30 AM", assume it's playing now
  return ["1:00 PM", "10:30 AM"].includes(time);
};

const Card = ({title,theater,rating, language, genre, showtimes, isFull, isFree, isPremiere}) => {
  return (
    <Fragment>
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="card-title">{title}</h5>
            {isFull && <i className="bi bi-lock-fill text-danger fs-5" title="House Full"></i>}
          </div>

          <h6 className="card-subtitle mb-2 text-muted">{theater}</h6>
          <p className="mb-1">
            <strong>Rating:</strong> <span>{getStars(rating)}</span>
          </p>
          <p className="mb-1">
            <strong>Language:</strong> {language} | <strong>Genre:</strong> {genre}
          </p>

          {isPremiere && <span className="badge bg-dark me-2">Premiere Only</span>}
          {isFree && <span className="badge bg-success">Free Show</span>}

          <div className="mt-3">
            {showtimes && showtimes.length > 0 ? (
              isFull ? (
                <div className="text-danger fw-bold">House Full 🎟️</div>
              ) : (
                showtimes.map((time, index) => (
                  <button
                    key={index}
                    className={`btn btn-${getShowtimeColor(time)} btn-sm me-2 mb-2`}
                    disabled={isFull}
                  >
                    {time}
                    {isNowPlaying(time) && <span className="badge bg-light text-dark ms-2">Now Playing</span>}
                  </button>
                ))
              )
            ) : (
              <div className="text-muted">No shows available today</div>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Card.defaultProps = {
  showtimes: [],
  isFull: false,
  isFree: false,
  isPremiere: false
};

export default Card;

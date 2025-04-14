import React from "react";
import "../styles/style.css";

const getTimeCategory = (timeStr) => {
  const hour = parseInt(timeStr.split(":")[0]);
  if (hour < 12) return "morning";
  if (hour < 17) return "afternoon";
  return "evening";
};

const MovieCard = ({
  title,
  showtimes,
  theater,
  rating,
  language,
  genre,
  isFull,
  isFree,
  isPremiere,
  children,
}) => {
  const currentHour = 10; // Dummy current hour for "Now Playing"

  return (
    <>
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="card-title">{title}</h5>
            {isPremiere && <span className="badge bg-dark">Premiere Only</span>}
          </div>
          <h6 className="card-subtitle mb-2 text-muted">{theater}</h6>
          <p>
            <strong>Language:</strong> {language} | <strong>Genre:</strong> {genre}
          </p>
          <p>
            <strong>Rating:</strong> {"★".repeat(rating)}{" "}
            {"☆".repeat(5 - rating)}
          </p>

          {isFree && <span className="badge bg-success me-2">Free Show</span>}
          {isFull && <span className="badge bg-secondary">🔒 House Full</span>}

          {showtimes?.length > 0 && !isFull ? (
            <div className="mt-3 d-flex flex-wrap gap-2 justify-content-center">
              {showtimes.map((time, idx) => {
                const hour = parseInt(time);
                const isNowPlaying = hour === currentHour;
                const category = getTimeCategory(time);

                let pillColor = "secondary";
                if (category === "morning") pillColor = "warning";
                else if (category === "afternoon") pillColor = "primary";
                else if (category === "evening") pillColor = "danger";

                return (
                  <button
                    key={idx}
                    className={`btn btn-sm position-relative showtime-pill btn-${pillColor}`}
                  >
                    {time}
                    {isNowPlaying && (
                      <span className="now-badge badge bg-success">
                        Now
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          ) : !isFull ? (
            <p className="text-muted mt-2">No shows available today</p>
          ) : null}

          {children}
        </div>
      </div>
    </>
  );
};

export default MovieCard;

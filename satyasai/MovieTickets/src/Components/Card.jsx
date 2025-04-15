import React from "react";

const Card = ({
  title,
  showtimes,
  theater,
  rating,
  genre,
  language,
  isFull,
  isFree,
  image,
}) => {
  const isNowPlaying = showtimes?.some((time) => time.includes("10:30")) ?? false;

  return (
    <div className="card bg-dark text-white h-100 shadow rounded-4 overflow-hidden">
      <img
        src={image}
        className="card-img-top"
        alt={title}
        style={{ height: "180px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title fw-bold">{title} 🎬</h5>
          <p className="mb-1">🗣 {language} | 🎭 {genre}</p>
          <p className="mb-1">🏛 {theater}</p>
          <p>🌟 {rating} / 5</p>
        </div>

        <div className="mb-2">
          {isFree && <span className="badge bg-success me-1">🆓 Free Show</span>}
          {isNowPlaying && <span className="badge bg-danger">🔥 Now Playing</span>}
        </div>

        <div className="mb-2">
          {showtimes?.length > 0 ? (
            showtimes.map((time, i) => (
              <span
                key={i}
                className={`badge me-1 mb-1 ${time.includes("AM") ? "bg-warning text-dark" : "bg-primary"}`}
              >
                {isFull ? "🔒 Full" : time}
              </span>
            ))
          ) : (
            <span className="text-warning">No shows today</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;

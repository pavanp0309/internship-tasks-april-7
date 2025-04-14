import React from "react";


const MovieCard = ({
  title,
  showtimes,
  theater,
  rating,
  genre,
  language,
  isFull,
  isPremiere,
  image,
}) => {
  const isNowPlaying = showtimes.some(time => time.includes("10:30")); // Dummy logic

  return (
    <div className="card movie-card shadow h-100 text-white position-relative">
      <img src={image} className="card-img-top movie-img" alt={title} />
      <div className="card-body bg-dark bg-opacity-75 rounded-bottom">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          🎭 {language} • 🎞️ {genre}
        </p>
        <p>🏛️ {theater}</p>
        <p>⭐ {rating}</p>

        {isPremiere && <span className="badge bg-warning me-1">Premiere Only</span>}
        {isNowPlaying && <span className="badge bg-danger">Now Playing</span>}

        <div className="mt-3">
          {showtimes.length > 0 ? (
            showtimes.map((time, i) => (
              <span
                key={i}
                className={`badge me-1 mb-1 ${
                  time.includes("AM") ? "bg-warning" : "bg-primary"
                }`}
              >
                {isFull ? "House Full 🔒" : time}
              </span>
            ))
          ) : (
            <span className="text-warning">No shows available today</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

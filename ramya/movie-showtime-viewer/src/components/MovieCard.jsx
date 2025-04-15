import React from "react";


const MovieCard = ({ movie }) => {
  const isNowPlaying = (time) => {
    const showTime = parseInt(time.split(":")[0]);
    const now = new Date().getHours();
    return Math.abs(now - showTime) <= 1;
  };

  return (
    <div className="movie-card">
      <h3>{movie.title}</h3>
      <p><strong>🎬 Genre:</strong> {movie.genre}</p>
      <p><strong>🌐 Language:</strong> {movie.language}</p>
      <p><strong>🏛️ Theater:</strong> {movie.theater}</p>
      <p><strong>⭐ Rating:</strong> {movie.rating} / 5</p>

      <div className="showtimes">
        <h4>🎟️ Showtimes:</h4>
        {movie.showtimes?.length > 0 ? (
          movie.showtimes.map((show, idx) => (
            <button
              key={idx}
              className={`pill-btn ${!show.available ? "disabled" : ""} ${
                isNowPlaying(show.time) ? "now-playing" : ""
              }`}
              disabled={!show.available}
            >
              {show.time} {!show.available ? "🔒 House Full" : ""}
              {isNowPlaying(show.time) && show.available ? " 🎯 Now Playing" : ""}
            </button>
          ))
        ) : (
          <p>No shows available today</p>
        )}
      </div>
    </div>
  );
};

export default MovieCard;

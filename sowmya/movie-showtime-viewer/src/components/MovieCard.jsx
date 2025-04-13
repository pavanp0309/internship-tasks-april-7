import React from "react";

const MovieCard = ({ movie }) => {
  const getShowtimeColor = (time) => {
    const hour = parseInt(time.split(":")[0]);
    if (hour < 12) return "bg-warning"; // morning
    if (hour < 17) return "bg-primary"; // afternoon
    return "bg-danger"; // evening
  };

  const stars = "⭐".repeat(movie.rating);

  return (
    <div className="card border border-dark m-2 shadow movie-card hover-shadow">
      <div className="card-body">
        <h5 className="card-title">🎬 {movie.title}</h5>
        {movie.isPremiere && <span className="badge bg-dark mb-2">Premiere Only 🎥</span>}
        <p>🏢 {movie.theater}</p>
        <p>🌟 Rating: {stars}</p>
        <p>🌍 {movie.language} | 🎭 {movie.genre}</p>
        <div className="d-flex flex-wrap gap-2 mb-2">
          {movie.showtimes.map((time, index) => (
            <span key={index} className={`badge ${getShowtimeColor(time)}`}>{time}</span>
          ))}
        </div>
        {movie.isLocked && <span className="text-danger">🔒 Locked</span>}
        {movie.isFree && <span className="badge bg-success ms-2">🆓 Free Show</span>}
        <div className="mt-3">
            <button className="btn btn-outline-success book-btn">
                🎟️ Book Now
            </button>

        </div>
      </div>
    </div>
  );
};

export default MovieCard;

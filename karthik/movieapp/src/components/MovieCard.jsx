import React from "react";

const MovieCard = ({ movie }) => {
  const getShowtimeColor = (time) => {
    const hour = parseInt(time.split(":")[0], 10);
    if (hour < 12) return "bg-warning"; // morning
    if (hour < 17) return "bg-primary"; // afternoon
    return "bg-danger"; // evening
  };

  const stars = "⭐".repeat(movie.rating);

  return (
    <div className="card border border-dark shadow-sm">
      <div className="card-body">
        <h5 className="card-title">🎬 {movie.title}</h5>

        {movie.isPremiere && (
          <span className="badge bg-dark mb-2 d-inline-block">Premiere Only 🎥</span>
        )}

        <p>🏢 {movie.theater}</p>
        <p>🌟 Rating: {stars}</p>
        <p>
          🌍 {movie.language} | 🎭 {movie.genre}
        </p>

        <div className="d-flex flex-wrap gap-2 mb-2">
          {movie.showtimes.length > 0 ? (
            movie.showtimes.map((time, index) => (
              <span key={index} className={`badge ${getShowtimeColor(time)}`}>
                {time}
              </span>
            ))
          ) : (
            <span className="text-muted">No Showtimes Available</span>
          )}
        </div>

        {movie.isFull && <span className="text-danger">🔒 Housefull</span>}
        {movie.isFree && <span className="badge bg-success ms-2">🆓 Free Show</span>}

        <div className="mt-3">
          <button className="btn btn-outline-success">🎟️ Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

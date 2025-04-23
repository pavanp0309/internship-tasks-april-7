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
    <div
      className="card border border-dark m-2 shadow movie-card text-white"
      style={{
        backgroundImage: `url(${movie.image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "350px",
        position: "relative",
        backgroundColor: "#000" 
      }}
    >
      <div
        className="card-body d-flex flex-column justify-content-end"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          height: "100%",
          backdropFilter: "blur(2px)",
        }}
      >
        <h5 className="card-title">🎬 {movie.title}</h5>
        {movie.isPremiere && (
          <span className="badge bg-dark mb-2">Premiere Only 🎥</span>
        )}
        <p>🏢 {movie.theater}</p>
        <p>🌟 Rating: {stars}</p>
        <p>
          🌍 {movie.language} | 🎭 {movie.genre}
        </p>
        <div className="d-flex flex-wrap gap-2 mb-2">
          {movie.showtimes.map((time, index) => (
            <span key={index} className={`badge ${getShowtimeColor(time)}`}>
              {time}
            </span>
          ))}
        </div>
        {movie.isLocked && <span className="text-danger">🔒 Locked</span>}
        {movie.isFree && (
          <span className="badge bg-success ms-2">🆓 Free Show</span>
        )}
        <div className="mt-2">
          <button className="btn btn-outline-light book-btn">🎟️ Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

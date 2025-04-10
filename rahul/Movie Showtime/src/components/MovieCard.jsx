import React from "react";
import ShowtimePill from "./ShowtimePill";
import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  const {
    title,
    subtitle,
    poster,
    rating,
    votes,
    format,
    language,
    duration,
    genre,
    certification,
    releaseDate,
    showtimes,
    isPremiere,
  } = movie;

  return (
    <div className="movie-card-container">
      <div className="movie-card" style={{ backgroundImage: `url(${poster})` }}>
        <div className="poster-section">
          <img src={poster} alt={title} className="poster-image" />
        </div>
        <div className="card-body">
          <h2 className="Showtime1">
            {title} <small>{subtitle}</small>
          </h2>
          <p className="ratingStart">
            ⭐ {rating}/10 ({votes} Votes)
          </p>
          <button className="btn btn-outline-primary button1">Rate now</button>
          <button className="btn btn-primary mt-2 button1">Book tickets</button>
          <p className="mt-2">
            {format} | {language}
          </p>
          <p>
            {duration} • {genre} • {certification}
          </p>
          <p>📅 Release Date: {releaseDate}</p>
          {isPremiere && (
            <span className="badge bg-warning">Premiere Only</span>
          )}
          <div className="showtimes">
            <h1 className="Showtime">Movie Showtime....</h1>   
            {showtimes.length > 0 ? (
              showtimes.map((time, index) => (
                <ShowtimePill key={index} time={time} />
              ))
            ) : (
              <p>No shows available today</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieCard from "./components/MovieCard";
import { movies } from "./data/movie";

const App = () => {
  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">🎬 Movie Showtime Viewer</h2>
      <div className="row justify-content-center">
        {movies.map((movie, index) => (
          <div key={index} className="col-md-6 col-lg-4">
            <MovieCard {...movie}>
              <p className="mt-2 small text-muted text-end">Enjoy the movie!</p>
            </MovieCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

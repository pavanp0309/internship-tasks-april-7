import React from "react";
import { movieData } from "./data/data";
import MovieCard from "./components/MovieCard";

const App = () => (
  <div className="container my-4">
    <h2 className="text-center text-white mb-4">🎞️ Movie Showtime Viewer</h2>
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
      {movieData.map((movie) => (
        <div key={movie.id} className="col">
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  </div>
);

export default App;


import React from "react";
import movieData from "./movieData";
import ShowtimeSection from "./components/ShowtimeSection";
import "./index.css";

const App = () => {
  return (
    <div className="app-container">
      <header className="bg-dark text-white text-center py-4">
        <h1>🎬 Movie Showtime Viewer</h1>
        <p className="lead mb-0">Book your movie tickets easily</p>
      </header>

      <div className="container">
        {movieData.map((movie, idx) => (
          <ShowtimeSection key={idx} movie={movie} />
        ))}
      </div>

      <footer className="text-center py-3 text-muted">
        © 2025 MovieBooking, Inc.
      </footer>
    </div>
  );
};

export default App;

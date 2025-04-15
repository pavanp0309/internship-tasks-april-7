import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import MovieCard from "./components/MovieCard";
// Correct import path (assuming MovieCard is in src folder)

const movies = [
  {
    title: "Inception",
    showtimes: ["10:30 AM", "1:00 PM", "4:00 PM"],
    theater: "INOX GVK One",
    rating: 5,
    language: "English",
    genre: "Sci-Fi",
    isFull: false,
    isFree: false,
    isPremiere: true,
  },
  {
    title: "Kantara",
    showtimes: [],
    theater: "PVR Kukatpally",
    rating: 4,
    language: "Kannada",
    genre: "Drama",
    isFull: false,
    isFree: false,
  },
  {
    title: "Jawan",
    showtimes: ["10:00 AM", "11:30 AM"],
    theater: "PVR Panjagutta",
    rating: 3,
    language: "Hindi",
    genre: "Action",
    isFull: true,
    isFree: false,
  },
  {
    title: "Marvel Sneak Peek",
    showtimes: ["3:00 PM"],
    theater: "BookMyShow Arena",
    rating: 5,
    language: "English",
    genre: "Trailer",
    isFull: false,
    isFree: true,
  },
];

function App() {
  return (
    <div className="container py-4">
      <h1 className="mb-4 text-center">🎥 Movie Showtime Viewer</h1>
      <div className="row">
        {movies.map((movie, idx) => (
          <div key={idx} className="col-md-6 mb-4">
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

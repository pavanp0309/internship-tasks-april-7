import React from "react";
import MovieCard from "./components/MovieCard";


const movies = [
  {
    title: "Salaar",
    showtimes: ["10:30 AM", "1:00 PM", "6:45 PM"],
    theater: "PVR Cinemas",
    rating: 4.8,
    genre: "Sci-Fi",
    language: "Telugu",
    isFull: false,
    isPremiere: true,
    image: "/salaar.jpg",
  },
  {
    title: "RRR",
    showtimes: ["11:00 AM", "2:00 PM"],
    theater: "INOX",
    rating: 4.6,
    genre: "Drama",
    language: "Telugu",
    isFull: false,
    isPremiere: false,
    image: "/RRR.jpg",
  },
  {
    title: "Pushpa-2",
    showtimes: [],
    theater: "IMAX",
    rating: 4.6,
    genre: "Action",
    language: "Telugu",
    isFull: true,
    isPremiere: true,
    image: "/pushpa.jpg",
  },
  {
    title: "Kantara",
    showtimes: ["9:00 AM", "12:00 PM"],
    theater: "Cinepolis",
    rating: 4.9,
    genre: "Adventure",
    language: "Telugu",
    isFull: false,
    isPremiere: true,
    image: "/kantara.jpg",
  },
];

function App() {
  return (
    <div className="container py-4">
      <div className="text-center text-white mb-4">
        <h1 className="display-5 fw-bold">🎥 Movie Showtime Viewer</h1>
        <p className="lead">Check showtimes, availability & theater details at a glance!</p>
      </div>
      <div className="row g-4">
        {movies.map((movie, index) => (
          <div className="col-md-6 col-lg-4 col-xl-3" key={index}>
            <MovieCard {...movie} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

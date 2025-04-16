import React from "react";
import MovieCard from "./components/MovieCard";


const movies = [
  {
    title: "Bahubali",
    showtimes: [],
    theater: "PVR Cinemas",
    rating: 4.8,
    genre: "Sci-Fi",
    language: "Telugu",
    isFull: false,
    isPremiere: true,
    image: "https://media.movieassets.com/static/images/items/movies/backdrops/1280/80/bahubali-the-beginning-4aed460c4aab82b87acd1779125c7d2c.jpg",
  },
  {
    title: "Devara",
    showtimes: ["11:00 AM", "2:00 PM"],
    theater: "INOX",
    rating: 4.6,
    genre: "Drama",
    language: "Telugu",
    isFull: false,
    isPremiere: false,
    image: "https://www.dvdsreleasedates.com/images/orig/D/Devara-Part-1-2024.jpg",
  },
  {
    title: "Jawan",
    showtimes: [],
    theater: "IMAX",
    rating: 4.6,
    genre: "Action",
    language: "Telugu",
    isFull: true,
    isPremiere: true,
    image: "https://www.91-cdn.com/hub/wp-content/uploads/2023/10/Jawan.png",
  },
  {
    title: "Hridayam",
    showtimes: ["9:00 AM", "12:00 PM"],
    theater: "Cinepolis",
    rating: 4.9,
    genre: "Adventure",
    language: "Telugu",
    isFull: false,
    isPremiere: true,
    image: "https://www.zonkerala.com/movies/gallery/hridayam/latest-photos-hridayam-7574.jpg",
  },
  {
    title: "MAD",
    showtimes: [],
    theater: "IMAX",
    rating: 4.6,
    genre: "Action",
    language: "Telugu",
    isFull: true,
    isPremiere: true,
    image: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/a7/af/84/a7af848e-f381-76b0-f6e1-a1c54393d27b/cover.jpg/1200x1200bf-60.jpg",
  },
  {
    title: "Court",
    showtimes: ["9:00 AM", "12:00 PM"],
    theater: "Cinepolis",
    rating: 4.9,
    genre: "Adventure",
    language: "Telugu",
    isFull: false,
    isPremiere: true,
    image: "https://cinevood.co.in/wp-content/uploads/2025/04/court-state-vs-a-nobody-2025.webp",
  },
  {
    title: "Saripodhaa Sanivaaram",
    showtimes: ["11:00 AM", "2:00 PM"],
    theater: "INOX",
    rating: 4.6,
    genre: "Drama",
    language: "Telugu",
    isFull: false,
    isPremiere: false,
    image: "https://www.newstap.in/h-upload/2023/10/23/1553726-image.webp",
  },
  {
    title: "Game Changer",
    showtimes: [],
    theater: "IMAX",
    rating: 4.6,
    genre: "Action",
    language: "Telugu",
    isFull: true,
    isPremiere: true,
    image: "https://images.indianexpress.com/2025/01/game-changer-release-1600.jpg",
  },
];

function App() {
  return (
    <div className="container py-4">
      <div className="text-center text-white mb-4">
        <h1 className="display-5 fw-bold"> Movie Marvels</h1>
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

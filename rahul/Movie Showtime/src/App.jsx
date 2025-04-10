import React from 'react';
import MovieCard from './components/MovieCard';

const App = () => {
  const movies = [
    {
      title: "Jack (Konchem Krack)",
      subtitle: "",
      poster: "./src/assets/jack.jpg", // Add correct path to your public or assets folder
      rating: 7.3,
      votes: 790,
      format: "2D",
      language: "Telugu",
      duration: "2h 16m",
      genre: "Action, Thriller",
      certification: "UA16+",
      releaseDate: "10 Apr, 2025",
      showtimes: ["10:30 AM", "1:00 PM", "6:00 PM"],
      isPremiere: true,
    },
    {
      title: "Court",
      subtitle: "",
      poster: "./src/assets/court.jpg",
      rating: 8.1,
      votes: 520,
      format: "2D",
      language: "Hindi",
      duration: "1h 56m",
      genre: "Drama",
      certification: "UA",
      releaseDate: "14 Apr, 2025",
      showtimes: ["11:00 AM", "3:30 PM"],
      isPremiere: false,
    },
    {
      title: "Robinhood",
      subtitle: "",
      poster: "./src/assets/robinhood.jpg",
      rating: 7.8,
      votes: 612,
      format: "2D",
      language: "English",
      duration: "2h 10m",
      genre: "Adventure, Action",
      certification: "U/A",
      releaseDate: "12 Apr, 2025",
      showtimes: ["10:00 AM", "2:00 PM", "7:00 PM"],
      isPremiere: false,
    },
    {
      title: "Mad Square",
      subtitle: "",
      poster: "./src/assets/madsquare.jpg",
      rating: 6.9,
      votes: 433,
      format: "2D",
      language: "Tamil",
      duration: "1h 50m",
      genre: "Thriller",
      certification: "A",
      releaseDate: "15 Apr, 2025",
      showtimes: ["12:00 PM", "5:00 PM"],
      isPremiere: false,
    },
    {
      title: "Good Bad Ugly",
      subtitle: "",
      poster: "./src/assets/gbu.jpg",
      rating: 8.9,
      votes: 980,
      format: "2D",
      language: "English",
      duration: "2h 30m",
      genre: "Western, Drama",
      certification: "UA",
      releaseDate: "11 Apr, 2025",
      showtimes: ["10:00 AM", "6:00 PM"],
      isPremiere: true,
    },
    {
      title: "Sikinder",
      subtitle: "",
      poster: "./src/assets/sikinder.jpg",
      rating: 7.5,
      votes: 550,
      format: "2D",
      language: "Telugu",
      duration: "2h 5m",
      genre: "Action",
      certification: "U",
      releaseDate: "13 Apr, 2025",
      showtimes: ["9:30 AM", "1:30 PM", "8:00 PM"],
      isPremiere: false,
    },
  ];

  return (
    <div className="app-container">
      <h1 className='MovieShowtime'>Movie Showtime.... <span className='BOOK'>Book your Tickets Fast Now ( ' _ ' )</span></h1>
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  );
};

export default App;

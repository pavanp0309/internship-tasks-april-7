// src/data/movieData.js
export const movieData = [
    {
      title: "Spider-Man: No Way Home",
      genre: "Action, Adventure, Sci-Fi",
      language: "English",
      duration: "148 min",
      theater: "Cinema 1",
      rating: 4.5,
      showtimes: [
        { time: "10:00 AM", available: true },
        { time: "1:00 PM", available: false },
        { time: "4:00 PM", available: true },
      ],
    },
    {
      title: "Thandel",
      genre: "Action, Love",
      language: "Telugu",
      duration: "148 min",
      theater: "Cinema 2",
      rating: 4.2,
      showtimes: [
        { time: "11:00 AM", available: true },
        { time: "2:00 PM", available: false },
      ],
    },
    {
      title: "Mad",
      genre: "Comedy",
      language: "Telugu",
      duration: "155 min",
      theater: "Cinema 3",
      rating: 5.0,
      showtimes: [
        { time: "12:00 PM", available: true },
        { time: "3:00 PM", available: true },
      ],
    },
  ];

  export default movieData;
import React from "react";
import Card from "./Components/Card";

const App = () => {
  const movieData = [
    {
      title: "Pathaan",
      showtimes: ["10:30 AM", "1:15 PM", "6:00 PM"],
      theater: "INOX GVK One, Hyderabad",
      rating: 4.5,
      language: "Hindi",
      genre: "Action",
      isFull: false,
      isFree: false,
      image: "https://i.ytimg.com/vi/erLgHUpnN_k/maxresdefault.jpg"
    },
    {
      title: "RRR",
      showtimes: ["11:00 AM", "2:30 PM", "7:45 PM"],
      theater: "PVR Forum Mall, Bengaluru",
      rating: 5,
      language: "Telugu",
      genre: "Drama",
      isFull: true,
      isFree: false,
      image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202203/FOwlLrrVsAIMEi7_1200x768.jpeg?size=690:388"
    },
    {
      title: "Jawan",
      showtimes: ["12:00 PM", "4:00 PM", "9:00 PM"],
      theater: "Carnival Cinemas, Mumbai",
      rating: 4,
      language: "Hindi",
      genre: "Thriller",
      isFull: false,
      isFree: false,
      image: "https://indiaglitz-media.s3.amazonaws.com/telugu/home/jawan-movie-review-3.jpg"
    },
    {
      title: "Drishyam 2",
      showtimes: ["10:00 AM", "1:00 PM", "8:00 PM"],
      theater: "Luxe Cinemas, Chennai",
      rating: 4.2,
      language: "Malayalam",
      genre: "Mystery",
      isFull: false,
      isFree: true,
      image: "https://assets.thehansindia.com/h-upload/2021/02/19/1032291-drishyam-2-movie-review.webp"
    },
    {
      title: "Kantara",
      showtimes: ["9:30 AM", "12:45 PM", "5:30 PM"],
      theater: "INOX South City, Kolkata",
      rating: 4.8,
      language: "Kannada",
      genre: "Fantasy",
      isFull: true,
      isFree: false,
      image: "https://opendigest.in/wp-content/uploads/2022/10/kantara-poster.jpg"
    },
    {
      title: "Rocketry",
      showtimes: ["11:45 AM", "3:15 PM", "6:45 PM"],
      theater: "PVR Select Citywalk, Delhi",
      rating: 4.6,
      language: "English",
      genre: "Biography",
      isFull: false,
      isFree: true,
      image: "https://www.hindustantimes.com/ht-img/img/2023/08/24/1600x900/rocketry_1692881922224_1692881922532.png"
    },
    {
      title: "Gully Boy",
      showtimes: ["10:30 AM", "1:00 PM", "4:00 PM"],
      theater: "Movietime Mall, Pune",
      rating: 4.3,
      language: "Hindi",
      genre: "Musical",
      isFull: false,
      isFree: false,
      image: "https://cdn.sanity.io/images/68lp9qid/production/33c879bc7053b79c1edeecb35ead327d6e44fc4e-615x450.jpg"
    },
    {
      title: "Vikram",
      showtimes: ["11:00 AM", "2:00 PM", "7:00 PM"],
      theater: "AGS Cinemas, Coimbatore",
      rating: 4.7,
      language: "Tamil",
      genre: "Action",
      isFull: true,
      isFree: false,
      image: "https://m.media-amazon.com/images/M/MV5BNDEyMWQ0ZDktNTY0MC00YWRkLWFlMjQtMDUxMjRlMDhmMmRlXkEyXkFqcGc@._V1_.jpg"
    }
  ];

  return (
    <div className="min-vh-100 py-5" style={{ backgroundColor: "#121212" }}>
      <div className="container">
        <div className="text-center text-white mb-5">
          <h1 className="display-5 fw-bold">🎥 CineBuzz India</h1>
          <p className="lead">Check showtimes, availability & theater details at a glance!</p>
        </div>
        <div className="row g-4">
          {movieData.map((movie, index) => (
            <div className="col-sm-6 col-md-4 col-lg-3 d-flex" key={index}>
              <Card {...movie} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;

import React from "react";
import MovieCard from "./MovieCard";

const ShowtimeSection = ({ movie }) => {
  return (
    <div className="mt-5">
      <MovieCard movie={movie} />
    </div>
  );
};

export default ShowtimeSection;


import React, { Component } from "react";
import movies from "./data/data";
import Card from "./components/Card";

class App extends Component {
  render() {
    return (
      <div className="container py-4">
        <h2 className="mb-4">🎬 Movie Showtime Viewer</h2>

        <div className="row">
          {movies.map((movie) => (
            <div className="col-md-6" key={movie.id}>
              <Card {...movie} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;

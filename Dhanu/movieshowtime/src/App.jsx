import React from 'react';
import MovieCard from './components/MovieCard';
import { movies } from './data/movies';
import "../node_modules/bootstrap/dist/css/bootstrap.css"

const App = () => {
  return (
    <div style={{backgroundColor: '#f0f4f8',minHeight: '100vh',padding: '30px 20px'}}>
  
      <h1 style={{ fontSize: 28, textAlign: 'center', marginBottom: 30 }}>🎬 Classic Telugu Movie Showtimes</h1>
      
        <div className="row">
          {movies.map((movie,idx)=>(
            <div className="col-md-3 col-sm-12 col-lg-4 d-flex" key={idx}>
              <MovieCard movie={movie}/>
            </div>
          ))}
        </div>
      
    </div>
  );
};

export default App;

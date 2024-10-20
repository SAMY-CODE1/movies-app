import React from "react";
import MovieControl from "./MovieControl";

function MovieCard({ movie,type }) {
  return (
    <div className="movie-list">
      <li className="watchimg">
        {/* <div className=" overlay"></div> */}
        {movie.Poster ? (
          <img src={movie.Poster} alt={movie.Title} />
        ) : (
          <div className="fimter-poster">
            
          </div>
        )}
        <div className="overlay-btn">
        <MovieControl   movie={movie} type={type}/>
        </div>
      </li>

    </div>
  );
}

export default MovieCard;

import React from "react";
import { useMovieContext } from "./context/GlobelContext";
import MovieCard from "./MovieCard";

function Watched() {
  const MovieContext = useMovieContext();

  return (
    <div>
      <div className="watched-page">
        {MovieContext.watched.length > 0 ? (
          <div className="watched">
            <h3>Watched</h3>
            <span>
              {MovieContext.watched.length}{" "}
              {MovieContext.watchlist.length === 1 ? "Movie" : "Movies"}
            </span>
          </div>
        ) : (
          <div className="nomovie">
            <h1>No Movies ...!</h1>
          </div>
        )}

        <div className="watchedrender">
          {MovieContext.watched.map((mov) => (
            <MovieCard type="watched" key={mov.imdbId} movie={mov} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Watched;

import React from "react";
import { useMovieContext } from "./context/GlobelContext";
import MovieCard from "./MovieCard";
function Watchedlist() {
  const MovieContext = useMovieContext();
  return (
    <>
      <div className="watch-list-page">
        {MovieContext.watchlist.length > 0 ? (
          <div className="watch-list">
            {" "}
            <h3>WatchList</h3>{" "}
            <span> {MovieContext.watchlist.length} {MovieContext.watchlist.length===1?'Movie':"Movies"}</span>
          </div>
        ) : (
          <div className="nomovie">
            <h1>No Movies ...!</h1>
          </div>
        )}

        <div className="watchlistrender">
          {MovieContext.watchlist.map((mov) => (
          <MovieCard type='watchlist' key={mov.imdbId} movie={mov}/>
          ))}
        </div>
      </div>
    </>
  );
}

export default Watchedlist;

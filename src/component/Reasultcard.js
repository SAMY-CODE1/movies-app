import React from "react";
import * as actions from "./context/Actiontype";
import { useMovieContext } from "./context/GlobelContext";

function Reasultcard({ movie }) {
  const MovieContext = useMovieContext();
  const sortedMOvie = MovieContext.watchlist.find(
    (o) => o.imdbID === movie.imdbID
  );
  const sortedMOviewatch = MovieContext.watched.find(
    (o) => o.imdbID === movie.imdbID
  );

  const watchlistdisable = sortedMOvie || sortedMOviewatch

  return (
    <div className="ele">
      <img src={movie.Poster} alt=""></img>{" "}
      <div className="desc">
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
        <div className="btns">
          {" "}
          <button
            onClick={()=>MovieContext.MoviesDispatch({
              type: actions.ADD_MOVIE_TO_WATCHLIST,
              payload: movie,
            })}
            disabled={watchlistdisable}>
            add to watchedlist
          </button>
          <button
            onClick={()=> MovieContext.MoviesDispatch({
              type: actions.ADD_MOVIE_TO_WATCHED,
              payload: movie,
            })}
            disabled={sortedMOviewatch
            }>
            add to watched
          </button>
        </div>
      </div>{" "}
    </div>
  );
}

export default Reasultcard;

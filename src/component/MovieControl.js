import React from "react";
import { useMovieContext } from "./context/GlobelContext";
import * as actions from  './context/Actiontype'
function MovieControl({ movie, type }) {
  const MovieContext=useMovieContext()
  return (
    <div className=".overlay-btn">
      {type === "watched" && (
        <div className="watch-overlay">
          {" "}
          <button className="ctrl-btn">
            <i className=" fa-solid fa-eye-slash" />
          </button>
          <button  onClick={()=>MovieContext.MoviesDispatch({
            type:actions.REMOUVE_MOVIE_FROM_WATCHED,
            payload:movie
          })} className="ctrl-btn">
            {" "}
            <i className="fa-fw fa fa-times" />{" "}
          </button>
        </div>
      )}
      {type === "watchlist" && (
        <div className="watch-overlay">
          <button onClick={()=>MovieContext.MoviesDispatch({
            type:actions.MOVE_TO_WATCHLIST,
            payload:movie
          })} className="ctrl-btn">
            <i className="fa-solid fa-eye" />
          </button>
          <button onClick={()=>MovieContext.MoviesDispatch({
            type:actions.REMOUVE_MOVIE_FROM_WATCHLIST,
            payload:movie
          })} className="ctrl-btn">
            {" "}
            <i className="fa-fw fa fa-times" />{" "}
          </button>
        </div>
      )}
    </div>
  );
}

export default MovieControl;

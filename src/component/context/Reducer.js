
// import Watched from '../Watched';
import * as actions from './Actiontype'
export const reducer=(state, action)=> {
  switch (action.type) {
    case actions.ADD_MOVIE_TO_WATCHLIST:
      return {
        ...state,
        watchlist: [action.payload, ...state.watchlist],
      };

    case actions.REMOUVE_MOVIE_FROM_WATCHLIST: 
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movie) => movie.imdbID!== action.payload.imdbID  
        ),
      };

    case actions.MOVE_TO_WATCHLIST:
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movie) => movie.imdbID !== action.payload.imdbID
        ),
        watched: [action.payload, ...state.watched],
      };

    case actions.ADD_MOVIE_TO_WATCHED:
      return {
        ...state,
     
        watched: [action.payload, ...state.watched],
      };

    case actions.REMOUVE_MOVIE_FROM_WATCHED:
      return {
        ...state,
        watched: state.watched.filter(
          (movie) => movie.imdbID !== action.payload.imdbID
        ),
      };

    default:
      return state;
  }
};

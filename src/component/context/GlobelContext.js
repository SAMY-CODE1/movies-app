import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer as red } from "./Reducer";
const initvalue = {
  watchlist: (() => {
    try {
      return JSON.parse(localStorage.getItem("watchlist")) || [];
    } catch (error) {
      console.error("Error parsing 'watchlist':", error);
      return [];
    }
  })(),
  watched: (() => {
    try {
      return JSON.parse(localStorage.getItem("watched")) || [];
    } catch (error) {
      console.error("Error parsing 'watched':", error);
      return [];
    }
  })(),
};

// const initvalue = {
//   watchlist: localStorage.getItem("watchlist")?JSON.parse(localStorage.getItem('watchlist')):[],
//   watched: localStorage.getItem('watched')?JSON.parse(localStorage.getItem('watched')):[],
// };
export const GlobelContext = createContext(initvalue);
const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(red, initvalue);
  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);
  return (
    <GlobelContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        MoviesDispatch: dispatch,
      }}>
      {children}
    </GlobelContext.Provider>
  );
};
export default ContextProvider;
export const useMovieContext = () => {
  return useContext(GlobelContext);
};

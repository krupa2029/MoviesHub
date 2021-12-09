import MoviesList from "./MoviesList";
import classes from "./Movies.module.css";
import useHttp from "../../hooks/use-http";
import { getLatestMovies } from "../../lib/api";
import { useEffect } from "react";

const LatestMovies = () => {

   // Passing getLatestMovies Function in useHttp hook to send Http request for it...
    const {
      sendRequest,
      status,
      data: loadedLatestMovies,
      error,
    } = useHttp(getLatestMovies, true);
  
    useEffect(() => {
      sendRequest();
    }, [sendRequest]);

    if (status === "completed" && (loadedLatestMovies  && loadedLatestMovies !== null)) {
      console.log(loadedLatestMovies);
      return (
        <div className={classes["movies-container"]}>
          <h2>Latest Movies</h2>
          <MoviesList MoviesData={loadedLatestMovies}/>
        </div>
      );
    }
    else{
      return<p>{error}</p>
    }
  
};
export default LatestMovies;

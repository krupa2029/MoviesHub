import { useEffect } from "react";
import MoviesList from "../components/Movies/MoviesList";
import useHttp from "../hooks/use-http";
import { getSearchMovie } from "../lib/api";
import classes from "../components/Movies/Movies.module.css";
import LoadingSpinner from "../components/UI/LoadingSpinner/LoadingSpinner";
import { useParams } from "react-router-dom";

const SearchedMovie = () => {
  const params = useParams();

  const { search_term } = params;

  const {
    sendRequest,
    status,
    data: loadedSearchMovie,
    error,
  } = useHttp(getSearchMovie, true);

  useEffect(() => {
    sendRequest(search_term);
  }, [sendRequest, search_term]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if (error) {
    return <p className="centered">{error}</p>;
  }

  if (
    status === "completed" &&
    loadedSearchMovie &&
    loadedSearchMovie !== null
  ) {
    // console.log(loadedSearchMovie);
    return (
      <div className={classes["movies-container"]}>
        <h2>Search Results for  '{search_term}'..</h2>
        <MoviesList MoviesData={loadedSearchMovie} />
      </div>
    );
  }
};

export default SearchedMovie;

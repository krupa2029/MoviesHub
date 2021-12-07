import MoviesList from "./MoviesList";
import classes from "./Movies.module.css";

const Movies = (props) => {
  return (
    <div className={classes["movies-container"]}>
      <h2>Latest Movies</h2>
      <MoviesList />
    </div>
  );
};
export default Movies;

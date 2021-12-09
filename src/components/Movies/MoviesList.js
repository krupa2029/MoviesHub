import MoviesCard from "./MovieCard";
import classes from "./MoviesList.module.css";

const MoviesList = (props) => {
  return (
    <ul className={classes["movies-list"]}>
      {props.MoviesData.results.map((moviedata) => (
        <MoviesCard
          key={moviedata.id}
          id={moviedata.id}
          title={moviedata.title}
          imdb_rating={moviedata.vote_average}
          // genre={moviedata.genres}
          imgsrc={moviedata.poster_path}
          release_year={moviedata.release_date}
        />
      ))}
    </ul>
  );
};
export default MoviesList;

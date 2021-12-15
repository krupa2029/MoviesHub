import { Fragment, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import { getMovieDetail, IMG_API } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";
import classes from "./MovieDetail.module.css";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { BiStar } from "react-icons/bi";

const MovieDetail = () => {
  const params = useParams();

  const { movieId } = params;
  const {
    sendRequest,
    status,
    data: loadedDetail,
    error,
  } = useHttp(getMovieDetail, true);

  useEffect(() => {
    sendRequest(movieId);
  }, [sendRequest, movieId]);

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

  const genre = [];
  if (loadedDetail.genres !== null) {
    for (const id in loadedDetail.genres) {
      genre.push(loadedDetail.genres[id].name);
    }
  }
  const movie_genre = genre.join(" / ");

 let MovieTrailerVideo = (
    <h2>{"Trailer of this movie is not available!!"}</h2>
  );

  if (loadedDetail.videos.results !== null) {
    const movieTrailer = loadedDetail.videos.results.find((element) => {
      return (
        element.site === "YouTube" &&
        element.type === "Trailer" &&
        element.official === true
      );
    });

    MovieTrailerVideo = (
      <div className={classes.movie_trailer_container}>
        <h2>Trailer: {movieTrailer.name}</h2>
        <iframe
          src={`https://www.youtube.com/embed/${movieTrailer.key}`}
          scrolling="no"
          frameBorder="0"
          title="trailer"
        ></iframe>
      </div>
    );
  }

  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes.back}>
          <Link to="/movies" style={{ textDecoration: "none" }}>
            <h3 style={{ color: "white" }}>
              <IoArrowBackCircleOutline />
              <span>Back</span>
            </h3>
          </Link>
        </div>

        <div className={classes.movie_content_container}>
          <div className={classes.movie_content_container__column_1}>
            <div className={classes.img}>
              <img
                src={IMG_API + loadedDetail.poster_path}
                alt={"Movie-Poster"}
              />
            </div>
          </div>
          <div className={classes.movie_content_container__column_2}>
            <div className={classes.title}>{loadedDetail.title}</div>
            <div className={classes.discription}>
              <h3>Overview</h3>
              <p>{loadedDetail.overview}</p>
              <p>Release Date: {loadedDetail.release_date}</p>
              <p>Language: {loadedDetail.original_language}</p>
              {genre.length > 0 && <p>Genre: {movie_genre}</p>}
              <span>
                Ratings: {loadedDetail.vote_average}
                <BiStar />
              </span>
            </div>
          </div>
        </div>
        {MovieTrailerVideo}
      </div>
    </Fragment>
  );
};

export default MovieDetail;

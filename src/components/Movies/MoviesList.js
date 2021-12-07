import movieimg from "../img/img_m.jpg";
import MoviesCard from "./MovieCard";
import classes from './MoviesList.module.css';

const MoviesList = (props) => {
  const DUMMY_DATA = [
    {
      id: "1",
      title: "Resident Evil",
      subtitle: "Vendetta",
      imdb_rating: "8.1",
      genre: "Sci-fi",
      imgsrc:  movieimg ,
      release_year: '2019',
    },
    {
        id: "2",
        title: "Resident Evil",
        subtitle: "Vendetta",
        imdb_rating: "8.1",
        genre: "Sci-fi",
        imgsrc:  movieimg ,
        release_year: '2019',
      },
      {
        id: "3",
        title: "Resident Evil",
        subtitle: "Vendetta",
        imdb_rating: "8.1",
        genre: "Sci-fi",
        imgsrc:  movieimg ,
        release_year: '2019',
      },
      {
        id: "4",
        title: "Resident Evil",
        subtitle: "Vendetta",
        imdb_rating: "8.1",
        genre: "Sci-fi",
        imgsrc:  movieimg ,
        release_year: '2019',
      },
  ];

  return (
    <section className={classes['movies-list']}>
      {DUMMY_DATA.map((moviedata) => (
        <MoviesCard
          key={moviedata.id}
          id={moviedata.id}
          title={moviedata.title}
          subtitle={moviedata.subtitle}
          imdb_rating={moviedata.imdb_rating}
          genre={moviedata.genre}
          imgsrc={moviedata.imgsrc}
          release_year={moviedata.release_year}
        />
      ))}
    </section>
  );
};
export default MoviesList;

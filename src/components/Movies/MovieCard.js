import Card from "../UI/Card/Card";
import classes from "./MovieCard.module.css";

const MoviesCard = (props) => {
  return (
    <Card>
      <div className={classes.img}>
        <img src={props.imgsrc} alt={props.alt || "Image"} />
      </div>
      <div className={classes.title}>
        <span>{props.title}</span>
      </div>
      <div className={classes.discription}>
        <p>Genre: {props.genre}</p>
        <p>IMDb Rating: {props.imdb_rating}/10</p>
        <p>Release Year: {props.release_year}</p>
      </div>
      
      <div className={classes['button-container']}>
        <button className={classes.button}>Show More</button>
      </div>
    </Card>
  );
};
export default MoviesCard;

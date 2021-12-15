import Card from "../UI/Card/Card";
import classes from "./MovieCard.module.css";
import { IMG_API } from "../../lib/api";
import { Link } from "react-router-dom";

const MoviesCard = (props) => {
  return (
    <Card>
      <div className={classes.img}>
        <img src={IMG_API + props.imgsrc} alt={props.alt || "Image"} />
      </div>

      <div className={classes.title}>
        <span>{props.title}</span>
      </div>
      <div className={classes.discription}>
        {/* <p>Genre: {props.genre}</p> */}
        <p>Rating: {props.imdb_rating}/10</p>
        <p>Released On: {props.release_year}</p>
      </div>

      {/* <div className={classes["button-container"]}>
        <button className={classes.button}>Show More</button>
      </div> */}

      <Link className='btn' to={`/movies/${props.id}`}>
        Show More
      </Link>
    </Card>
  );
};
export default MoviesCard;

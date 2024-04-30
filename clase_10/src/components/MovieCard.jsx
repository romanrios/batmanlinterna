import { Link } from "react-router-dom";
import "./MovieCard.css";

export const MovieCard = ({ movie }) => {
  const imgURL = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;

  return (
    <>
      <Link to={`/movie/${movie.id}`}>
        <li className="movieCard">
          <img src={imgURL} alt={movie.title} />
          <div className="movieCardInfo">
            <h3 className="movieCardTitle">{movie.title}</h3>
          </div>
          {/* <p>{movie.overview}</p> */}
        </li>
      </Link>
    </>
  );
};

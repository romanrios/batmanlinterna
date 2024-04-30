import { useEffect, useState } from "react";
import { get } from "../utils/conexionAPI";
import { Link, useParams } from "react-router-dom";
import "./MovieDetail.css";

export const MovieDetail = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    get(`/movie/${movieId}`).then((data) => {
      setMovie(data);
    });
  }, [movieId]);

  if (!movie) {
    return null;
  }

  const urlImg = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  return (
    <>
      <Link to={"/"}>
        <h2>[ Back ]</h2>
      </Link>
      <div className="movieDetail">
        <img src={urlImg} alt={movie.title} />

        <div className="movieDetailInfo">
          <h2>{movie.title}</h2>
          <p>
            <strong>Genre: </strong>
            {movie.genres.map((genre) => genre.name).join(" / ")}
          </p>
          <p>
            <strong>Overview: </strong>
            {movie.overview}
          </p>
        </div>
      </div>
    </>
  );
};

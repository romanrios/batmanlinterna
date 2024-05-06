import { useEffect, useState } from "react";
import { get } from "../utils/conexionAPI";
import { Link, useParams } from "react-router-dom";
import "./MovieDetail.css";
import YouTube from "react-youtube";

export const MovieDetail = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [video, setVideo] = useState(null);

  useEffect(() => {
    get(`/movie/${movieId}`).then((data) => {
      setMovie(data);
    });
    get(`/movie/${movieId}/videos`).then((data) => {
      setVideo(data);
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

          <p>
            <strong>Release date: </strong>
            {movie.release_date}
          </p>

          <p>
            <strong>Companies: </strong>
            {movie.production_companies
              .map((company) => company.name)
              .join(" / ")}
          </p>
        </div>
      </div>
      <br />
      <h2>Trailers</h2>
      {video &&
        video.results.slice(0, 3).map((video, index) => (
          <div className="video" key={index + "a"}>
            <YouTube
              videoId={video.key}
              opts={{ width: "360px", height: "203px" }}
            />
          </div>
        ))}
      <br />
      <br />
    </>
  );
};

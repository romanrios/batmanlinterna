// import peliculas from "../peliculas.json";
import { MovieCard } from "../components/MovieCard";
import "./MoviesGrid.css";
import { get } from "../utils/conexionAPI";
import { useState, useEffect } from "react";

export const MoviesGrid = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    get("/discover/movie?include_video=true").then((data) => {
      setMovies(data.results);
    });
  }, []);

  return (
    <>
      <h2>Movies Grid</h2>
      <ul className="moviesGrid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </ul>
      <br />
      <br />
    </>
  );
};

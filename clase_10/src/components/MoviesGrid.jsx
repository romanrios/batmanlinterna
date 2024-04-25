import peliculas from "../peliculas.json";
import { MovieCard } from "../components/MovieCard";
import "./MoviesGrid.css";

export const MoviesGrid = () => {
  return (
    <>
      <h1>Movies Grid</h1>
      <ul className="moviesGrid">
        {peliculas.map((pelicula) => (
          <MovieCard
            title={pelicula.original_title}
            description={pelicula.overview}
            key={pelicula.id}
          />
        ))}
      </ul>
    </>
  );
};

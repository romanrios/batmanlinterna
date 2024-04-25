import { Routes, Route } from "react-router-dom";
// import { LandingPage } from "../pages/LandingPage";
// import { MovieDetail } from "../pages/MovieDetail";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<p>Ruta "/"</p> /*<LandingPage />*/} />
        <Route
          path="./pelicula/:peliculaId"
          element={<p>Ruta "/pelicula/:peliculaId"</p> /*<MovieDetail />*/}
        />
        <Route path="/ruta1" element={<h1>Ruta 1</h1>} />
        <Route path="/ruta2" element={<h1>Ruta 2</h1>} />
        <Route path="/ruta3" element={<h1>Ruta 3</h1>} />
      </Routes>
    </>
  );
};

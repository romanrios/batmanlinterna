import "./App.css";
import { AppRouter } from "./router/AppRouter";
import { BrowserRouter, Link } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { LandingPage } from "./pages/LandingPage";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Link to={"/"}>
          <h1>Codo a Codo Movies</h1>
        </Link>
        <img src="./react.svg" alt="imagen" className="logo" />
        <AppRouter />
        <LandingPage />
      </BrowserRouter>
    </>
  );
};

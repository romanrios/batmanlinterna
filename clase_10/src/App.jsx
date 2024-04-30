import "./App.css";
import { AppRouter } from "./router/AppRouter";
import { Link, HashRouter } from "react-router-dom";
import { NavBar } from "./components/NavBar";

export const App = () => {
  return (
    <>
      <HashRouter>
        <NavBar />
        <Link to={"/"}>
          <h1>Codo a Codo Movies</h1>
        </Link>
        <img src="./react.svg" alt="imagen" className="logo" />
        <AppRouter />
      </HashRouter>
    </>
  );
};

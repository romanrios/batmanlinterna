import "./MovieCard.css";

export const MovieCard = ({ title, description }) => {
  return (
    <>
      <li className="movieCard">
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    </>
  );
};

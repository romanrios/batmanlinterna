import "./Card.css";

function Card({ apellido, nacimiento, clubes, mundial, late }) {
  const color = mundial ? "dorado" : "plateado";
  return (
    <>
      <h2 className={color}>{apellido}</h2>

      <small>{nacimiento}</small>
      <p>{clubes}</p>
      <p>{mundial ? "Ganó un mundial 🏆" : "Sigue participando 🥶"}</p>
      <p>{late ? "Late ✅" : "Nola ❌"}</p>
    </>
  );
}

export default Card;

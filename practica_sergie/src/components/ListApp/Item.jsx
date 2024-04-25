export const Item = ({ name, seen }) => {
  return (
    <li>
      {name} {seen ? "✅" : "⛔"}
    </li>
  );
};

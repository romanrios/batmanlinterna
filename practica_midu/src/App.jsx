import "./App.css";
import { TwitterFollowCard } from "./components/TwitterFollowCard";

const users = [
  {
    name: "Julio Quintero",
    username: "julioquintero",
    img: "./profile_jul.png",
    isFollowing: false,
  },
  {
    name: "Marcela Novais",
    username: "marcelanovais",
    img: "./profile_mar.png",
    isFollowing: false,
  },
  {
    name: "Natasha Berger",
    username: "natashaberger",
    img: "./profile_nat.png",
    isFollowing: false,
  },
  {
    name: "Román Ríos",
    username: "romanrios",
    img: "./profile_rom.png",
    isFollowing: true,
  },
  { name: "Some user" },
];

export function App() {
  return (
    <>
      <section className="app">
        <h1>A quién seguir</h1>
        {users.map((user) => {
          const { name, username, img, isFollowing } = user;
          return (
            <TwitterFollowCard
              key={name}
              name={name}
              username={username}
              img={img}
              initialIsFollowing={isFollowing}
            />
          );
        })}
      </section>
    </>
  );
}

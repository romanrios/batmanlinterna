// import Boton from "./components/Boton";
import Card from "./Card";

function App() {
  return (
    <>
      {/* <Boton numero={1} nombre="Boton 1" />
      <Boton numero={2} nombre="Boton 2" /> */}

      <Card
        apellido="Messi"
        nacimiento={1987}
        clubes={["Newells", "Barcelona", "PSG", "Inter MIAMI"]}
        mundial={true}
        late={false}
      />
      <Card
        apellido="Ronaldo"
        nacimiento={1984}
        clubes={["Lisboa", "Manchester", "R. Madrid", "Juventus", "Al-Nasar"]}
        mundial={false}
        late={true}
      />
    </>
  );
}

export default App;

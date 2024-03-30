import Button from "./components/Button";

function App() {
  return (
    <div>
      <Button color="danger" onClick={() => console.log("clicked")}>
        My button
      </Button>
    </div>
  );
}

export default App;

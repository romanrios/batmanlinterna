import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    console.log("effect", { enabled });

    const handleMove = (event) => {
      const { clientX, clientY } = event;
      console.log(clientX, clientY);
    };
    if (enabled) {
      window.addEventListener("pointermove", handleMove);
    }
  }, [enabled]);
  return (
    <>
      <div
        style={{
          position: "absolute",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          border: "1px solid #fff",
          borderRadius: "50%",
          opacity: 0.8,
          pointerEvents: "none",
          left: -25,
          top: -25,
          width: 50,
          height: 50,
          // transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      ></div>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? "Desactivar" : "Activar"} seguir puntero
      </button>
    </>
  );
}

export default App;

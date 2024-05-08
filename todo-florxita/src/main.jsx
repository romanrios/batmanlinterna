import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ToDoState from "./components/context/ToDoState";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToDoState>
      <App />
    </ToDoState>
  </React.StrictMode>
);

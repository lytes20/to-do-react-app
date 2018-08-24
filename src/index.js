import React from "react";
import ReactDOM from "react-dom";
import ToDo from "./components/todo";

ReactDOM.render(
  <div className="boardContainer">
    <ToDo title="Avatar" genre="action" />
    <ToDo title="Captain America" genre="action" />
    <ToDo title="Avenger oo" genre="action" />
  </div>,
  document.getElementById("root")
);

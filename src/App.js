import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Menu from "./Components/Menu/Menu";
import CreateProject from "./Components/Pages/CreateProject";

function App() {
  return (
    <div>
      <NavBar />
      <div className="uk-container">
        <Menu />
        <CreateProject />
      </div>
    </div>
  );
}

export default App;

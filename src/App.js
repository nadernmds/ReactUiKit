import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Menu from "./Components/Menu/Menu";
import CreateProject from "./Pages/CreateProject";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DashBoard from "./Components/DashBoard/DashBoard";
function App() {
  return (
    <Router>
      {" "}
      <Switch>
        <div>
          <NavBar />
          <div className="uk-container">
            <Menu />

            <Route path="/new" exact component={CreateProject} />
            <Route path="/dashboard" exact component={DashBoard} />

            {/* <CreateProject /> */}
          </div>
        </div>{" "}
      </Switch>
    </Router>
  );
}

export default App;

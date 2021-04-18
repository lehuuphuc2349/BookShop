import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import Home from "./pages/Home/Home";
function App() {
  return (
    <>
      <Router>
        <NavbarContainer />
        <Switch>
          <Route exact component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

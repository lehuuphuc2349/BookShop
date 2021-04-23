import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import BookPage from "./pages/BookPage/BookPage";
import Brand from "./components/Brand/Brand";
import Books from "./pages/Books/Books";
import Cart from "./pages/Cart/Cart";
import ProgrammingLanguages from "./pages/Category/ProgrammingLanguages";
import WebDevelopment from "./pages/Category/WebDevelopment";
import Database from "./pages/Category/Database";
import Networking from "./pages/Category/Networking";
import AlgorithmsData from "./pages/Category/AlgorithmsData";
function App() {
  return (
    <>
      <Router>
        <NavbarContainer />
        <Switch>
          <Route exact path="/" component={Home} />u
          <Route exact path="/books/:id" component={BookPage} />
          <Route exact path="/books" component={Books} />
          <Route
            exact
            path="/programming-languages"
            component={ProgrammingLanguages}
          />
          <Route exact path="/web-development" component={WebDevelopment} />
          <Route exact path="/database" component={Database} />
          <Route exact path="/networking" component={Networking} />
          <Route exact path="/algorithms-data" component={AlgorithmsData} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
        <Brand />
        <Footer />
      </Router>
    </>
  );
}

export default App;

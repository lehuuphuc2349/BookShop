import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import BookPage from "./pages/BookPage/BookPage";
import Brand from "./components/Brand/Brand";
function App() {
  return (
    <>
      <Router>
        <NavbarContainer />
        <Switch>
          <Route exact path="/" component={Home} />u
          <Route exact path="/book/:id" component={BookPage} />
        </Switch>
        <Brand />
        <Footer />
      </Router>
    </>
  );
}

export default App;
